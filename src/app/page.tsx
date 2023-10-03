"use client"
import Image from 'next/image'
import SideBar from './components/SideBar'
import {useProSidebar } from "react-pro-sidebar";
import Dashboard from '@/components/Dashboard';
import TopCards from '@/components/TopCards';
import Loans from '@/components/Loans';
import Transactions from '@/components/Transactions';
import Reports from '@/components/Reports';



export default function Home() {
  const {toggleSidebar, collapseSidebar, toggled, broken } = useProSidebar();
  const toggle = ()=>{
    toggleSidebar();
    toggled ? collapseSidebar() : collapseSidebar()

}
  return (
    <main className='min-h-screen'>
      <TopCards/>
      <div className='p-2 grid lg:grid-cols-3 md:grid-cols-1  gap-4'>
        <Loans/>
        <Reports/>
        <Transactions/>
      </div>
        
      </main>
  )
}
