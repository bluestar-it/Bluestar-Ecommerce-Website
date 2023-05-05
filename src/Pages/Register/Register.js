import React from 'react' 
import './Register.scss' 
import RegisterForm from '../../Components/Form/RegisterForm/RegisterForm' 
import { useSelector } from 'react-redux' 

function Register(props) {
    const isLogin = useSelector((state) => state.user.login) 
    return (
        <div className="register">
            
                <div className="register__wrap">
                    {' '}
                    <RegisterForm />
                </div>
            
        </div>
    ) 
}
export default Register 