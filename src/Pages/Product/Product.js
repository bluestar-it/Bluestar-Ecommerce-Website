import React, { useState, useEffect } from 'react' 
import './Product.scss' 
import Skeleton from 'react-loading-skeleton' 
import StarRatings from 'react-star-ratings' 
import { Tooltip } from 'antd' 
import { Link } from 'react-router-dom' 


function Product() {
    const [data, setData] = useState([]) 
    const [loading, setLoading] = useState(false) 
    const [dataFilter, setDataFilter] = useState(data)  //nếu không có filter, mặc định dùng toàn bộ data load được
    const [active, setActive] = useState(1) 

    useEffect(() => {
        const getProducts = async () => {
            setLoading(true) 
            const response = await fetch('https://fakestoreapi.com/products')
                .then(res => res.json())
            setData(response) 
            setDataFilter(response) 
            setLoading(false) 

        }
        getProducts() 
    }, [])

    const searchFunction = (key, category) => {
        filterByCategory(category)
        const resultList = dataFilter.filter((product) => {
            return product.title.toLowerCase().includes(key) 
        })
        setDataFilter(resultList) 
    } 

    const filterByCategory = (category) => {
        if (category === "All") {
            setDataFilter(data)
        } else {
            const resultList = data.filter((product) => {
                return product.category === String(category).toLowerCase() 
            }
            )
            setDataFilter(resultList) 
        }

    }

    const Loading = () => {
        return (
            <div className="row">
                <div className="col-3">
                    <Skeleton height={350} />
                </div>
                <div className="col-3">
                    <Skeleton height={350} />
                </div>
                <div className="col-3">
                    <Skeleton height={350} />
                </div>
                <div className="col-3">
                    <Skeleton height={350} />
                </div>
            </div>
        ) 
    } 



    const ProductList = () => {
        const [searchKey, setSearchKey] = useState('') 

        const categories = [
            {
                id: 1,
                name: 'All',
            },
            {
                id: 2,
                name: 'Men\'s Clothing',
            },
            {
                id: 3,
                name: 'Women\'s Clothing',
            },
            {
                id: 4,
                name: 'Jewelery',
            },
            {
                id: 5,
                name: 'Electronics',
            },
        ] 

        const handleKeyPress = (e) => {
            if (e.key === 'Enter') {
                searchFunction(searchKey, active) 
            }
        }


        return (
            <>
                <div className='products_search_container mg-b3'>
                    <div className='products_search'>
                        <input
                            type='text'
                            className='search_input'
                            value={searchKey}
                            onChange={(e) => setSearchKey(e.target.value.toLowerCase())}
                            onKeyDown={handleKeyPress}
                        />

                        <i
                            className="fa-solid fa-magnifying-glass search_icon"
                            onClick={() => {
                                searchFunction(searchKey, active)
                            }}></i>
                    </div>
                </div>

                <div className='category_list_container mg-b3'>
                    <ul className='category_list'>
                        {categories.map((category) => {
                            return <button
                                className={active === category.id ? 'category_item category_active' : 'category_item'}
                                key={category.id}
                                onClick={(e) => {
                                    setActive(category.id)
                                    filterByCategory(category.name)
                                }}
                            >
                                {category.name}

                            </button>
                        }
                        )}

                    </ul>

                </div>

                <div className='grid_container mg-b3'>


                    {dataFilter.length === 0 ? (<h3>NO RESULTS FOUND</h3>) : (
                        <>
                            {dataFilter.map((product) => (
                                <Tooltip title={product.title} key={product.id}>
                                    <div className='col ' >

                                        <div className='products__img '>
                                            <img src={product.image} alt={product.title}></img>
                                        </div>
                                        <div className='products__info'>
                                            <p className='products__name'>{product.title}</p>
                                            <p className='products__price'>${product.price}</p>
                                            <StarRatings
                                                rating={product.rating.rate}
                                                starRatedColor="pink"
                                                numberOfStars={5}
                                                className='rating'
                                                starSpacing="0"
                                                starDimension="25px"
                                            />
                                            <div className='buy__product mg-t'>
                                                {/* <button className='buy__button hover__button' onClick={(e) => showModal(product.id)}>Add To Cart</button> */}
                                                <Link to={`/products/${product.id}`} className='buy__button' >Add To Cart</Link>

                                            </div>

                                        </div>
                                    </div>
                                </Tooltip>
                            )
                            )}</>
                    )
                    }

                </div>
            </>
        )
    }

    return (
        <>
            <div className='product_list'>
                <h2 className='product_page_title'>LATEST FASHION</h2>

                <div className="grid">{loading ? <Loading /> : <ProductList />}</div>

            </div>

        </>
    )
}

export default Product 


