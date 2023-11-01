"use client"
import Image from 'next/image'
import { useState, useEffect } from "react";
import ResponsiveCarousel from "@/components/Carousel";
import Link from 'next/link';




export default function CustomerPostalCode() {
  

const [isOpenOne, setIsOpenOne] = useState(false);
const [isOpenTwo, setIsOpenTwo] = useState(false);
const [isOpenThree, setIsOpenThree] = useState(false);

const [displayText, setDisplayText] = useState('PATIENT');

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

<div className="bg-slate-200 w-screen py-2 hidden md:flex  px-28 fixed z-10 shadow-sm top-header mt-0">

  
  <p className="main-logo text-black font-bold text-2xl">KEMET</p>
  <ul className="main-menu text-black flex space-x-6 justify-center ml-40 pt-2">
    <li className="menu-item  text-sm cursor-pointer hover:text-zinc-600 ">About Us</li>
    <li className="menu-item text-sm cursor-pointer hover:text-zinc-600 ">Our Focus</li>
    <li className="menu-item text-sm cursor-pointer hover:text-zinc-600 ">Kemet Science</li>
    <li className="menu-item text-sm cursor-pointer hover:text-zinc-600 ">Healthcare Pro Tools</li>
  </ul>



  
</div>


<div className="h-[350px] w-screen bg-cover bg-center" style={{ backgroundImage: "url('/images/home/Medicines_share.jpeg')" }}>
 
 <div className="w-full h-full grid place-content-center md:px-10" style={{backgroundColor:`rgba(0,0,0,0.7)`}}>

    <p className='text-center text-white text-xl font-semibold'>WELCOME TO OUR CUSTOMIZATION CONSULT REQUEST PAGE</p>
    <p className='text-center text-white text-sm mt-4 font-normal'>PLEASE LET US KNOW HOW WE CAN ASSIST YOU WITH YOUR MEDICATION NEEDS. <br></br>CUSTOMIZE MEDICATION TO UNIQUE NEEDS AND REQUEST MEDICATION THAT ARE OUT OF STOCK AND A PHARMACIST WILL CONTACT YOU TO COMPLETE AN ASSESSMENT AND GET YOUR MEDICINES CUSTOM MADE FOR YOU.</p>

 </div>
</div>


<div className='w-screen 0 md:pb-10 md:pl-20 md:pr-20 md:pt-10 flex justify-center'>
    
  {/* Create 6 copies of inner-img */}

  

  <div className='h-[300] w-2/3 bg-slate-200 rounded-md p-4 '>




    <p className='text-xl font-medium text-start ml-[130px] mt-10'>What&apos;s your postal code?</p>



    <div className="w-full  mt-2 flex justify-center">

        <input type="text" className='p-2 border border-zinc-300 rounded-md w-[300px]' placeholder='Enter Your Postal Code' />

        <Link href="../../patients/pharmacies" className='text-center text-sm text-white font-light bg-black rounded-3xl flex items-center justify-center px-6 hover:mt-2 ml-[20px] mr-6'>Submit</Link>




</div>

</div>

</div>




    </main>
  )
}
