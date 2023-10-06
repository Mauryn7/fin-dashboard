"use client"
import { ProSidebarProvider } from "react-pro-sidebar";

import Navbar from '@/components/Navbar';
import SideBar from '@/components/SideBar';
import { Footer } from '@/components/Footer';
import Dashlayout from "@/components/dashlayout";
import TemporaryDrawer from "@/components/TemporaryDrawer";
import SideBarProvider, { SideBarContext } from "@/context/SideBarContext";
export default function DashboardLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return <section className="bg-[#ededed]">
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
  }