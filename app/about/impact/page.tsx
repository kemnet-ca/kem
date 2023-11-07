"use client"
import Image from 'next/image'
import { useState, useEffect } from "react";
import ResponsiveCarousel from "@/components/Carousel";
import Link from 'next/link';
import Header from '@/components/Header';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

import Footer from '@/components/Footer';
import { ClassNames } from '@emotion/react';



export default function SocialImpact() {
  




  return (
    <main className="bg-white relative">

 <Header />


<div className='h-[100px] w-screen  relative md:pt-10 md:pb-10 md:pl-20 md:pr-20 md:pt-28 flex'>

<Link href={"/"} style={{marginLeft:'60px', marginTop:'-35px'}} className='w-8 absolute h-8 bg-white  rounded-full md:mt-[-20]   ml-10 hidden md:block cursor-pointer absolute hover:ml-2 grid place-content-center p-1 shadow-md'>
  <img src="/images/home/arrow-back-simple-svgrepo-com.svg" alt="arrow-back-kemnet" />
    
    </Link>

   <div className='w-full flex justify-center'>
   <p className='text-center text-xl font-medium ' style={{marginTop:`50px`}}>Social Impact</p>


  


   </div>

 
 
</div>

<div className='flex justify-center p-4 w-screen mb-8 mt-20'>

<div className='h-[300px] bg-slate-200 w-[90%] rounded-md grid place-content-center'>

    <p className="text-md">Image of UN Sustainable Dev Goals</p>

</div>


  








  
</div>

<div className="w-screen justify-center flex">

<p className="font-medium text-md">Good Causes</p>
</div>


<div className="w-screen md:px-28 mt-10">

  <p className="font-medium text-sm ">Kemet in Canada ⟨·⟩ Kemet in Countries in Africa </p>

  <p className="mt-10"><ChevronRightIcon />  <span>Our contribution to Canada spans research and development, supporting education, charitable donations and collaborations with  across the healthcare spectrum. </span></p>



  <p className="mt-10"><ChevronRightIcon />  <span>Kemet contributes to nine United Nations sustainable development goals. </span></p>


  </div>


  <div className="flex w-screen justify-center px-28 mt-6">

<div className='w-full bg-slate-100 py-6 px-6 flex mt-8 rounded-md '>

<p className="text-xs font-light text-zinc-800">Discover the Remarkable Impact of Kemet on Canadians as We Contribute to Four United Nations Sustainable Development Goals (PDF) - Click Here to Dive In!</p>

  <button  className='text-center text-xs text-white font-light bg-black rounded-3xl flex items-center justify-center px-6 py-2 hover:mt-2 ml-[20px] mr-6'>Download PDF</button>


  
</div>
</div>



<div className="flex w-screen justify-center px-28 mt-6">

<div className='w-full bg-slate-100 py-6  px-6 flex mt-8 rounded-md '>

<p className="text-xs font-light text-zinc-800"> Explore the Power of Kemet's Drug Shortage Resolution Proof of Concept Through Data - Click Here to Download and Witness the Numbers in Action!</p>

  <button  className='text-center text-xs text-white font-light bg-black rounded-3xl flex items-center justify-center px-6 py-2 hover:mt-2 ml-[20px] mr-6'>Download PDF</button>


  
</div>
</div>

<div className="w-screen md:px-28 mt-10">
<p className="text-sm font-light">Applied research work with underserved populations. Kemet increases medication accessibility to our end users by investing in understanding the various challenges that equity deserving communities face when they are trying to access pharmaceutical care. Between November 2022 and December 2023, Kemet invested in understanding needs of trans and queer folks across Canada to co-design medications that better serve each unique body.</p>



</div>

<div className="flex w-screen justify-center px-28 mt-6">

<div className='w-full bg-slate-100 py-6  px-6 flex mt-8 rounded-md '>

<p className="text-xs font-light text-zinc-800"> Ready to explore the vibrant tapestry of care for trans and queer individuals that Kemet has meticulously woven together through groundbreaking research spanning across the heart of Canada - Pdf Click Here to Dive In!</p>

  <button  className='text-center text-xs text-white font-light bg-black rounded-3xl flex items-center justify-center px-6 py-2 hover:mt-2 ml-[20px] mr-6'>Download PDF</button>


  
</div>
</div>


<div className="flex w-screen justify-center px-28 mt-6">

<div className='w-full bg-slate-100 py-6  px-6 flex mt-8 rounded-md '>

<p className="text-xs font-light text-zinc-800"> Unlock this empowering playbook crafted by trans and queer visionaries across Canada in groundbreaking research led by Kemet, designed to tailor medications uniquely for our trans and queer communities. Dive in and embrace a revolution in healthcare!  - Pdf Click Here to Dive In!</p>

  <button  className='text-center text-xs text-white font-light bg-black rounded-3xl flex items-center justify-center px-6 py-2 hover:mt-2 ml-[20px] mr-6'>Download PDF</button>


  
</div>
</div>

<div className='flex-grow'></div>




<Footer />

    </main>
  )
}
