"use client"
import Image from 'next/image'
import { useState, useEffect } from "react";
import ResponsiveCarousel from "@/components/Carousel";
import Link from 'next/link';
import Header from '@/components/Header';

import Footer from '@/components/Footer';
import { ClassNames } from '@emotion/react';



export default function About() {
  

function goBack(){
  
}


  return (
    <main className="bg-white relative">

 <Header />


<div className='h-[100px] w-screen  relative md:pt-10 md:pb-10 md:pl-20 md:pr-20 md:pt-20 flex'>

<div onClick={goBack} style={{marginLeft:'60px', marginTop:'-35px'}} className='w-8 absolute h-8 bg-white  rounded-full md:mt-[-20]   ml-10 hidden md:block cursor-pointer absolute hover:ml-2 grid place-content-center p-1 shadow-md'>
  <img src="/images/home/arrow-back-simple-svgrepo-com.svg" alt="arrow-back-kemnet" />
    
    </div>

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
 
 
{
  //Awards


}

<div className='w-screen items-center mt-16'>

  <p className='font-medium text-xl text-center'>Recognized & Awarded</p>


<div className='w-full flex justify-center mt-4'>

<div className='grid md:grid-cols-2 gap-6 grid-cols-1  px-10 w-full ml-10 mt-4'>
   <div className='p-2 shadow-xl flex'>

    <div className='h-16 w-16 rounded-full '>
      <img src="/images/award-medal-trophy-svgrepo-com.svg" alt="kemet awards" />

    </div>
   
  <div className=''>
  <p className='ml-4 text-sm text-zinc-700'>Community Award, 2021 MIT Solve Global Challenges; Health Security & Pandemics Challenge</p>
   <Link href={"https://solve.mit.edu/challenges/2021-health-security-pandemics/solutions/45940"} className='mt-2 ml-4 text-sm text-orange-300 hover:ml-6'>View</Link>

  </div>

   </div>


   <div className='p-2 shadow-xl flex'>

   <div className='h-16 w-16 rounded-full '>
   <img src="/images/award-medal-trophy-svgrepo-com.svg" alt="kemet awards" />
</div>

<div className=''>
  <p className='ml-4 text-sm text-zinc-700'>Second place, 2022 Zeton/CSChE Plant Design Competition at the Canadian Chemical Engineering Conference</p>
   <Link href={"https://www.cheminst.ca/conference/canadian-chemical-engineering-conference-2022/"} className='mt-2 ml-4 text-sm text-orange-300 hover:ml-6'>View</Link>

  </div>



</div>



<div className='p-2 shadow-xl flex'>

<div className='h-16 w-16 rounded-full '>
<img src="/images/award-medal-trophy-svgrepo-com.svg" alt="kemet awards" />
</div>

<div className=''>
  <p className='ml-4 text-sm text-zinc-700'>2023 Alumni Award Recipients, University of Alberta, Faculty of Pharmacy & Pharmaceutical Sciences</p>
   <Link href={"https://www.ualberta.ca/alumni/recognition/alumni-awards/2023-recipients.html#:~:text=Mor%E1%BA%B9%CC%81nik%E1%BA%B9%CC%81%20%E1%BA%B8ni%E1%BB%8Dl%C3%A1%20%E1%BB%8Cl%C3%A1%C3%B2%E1%B9%A3eb%C3%ACkan,%20%E2%80%9909%20BSc(Pharm)"} className='mt-2 ml-4 text-sm text-orange-300 hover:ml-6'>View</Link>

  </div>



</div>



<div className='p-2 shadow-xl flex'>

<div className='h-16 w-16 rounded-full '>
<img src="/images/award-medal-trophy-svgrepo-com.svg" alt="kemet awards" />
</div>

<div className=''>
  <p className='ml-4 text-sm text-zinc-700'>First place, Capstone - Modular Medication Manufacturing project, Schulich School of Engineering, University in Calgary, Alberta</p>
   <Link href={"https://engineeringdesignfair.ucalgary.ca/chemical/modular-medication-manufacturing"} className='mt-2 ml-4 text-sm text-orange-300 hover:ml-6'>View</Link>

  </div>



</div>











    
  </div>
</div>





  
</div>


<div className='flex-grow'></div>




<Footer />

    </main>
  )
}
