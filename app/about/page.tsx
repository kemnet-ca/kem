"use client"
import Image from 'next/image'
import { useState, useEffect } from "react";
import ResponsiveCarousel from "@/components/Carousel";
import Link from 'next/link';
import Header from '@/components/Header';

import Footer from '@/components/Footer';
import { ClassNames } from '@emotion/react';



export default function About() {
  




  return (
    <main className="bg-white relative">

 <Header />


<div className='h-[100px] w-screen  relative md:pt-10 md:pb-10 md:pl-20 md:pr-20 md:pt-20 flex'>

<Link href={"/"} style={{marginLeft:'60px', marginTop:'-35px'}} className='w-8 absolute h-8 bg-white  rounded-full md:mt-[-20]   ml-10 hidden md:block cursor-pointer absolute hover:ml-2 grid place-content-center p-1 shadow-md'>
  <img src="/images/home/arrow-back-simple-svgrepo-com.svg" alt="arrow-back-kemnet" />
    
    </Link>

   <div className='w-full flex justify-center'>
   <p className='text-center text-xl font-medium ' style={{marginTop:`-20px`}}>About Us</p>




   </div>

 
 
</div>

<div className='flex justify-center p-4 w-screen mb-8 mt-20'>

<div className='h-[300px] bg-slate-200 w-[90%] rounded-md grid place-content-center'>

    <p className="text-md">Slider</p>

</div>
</div>


<div className='flex w-screen justify-center px-4'>

  <div className="w-[90%] grid grid-cols-3 p-4 gap-4  items-center place-content-center mx-auto">
    <div className='h-60 w-full bg-slate-300 rounded-2xl single-item'>

        <div className="sub-inner w-full h-full bg-zinc-300 rounded-2xl cursor-pointer ">

       
            <div  className='w-full h-8 bg-400 rouned-br-2xl rounded-bl-2xl flex flex-col border-t  '>
            
                <p  style={{marginBottom:`3%`, marginTop:`61%`}} className='text-xs font-medium  text-center '>Recognized & Awarded</p>
            </div>

        </div>

       
    </div>
    <div className='h-60 w-full bg-slate-300 rounded-2xl single-item'>

    <div className="sub-inner w-full h-full bg-zinc-300 rounded-2xl cursor-pointer ">

       
<div  className='w-full h-8 bg-400 rouned-br-2xl rounded-bl-2xl flex flex-col border-t  '>

<p  style={{marginBottom:`3%`, marginTop:`61%`}} className='text-xs font-medium  text-center '>Work With Us</p>
         
</div>

</div>

</div>

<div className='h-60 w-full bg-slate-300 rounded-2xl single-item'>

<div className="sub-inner w-full h-full bg-zinc-300 rounded-2xl cursor-pointer ">

       
<div  className='w-full h-8 bg-400 rouned-br-2xl rounded-bl-2xl flex flex-col border-t  '>

<p  style={{marginBottom:`3%`, marginTop:`61%`}} className='text-xs font-medium  text-center '>Social Impact</p>
         
</div>

</div>

</div>


  </div>
  
</div>
 
 
{
  //Awards


}

<div className='w-screen items-center mt-16'>

  <p className='font-medium text-xl text-center'>Recognized & Awarded</p>
  <p className='text-sm text-zinc-600 text-center mt-2 font-light'>Partered With The Very Best</p>


<div className='w-full flex justify-center mt-4'>

<div className='grid grid-cols-4 grid-cols-gap-4  px-20 w-full ml-40 mt-4'>
   <div className='items-center'>

    <div className='h-16 w-16 rounded-full bg-slate-300'>

    </div>
    <p className='text-sm'>Award Name</p>


   </div>


   <div className='items-center'>

<div className='h-16 w-16 rounded-full bg-slate-300'>

</div>
<p className='text-sm'>Award Name</p>


</div>



<div className='items-center'>

<div className='h-16 w-16 rounded-full bg-slate-300'>

</div>
<p className='text-sm'>Award Name</p>


</div>


<div className='items-center'>

<div className='h-16 w-16 rounded-full bg-slate-300'>

</div>
<p className='text-sm'>Award Name</p>


</div>


    
  </div>
</div>





  
</div>

<div className='flex-grow'></div>




<Footer />

    </main>
  )
}
