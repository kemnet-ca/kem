"use client"
import Image from 'next/image'
import { useState, useEffect } from "react";
import ResponsiveCarousel from "@/components/Carousel";
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import { useRouter } from 'next/navigation';
import Footer from '@/components/Footer';
import { ClassNames } from '@emotion/react';



export default function Jobs() {
  

  const router = useRouter();


  function goBack()
  {
    router.back();
  }



  return (
    <main className="bg-white relative">

 <Navbar />


<div className='h-[100px] w-screen  relative md:pt-10 md:pb-10 md:pl-20 md:pr-20 md:pt-28 flex'>

<Link href={"/"} style={{marginLeft:'60px', marginTop:'-35px'}} className='w-8 absolute h-8 bg-white  rounded-full md:mt-[-20]   ml-10 hidden md:block cursor-pointer absolute hover:ml-2 grid place-content-center p-1 shadow-md'>
  <img onClick={goBack} src="/images/home/arrow-back-simple-svgrepo-com.svg" alt="arrow-back-kemnet" />
    
    </Link>

   <div className='w-full flex justify-center mt-10'>
   <p className='text-center text-xl font-medium ' >Work With Us</p>




   </div>

   
 
 
</div>








   <div className='flex w-screen justify-center  flex mt-10'>

<div className="w-2/3 grid grid-cols-2 p-4 gap-4  items-center place-content-center mx-auto">
  
   

    <div className='h-60 w-full   single-item py-2'>
        <p className="text-sm font-medium">Kemet is making waves in various fields. </p>
        <p className="font-light text-xs mt-2">We have an unconventional compounding lab, a dynamic software development company, and an awe-inspiring pharmaceutical engineering project to build medication manufacturing facilities. </p>

    




</div>













<div className='h-60 w-full bg-slate-300 rounded-2xl single-item'>

       

       
</div>



  
</div>


</div>






<div className='flex w-screen justify-center  flex'>

<div className="w-2/3 grid grid-cols-2 p-4 gap-4  items-center place-content-center mx-auto">
    <div className='h-60 w-full bg-slate-300 rounded-2xl single-item'>

       

       
    </div>
   

    <div className='h-60 w-full   single-item py-2'>
        <p className="text-sm font-medium">Imagine the diverse opportunities at Kemet. </p>
        <p className="font-light text-xs mt-2">We have roles ranging from compounding pharmacy to the pharmaceutical industry, engineering to construction, design to international trade and business administration. 

</p>

        <p className="font-light text-xs mt-2">Despite being a small startup with less than 10 employees/contractors, our potential is immense. </p>
 




</div>








  
</div>


</div>












{/*Medicine For You, By You */}

<div className="flex w-screen justify-center px-10 md:mt-20 mt-8 rouned-md">

<div className='w-2/3 bg-slate-100 py-10 px-6   mt-8 rounded-md md:px-10 '>

<p className="text-sm font-medium text-center  text-zinc-800"> If you or someone you know is as inspired as we are and want to be part of our journey, take the first step.</p>

<p className="text-sm font-light text-center  text-zinc-800 mt-6"> Register your interest in a job at Kemet to receive exclusive updates on our current roles and valuable insights into our competitive hiring process.</p>

  <div className="w-full flex justify-center mt-6">

  <button  className='text-center text-xs text-white font-light bg-black rounded-3xl flex items-center justify-center px-6 py-2 hover:mt-2 ml-[20px] mr-6'>Register Now</button>

  </div>

  
</div>
</div>



<div className="flex w-screen justify-center px-10 md:mt-20 mt-8 rouned-md">

<div className='w-2/3 bg-slate-100 py-10 px-6   mt-8 rounded-md md:px-10 '>

<p className="text-sm font-medium text-center  text-zinc-800"> We also have various openings through out the year for Undergraduate Placements, Summer Students, Apprenticeships, Masters, PhD and Postdoc level fellowships.</p>

<p className="text-sm font-light text-center  text-zinc-800 mt-6">Simply tell us you are interested in a career with us and we&apos;ll keep you informed on our recruitment and hiring processes.</p>

  <div className="w-full flex justify-center mt-6">

  <button  className='text-center text-xs text-white font-light bg-black rounded-3xl flex items-center justify-center px-6 py-2 hover:mt-2 ml-[20px] mr-6'>Contact Us</button>

  </div>

  
</div>
</div>



<div className='flex-grow'></div>




<Footer />

    </main>
  )
}
