"use client"
import {
    Typography
} from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import React, {
    useState
} from 'react';
import {
    RxPerson
} from "react-icons/rx"
import {
    HiUser
} from "react-icons/hi"
export default function Login() {
    const [username, setUsername] = useState < string > ('');
    const [selectedOption, setSelectedOption] = useState < string > ('');
    const handleUsernameChange = (event: React.ChangeEvent < HTMLInputElement > ) => {
        setUsername(event.target.value);
    };
    const handleDropdownChange = (event: React.ChangeEvent < HTMLSelectElement > ) => {
        setSelectedOption(event.target.value);
    };
    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        console.log('Username:', username);
        console.log('Selected Option:', selectedOption);
    };
    return (<main className="flex min-h-screen flex-col sm:w-2/2  justify-center items-center h-screen bg-white">
        <div 
        className='flex bg-white w-[90%] md:w-[40%] lg:w-[30%]  h-auto justify-center items-center p-1 m-5 hover:translate-y-[-20px] rounded-2xl'
        style={{     
          overflow: 'hidden',
          boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.7)', // Set the box shadow in the style attribute
          transition: 'box-shadow 30s ease', // Add transition for hover effect
        }}>      
          <div className='w-[100%] p-5 h-full  m-auto '>            
            <h2 className='text-1xl font-bold mb-1 text-center capitalize text-sky-900 text-3xl'>finfinancials</h2>
            <div className="flex  justify-center items-center iconn__wrappe p-0">
                <HiUser className="text-sky-900" size={90}/>          
            </div>
            <form onSubmit={handleSubmit} >
              <div className='mb-4'>
                  <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-sky-900">User Name</label>
                  <input type="text" name="name" id="name"  className="bg-white text-sky-900 border border-sky-900 text-sm rounded w-full p-2.5" placeholder="John Doe"/>
              </div>            
              <div className="grid gap-4 mb-6 sm:grid-cols-2 ">
                    <div>
                        <label htmlFor="category" className="block mb-2 text-sm font-medium text-gray-900 dark:text-sky-900">Institution</label>
                        <select id="category" className="bg-white text-sky-900 border border-sky-900 text-sm rounded w-full p-2.5">                           
                            <option value="TV">Daimas Clove Sacco</option>                        
                        </select>
                    </div>
                    <div>
                        <label htmlFor="category" className="block mb-2 text-sm font-medium text-gray-900 dark:text-sky-900">Branch</label>
                        <select id="category" className="bg-white text-sky-900 border border-sky-900 text-sm rounded w-full p-2.5">
                            <option value="TV">001 Head office</option>                        
                        </select>
                    </div>
              </div>
              <div className='mb-5'>
                    <label htmlFor="password" className="block mb-2 text-sm  font-medium text-gray-900 dark:text-sky-900">Password</label>
                    <input type="password" name="password" id="password" placeholder="••••••••" className="bg-white text-sky-900 border border-sky-900 text-sm rounded w-full p-2.5" required/>
              </div>
              <div className='mb-2'>
              <label htmlFor="category" className="block mb-2 text-sm font-medium text-gray-900 dark:text-sky-900">Language</label>
                        <select id="category" className='bg-white text-sky-900 border border-sky-900 text-sm rounded w-full p-2.5'>
                        {/* className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 
                        focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 
                        dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" */}
                            <option value="TV">en</option>
                        </select>
              </div>  
              <button className='bg-sky-900  rounded-md p-3 sm:col-span-2 w-full text-white hover:bg-sky-950 rounded-3xl' type="submit">Login</button>
            </form>

            <div className=" flex justify-between">        
                <Typography variant='h5' className='text-sm p-2'>
                    <Link href="/" className='text-gray-500 hover:text-sky-950 rounded-lg p-1'>
                        Forgot password
                    </Link>
                </Typography>
                <Typography variant='h5' className='text-sm p-2'>
                    <Link href="/" className='text-sky-900 hover:text-sky-950 rounded-lg p-1'>
                        Sign up
                    </Link>
                </Typography>
                {/* bg-[#1F5780] */}
            </div>
            <div className="footer mt-2">    
                <div className="flex justify-center items-center">
                    <Typography variant='h5' className='text-sm capitalize text-sky-900'>
                            data intergrations <span>&copy; 2023</span> technologies
                    </Typography>
                </div>    
            </div>
          </div>
      </div>
    </main>)
}