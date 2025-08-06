import React from 'react'
import Navbar from './../navbar/Navbar';
import { Outlet } from 'react-router';

export default function Layout() {
  return (
    <main className='min-h-screen bg-zinc-200'>
    <Navbar/>
    <div className='pt-15'><Outlet/></div>
    </main>
  )
}
