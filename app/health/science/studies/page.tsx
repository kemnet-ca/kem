"use client"
import Image from 'next/image'
import { useState, useEffect } from "react";
import ResponsiveCarousel from "@/components/Carousel";
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useRouter } from 'next/navigation';
import Footer from '@/components/Footer';
import { ClassNames } from '@emotion/react';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';



export default function Studies() {
  

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

   <div className='w-full flex justify-center'>
   <p className='text-center text-xl font-medium ' style={{marginTop:`-20px`}}>Knowledge Hub</p>




   </div>

 
 
</div>



<div className='w-full flex justify-center mt-10'>
   <p className='text-center text-md font-medium ' style={{marginTop:`-20px`}}>Kemet&apos;s Bold Vision</p>




   </div>

 
 



<div className="flex w-screen justify-center px-10">

<div className='w-2/3  py-2 px-6  mt-4 rounded-md  md:grid md:grid-cols-2 gap-2 py-10 rounded-2xl'>

<div className=" w-full border  border-2 border-zinc-200 p-4 rounded-md">

    <div className="h-16 w-16  bg-zinc-300 shadow-md rounded-full"></div>

    <p className="text-sm font-medium mt-4 text-black">Our Vision</p>

    <p className="text-sm font-extralight mt-4 text-zinc-600">

    Unleashing Personalized Medicines Across Africa!

At Kemet Science, we&apos;re on a mission to combat research bias and champion the underserved.
    </p>



    </div>


    <div className=" w-full border border-2  border-zinc-200 p-4">

    <div className="h-16 w-16  bg-zinc-300 shadow-md rounded-full"></div>

<p className="text-sm font-medium mt-4 text-black">Our Commitment to Accessibility</p>

<p className="text-sm font-extralight mt-4 text-zinc-600">

We&apos;re dedicated to breaking down barriers to medication access, especially for underserved communities.
</p>


</div>


<div className=" w-full border border-2   border-zinc-200 p-4 ">

       <div className="h-16 w-16  bg-zinc-300 shadow-md rounded-full"></div>

<p className="text-sm font-medium mt-4 text-black">Empowering Diversity</p>

<p className="text-sm font-extralight mt-4 text-zinc-600">

We&apos;re deeply committed to understanding the unique medication needs of equity deserving populations, forging equitable, sustainable, personalized medicine solutions.
</p>

</div>


<div className=" w-full border border-2   border-zinc-200 p-4 ">

<div className="h-16 w-16  bg-zinc-300 shadow-md rounded-full"></div>

<p className="text-sm font-medium mt-4 text-black">The Dream Team</p>

<p className="text-sm font-extralight mt-4 text-zinc-600">

Behind every breakthrough study and groundbreaking product, there&apos;s a dynamic team of PhD-level social workers, scientists, chemists, pharmacists, lawyers, engineers, supply chain experts, and human-centered design specialists. Together, we&apos;re driving innovation in medication delivery!
</p>


</div>

  
</div>
</div>



<div className='w-full flex justify-center mt-10'>
   <p className='text-center text-md font-medium ' style={{marginTop:`-20px`}}>Publications</p>




   </div>







<div className='flex w-screen justify-center  flex'>

<div className="w-2/3 grid grid-cols-2 p-4 gap-4  items-center place-content-center mx-auto">
    <div className='h-60 w-full bg-slate-300 rounded-2xl single-item'>

        <div className="sub-inner w-full h-full bg-zinc-300 rounded-2xl cursor-pointer ">

       
            <div  className='w-full h-8 bg-400 rouned-br-md rounded-bl-2xl flex flex-col border-t  '>
            
                <Link href=""  style={{marginBottom:`3%`, marginTop:`53%`}} className='text-xs font-medium  text-center '>Studies</Link>
            </div>

        </div>

       
    </div>
   

    <div className='h-60 w-full bg-slate-300 rounded-2xl single-item'>

<div className="sub-inner w-full h-full bg-zinc-300 rounded-2xl cursor-pointer ">

       
<div  className='w-full h-8 bg-400 rouned-br-md rounded-bl-2xl flex flex-col border-t  '>

<p  style={{marginBottom:`3%`, marginTop:`53%`}} className='text-xs font-medium  text-center '>Technical Reports (Coming Soon)</p>
</div>

</div>

</div>






<div className='h-60 w-full bg-slate-300 rounded-2xl single-item'>

<div className="sub-inner w-full h-full bg-zinc-300 rounded-2xl cursor-pointer ">

       
<div  className='w-full h-8 bg-400 rouned-br-md rounded-bl-2xl flex flex-col border-t  '>

<p  style={{marginBottom:`3%`, marginTop:`53%`}} className='text-xs font-medium  text-center '>Case Studies (Coming Soon)</p>
</div>

</div>

</div>



<div className='h-60 w-full bg-slate-300 rounded-2xl single-item'>

<div className="sub-inner w-full h-full bg-zinc-300 rounded-2xl cursor-pointer ">

       
<div  className='w-full h-8 bg-400 rouned-br-md rounded-bl-2xl flex flex-col border-t  '>

<p  style={{marginBottom:`3%`, marginTop:`53%`}} className='text-xs font-medium  text-center '>Journal Articles (Coming Soon)</p>
</div>

</div>

</div>


  </div>
  
</div>

{/*Medicine For You, By You */}


<div className='w-full flex justify-center mt-10'>
   <p className='text-center text-md font-medium ' style={{marginTop:`-20px`}}>Kemet&apos;s Bold Commitment</p>




   </div>


   <div className='flex w-screen justify-center'>
  <div className="w-2/3">
    <div className="w-full">
      <p className="text-xl mt-8 font-semibold text-sm text-left">
        RATIONALE FOR COMPOUNDING: Empowering Underserved Communities
      </p>
    </div>

    <p className=" text-sm font-light mt-4 ">For the next 3 years, Kemet is proudly partnering with and championing the following underserved populations. Together, we&apos;ll consistently unveil essential knowledge and drive positive change for these vital communities.</p>
 
 
 <p className="mt-2"><ChevronRightIcon />   <span className="font-light text-sm">Indigenous women [Publications Coming Soon]</span></p>
  
 
 <p className="mt-2"><ChevronRightIcon />   <span className="font-light text-sm ">People who identify as Trans or Queer [Publications Coming Soon] </span></p>
  

   
 <p className="mt-2"><ChevronRightIcon />   <span className="font-light text-sm">People over 50 years old [Publications Coming Soon]</span></p>
  


   
 <p className="mt-2"><ChevronRightIcon />   <span className="font-light text-sm">People under 12 years old [Publications Coming Soon]</span></p>
  
  

 <p className="mt-2"><ChevronRightIcon />   <span className="font-light text-sm ">People frequently impacted by drug shortages [Publications Coming Soon]</span></p>
  

 <p className="mt-2"><ChevronRightIcon />   <span className="font-light text-sm ">People on the Autism spectrum [Publications Coming Soon]</span></p>
  
  
  
  
  </div>
</div>


<div className="flex w-screen justify-center px-10">

<div className='w-2/3 bg-slate-100 py-2 px-6  mt-8 rounded-xl py-8 md:px-16 '>

    <p className="font-medium text-md text-center">Join our exclusive community and stay at the forefront of groundbreaking research! </p>


    <p className="font-light text-sm mt-4 text-center">
    Subscribe now to receive timely updates that will empower your knowledge and keep you informed about the latest developments in your field.
  </p>

   <div  className='w-full h-8 bg-400 rouned-br-md rounded-bl-2xl flex flex-col border-t  '>
            
                <button className='text-xs font-medium  text-center '>Subscribe Now</button>
            </div>
</div>
</div>
  


<div className='flex-grow'></div>




<Footer />

    </main>
  )
}
