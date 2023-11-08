"use client"
import Image from 'next/image'
import { useState, useEffect } from "react";
import ResponsiveCarousel from "@/components/Carousel";
import Link from 'next/link';
import Header from '@/components/Header';

import Footer from '@/components/Footer';
import { ClassNames } from '@emotion/react';



export default function ResearchAndDev() {
  




  return (
    <main className="bg-white relative">

 <Header />


<div className='h-[100px] w-screen  relative md:pt-10 md:pb-10 md:pl-20 md:pr-20 md:pt-28 flex'>

<Link href={"/"} style={{marginLeft:'60px', marginTop:'-35px'}} className='w-8 absolute h-8 bg-white  rounded-full md:mt-[-20]   ml-10 hidden md:block cursor-pointer absolute hover:ml-2 grid place-content-center p-1 shadow-md'>
  <img src="/images/home/arrow-back-simple-svgrepo-com.svg" alt="arrow-back-kemnet" />
    
    </Link>

   <div className='w-full flex justify-center'>
   <p className='text-center text-xl font-medium ' style={{marginTop:`-20px`}}>Research & Development</p>




   </div>

 
 
</div>



<div className="flex w-screen justify-center px-10">

<div className='w-2/3 bg-slate-100 py-2 px-6 flex mt-8 rounded-md '>

<p className="text-xs font-light text-zinc-800"> Take the confusion out of compounding and get all of your burning questions answered. Kemet simplifies compounding: &apos;Customized medicine companion: Mastering the Basics with Ease&apos;</p>

  <button  className='text-center text-xs text-white font-light bg-black rounded-3xl flex items-center justify-center px-6 py-2 hover:mt-2 ml-[20px] mr-6'>Download PDF</button>


  
</div>
</div>



<div className="flex w-screen justify-center px-4">

<div className='w-2/3 py-2 px-6  mt-8 rounded-md '>

<p className="text-sm font-light text-zinc-800 mt-4"> At Kemet, innovation is at the heart of everything we do. We&apos;re committed to expanding our product offerings through user discovery programs, strategic alliances with industry partners and research institutes, and it&apos;s a cornerstone of our growth strategy.</p>



<p className="text-sm font-light text-zinc-800 mt-4"> Our dedication extends to ensuring medication accessibility for all, especially in underserved communities. Kemet is deeply committed to understanding the unique medication needs of equity deserving people and populations. Together, we co-create, make, and deliver equitable, sustainable, and personalized medicine solutions.</p>


<p className="text-sm font-light text-zinc-800 mt-4"> Within the Kemet Group, we continuously conceive and develop groundbreaking medications with novel delivery methods. These medicines have the potential to positively impact the lives of millions in African countries and around the world each year. We prioritize your medication experience and overall health outcomes, which is why we invest in creating new drug formulations.</p>



<p className="text-sm font-light text-zinc-800 mt-4"> Our commitment to innovation is backed by scientific rigor, cutting-edge capabilities, and a highly specialized team. This enables us to maintain a robust and innovative product pipeline that paves the way for a healthier future.</p>


  
</div>
</div>




<div className='flex w-screen justify-center  flex'>

<div className="w-2/3 grid grid-cols-2 p-4 gap-4  items-center place-content-center mx-auto">
    <div className='h-60 w-full bg-slate-300 rounded-2xl single-item'>

        <div className="sub-inner w-full h-full bg-zinc-300 rounded-2xl cursor-pointer ">

       
            <div  className='w-full h-8 bg-400 rouned-br-md rounded-bl-2xl flex flex-col border-t  '>
            
                <Link href=""  style={{marginBottom:`3%`, marginTop:`53%`}} className='text-xs font-medium  text-center '>New product under development - Infographic TBD</Link>
            </div>

        </div>

       
    </div>
   

<div className='h-60 w-full bg-slate-300 rounded-2xl single-item'>

<div className="sub-inner w-full h-full bg-zinc-300 rounded-2xl cursor-pointer ">

       
<div  className='w-full h-8 bg-400 rouned-br-md rounded-bl-2xl flex flex-col border-t  '>

<p  style={{marginBottom:`3%`, marginTop:`53%`}} className='text-xs font-medium  text-center '>Life cycle management programs</p>
</div>

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
