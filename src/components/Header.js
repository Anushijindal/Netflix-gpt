import { onAuthStateChanged, signOut } from 'firebase/auth';
import React, { useEffect } from 'react'
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { LOGO_URL } from '../utils/constants';
const Header = () => {
    const navigate=useNavigate();
    const dispatch=useDispatch();
    const user=useSelector(store=>store.user);
    const signOutbtn=()=>{
        signOut(auth)
        .then(()=>{
        })
        .catch((error)=>{
            navigate("/error");
        });
    };
    useEffect(()=>{
       const unsubscribe= onAuthStateChanged(auth,(user)=>{
        if(user){
            const {uid,email,displayName,photoURL}=user
            dispatch(addUser({uid:uid,email:email,displayName:displayName,photoURL:photoURL}));
            navigate("/browse");
        }else{
            dispatch(removeUser());
            navigate("/");
        }
    });
    return()=>unsubscribe();
    },[]);

  return (
    <div  className="absolute px-8 py-2 bg-gradient-to-b from-black z-10 w-screen flex justify-between">
        <img className='w-40' src={LOGO_URL} 
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