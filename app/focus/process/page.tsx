"use client"
import Image from 'next/image'
import { useState, useEffect } from "react";
import ResponsiveCarousel from "@/components/Carousel";
import Link from 'next/link';
import Header from '@/components/Header';

import Footer from '@/components/Footer';
import { ClassNames } from '@emotion/react';



export default function Process() {
  




  return (
    <main className="bg-white relative">

 <Header />


<div className='h-[100px] w-screen  relative md:pt-10 md:pb-10 md:pl-20 md:pr-20 md:pt-28 flex'>

<Link href={"/"} style={{marginLeft:'60px', marginTop:'-35px'}} className='w-8 absolute h-8 bg-white  rounded-full md:mt-[-20]   ml-10 hidden md:block cursor-pointer absolute hover:ml-2 grid place-content-center p-1 shadow-md'>
  <img src="/images/home/arrow-back-simple-svgrepo-com.svg" alt="arrow-back-kemnet" />
    
    </Link>

   <div className='w-full flex justify-center'>
   <p className='text-center text-xl font-medium ' style={{marginTop:`20px`}}>The Process</p>




   </div>

 
 
</div>



<div className="w-screen bg-white md:px-10 mt-20">

    <p className='font-medium '>Patients & Prescribers</p>

    <p className='mt-4 font-light text-sm'>Transforming Healthcare: Tailored to You and Your Prescribers</p>


    <div className="h-16 w-[100px]  mt-12 grid grid-cols-2 gap-2">

        <div className="bg-slate-100 rounded-full h-16 w-16 grid place-content-center ">
            <p className='text-2xl text-zinc-600'>1</p>



        </div>

        <div className='ml-4 w-[500px]'>
        <p className="text-sm font-medium">Your Vision</p>
        <p className="text-sm font-light">You share your health and well-being goals with us.</p>
        </div>

    </div>

    <div className="h-16 w-[100px]  mt-8 grid grid-cols-2 gap-2">

<div className="bg-slate-100 rounded-full h-16 w-16 grid place-content-center ">
    <p className='text-2xl text-zinc-600'>2</p>



</div>

<div className='ml-4 w-[500px]'>
<p className="text-sm font-medium">Deep Understanding</p>
<p className="text-sm font-light">  We strive to comprehend which medications will best support your well-being. We achieve this by engaging in conversations with you and conducting applied research within underserved communities and populations.</p>
</div>

</div>


<div className="h-16 w-[100px]  mt-12 grid grid-cols-2 gap-2">

<div className="bg-slate-100 rounded-full h-16 w-16 grid place-content-center ">
    <p className='text-2xl text-zinc-600'>3</p>



</div>

<div className='ml-4 w-[500px]'>
<p className="text-sm font-medium">Custom Medications</p>
<p className="text-sm font-light">  Using insights from your well-being goals, we design medications that are perfectly aligned with your unique health objectives.</p>
</div>

</div>


<div className="h-16 w-[100px]  mt-12 grid grid-cols-2 gap-2">

<div className="bg-slate-100 rounded-full h-16 w-16 grid place-content-center ">
    <p className='text-2xl text-zinc-600'>4</p>



</div>

<div className='ml-4 w-[500px]'>
<p className="text-sm font-medium">Scientific Excellence</p>
<p className="text-sm font-light"> Our expertise in industrial pharmacy, engineering, and supply chain management, coupled with a stringent product development approach grounded in established scientific literature, guarantees unwavering quality assurance.</p>
</div>

</div>




<div className="h-16 w-[100px]  mt-12 grid grid-cols-2 gap-2">

<div className="bg-slate-100 rounded-full h-16 w-16 grid place-content-center ">
    <p className='text-2xl text-zinc-600'>5</p>



</div>

<div className='ml-4 w-[500px]'>
<p className="text-sm font-medium">Collaborative Partnership</p>
<p className="text-sm font-light">We empower you throughout the journey, working side by side to address your health system&apos;s specific goals and cater to your individual needs.</p>
</div>

</div>

<div className='ml-4 w-[800px] mt-6'>

<p className="text-sm font-light">With this collaborative approach, we deliver the capacity to transform your healthcare system. <span className="font-medium">Medicine Your Medicine</span> becomes a reality, providing solutions tailored precisely to your country&apos;s needs and aspirations.</p>
</div>










</div>






<div className='flex-grow'></div>




<Footer />

    </main>
  )
}
