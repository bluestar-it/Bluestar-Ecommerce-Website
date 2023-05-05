import React, { useState, useEffect } from 'react' 
import './ProductDetail.scss' 
import { Link, useParams } from 'react-router-dom' 
import StarRatings from 'react-star-ratings' 
import Skeleton from 'react-loading-skeleton' 
import { useDispatch } from 'react-redux' 
import { addItem } from '../../Pages/Cart/CartSlice' 
import { Button, notification } from 'antd' 

export default function ProductDetail() {

    const { id } = useParams() 
    const [product, setProduct] = useState({}) 
    const [loading, setLoading] = useState(false) 
    const dispatch = useDispatch() 
    const [api, contextHolder] = notification.useNotification() 

    const successNotification = () => {
        api.open({
            message: 'Add this product to cart successfully.',
            style: {
                width: 600,
                backgroundColor: "#f6ffed",
                border: "1px solid #b7eb8f",
            },
            placement: "bottomRight",
        }) 
    } 

    useEffect(() => {
        const getProduct = async () => {
            setLoading(true) 
            const response = await fetch(`https://fakestoreapi.com/products/${id}`).then(res => res.json()) 
            setProduct(response)
            setLoading(false) 
        }
        getProduct() 

    }, [])

    const handleAddItem = () => {
        dispatch(addItem(product)) 
        successNotification() 
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

    return (
        <div className='product_detail_container'>
            {loading ? <Loading /> : (
                <>
                    <div className='product_detail_img'>
                        <img src={product.image}></img>
                    </div>
                    <div className='product_detail_info'>
                        <div className='product_detail_name'>{product.title}</div>
                        <div className='product_detail_rating'>

                            <StarRatings
                                rating={product?.rating?.rate}
                                starRatedColor="pink"
                                numberOfStars={5}
                                className='rating'
                                starSpacing="0"
                                starDimension="25px"
                            />
                            {product?.rating?.rate}
                        </div>
                        <div className='product_detail_price'>$ {product.price}</div>
                        <div className='product_detail_des'>{product.description}</div>
                        {contextHolder}

                        <div className='product_detail_buttons mg-t2'>
                            <Link className='product_detail_button product_detail_cart_button' to={'/product'}>Continue To Shopping</Link>
                            <button
                                className='product_detail_button product_detail_buy_button'
                                onClick={() => {
                                    handleAddItem() 
                                }}
                            >
                                Add to cart
                            </button>
                        </div>

                    </div>
                </>
            )}
        </div>
    )
}

