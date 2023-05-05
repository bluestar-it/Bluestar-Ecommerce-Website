import React from 'react'
import './Cart.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useSelector, useDispatch } from 'react-redux'
import { addItem, delItem } from './CartSlice'
import { faMinus } from '@fortawesome/free-solid-svg-icons'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

function Cart(props) {
    const productCart = useSelector((state) => state.cart)
    const dispatch = useDispatch()

    const handleAddItem = (product) => {
        console.log(product)
        dispatch(addItem(product))
    }
    const handleDelItem = (product) => {
        dispatch(delItem(product))
    }

    const total__price = productCart.reduce((total, currentValue) => {
        return total + currentValue.qty * currentValue.price
    }, 0)

    const TOTAL = total__price.toFixed(2)
    return (
        <div className="cart_container">
            <div className="cart_wrap">
                {productCart.map((product) => {
                    const itemPrice = (product.qty * product.price).toFixed(2)
                    return (

                        <>
                            <h2>Your cart:</h2>

                            <div key={product.id} className="cart">
                                <div className="cart_product_img">
                                    <img src={product.image} className="cart_img" alt={product.title} />
                                </div>
                                <div className="cart_product_detail">
                                    <p className="cart_product_name">{product.title}</p>
                                    <p className="cart_product_price mg-sm">
                                        {` ${product.qty} x $ ${product.price} = $ ${itemPrice}`}
                                    </p>
                                    <div className='qty_buttons'>
                                        <FontAwesomeIcon
                                            icon={faMinus}
                                            className="cart__btn btn--decr"
                                            onClick={() => handleDelItem(product)}
                                        />
                                        {product.qty}
                                        <FontAwesomeIcon
                                            icon={faPlus}
                                            className="cart__btn btn--add"
                                            onClick={() => handleAddItem(product)}
                                        />
                                    </div>
                                </div>
                            </div>
                        </>
                    )
                })}
                <hr />
                {productCart.length === 0 ? (
                    <p className="total__price"> Your cart is empty</p>
                ) : (
                    <>
                        <p className="total__price"> Total : $ {TOTAL} </p>
                        <div className='cart_buttons mg-t2'>
                            <Link className='cart_button cart_continue_button' to={'/product'}>Continue To Shopping</Link>
                            <button
                                className='cart_button cart_checkout_button'
                                onClick={() => {
                                    handleAddItem()
                                }}
                            >
                                Check out
                            </button>
                        </div>
                    </>
                )}
            </div>
        </div>
    )
}

export default Cart 