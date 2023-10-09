"use client"
import React, { useEffect, useState } from 'react';

import { useParams } from 'next/navigation';
import Link from 'next/link';

import Breadcrumbs from '@mui/material/Breadcrumbs';
import InfoRoundedIcon from '@mui/icons-material/InfoRounded';
import Dashboard from '@/components/dashboards';


const page = () => {
  const { slug } = useParams();

  useEffect(() => {
    // Use slug here or access specific properties if 'slug' is an object
    console.log(slug);
  }, [slug]); // Re-run the effect whenever 'slug' changes


  return (
    <div style={{ height: "auto" }}>
      <main className='min-h-screen bg-[#ededed] lg:mx-20 sm:mx-0'>
        <div className='flex flex-col justify-between  p-2'>
          <div className='relative text-2xl capitalize rounded-md px-4'>

            <Breadcrumbs aria-label="breadcrumb">

              <h2 color="text.primary">
                {slug === undefined ? (
                  <Link href={`/`}>
                  /Dashboard
                </Link>
                ): (
                  <Link href={`/${slug}`}>
                  {slug}
                </Link>
                )}
               
              </h2>

            </Breadcrumbs>
          </div>
          <div className='flex mt-4'>
            <p className='capitalize text-gray- px-4'>Welcome Back</p>

          </div>

        </div>
        {/* our content  */}
        {slug === undefined ? <Dashboard/>: ""}

      </main>
    </div>
  );
};

export default page
