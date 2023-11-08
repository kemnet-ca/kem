"use client"
import Image from 'next/image'
import { useState, useEffect } from "react";
import ResponsiveCarousel from "@/components/Carousel";
import Link from 'next/link';
import Header from '@/components/Header';

import Footer from '@/components/Footer';
import { ClassNames } from '@emotion/react';



export default function HealthProTools() {
  




  return (
    <main className="bg-white relative">

 <Header />


<div className='h-[100px] w-screen  relative md:pt-10 md:pb-10 md:pl-20 md:pr-20 md:pt-28 flex'>

<Link href={"/"} style={{marginLeft:'60px', marginTop:'-35px'}} className='w-8 absolute h-8 bg-white  rounded-full md:mt-[-20]   ml-10 hidden md:block cursor-pointer absolute hover:ml-2 grid place-content-center p-1 shadow-md'>
  <img src="/images/home/arrow-back-simple-svgrepo-com.svg" alt="arrow-back-kemnet" />
    
    </Link>

   <div className='w-full flex justify-center mt-10'>
   <p className='text-center text-xl font-medium ' >Tools For Health Care Professionals</p>




   </div>

   
 
 
</div>

<div className="flex w-screen justify-center px-10 mt-20">

<div className='w-2/3 bg-slate-100 py-2 px-6 flex mt-8 rounded-md '>

<p className="text-xs font-light text-zinc-800"> Take the confusion out of compounding and get all of your burning questions answered. Kemet simplifies compounding: &apos;Customized medicine companion: Mastering the Basics with Ease&apos;</p>

  <button  className='text-center text-xs text-white font-light bg-black rounded-3xl flex items-center justify-center px-6 py-2 hover:mt-2 ml-[20px] mr-6'>Download PDF</button>


  
</div>
</div>

<div className='w-full flex justify-center mt-10'>
   <p className='text-center text-md font-medium ' >Pseudodin Tool</p>




   </div>







<div className='flex w-screen justify-center  flex'>

<div className="w-2/3 grid grid-cols-2 p-4 gap-4  items-center place-content-center mx-auto">
    <div className='h-60 w-full bg-slate-300 rounded-2xl single-item'>

       

       
    </div>
   

    <div className='h-60 w-full   single-item py-2'>
        <p className="text-sm font-medium">Simplify Your Billing Process</p>
        <p className="font-light text-xs mt-2">Tired of the hassle of managing insurance billing for compounds? Discover the ultimate solution to effortlessly find the pseudodin codes for various third-party insurance providers here. Streamline your workflow and save time with ease!</p>

        <p className="font-light text-xs mt-2">The Ultimate Pseudodin Resource: A Comprehensive Guide and 3rd Party Insurance Pseudodin Listings for Compounds </p>
 
        <div className="w-full  mt-4 flex justify-start">

<button  className='text-center text-sm text-white font-light bg-black rounded-3xl flex items-center justify-center px-6 py-2 hover:mt-2 '>Download PDF</button>




</div>



</div>








  
</div>


</div>










   <div className='flex w-screen justify-center  flex'>

<div className="w-2/3 grid grid-cols-2 p-4 gap-4  items-center place-content-center mx-auto">
  
<div className='h-60 w-full bg-slate-300 rounded-2xl single-item'>

       

       
</div>


    <div className='h-60 w-full   single-item py-2'>
        <p className="text-sm font-medium">Kemet Science</p>
        <p className="font-light text-xs mt-2">Take the confusion out of compounding and get all your burning questions answered. Kemet simplifies compounding with our foolproof knowledge base - making compounding crystal clear for healthcare professionals. </p>

       <p className="font-normal text-sm mt-2">Subscribe For Free</p>
       <p className="font-light text-xs mt-2">Receive weekly tools to get all your questions answered and support your practice to provide quality compound medications to your patients.</p>
        <div className="w-full  mt-4 flex justify-start">

<Link href={"../science"}  className='text-center text-sm text-white font-light bg-black rounded-3xl flex items-center justify-center px-6 py-2 hover:mt-2'>More Info</Link>




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
