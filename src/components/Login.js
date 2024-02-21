import React, { useState } from 'react';
import Header from './Header';

const Login = () => {
    const [isSignIn,setIsSignIn]=useState(true);
    const toggleSignUp=()=>{
        setIsSignIn(!isSignIn);
    }
  return (
    <div>
        <Header/>
        <div className='absolute'>
        <img  className="" 
        src='https://assets.nflxext.com/ffe/siteui/vlv3/c0b69670-89a3-48ca-877f-45ba7a60c16f/2642e08e-4202-490e-8e93-aff04881ee8a/IN-en-20240212-popsignuptwoweeks-perspective_alpha_website_large.jpg' 
        alt=''/>
        </div>
        <div className=''>
            <form className='absolute bg-black bg-opacity-85 w-4/12 rounded-xl p-12 my-36 mx-auto left-0 right-0 text-white'>
                <h2 className='text-white font-bold text-3xl py-4'>{isSignIn? "Sign In":"Sign Up"}</h2>
                {!isSignIn && <input 
                type='text' 
                placeholder='Enter Name' 
                className='my-4 p-4 w-full rounded-md bg-gray-800 border-b border-0 border-yellow-600'/>
                }
                <input 
                type='email' 
                placeholder='Email Address' 
                className='my-4 p-4 w-full rounded-md bg-gray-800 border-b border-0 border-yellow-600' />
                <br/>
                <input 
                type='password' 
                placeholder='Enter Password' 
                className='my-4 p-4 w-full rounded-md bg-gray-800 border-b border-0 border-yellow-600'/>
                <br/>
                
                <button className='p-3 my-4 rounded-xl text-white bg-red-600 w-full'>{isSignIn?"Sign In":"Sign Up"}</button>
                <p className='text-white py-4 cursor-pointer' onClick={toggleSignUp}>
                {isSignIn ? "New to Netflix? Sign Up Now" : "Already registered? Sign In Now"}</p>
            </form>
        </div>
    </div>
  )
};

export default Login;