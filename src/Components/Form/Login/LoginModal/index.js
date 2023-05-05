import React from 'react' 
import './index.scss' 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { NavLink } from 'react-router-dom' 
import LoginForm from '../LoginForm/index' 

function LoginModal({ onCloseBtnClick }) {
    return (
        <div className="login__modal">
            <div className="login__form__wrap">
                <FontAwesomeIcon
                    className="login__closeicon"
                    icon="fa-solid fa-xmark"
                    onClick={() => {
                        onCloseBtnClick() 
                    }}
                />

                <LoginForm handleCloseModal={onCloseBtnClick}></LoginForm>
                <p className="form__question">
                    New to Bluestar?
                    <NavLink
                        to="/register"
                        onClick={() => {
                            onCloseBtnClick() 
                        }}
                    >
                        Register
                    </NavLink>
                </p>
            </div>
        </div>
    ) 
}

export default LoginModal 