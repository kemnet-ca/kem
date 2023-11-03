"use client"
import Image from 'next/image'
import { useState, useEffect } from "react";
import ResponsiveCarousel from "@/components/Carousel";
import Link from 'next/link';

import { PhoneInput } from 'react-international-phone';
import 'react-international-phone/style.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';




export default function CustomerDetails() {
  

const [isOpenOne, setIsOpenOne] = useState(false);
const [isOpenTwo, setIsOpenTwo] = useState(false);
const [isOpenThree, setIsOpenThree] = useState(false);

const [displayText, setDisplayText] = useState('PATIENT');
const [phone, setPhone] = useState('');

useEffect(() => {
  const interval = setInterval(() => {
    setDisplayText((currentText) => (currentText === 'Patient' ? 'Prescriber' : 'Patient'));
  }, 3000);

  return () => {
    clearInterval(interval);
  };
}, []);


  const handleMouseEnterOne = () => {
    setIsOpenOne(true);
  };

  const handleMouseLeaveOne = () => {
    setIsOpenOne(false);
  };

  const handleMouseEnterTwo = () => {
    setIsOpenTwo(true);
  };

  const handleMouseLeaveTwo = () => {
    setIsOpenTwo(false);
  };


  const handleMouseEnterThree = () => {
    setIsOpenThree(true);
  };

  const handleMouseLeaveThree = () => {
    setIsOpenThree(false);
  };


  



  return (
    <main className="bg-white relative">

<Header />


<div className="h-[350px] w-screen bg-cover bg-center" style={{ backgroundImage: "url('/images/home/Medicines_share.jpeg')" }}>
 
 <div className="w-full h-full grid place-content-center md:px-10" style={{backgroundColor:`rgba(0,0,0,0.7)`}}>

    <p className='text-center text-white text-xl font-semibold'>WELCOME TO OUR CUSTOMIZATION CONSULT REQUEST PAGE</p>
    <p className='text-center text-white text-sm mt-4 font-normal'>PLEASE LET US KNOW HOW WE CAN ASSIST YOU WITH YOUR MEDICATION NEEDS. <br></br>CUSTOMIZE MEDICATION TO UNIQUE NEEDS AND REQUEST MEDICATION THAT ARE OUT OF STOCK AND A PHARMACIST WILL CONTACT YOU TO COMPLETE AN ASSESSMENT AND GET YOUR MEDICINES CUSTOM MADE FOR YOU.</p>

 </div>
</div>


<div className='w-screen 0 md:pb-10 md:pl-20 md:pr-20 md:pt-10 flex justify-center'>
    
  {/* Create 6 copies of inner-img */}

  

  <div className='h-[300] w-2/3 bg-slate-200 rounded-md p-4 '>




    <p className='text-xl font-medium text-center mt-10'>Enter Your Information</p>
    <p className='text-sm text-zinc-800 font-extralight text-center mt-2'>Provide your phone number, so we can contact you to make your custom medicine for you.</p>


    <div className="w-full  mt-2 flex justify-center">
<div >
<input type="text" className='p-2 border border-zinc-300 rounded-md w-[300px]' placeholder='Full Name' />

    </div>
    </div>

  
    <div className="w-full  mt-2 flex justify-center">
<div >
<input type="text" className='p-2 border border-zinc-300 rounded-md w-[300px]' placeholder='Phone Number' />

    </div>
    </div>

  
<div className="w-full  mt-2 flex justify-center">
<div >
      <PhoneInput
        defaultCountry="ca"
        value={phone}
        onChange={(phone) => setPhone(phone)}
      />
    </div>
    </div>

    <div className="w-full  mt-2 flex justify-center">

  
        <Link href="../../patients/success" className='text-center text-sm text-white font-light bg-black rounded-3xl flex items-center justify-center px-6 py-2 hover:mt-2 ml-[20px] mr-6'>Submit</Link>




</div>

</div>

</div>
<Footer />



    </main>
  )
}
