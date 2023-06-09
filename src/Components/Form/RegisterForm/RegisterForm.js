import React from 'react' 
import './RegisterForm.scss' 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome' 
import { useSnackbar } from 'notistack' 
import { useState, useRef } from 'react' 
import { useDispatch } from 'react-redux' 
import { login } from '../Login/LoginForm/userSlice' 

function RegisterForm() {
    const [name, setName] = useState('') 
    const [email, setEmail] = useState('') 
    const [password, setPassword] = useState('') 
    const [cfPassword, setCfPassword] = useState('') 
    const [errorMsg, setErrorMsg] = useState('') 
    const nameRef = useRef() 
    const dispatch = useDispatch() 
    const { enqueueSnackbar } = useSnackbar() 

    const validateAll = () => {
        const msg = {} 
        //name
        if (name.trim() === '') {
            msg.nameInput = '*Please enter your name' 
            nameRef.current.focus() 
        } else if (name.trim().split(' ').length < 2) {
            msg.nameInput = '*Please enter your full name (both first and last)' 
        }
        //mail
        const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ 
        if (email.trim() === '') {
            msg.emailInput = '*Please enter your email' 
        } else if (!email.match(mailformat)) {
            msg.emailInput = '*Please enter a valid email address' 
        }
        // password
        if (password.trim() === '') {
            msg.passwordInput = '*Please enter your password' 
        } else if (password.trim().length < 8) {
            msg.passwordInput = '*please enter at least 8 characters' 
        }
        // cfPassword
        if (cfPassword.trim() === '') {
            msg.cfPasswordInput = '*Please enter your comfirm password' 
        } else if (cfPassword.trim() !== password.trim()) {
            msg.cfPasswordInput = '*please try again!' 
        }

        setErrorMsg(msg) 
        return !Object.keys(msg).length > 0 
    } 

    const handleRegisterSubmit = (e) => {
        e.preventDefault() 
        const isValidate = validateAll() 
        if (isValidate) {
            const userdata = { name, username: email, email, password } 
            async function postData(url, data) {
                const response = await fetch(url, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(data),
                }) 
                return response.json() 
            }
            postData('https://e-commerce-users-data.herokuapp.com/user', userdata) 
            dispatch(login(userdata)) 
            localStorage.setItem('currentUser', JSON.stringify({ user: userdata, login: true })) 
            enqueueSnackbar('Signed up successfully', { variant: 'success' }) 
        } else return 
    } 

    return (
        <form className="register__form" onSubmit={handleRegisterSubmit}>
            <div className="text-center">
               Be Bluestar's lover!
            </div>
            <div className="mg-t">
                <label className="form__label">Your name</label> <br />
                <input
                    className="form__input"
                    ref={nameRef}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter your name"
                />
                <p className="form__errorMsg">{errorMsg.nameInput}</p>
            </div>
            <div className="mg-t">
                <label className="form__label">Your email</label> <br />
                <input
                    className="form__input"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter email"
                />
                <p className="form__errorMsg">{errorMsg.emailInput}</p>
            </div>
            <div className="mg-t">
                <label className="form__label">Password</label> <br />
                <input
                    className="form__input"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter password"
                    type="password"
                />
                <p className="form__errorMsg">{errorMsg.passwordInput}</p>
            </div>
            <div className="mg-t">
                <label className="form__label">Confirm password</label> <br />
                <input
                    className="form__input"
                    value={cfPassword}
                    onChange={(e) => setCfPassword(e.target.value)}
                    placeholder="Enter password"
                    type="password"
                />
                <p className="form__errorMsg">{errorMsg.cfPasswordInput}</p>
            </div>

            <button type="submit" className="form__submit__btn">
                Create my account
            </button>
        </form>
    ) 
}
export default RegisterForm 