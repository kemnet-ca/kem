"use client"
import Image from 'next/image'
import { useState, useEffect } from "react";
import ResponsiveCarousel from "@/components/Carousel";
import Link from 'next/link';
import Footer from '@/components/Footer';
import Header from '@/components/Header';






export default function PatientSuccessPage() {
  

  



  return (<>




  {/* main widgets */}
    <main className="bg-white relative">

<Header />


<div className="h-[350px] w-screen bg-cover bg-center" style={{ backgroundImage: "url('/images/home/Medicines_share.jpeg')" }}>
 
 <div className="w-full h-full grid place-content-center md:px-10" style={{backgroundColor:`rgba(0,0,0,0.7)`}}>

 <div className='w-8 absolute h-8 bg-white  rounded-full md:mt-20 ml-10 hidden md:block cursor-pointer hover:ml-2 grid place-content-center p-1'>
  <img src="/images/home/arrow-back-simple-svgrepo-com.svg" alt="arrow-back-kemnet" />
    
    </div>


    <p className='text-center text-white text-xl font-semibold'>WELCOME TO OUR CUSTOMIZATION CONSULT REQUEST PAGE</p>
    <p className='text-center text-white text-sm mt-4 font-normal'>PLEASE LET US KNOW HOW WE CAN ASSIST YOU WITH YOUR MEDICATION NEEDS. <br></br>CUSTOMIZE MEDICATION TO UNIQUE NEEDS AND REQUEST MEDICATION THAT ARE OUT OF STOCK AND A PHARMACIST WILL CONTACT YOU TO COMPLETE AN ASSESSMENT AND GET YOUR MEDICINES CUSTOM MADE FOR YOU.</p>

 </div>
</div>


<div className='w-screen 0 md:pb-10 md:pl-20 md:pr-20 md:pt-10 flex justify-center'>
    
  {/* Create 6 copies of inner-img */}

  

  <div className='h-[300] w-2/3 bg-slate-200 rounded-md py-4 px-8 '>


     <div className="flex justify-center">

      <img src="/images/home/checkmark-circle-svgrepo-com.svg" className='h-16 w-16' alt="request-sent kemnet" />
     </div>

    <p className='text-md font-medium text-center mt-4'>REQUEST SUCCESSFULLY SENT !</p>

{
  /* <p className='text-xs font-light text-center mt-4'>As is deemed therapeutically necessary, a prescriber will be in touch at the <b> patient&apos;s phone number</b> with you, to complete an assessment and support you further to make medicine that works for your unique body</p>
 */
}
    


    <div className="w-full  mt-2 flex justify-center">

      
        <Link href="/" className='text-center text-sm text-white font-light bg-black rounded-3xl flex items-center justify-center py-2 px-6 hover:mt-2 ml-[20px] mr-6'>Back To Home</Link>




</div>

</div>

</div>


<Footer />

    </main>
    </>
  )
}