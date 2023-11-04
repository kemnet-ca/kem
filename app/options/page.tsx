"use client"
import Image from 'next/image'
import { useState, useEffect } from "react";
import ResponsiveCarousel from "@/components/Carousel";
import Link from 'next/link';
import Header from '@/components/Header';

import Footer from '@/components/Footer';
import { ClassNames } from '@emotion/react';



export default function Options() {
  




  return (
    <main className="bg-white relative">

 <Header />


<div className='h-[400px] w-screen bg-slate-100 relative md:pt-10 md:pb-10 md:pl-20 md:pr-20 md:pt-28 flex'>

<div style={{marginLeft:'60px', marginTop:'-35px'}} className='w-8 absolute h-8 bg-white  rounded-full md:mt-[-20]   ml-10 hidden md:block cursor-pointer absolute hover:ml-2 grid place-content-center p-1'>
  <img src="/images/home/arrow-back-simple-svgrepo-com.svg" alt="arrow-back-kemnet" />
    
    </div>

 

 <div>

   {/* Create 6 copies of inner-img */}

   <p className='font-normal text-3xl'>Get </p>
  <p className=' text-2xl font-thin'>Started As A</p>

  <Link href={"/patients/custom/request"} className='h-10 w-48 bg-black rounded-full mt-4 text-center flex text-center items-center cursor-pointer hover:ml-2'>
      <p className='text-white text-center text-xs ml-auto'>Patients</p>

      <div className='h-8 w-8 bg-white rounded-full ml-auto mr-1 p-2'><img src="/images/home/navigation-forward-arrow-svgrepo-com.svg" alt="" /></div>

    </Link>


    <Link href={"/prescribers/custom/request"} className='h-10 w-48 bg-black rounded-full mt-4 text-center flex text-center items-center cursor-pointer hover:ml-2'>
 
      <p className='text-white text-center text-xs ml-auto'>Prescribers</p>

      <div className='h-8 w-8 bg-white rounded-full ml-auto mr-1 p-2'><img src="/images/home/navigation-forward-arrow-svgrepo-com.svg" alt="" /></div>

   
    </Link>


 </div>

 <div className='flex items-center space-around md:ml-20'>

  <div className='h-44 w-52 bg-zinc-200 rounded-md'>



  </div>

  <div className='h-44 w-52 bg-zinc-200 rounded-md ml-10'>

</div>

 </div>
 
</div>


<div 
  style={{
    marginTop: `-5%`, // Random top position
    left:'10%'
  }}
className='flex w-screen justify-center'>

<div className='h-40 md:w-2/3 bg-slate-200 relative md:pt-2 md:pb-2 md:pl-5 md:pr-16 shadow-md rounded-md grid grid-cols-2'>

  <div className='h-full bg-white rounded-md'>

  </div>

  <div className='h-16 md:pl-8 pt-2 '>
    <p className='font-medium text-sm'>Shortage Resolution </p>
    <p className='mt-2 text-zinc-600 text-xs font-extralight'>We&apos;ve got you covered. Access affordable solutions to meet your patients&apos; immediate medication needs with confidence and without delay.</p>

    <div className='h-10 w-48 bg-black rounded-full mt-4 text-center flex text-center items-center cursor-pointer hover:ml-2'>
      <p className='text-white text-center text-xs ml-auto font-extralight'>Meet A Prescriber</p>

      <div className='h-8 w-8 bg-white rounded-full ml-auto mr-1 p-2'><img src="/images/home/navigation-forward-arrow-svgrepo-com.svg" alt="" /></div>

    </div>

</div>

 
 </div>


</div>


<div className='h-32'></div>


<Footer />

    </main>
  )
}
