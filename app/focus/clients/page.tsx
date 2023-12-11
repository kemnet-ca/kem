"use client"
import Image from 'next/image'
import { useState, useEffect } from "react";
import ResponsiveCarousel from "@/components/Carousel";
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import { useRouter } from 'next/navigation';
import Footer from '@/components/Footer';
import { ClassNames } from '@emotion/react';



export default function Clients() {

  //background images for pharmacies
  const backgroundImageUrl = 'url("/images/clients/rite choice logo.png")';
  const backgroundImageUrl1 = 'url("/images/clients/pharmachoice logo.png")';
  const backgroundImageUrl2= 'url("/images/clients/Nanogram+Pharmacy+line.png")';
  const backgroundImageUrl3 = 'url("/images/clients/Mortar-Pesto-Logo.png")';
  const backgroundImageUrl4 = 'url("/images/clients/lemarchand.png")';
  const backgroundImageUrl5 = 'url("/images/clients/kenron-logo_300x300.png")';
  const backgroundImageUrl6 = 'url("/images/clients/hamptons_pharmacy_logo.png")';
  const backgroundImageUrl7 = 'url("/images/clients/Fraser_Health_logo.svg.png")';
  const backgroundImageUrl8 = 'url("/images/clients/EDB_LOGO_Blue.png")';
  const backgroundImageUrl9 = 'url("/images/clients/d&d.png")';
  const backgroundImageUrl10 = 'url("/images/clients/centre pharmacy.png")';
  const backgroundImageUrl11 = 'url("/images/clients/carerx-logo-1.png")';
  const backgroundImageUrl12 = 'url("/images/clients/bold health.png")';
  const backgroundImageUrl13 = 'url("/images/clients/_xenum.png")';
  const backgroundImageUrl14 = 'url("/images/clients/_waldins pharmacy logo.png")';
  const backgroundImageUrl15 = 'url("/images/clients/_value drug mart logo.png")';

  const backgroundImageUrl16 = 'url("/images/clients/_strathcona prescription centre logo .png")';

  const backgroundImageUrl17 = 'url("/images/clients/_st albert peoples pharmacy logo.png")';
  const backgroundImageUrl18 = 'url("/images/clients/_Riverpointe Logo.png")';
  const backgroundImageUrl19 = 'url("/images/clients/_mint.png")';
  const backgroundImageUrl20 = 'url("/images/clients/_parsons drugs logo.png")';
  const backgroundImageUrl21 = 'url("/images/clients/_pharmasave-logo.png")';

  const backgroundImageUrl22 = 'url("/images/clients/_MettraPharmacy logo.jpeg")';
  const backgroundImageUrl23 = 'url("/images/clients/_Mayjorad.jpg")';

  const backgroundImageUrl24 = 'url("/images/clients/_indigenous services canada.jpeg")';
  const backgroundImageUrl25 = 'url("/images/clients/_mainstreet family pharmacy.png")';

  const backgroundImageUrl26 = 'url("/images/clients/_bitc.png")';

  const backgroundImageUrl27 = 'url("/images/clients/_eastwood pharmacy clinic.png")';
  const backgroundImageUrl28 = 'url("/images/clients/_guardian ida remedyrx - logo-en.png")';

  const backgroundImageUrl29 = 'url("/images/clients/_Alberta-Health-Logo.jpg")';
  const backgroundImageUrl30 = 'url("/images/clients/_axis pharmacy logo.png")';
  

  
  

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
   <p className='text-center text-xl font-medium ' style={{marginTop:`-20px`}}>Our Clients</p>




   </div>

 
 
</div>



<div className="flex w-screen justify-center px-10">

<div className='w-2/3 bg-slate-100 py-2 px-6 flex mt-8 rounded-md '>

<p className="text-xs font-light text-zinc-800"> Take the confusion out of compounding and get all of your burning questions answered. Kemet simplifies compounding: &apos;Customized medicine companion: Mastering the Basics with Ease&apos;</p>

  <button  className='text-center text-xs text-white font-light bg-black rounded-3xl flex items-center justify-center px-6 py-2 hover:mt-2 ml-[20px] mr-6'>Download PDF</button>


  
</div>
</div>
<div className='flex w-screen justify-center  flex'>

<div className="w-2/3 grid grid-cols-3 p-4 gap-4  items-center place-content-center mx-auto">
    <div className='h-60 w-full  rounded-2xl single-item border border-1 border-zinc-200' style={{ 
      
       backgroundPosition: 'center',
       backgroundSize: '90% 90%',
       backgroundRepeat: 'no-repeat',
      backgroundImage: backgroundImageUrl 
      }} >

        <div className="sub-inner w-full h-full  rounded-2xl cursor-pointer " style={{ backgroundColor: 'rgba(0,0,0,0.8)' }}>

       
        <div  className='w-full h-8 bg-400 rouned-br-2xl p-2 rounded-bl-2xl   border-t  ' >

<p   className='text-xs font-medium text-center  text-white '>Pharmacy Name:</p>

<p   className='text-md font-medium  text-center text-white'>Rite Choice Pharmacy</p>



</div>

        </div>

       
    </div>
   

    <div className='h-60 w-full  rounded-2xl single-item border border-1 border-zinc-200' style={{ 
      
      backgroundPosition: 'center',
      backgroundSize: '90% 40%',
      backgroundRepeat: 'no-repeat',
     backgroundImage: backgroundImageUrl1
     }} >

       <div className="sub-inner w-full h-full  rounded-2xl cursor-pointer " style={{ backgroundColor: 'rgba(0,0,0,0.8)' }}>

      
       <div  className='w-full h-8 bg-400 rouned-br-2xl p-2 rounded-bl-2xl   border-t  ' >

<p   className='text-xs font-medium text-center  text-white '>Pharmacy Name:</p>

<p   className='text-md font-medium  text-center text-white'>Pharma Choice Pharmacy</p>



</div>

       </div>

      
   </div>




   <div className='h-60 w-full  rounded-2xl single-item border border-1 border-zinc-200' style={{ 
      
      backgroundPosition: 'center',
      backgroundSize: '90% 20%',
      backgroundRepeat: 'no-repeat',
     backgroundImage: backgroundImageUrl2
     }} >

       <div className="sub-inner w-full h-full  rounded-2xl cursor-pointer " style={{ backgroundColor: 'rgba(0,0,0,0.8)' }}>

      
       <div  className='w-full h-8 bg-400 rouned-br-2xl p-2 rounded-bl-2xl   border-t  ' >

<p   className='text-xs font-medium text-center  text-white '>Pharmacy Name:</p>

<p   className='text-md font-medium  text-center text-white'>Nanogram Pharmacy</p>



</div>

       </div>

      
   </div>



   <div className='h-60 w-full  rounded-2xl single-item border border-1 border-zinc-200' style={{ 
      
      backgroundPosition: 'center',
      backgroundSize: '90% 40%',
      backgroundRepeat: 'no-repeat',
     backgroundImage: backgroundImageUrl3
     }} >

       <div className="sub-inner w-full h-full  rounded-2xl cursor-pointer " style={{ backgroundColor: 'rgba(0,0,0,0.8)' }}>

      
       <div  className='w-full h-8 bg-400 rouned-br-2xl p-2 rounded-bl-2xl   border-t  ' >

<p   className='text-xs font-medium text-center  text-white '>Pharmacy Name:</p>

<p   className='text-md font-medium  text-center text-white'>Morta Pesto</p>



</div>

       </div>

      
   </div>


   <div className='h-60 w-full  rounded-2xl single-item border border-1 border-zinc-200' style={{ 
      
      backgroundPosition: 'center',
      backgroundSize: '90% 40%',
      backgroundRepeat: 'no-repeat',
     backgroundImage: backgroundImageUrl4
     }} >

       <div className="sub-inner w-full h-full  rounded-2xl cursor-pointer " style={{ backgroundColor: 'rgba(0,0,0,0.8)' }}>

      
       <div  className='w-full h-8 bg-400 rouned-br-2xl p-2 rounded-bl-2xl   border-t  ' >

<p   className='text-xs font-medium text-center  text-white '>Pharmacy Name:</p>

<p   className='text-md font-medium  text-center text-white'>Lemarchand</p>



</div>

       </div>

      
   </div>


   <div className='h-60 w-full  rounded-2xl single-item border border-1 border-zinc-200' style={{ 
      
      backgroundPosition: 'center',
      backgroundSize: '90% 60%',
      backgroundRepeat: 'no-repeat',
     backgroundImage: backgroundImageUrl5
     }} >

       <div className="sub-inner w-full h-full  rounded-2xl cursor-pointer " style={{ backgroundColor: 'rgba(0,0,0,0.8)' }}>

      
       <div  className='w-full h-8 bg-400 rouned-br-2xl p-2 rounded-bl-2xl   border-t  ' >

<p   className='text-xs font-medium text-center  text-white '>Pharmacy Name:</p>

<p   className='text-md font-medium  text-center text-white'>Kenron Pharmacy</p>



</div>

       </div>

      
   </div>




   <div className='h-60 w-full  rounded-2xl single-item border border-1 border-zinc-200' style={{ 
      
      backgroundPosition: 'center',
      backgroundSize: '90% 40%',
      backgroundRepeat: 'no-repeat',
     backgroundImage: backgroundImageUrl6
     }} >

       <div className="sub-inner w-full h-full  rounded-2xl cursor-pointer " style={{ backgroundColor: 'rgba(0,0,0,0.8)' }}>

      
       <div  className='w-full h-8 bg-400 rouned-br-2xl p-2 rounded-bl-2xl   border-t  ' >

<p   className='text-xs font-medium text-center  text-white '>Pharmacy Name:</p>

<p   className='text-md font-medium  text-center text-white'>hamptons Pharmacy</p>



</div>

       </div>

      
   </div>



   <div className='h-60 w-full  rounded-2xl single-item border border-1 border-zinc-200' style={{ 
      
      backgroundPosition: 'center',
      backgroundSize: '90% 30%',
      backgroundRepeat: 'no-repeat',
     backgroundImage: backgroundImageUrl7
     }} >

       <div className="sub-inner w-full h-full  rounded-2xl cursor-pointer " style={{ backgroundColor: 'rgba(0,0,0,0.8)' }}>

      
       <div  className='w-full h-8 bg-400 rouned-br-2xl p-2 rounded-bl-2xl   border-t  ' >

<p   className='text-xs font-medium text-center  text-white '>Pharmacy Name:</p>

<p   className='text-md font-medium  text-center text-white'>Fraser Pharmacy</p>



</div>

       </div>

      
   </div>

   <div className='h-60 w-full  rounded-2xl single-item border border-1 border-zinc-200' style={{ 
      
      backgroundPosition: 'center',
      backgroundSize: '90% 40%',
      backgroundRepeat: 'no-repeat',
     backgroundImage: backgroundImageUrl8
     }} >

       <div className="sub-inner w-full h-full  rounded-2xl cursor-pointer " style={{ backgroundColor: 'rgba(0,0,0,0.8)' }}>

      
       <div  className='w-full h-8 bg-400 rouned-br-2xl p-2 rounded-bl-2xl   border-t  ' >

<p   className='text-xs font-medium text-center  text-white '>Pharmacy Name:</p>

<p   className='text-md font-medium  text-center text-white'>EDB (Economic Development Board)</p>



</div>

       </div>

      
   </div>


   <div className='h-60 w-full  rounded-2xl single-item border border-1 border-zinc-200' style={{ 
      
      backgroundPosition: 'center',
      backgroundSize: '90% 35%',
      backgroundRepeat: 'no-repeat',
     backgroundImage: backgroundImageUrl9
     }} >

       <div className="sub-inner w-full h-full  rounded-2xl cursor-pointer " style={{ backgroundColor: 'rgba(0,0,0,0.8)' }}>

      
       <div  className='w-full h-8 bg-400 rouned-br-2xl p-2 rounded-bl-2xl   border-t  ' >

<p   className='text-xs font-medium text-center  text-white '>Pharmacy Name:</p>

<p   className='text-md font-medium  text-center text-white'>D&D Pharmacy</p>



</div>

       </div>

      
   </div>


   <div className='h-60 w-full  rounded-2xl single-item border border-1 border-zinc-200' style={{ 
      
      backgroundPosition: 'center',
      backgroundSize: '90% 35%',
      backgroundRepeat: 'no-repeat',
     backgroundImage: backgroundImageUrl10
     }} >

       <div className="sub-inner w-full h-full  rounded-2xl cursor-pointer " style={{ backgroundColor: 'rgba(0,0,0,0.8)' }}>

      
       <div  className='w-full h-8 bg-400 rouned-br-2xl p-2 rounded-bl-2xl   border-t  ' >

<p   className='text-xs font-medium text-center  text-white '>Pharmacy Name:</p>

<p   className='text-md font-medium  text-center text-white'>Center Pharmacy</p>



</div>

       </div>

      
      
   </div>


   <div className='h-60 w-full  rounded-2xl single-item border border-1 border-zinc-200' style={{ 
      
      backgroundPosition: 'center',
      backgroundSize: '90% 30%',
      backgroundRepeat: 'no-repeat',
     backgroundImage: backgroundImageUrl11
     }} >

       <div className="sub-inner w-full h-full  rounded-2xl cursor-pointer " style={{ backgroundColor: 'rgba(0,0,0,0.8)' }}>

      
       <div  className='w-full h-8 bg-400 rouned-br-2xl p-2 rounded-bl-2xl   border-t  ' >

<p   className='text-xs font-medium text-center  text-white '>Pharmacy Name:</p>

<p   className='text-md font-medium  text-center text-white'>CareRX Pharmacy</p>



</div>

       </div>

      
   </div>

   <div className='h-60 w-full  rounded-2xl single-item border border-1 border-zinc-200' style={{ 
      
      backgroundPosition: 'center',
      backgroundSize: '90% 35%',
      backgroundRepeat: 'no-repeat',
     backgroundImage: backgroundImageUrl12
     }} >

       <div className="sub-inner w-full h-full  rounded-2xl cursor-pointer " style={{ backgroundColor: 'rgba(0,0,0,0.8)' }}>

      
       <div  className='w-full h-8 bg-400 rouned-br-2xl p-2 rounded-bl-2xl   border-t  ' >

<p   className='text-xs font-medium text-center  text-white '>Pharmacy Name:</p>

<p   className='text-md font-medium  text-center text-white'>Xenum Pharmacy</p>



</div>

       </div>

      
   </div>


   <div className='h-60 w-full  rounded-2xl single-item border border-1 border-zinc-200' style={{ 
      
      backgroundPosition: 'center',
      backgroundSize: '90% 35%',
      backgroundRepeat: 'no-repeat',
     backgroundImage: backgroundImageUrl14
     }} >

       <div className="sub-inner w-full h-full  rounded-2xl cursor-pointer " style={{ backgroundColor: 'rgba(0,0,0,0.8)' }}>

      
       <div  className='w-full h-8 bg-400 rouned-br-2xl p-2 rounded-bl-2xl   border-t  ' >

<p   className='text-xs font-medium text-center  text-white '>Pharmacy Name:</p>

<p   className='text-md font-medium  text-center text-white'>Waldins Pharmacy</p>



</div>

       </div>

      
   </div>


   <div className='h-60 w-full  rounded-2xl single-item border border-1 border-zinc-200' style={{ 
      
      backgroundPosition: 'center',
      backgroundSize: '90% 35%',
      backgroundRepeat: 'no-repeat',
     backgroundImage: backgroundImageUrl15
     }} >

       <div className="sub-inner w-full h-full  rounded-2xl cursor-pointer " style={{ backgroundColor: 'rgba(0,0,0,0.8)' }}>

      
       <div  className='w-full h-8 bg-400 rouned-br-2xl p-2 rounded-bl-2xl   border-t  ' >

<p   className='text-xs font-medium text-center  text-white '>Pharmacy Name:</p>

<p   className='text-md font-medium  text-center text-white'>Value Drug Mart</p>



</div>

       </div>

      
   </div>

   <div className='h-60 w-full  rounded-2xl single-item border border-1 border-zinc-200' style={{ 
      
      backgroundPosition: 'center',
      backgroundSize: '90% 35%',
      backgroundRepeat: 'no-repeat',
     backgroundImage: backgroundImageUrl16
     }} >

       <div className="sub-inner w-full h-full  rounded-2xl cursor-pointer " style={{ backgroundColor: 'rgba(0,0,0,0.8)' }}>

      
       <div  className='w-full h-8 bg-400 rouned-br-2xl p-2 rounded-bl-2xl   border-t  ' >

<p   className='text-xs font-medium text-center  text-white '>Pharmacy Name:</p>

<p   className='text-md font-medium  text-center text-white'>Strathcona Prescription Center</p>



</div>

       </div>

      
   </div>


   <div className='h-60 w-full  rounded-2xl single-item border border-1 border-zinc-200' style={{ 
      
      backgroundPosition: 'center',
      backgroundSize: '90% 35%',
      backgroundRepeat: 'no-repeat',
     backgroundImage: backgroundImageUrl17
     }} >

       <div className="sub-inner w-full h-full  rounded-2xl cursor-pointer " style={{ backgroundColor: 'rgba(0,0,0,0.8)' }}>

      
       <div  className='w-full h-8 bg-400 rouned-br-2xl p-2 rounded-bl-2xl   border-t  ' >

<p   className='text-xs font-medium text-center  text-white '>Pharmacy Name:</p>

<p   className='text-md font-medium  text-center text-white'>ST. Albert Pharmacy</p>



</div>

       </div>

      
   </div>


   <div className='h-60 w-full  rounded-2xl single-item border border-1 border-zinc-200' style={{ 
      
      backgroundPosition: 'center',
      backgroundSize: '90% 45%',
      backgroundRepeat: 'no-repeat',
     backgroundImage: backgroundImageUrl18
     }} >

       <div className="sub-inner w-full h-full  rounded-2xl cursor-pointer " style={{ backgroundColor: 'rgba(0,0,0,0.8)' }}>

      
       <div  className='w-full h-8 bg-400 rouned-br-2xl p-2 rounded-bl-2xl   border-t  ' >

<p   className='text-xs font-medium text-center  text-white '>Pharmacy Name:</p>

<p   className='text-md font-medium  text-center text-white'>Riverpointe Pharmacy</p>



</div>

       </div>

      
   </div>


   <div className='h-60 w-full  rounded-2xl single-item border border-1 border-zinc-200' style={{ 
      
      backgroundPosition: 'center',
      backgroundSize: '90% 45%',
      backgroundRepeat: 'no-repeat',
     backgroundImage: backgroundImageUrl19
     }} >

       <div className="sub-inner w-full h-full  rounded-2xl cursor-pointer " style={{ backgroundColor: 'rgba(0,0,0,0.8)' }}>

      
       <div  className='w-full h-8 bg-400 rouned-br-2xl p-2 rounded-bl-2xl   border-t  ' >

<p   className='text-xs font-medium text-center  text-white '>Pharmacy Name:</p>

<p   className='text-md font-medium  text-center text-white'>Mint Pharmacy</p>



</div>

       </div>

      
   </div>


   <div className='h-60 w-full  rounded-2xl single-item border border-1 border-zinc-200' style={{ 
      
      backgroundPosition: 'center',
      backgroundSize: '90% 45%',
      backgroundRepeat: 'no-repeat',
     backgroundImage: backgroundImageUrl20
     }} >

       <div className="sub-inner w-full h-full  rounded-2xl cursor-pointer " style={{ backgroundColor: 'rgba(0,0,0,0.8)' }}>

      
       <div  className='w-full h-8 bg-400 rouned-br-2xl p-2 rounded-bl-2xl   border-t  ' >

<p   className='text-xs font-medium text-center  text-white '>Pharmacy Name:</p>

<p   className='text-md font-medium  text-center text-white'>Parsons Drugs</p>



</div>

       </div>

      
   </div>

   <div className='h-60 w-full  rounded-2xl single-item border border-1 border-zinc-200' style={{ 
      
      backgroundPosition: 'center',
      backgroundSize: '90% 45%',
      backgroundRepeat: 'no-repeat',
     backgroundImage: backgroundImageUrl21
     }} >

       <div className="sub-inner w-full h-full  rounded-2xl cursor-pointer " style={{ backgroundColor: 'rgba(0,0,0,0.8)' }}>

      
       <div  className='w-full h-8 bg-400 rouned-br-2xl p-2 rounded-bl-2xl   border-t  ' >

<p   className='text-xs font-medium text-center  text-white '>Pharmacy Name:</p>

<p   className='text-md font-medium  text-center text-white'>Pharmasave Pharmacy</p>



</div>

       </div>

      
   </div>


   <div className='h-60 w-full  rounded-2xl single-item border border-1 border-zinc-200' style={{ 
      
      backgroundPosition: 'center',
      backgroundSize: '90% 45%',
      backgroundRepeat: 'no-repeat',
     backgroundImage: backgroundImageUrl22
     }} >

       <div className="sub-inner w-full h-full  rounded-2xl cursor-pointer " style={{ backgroundColor: 'rgba(0,0,0,0.8)' }}>

      
       <div  className='w-full h-8 bg-400 rouned-br-2xl p-2 rounded-bl-2xl   border-t  ' >

<p   className='text-xs font-medium text-center  text-white '>Pharmacy Name:</p>

<p   className='text-md font-medium  text-center text-white'>Mettra Pharmacy</p>



</div>

       </div>

      
   </div>



   <div className='h-60 w-full  rounded-2xl single-item border border-1 border-zinc-200' style={{ 
      
      backgroundPosition: 'center',
      backgroundSize: '90% 45%',
      backgroundRepeat: 'no-repeat',
     backgroundImage: backgroundImageUrl23
     }} >

       <div className="sub-inner w-full h-full  rounded-2xl cursor-pointer " style={{ backgroundColor: 'rgba(0,0,0,0.8)' }}>

      
       <div  className='w-full h-8 bg-400 rouned-br-2xl p-2 rounded-bl-2xl   border-t  ' >

<p   className='text-xs font-medium text-center  text-white '>Pharmacy Name:</p>

<p   className='text-md font-medium  text-center text-white'>Mayjorad Pharmacy</p>



</div>

       </div>

      
   </div>



   <div className='h-60 w-full  rounded-2xl single-item border border-1 border-zinc-200' style={{ 
      
      backgroundPosition: 'center',
      backgroundSize: '90% 30%',
      backgroundRepeat: 'no-repeat',
     backgroundImage: backgroundImageUrl24
     }} >

       <div className="sub-inner w-full h-full  rounded-2xl cursor-pointer " style={{ backgroundColor: 'rgba(0,0,0,0.8)' }}>

      
       <div  className='w-full h-8 bg-400 rouned-br-2xl p-2 rounded-bl-2xl   border-t  ' >

<p   className='text-xs font-medium text-center  text-white '>Pharmacy Name:</p>

<p   className='text-md font-medium  text-center text-white'>Indigenous Services Canada</p>



</div>

       </div>

      
   </div>


   <div className='h-60 w-full  rounded-2xl single-item border border-1 border-zinc-200' style={{ 
      
      backgroundPosition: 'center',
      backgroundSize: '90% 45%',
      backgroundRepeat: 'no-repeat',
     backgroundImage: backgroundImageUrl25
     }} >

       <div className="sub-inner w-full h-full  rounded-2xl cursor-pointer " style={{ backgroundColor: 'rgba(0,0,0,0.8)' }}>

      
       <div  className='w-full h-8 bg-400 rouned-br-2xl p-2 rounded-bl-2xl   border-t  ' >

<p   className='text-xs font-medium text-center  text-white '>Pharmacy Name:</p>

<p   className='text-md font-medium  text-center text-white'>Mainstreet Family Pharmacy</p>



</div>

       </div>

      
   </div>

   <div className='h-60 w-full  rounded-2xl single-item border border-1 border-zinc-200' style={{ 
      
      backgroundPosition: 'center',
      backgroundSize: '90% 45%',
      backgroundRepeat: 'no-repeat',
     backgroundImage: backgroundImageUrl26
     }} >

       <div className="sub-inner w-full h-full  rounded-2xl cursor-pointer " style={{ backgroundColor: 'rgba(0,0,0,0.8)' }}>

      
       <div  className='w-full h-8 bg-400 rouned-br-2xl p-2 rounded-bl-2xl   border-t  ' >

<p   className='text-xs font-medium text-center  text-white '>Pharmacy Name:</p>

<p   className='text-md font-medium  text-center text-white'>BITC Pharmacy</p>



</div>


       </div>

      
   </div>



   <div className='h-60 w-full  rounded-2xl single-item border border-1 border-zinc-200' style={{ 
      
      backgroundPosition: 'center',
      backgroundSize: '90% 45%',
      backgroundRepeat: 'no-repeat',
     backgroundImage: backgroundImageUrl27
     }} >

       <div className="sub-inner w-full h-full  rounded-2xl cursor-pointer " style={{ backgroundColor: 'rgba(0,0,0,0.8)' }}>

      
       <div  className='w-full h-8 bg-400 rouned-br-2xl p-2 rounded-bl-2xl   border-t  ' >

<p   className='text-xs font-medium text-center  text-white '>Pharmacy Name:</p>

<p   className='text-md font-medium  text-center text-white'>Eastwood Pharmacy</p>



</div>

       </div>

      
   </div>


   <div className='h-60 w-full  rounded-2xl single-item border border-1 border-zinc-200' style={{ 
      
      backgroundPosition: 'center',
      backgroundSize: '90% 45%',
      backgroundRepeat: 'no-repeat',
     backgroundImage: backgroundImageUrl28
     }} >

       <div className="sub-inner w-full h-full  rounded-2xl cursor-pointer " style={{ backgroundColor: 'rgba(0,0,0,0.8)' }}>

      
       <div  className='w-full h-8 bg-400 rouned-br-2xl p-2 rounded-bl-2xl   border-t  ' >

<p   className='text-xs font-medium text-center  text-white '>Pharmacy Name:</p>

<p   className='text-md font-medium  text-center text-white'>Guardian IDA Remedy RX</p>



</div>

       </div>

      
   </div>


   <div className='h-60 w-full  rounded-2xl single-item border border-1 border-zinc-200' style={{ 
      
      backgroundPosition: 'center',
      backgroundSize: '90% 45%',
      backgroundRepeat: 'no-repeat',
     backgroundImage: backgroundImageUrl29
     }} >

       <div className="sub-inner w-full h-full  rounded-2xl cursor-pointer " style={{ backgroundColor: 'rgba(0,0,0,0.8)' }}>

      
       <div  className='w-full h-8 bg-400 rouned-br-2xl p-2 rounded-bl-2xl   border-t  ' >

<p   className='text-xs font-medium text-center  text-white '>Pharmacy Name:</p>

<p   className='text-md font-medium  text-center text-white'>Alberta Clinic</p>



</div>


       </div>

      
   </div>



   <div className='h-60 w-full  rounded-2xl single-item border border-1 border-zinc-200' style={{ 
      
      backgroundPosition: 'center',
      backgroundSize: '90% 45%',
      backgroundRepeat: 'no-repeat',
     backgroundImage: backgroundImageUrl30
     }} >

       <div className="sub-inner w-full h-full  rounded-2xl cursor-pointer " style={{ backgroundColor: 'rgba(0,0,0,0.8)' }}>

      
       <div  className='w-full h-8 bg-400 rouned-br-2xl p-2 rounded-bl-2xl   border-t  ' >

<p   className='text-xs font-medium text-center  text-white '>Pharmacy Name:</p>

<p   className='text-md font-medium  text-center text-white'>Axis Pharmacy</p>



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
