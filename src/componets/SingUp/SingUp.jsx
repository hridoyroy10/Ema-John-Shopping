import React from 'react';
import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from './../UserContext/UserContext';

const SingUp = () => {
    const [error, setError] = useState(null);
    const {createUser} = useContext(AuthContext);


    const handleSubmit = (event) =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;
        if(password.length > 6){
            setError('should must be 6 creator password ');
            return;
        }
        if(password !== confirm){
            setError('Do not match password try agent');
            return;
        }

        createUser(email, password)
        .then(result=>{
            const user = result.user;
            console.log(user);
            form.reset();
        })
        .catch(error=>console.error(error));

    }

    return (
        <div className='login-container'>
            <div className="login-title">
                <h3 >Register</h3>
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
                <div className='form-control'>
                    <label htmlFor='password'>Confirm Password</label>
                    <input type="password" name="confirm" id="" placeholder='confirm password' required />
                </div>
                <input className='submit-btn' type="submit" value="Login" />
            </form>
            <p>Already Have an Account<Link to='/login'>Login</Link></p>
            <p>{error}</p>
        </div>
    );
};

export default SingUp;