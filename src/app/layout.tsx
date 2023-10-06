"use client"
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ProSidebarProvider } from 'react-pro-sidebar'



import Navbar from '@/components/Navbar';
import SideBar from '@/components/SideBar';
import { Footer } from '@/components/Footer';
import Dashlayout from "@/components/dashlayout";
import TemporaryDrawer from "@/components/TemporaryDrawer";
import SideBarProvider, { SideBarContext } from "@/context/SideBarContext";




const inter = Inter({ subsets: ['latin'] })

// export const metadata: Metadata = {
//   title: 'Create Next App',
//   description: 'Generated by create next app',
// }

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
    
      <section className="bg-[#ededed]">
        {/* wrapp everything with my side bar */}
        <ProSidebarProvider>
          <SideBarProvider>
          <Dashlayout> 
          <TemporaryDrawer/>
            {children}
          </Dashlayout>
          </SideBarProvider>
        </ProSidebarProvider>
  
        </section>
    </body>
    </html>
  )
}
