"use client"
import { ProSidebarProvider } from "react-pro-sidebar";

import Navbar from '@/components/Navbar';
import SideBar from '@/components/SideBar';
import { Footer } from '@/components/Footer';
export default function DashboardLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return <section>
        {/* wrapp everything with my side bar */}
        <ProSidebarProvider>
        <SideBar>
          <Navbar/>
          {children}
          <Footer/>
        </SideBar>

        
        </ProSidebarProvider>
  
        </section>
  }