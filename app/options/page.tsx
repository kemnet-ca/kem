"use client"
import Image from 'next/image'
import { useState, useEffect } from "react";
import ResponsiveCarousel from "@/components/Carousel";
import Link from 'next/link';

import { useRouter } from 'next/navigation';
import Footer from '@/components/Footer';
import { ClassNames } from '@emotion/react';
import Navbar from '@/components/Navbar';
import Medicine from '@/components/Medicine';
import MedicineTwo from '@/components/MedicineTwo';



export default function Options() {
  const router = useRouter();

  
  function goBack()
  {
    router.back();
  }




  return (
    <main className="bg-white relative">

 <Navbar />


 <div style={{marginLeft:'60px', marginTop:'-35px'}} className='w-8 absolute h-8 bg-white  rounded-full md:mt-[-20]   ml-10 hidden md:block cursor-pointer absolute hover:ml-2 grid place-content-center p-1'>
  <img onClick={goBack} src="/images/home/arrow-back-simple-svgrepo-com.svg" alt="arrow-back-kemnet" />
    
    </div>

 <MedicineTwo />


<Footer />

    </main>
  )
}
