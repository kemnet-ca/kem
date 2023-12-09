"use client"
import Image from 'next/image'
import { useState, useEffect } from "react";
import ResponsiveCarousel from "@/components/Carousel";
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useRouter } from 'next/navigation';




export default function ContactUS() {
  


const router = useRouter();

function goBack()
{
  router.back();
}


  



  return (
    <main className="bg-white relative">

<Header />


<div className="h-[350px] w-screen bg-cover bg-center" style={{ backgroundImage: "url('/images/home/Medicines_share.jpeg')" }}>
 
 <div className="w-full h-full grid place-content-center md:px-10" style={{backgroundColor:`rgba(0,0,0,0.7)`}}>
 <div className='w-8 absolute h-8 bg-white  rounded-full md:mt-20 ml-10 hidden md:block cursor-pointer hover:mr-2 grid place-content-center p-1'>
  <img onClick={goBack} src="/images/home/arrow-back-simple-svgrepo-com.svg" alt="arrow-back-kemnet" />
    
    </div>

    <p className='text-center text-white text-2xl font-semibold'>CONTACT US</p>
  
 </div>
</div>
<div className="flex w-screen justify-center px-10">
<div className='w-2/3 p-4 shadow-xl rounded-md text-center'>

<p className="font-semibold">KEMET ADDRESS</p>

<p>9407 20 Ave NW

Edmonton, AB 

T6N 1E5</p>


<p className="font-semibold mt-4">Contact Us By Email Below:</p>

<p>admin@www.back.kemet.care</p>


<p className="font-semibold mt-4">Contact Us By Fax Below:</p>

<p>587-523-7946</p>




</div>



</div>



<Footer />

    </main>
  )
}
