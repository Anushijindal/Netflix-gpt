import { signOut } from 'firebase/auth';
import React from 'react'
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
const Header = () => {
    const navigate=useNavigate();
    const user=useSelector(store=>store.user);
    const signOutbtn=()=>{
        signOut(auth)
        .then(()=>{
            navigate("/");
        })
        .catch((error)=>{
            navigate("/error");
        });
    };
  return (
    <div  className="absolute px-8 py-2 bg-gradient-to-b from-black z-10 w-screen flex justify-between">
        <img className='w-40' src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" 
        alt='logo'/>
        {user && <div className='flex'>
            <img className='w-12 h-12 m-4' alt=''
            src={user?.photoURL}/>
            <button onClick={signOutbtn} className='bg-black bg-opacity-30 p-2 m-4 rounded-2xl text-white font-bold'>Sign Out</button>
        </div>}
    </div>
  );
};

export default Header;