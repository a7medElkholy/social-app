import React from 'react'
import Navbar from './../navbar/Navbar';
import { Outlet } from 'react-router';
import { Toaster } from 'react-hot-toast';

export default function Layout() {
  return (
    <main className='min-h-screen bg-zinc-200'>
    <Navbar/>
    <div className='pt-15'><Outlet/></div>
    <Toaster/>
    </main>
  )
}
