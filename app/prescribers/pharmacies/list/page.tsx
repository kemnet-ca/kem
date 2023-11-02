"use client"
import Image from 'next/image'
import { useState, useEffect } from "react";

import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';




export default function Pharmacies() {
  

const [isOpenOne, setIsOpenOne] = useState(false);
const [isOpenTwo, setIsOpenTwo] = useState(false);
const [isOpenThree, setIsOpenThree] = useState(false);

const [displayText, setDisplayText] = useState('PATIENT');
const [isChecked, setIsChecked] = useState(false);

const handleCheckboxChange = () => {
  setIsChecked(!isChecked); // Toggle the checkbox state
};


useEffect(() => {
  const interval = setInterval(() => {
    setDisplayText((currentText) => (currentText === 'Patient' ? 'Prescriber' : 'Patient'));
  }, 3000);

  return () => {
    clearInterval(interval);
  };
}, []);


const checkboxStyle = {
  background: isChecked ? 'green' : 'white', // Change the background color when checked
  border: '1px solid #ccc',
  borderRadius: '4px',
  width: '20px',
  height: '20px',
};



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

<Header/>


<div className="h-[350px] w-screen bg-cover bg-center" style={{ backgroundImage: "url('/images/home/Medicines_share.jpeg')" }}>
 
 <div className="w-full h-full grid place-content-center md:px-10" style={{backgroundColor:`rgba(0,0,0,0.7)`}}>

    <p className='text-center text-white text-xl font-semibold'>WELCOME TO OUR CUSTOMIZATION CONSULT REQUEST PAGE</p>
    <p className='text-center text-white text-sm mt-4 font-normal'>PLEASE LET US KNOW HOW WE CAN ASSIST YOU WITH YOUR MEDICATION NEEDS. <br></br>CUSTOMIZE MEDICATION TO UNIQUE NEEDS AND REQUEST MEDICATION THAT ARE OUT OF STOCK AND A PHARMACIST WILL CONTACT YOU TO COMPLETE AN ASSESSMENT AND GET YOUR MEDICINES CUSTOM MADE FOR YOU.</p>

 </div>
</div>


<div className='w-screen 0 md:pb-10 md:pl-20 md:pr-20 md:pt-10 flex justify-center'>
    
  {/* Create 6 copies of inner-img */}

  

  <div className='h-[300] w-2/3 bg-slate-200 rounded-md p-4 '>




    <p className='text-xl font-medium text-center    mt-10'>Nearby Pharmacies</p>

    <p className='text-sm text-zinc-500 font-normal text-center  mt-2'>Select Which Pharmacy You Would Want</p>




   <div className='w-full flex justify-center px-20 ml-6'>
   <div className="w-full grid grid-cols-2 grid-gap-8 mt-4 items-center">

<div className=' w-full mt-6 '>
<span className=' font-medium text-sm text-zinc-800'>CareRx Compounding Edmonton <br></br><span className='text-xs font-extralight text-zinc-600'>CareRx Edmonton Compounding, 9509 156 St NW M5, Edmonton, AB T5P 4J5, Canada</span></span> 
        


</div>

<div className=' w-full mt-6 '>

<span className=' font-medium text-sm text-zinc-800'>CareRx Compounding Edmonton <br></br><span className='text-xs font-extralight text-zinc-600'>CareRx Edmonton Compounding, 9509 156 St NW M5, Edmonton, AB T5P 4J5, Canada</span></span> 
      


</div>



<div className=' w-full mt-6 '>

<span className=' font-medium text-sm text-zinc-800'>CareRx Compounding Edmonton <br></br><span className='text-xs font-extralight text-zinc-600'>CareRx Edmonton Compounding, 9509 156 St NW M5, Edmonton, AB T5P 4J5, Canada</span></span> 
      

</div>

<div className=' w-full mt-6 '>

<span className='font-medium text-sm text-zinc-800'>CareRx Compounding Edmonton <br></br><span className='text-xs font-extralight text-zinc-600'>CareRx Edmonton Compounding, 9509 156 St NW M5, Edmonton, AB T5P 4J5, Canada</span></span> 
      


</div>

</div>


    </div>       
       
       
       
       
       





</div>

</div>

<div className="flex w-screen justify-center">

<div className="w-1/3 bg-slate-200 py-2 px-2 rounded-md flex  text-light text-xs">

<img className='h-[25px] w-[25px] mt-[-2px] mr-2 text-zinc-700 cursor-pointer' src="/images/home/info-circle-svgrepo-com.svg" alt="info-circle" />
<p>Your selected pharamcy team are eager to serve you. Please contact them.</p>


</div>


</div>

<Footer />
    </main>
  )
}
