"use client"
import Image from 'next/image'
import TopCards from '@/components/TopCards';
import Loans from '@/components/Loans';
import Transactions from '@/components/Transactions';
import Reports from '@/components/Reports';




function Home() {
  return (
    <main className='min-h-screen'>  
      <TopCards/>
      <div className='p-4 grid lg:grid-cols-3 md:grid-cols-1  sm:grid-cols-1  gap-4'>
        <Loans/>
        <Reports/>
        <Transactions/>
      </div>
        
      </main>
  )
}

export default Home;