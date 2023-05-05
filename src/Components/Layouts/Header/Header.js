import React, { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import './Header.scss'
import { useSelector } from 'react-redux'
import LoginModal from '../../Form/Login/LoginModal'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


function Header() {

    const cartProducts = useSelector((state) => state.cart)
    const totalItems = cartProducts.reduce((total, product) => {
        return total + product.qty
    }, 0)

    const [showLogin, setShowLogin] = useState(false)
    const [showMenu, setShowMenu] = useState(false)

    const handleClickLoginBtn = () => {
        setShowLogin(!showLogin)
    }

    const isLogin = useSelector((state) => state.user.login)

    return (
        <>
            <div className='header'>
                <div className='header_top'>
                    <div className='header_top_container'>
                        <ul className='header_social_container'>
                            <li >
                                <a href='#' className='header_social'>
                                    <i className="fa-brands fa-facebook"></i>
                                </a>
                            </li>
                            <li >
                                <a href='#' className='header_social'>
                                    <i className="fa-brands fa-instagram" />
                                </a>
                            </li>
                            <li >
                                <a href='#' className='header_social'>
                                    <i className="fa-brands fa-twitter"></i>

                                </a>
                            </li>
                            <li >
                                <a href='#' className='header_social'>
                                    <i className="fa-brands fa-linkedin" />

                                </a>
                            </li>
                        </ul>
                        <div className='header_alert_news'>
                            <p>FREE SHIPPING THIS WEEK ORDER OVER _ $55</p>
                        </div>
                        <div className='header_top_actions'>
                            <select className='currency'>
                                <option>USD</option>
                                <option>ERU</option>
                                <option>VND</option>
                            </select>
                            <select className='language'>

                                <option>English</option>
                                <option>Viet Nam</option>
                                <option>French</option>

                            </select>
                        </div>

                    </div>
                </div>
                <div className='header_main'>
                    <div className='header_main_container'>

                        <div>
                            <FontAwesomeIcon
                                icon="fa-solid fa-bars"
                                className="nav__menu__icon"
                                onClick={() => setShowMenu(!showMenu)}
                            />
                            <NavLink className='header_logo' to="/">BLUESTAR</NavLink>
                        </div>

                        <div id="pc_nav_menu" className="nav__menu">
                            <ul className='nav'>
                                <li className='nav__item'>
                                    <NavLink className="nav__link" to="/">Home</NavLink>

                                </li>

                                <li className='nav__item'>
                                    <NavLink className="nav__link" to="/product">Product</NavLink>
                                </li>

                                <li className='nav__item'>
                                    <NavLink className="nav__link" to="/about">About</NavLink>
                                </li>

                                <li className='nav__item'>
                                    <NavLink className="nav__link" to="/contact">Contact</NavLink>
                                </li>
                            </ul>
                        </div>
                        {showMenu && (
                            <div className="sidebar__menu">
                               
                                <div
                                    className="sidebar__overlay"
                                    onClick={() => {
                                        setShowMenu(!showMenu);
                                    }}
                                ></div>
                                <div id="small_nav_menu" className="nav__menu" onClick={() => setShowMenu(!showMenu)}>
                                <FontAwesomeIcon
                                icon="fa-solid fa-x"
                                className="sidebar__menu__icon"
                                onClick={() => setShowMenu(!showMenu)}
                            />
                                    <NavLink className="sidebar__nav__logo" to="/">
                                    BLUESTAR
                                    </NavLink>
                                    <ul>
                                        <li className="nav__item">
                                            <NavLink className="nav__link" to="/">
                                                Home
                                            </NavLink>
                                        </li>

                                        <li className="nav__item">
                                            <NavLink className="nav__link" to="/product">
                                                Products
                                            </NavLink>
                                        </li>

                                        <li className="nav__item">
                                            <NavLink className="nav__link" to="/about">
                                                About
                                            </NavLink>
                                        </li>

                                        <li className="nav__item">
                                            <NavLink className="nav__link" to="/contact">
                                                Contact
                                            </NavLink>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        )}

                        <div className='header_main_buttons'>

                            <button className='login header_main_button hover__button' onClick={handleClickLoginBtn}>
                                <i className="fa-solid fa-right-to-bracket header_main_button_icon"></i>
                                Login
                            </button>

                            <Link to={'./cart'} className='header_main_button hover__button'>
                                <i className="fa-solid fa-cart-shopping header_main_button_icon"></i>
                                Cart({totalItems})
                            </Link>

                        </div>

                    </div>
                </div>

            </div>
            {showLogin && <LoginModal onCloseBtnClick={handleClickLoginBtn} />}

        </>
    )
}

export default Header 