import React from 'react';

 

export const Footer = () => {

  return (

    <div className='bg-white shadow-md m-auto p-4 w-full'>
      <div className="flex flex-col">
            <div className="flex items-center justify-center">
             <p className='capitalize text-gray-400 text-base'>Data integrations technologies</p>
             <span className='pl-2'><p className='text-sm'>&copy; {new Date().getFullYear()} ALL RIGHTS RESERVED</p></span> 
            </div>
      </div>
    
    </div>
    

  );

};

 

