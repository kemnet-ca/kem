"use client"
import Image from 'next/image'
import { useState, useEffect } from "react";
import ResponsiveCarousel from "@/components/Carousel";
import Link from 'next/link';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import ParticipatingPharms from '@/components/ParticipatingPharms';






export default function PatientSuccessPage() {
  

  



  return (<>




  {/* main widgets */}
    <main className="bg-white relative">

<Navbar />


<div className="h-[350px] w-screen bg-cover bg-center md:pt-[100px]" style={{ backgroundImage: "url('/images/home/Medicines_share.jpeg')" }}>
 
 <div className="w-full h-full grid place-content-center md:px-10" style={{backgroundColor:`rgba(0,0,0,0.7)`}}>




 <p className='text-center text-white text-xl font-semibold mt-6'>Welcome to your Medication Customization Consultation Request page.</p>
    <p className='text-center text-white text-sm mt-4 font-normal'>Please let us know how we can assist with your medication needs. You can customize<br></br> medications to meet your unique requirements and request medications that are currently out<br></br> of stock. A pharmacist will contact you to conduct an assessment and arrange for your<br></br> medicines to be custom-made for you.
</p>

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

{ //<ParticipatingPharms />
}
<Footer />

    </main>
    </>
  )
}
