"use client"
import Image from 'next/image'
import TopCards from '@/components/TopCards';
import Loans from '@/components/Loans';
import Transactions from '@/components/Transactions';
import Reports from '@/components/Reports';
import Dashboard from '@/components/dashboards';




function Home() {
  return (
    <div style={{height:"auto"}}>
         <main className='min-h-screen bg-[#ededed] mx-20'>
            {/* <TopCards />
            <div className='p-4 grid lg:grid-cols-3 md:grid-cols-1  sm:grid-cols-1  gap-4'>
                <Loans />
                <Reports />
                <Transactions />
            </div> */}
            
            <Dashboard/>
        </main>
    </div>
  )
}

export default Home;