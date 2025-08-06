import { Aave, LogoutCurve } from 'iconsax-reactjs'
import React, { useContext, useEffect } from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router'
import { userContext } from '../../context/UserContext'

export default function Navbar() {

  const {userData , getUserData ,logOutUser} = useContext(userContext)
  
  useEffect(()=>{
    if(localStorage.getItem("token")){
      getUserData(localStorage.getItem("token"));
    }
  },[]);
  
  return (
    <nav className="fixed top-0 w-full bg-white py-2 z-50 shadow">
       <div className="container mx-auto px-4 flex flex-wrap items-center justify-between">
          <a className="text-white text-lg font-bold" href="#"><Aave size="32" color="#FF8A65"/></a>  

    <button
      className="block lg:hidden text-white focus:outline-none"
      type="button"
      onClick={() => document.getElementById('navbarNav').classList.toggle('hidden')}
    >
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
      </svg>
    </button>

    <div className="hidden w-full lg:flex lg:items-center lg:w-auto" id="navbarNav">
      <ul className="flex flex-col lg:flex-row lg:ml-auto">
        <li className="nav-item">
          {userData ? (<div className='flex items-center gap-2'>
                <div className='size-10 px-1 bg-zinc-300 rounded-2xl'>
                  <img src="https://linked-posts.routemisr.com/uploads/default-profile.png" alt="avatar" />
                </div>
                
                <div className='flex gap-1 text-black'>
                  <span className='font-bold'>Hello</span>
                  <span>{userData.name}</span>
                </div>
          
                <div>
                  <LogoutCurve onClick={logOutUser} size="32" className='text-red-600 cursor-pointer'/>
                </div>
          </div>) : (<Link className="block py-2 px-4 lg:me-4" to="/Login">Login</Link>)}
        </li>
      </ul>
    </div>
        </div>
    </nav>

  )
}
