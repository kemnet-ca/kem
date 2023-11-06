"use client"
import Image from 'next/image'
import { useState, useEffect } from "react";
import ResponsiveCarousel from "@/components/Carousel";
import Link from 'next/link';
import Header from '@/components/Header';

import Footer from '@/components/Footer';
import { ClassNames } from '@emotion/react';



export default function Blog() {
  




  return (
    <main className="bg-white relative">

 <Header />


<div className='h-[100px] w-screen  relative md:pt-10 md:pb-10 md:pl-20 md:pr-20 md:pt-28 flex'>

<Link href={"/"} style={{marginLeft:'60px', marginTop:'-35px'}} className='w-8 absolute h-8 bg-white  rounded-full md:mt-[-20]   ml-10 hidden md:block cursor-pointer absolute hover:ml-2 grid place-content-center p-1 shadow-md'>
  <img src="/images/home/arrow-back-simple-svgrepo-com.svg" alt="arrow-back-kemnet" />
    
    </Link>

   <div className='w-full flex justify-center mt-10'>
   <p className='text-center text-xl font-medium ' >Make your Medicine - Blog & Newsletter</p>




   </div>

 
 
</div>



<div className="flex w-screen justify-center px-10 mt-20">

<div className='w-2/3 bg-slate-100 py-2 px-6 flex mt-8 rounded-md '>

<p className="text-xs font-light text-zinc-800"> Take the confusion out of compounding and get all of your burning questions answered. Kemet simplifies compounding: &apos;Customized medicine companion: Mastering the Basics with Ease&apos;</p>

  <button  className='text-center text-xs text-white font-light bg-black rounded-3xl flex items-center justify-center px-6 py-2 hover:mt-2 ml-[20px] mr-6'>Download PDF</button>


  
</div>
</div>
<div className='flex w-screen justify-center  flex'>

<div className="w-2/3 grid grid-cols-2 p-4 gap-4  items-center place-content-center mx-auto">
    <div className='h-60 w-full bg-slate-300 rounded-2xl single-item'>

        <div className="sub-inner w-full h-full bg-zinc-300 rounded-2xl cursor-pointer p-4 ">

       
        <div  className='w-full h-8 bg-400 rouned-br-2xl p-2 rounded-bl-2xl   border-t grid place-content-center  '>

<p   className='text-sm font-light text-center '>Discover the Sweet Surprise: Medications in Lollipops! 🍭 Did You Know?</p>


</div>

        </div>

       
    </div>
   

    <div className='h-60 w-full bg-slate-300 rounded-2xl single-item'>

<div className="sub-inner w-full h-full bg-zinc-300 rounded-2xl cursor-pointer ">

       
<div  className='w-full h-8 bg-400 rouned-br-2xl p-2 rounded-bl-2xl   border-t grid place-content-center  '>

    <p   className='text-sm font-light text-center '>Unlock a Stunning Secret: Medications Disguised as Nail Lacquer! 💅 Did You Know?</p>

  
</div>

</div>

</div>




<div className='h-60 w-full bg-slate-300 rounded-2xl single-item'>

<div className="sub-inner w-full h-full bg-zinc-300 rounded-2xl cursor-pointer border-t grid place-content-center p-4 ">

       
<div  className='w-full h-8 bg-400 rouned-br-2xl p-2 rounded-bl-2xl    '>

    <p   className='text-sm font-light text-center '>Unlock the Secret to Tailored Medication: Personalized Doses for Your One-of-a-Kind Body! Did You Know?</p>

 
</div>

</div>

</div>


<div className='h-60 w-full bg-slate-300 rounded-2xl single-item'>

<div className="sub-inner w-full h-full bg-zinc-300 rounded-2xl cursor-pointer border-t grid place-content-center p-4 ">

       
<div  className='w-full h-8 bg-400 rouned-br-2xl p-2 rounded-bl-2xl   border-t grid place-content-center   '>

    <p   className='text-sm font-light text-center '>Experience the Future of Medication: Creamy Comfort for Your Health! 🌟 Did You Know?</p>

 
</div>

</div>

</div>


<div className='h-60 w-full bg-slate-300 rounded-2xl single-item'>

<div className="sub-inner w-full h-full bg-zinc-300 rounded-2xl cursor-pointer p-4">

       
<div  className='w-full h-8 bg-400 rouned-br-2xl p-2 rounded-bl-2xl   border-t grid place-content-center  '>

    <p   className='text-sm font-light text-center '>Revolutionize Your Medication Routine: Try Medications in Dental Gel! 💡 Did You Know?</p>

 
</div>

</div>

</div>


<div className='h-60 w-full bg-slate-300 rounded-2xl single-item'>

<div className="sub-inner w-full h-full bg-zinc-300 rounded-2xl cursor-pointer border-t flex flex-col justify-center items-center p-4">

  <p className='text-sm font-light text-center'>Revolutionize Your Medication Routine: Try Medications in Dental Gel! 💡 Did You Know?</p>

</div>


</div>

  </div>
  
</div>

{/*Medicine For You, By You */}




<div className='flex-grow'></div>




<Footer />

    </main>
  )
}
