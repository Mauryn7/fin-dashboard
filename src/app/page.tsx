"use client"
import Image from 'next/image'
import SideBar from './components/SideBar'
import {useProSidebar } from "react-pro-sidebar";
import Dashboard from '@/components/Dashboard';



export default function Home() {
  const {toggleSidebar, collapseSidebar, toggled, broken } = useProSidebar();
  const toggle = ()=>{
    toggleSidebar();
    toggled ? collapseSidebar() : collapseSidebar()

}
  return (
   <div className='h-screen flex '>
      <main className=' w-full flex p-4'>
        
        
        {/* <h1 onClick={()=> toggle()} className='mb-4'>
        React-Pro-Sidebar

        </h1> */}

        <Dashboard/>
         
        
{/*         
        {toggled ? (
          <h1 style={{ color: "black", marginLeft: "5rem" }}>Toggled</h1>
        ) : (
          <h1 style={{ color: "black", marginLeft: "5rem" }}>Not Toggled</h1>
        )} */}
          {/* {broken && (
          <h1 style={{ color: "black", marginLeft: "5rem" }}>Small screen</h1>
        )} */}
      </main>
   </div>
  )
}
