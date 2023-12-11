"use client"
import Image from 'next/image'
import { useState, useEffect } from "react";
import ResponsiveCarousel from "@/components/Carousel";
import Link from 'next/link';
import Navbar from '@/components/Navbar';

import Footer from '@/components/Footer';
import { ClassNames } from '@emotion/react';
import Award from '@/components/SponsorsAndAward/award';
import CaseStudy from '@/components/SponsorsAndAward/case-study';
import StoryBook from '@/components/StoryBook';

import SectionHeader from '@/components/SectionHeader';



export default function About() {
  

function goBack(){
  
}


  return (
    <main className="bg-white relative">

 <Navbar />


<div className='h-[100px] w-screen  relative md:pt-10 md:pb-10 md:pl-20 md:pr-20 md:pt-20 flex'>

<div onClick={goBack} style={{marginLeft:'60px', marginTop:'-35px'}} className='w-8 absolute h-8 bg-white  rounded-full md:mt-[-20]   ml-10 hidden md:block cursor-pointer absolute hover:ml-2 grid place-content-center p-1 shadow-md'>
  <img src="/images/home/arrow-back-simple-svgrepo-com.svg" alt="arrow-back-kemnet" />
    
    </div>

   <div className='w-full flex justify-center md:mt-12 mt-[120px]'>
   <SectionHeader title={"About Us"} subtitle={""} />


   </div>

 
 
</div>

<div className='w-screen  md:mt-[200px] mt-[130px] mt-6 md:h-[300px] md:mb-[200px] mb-[180px]   '>



<StoryBook />

</div>
{
  /*
<div className='flex w-screen justify-center px-4'>

  <div className="w-[90%] grid grid-cols-2 p-4 gap-4  items-center place-content-center mx-auto">
   
    <div className='h-60 w-full bg-slate-300 rounded-2xl single-item'>

    <div className="sub-inner w-full h-full bg-zinc-300 rounded-2xl cursor-pointer ">

       
<div  className='w-full h-8 bg-400 rouned-br-2xl rounded-bl-2xl flex flex-col border-t  '>

<Link href={"../about/jobs"}  style={{marginBottom:`3%`, marginTop:`30%`}} className='text-xs font-medium  text-center '>Work With Us</Link>
         
</div>

</div>

</div>

<div className='h-60 w-full bg-slate-300 rounded-2xl single-item'>

<div className="sub-inner w-full h-full bg-zinc-300 rounded-2xl cursor-pointer ">

       
<div  className='w-full h-8 bg-400 rouned-br-2xl rounded-bl-2xl flex flex-col border-t  '>

<Link href={"../about/impact"}  style={{marginBottom:`3%`, marginTop:`30%`}} className='text-xs font-medium  text-center '>Social Impact</Link>
         
</div>

</div>

</div>


  </div>
  
</div>

  */
}


 
 
{
  //Awards


}

<div className='w-screen items-center md:mt-[270px] mt-[550px] md:px-[200px] text-center'>



<Award />



  
</div>


<div className='flex-grow'></div>




<Footer />

    </main>
  )
}
