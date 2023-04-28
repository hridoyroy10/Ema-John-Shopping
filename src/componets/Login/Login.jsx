import React from 'react';
import './Login.css'
import { Link, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../UserContext/UserContext';

const Login = () => {
const {singIn} = useContext(AuthContext);
const navigate = useNavigate();

const handleSubmit = event =>{
    event.preventDefault();
    const form =event.target;
    const email = form.email.value;
    const password = form.password.value;

    singIn(email, password)
    .then(result=>{
        const user = result.user;
        console.log(user);
        form.reset();
        navigate('/shope');
    })
    .catch(error=>console.error(error));
}
    return (
        <div className='login-container'>
            <div className="login-title">
                <h3 > Login</h3>
            </div>
            <form onSubmit={handleSubmit}>
                <div className='form-control'>
                    <label htmlFor='email'>Email</label>
                    <input type="email" name="email" id="" placeholder='email' required />
                </div>
                <div className='form-control'>
                    <label htmlFor='password'>Password</label>
                    <input type="password" name="password" id="" placeholder='password' required />
                </div>
                <input className='submit-btn' type="submit" value="Login" />
            </form>
            <p>New to ema john <Link to='/singUp'>Create a new Account</Link></p>
        </div>
    );
};

export default Login;