"use client"
import React, { useEffect, useState } from 'react';

import { useParams } from 'next/navigation';
import Link from 'next/link';
import Dashboard from '@/components/dashboards';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import InfoRoundedIcon from '@mui/icons-material/InfoRounded';

function Home() {

    const { slug } = useParams();

    useEffect(() => {
        // Use slug here or access specific properties if 'slug' is an object
        console.log(slug);
    }, [slug]); // Re-run the effect whenever 'slug' changes

    return (
        <div style={{ height: "auto" }}>
            <main className='min-h-screen bg-[#ededed] mx-20'>
                <div className='flex flex-col justify-between  p-2'>
                    <div className='relative text-2xl capitalize rounded-md px-4'>
                       
                        <Breadcrumbs aria-label="breadcrumb">

                            <h2 color="text.primary">
                                <Link href={`/Dashboard`}>
                                    {slug}
                                </Link>
                            </h2>
                            <h2>
                                <Link href={`/Dashboard`} className='text-tahiti'>
                                    {slug}
                                </Link>
                            </h2>
                        </Breadcrumbs>
                    </div>
                    <div className='flex mt-4'>
                        <p className='capitalize text-gray- px-4'>Welcome Back</p>

                    </div>

                </div>
                {/* our content  */}
                <Dashboard />

            </main>
        </div>
    );
}

export default Home;
