"use client"
import Image from 'next/image'
import { useState, useEffect } from "react";
import ResponsiveCarousel from "@/components/Carousel";
import Link from 'next/link';




export default function Options() {
  

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

<div className="bg-slate-200 w-screen py-2 hidden md:flex  px-28 fixed z-10 shadow-sm top-header">

  
  <p className="main-logo text-black font-bold text-2xl">KEMET</p>
  <ul className="main-menu text-black flex space-x-6 justify-center ml-40 pt-2">
    <li className="menu-item  text-sm cursor-pointer hover:text-zinc-600 ">About Us</li>
    <li className="menu-item text-sm cursor-pointer hover:text-zinc-600 ">Our Focus</li>
    <li className="menu-item text-sm cursor-pointer hover:text-zinc-600 ">Kemet Science</li>
    <li className="menu-item text-sm cursor-pointer hover:text-zinc-600 ">Healthcare Pro Tools</li>
  </ul>



  <div className='h-20 w-60 bg-white rounded-br-md rounded-bl-md shadow-sm absolute z-20 mt-10 mr-10 p-2 flex'
  style={{
    left:`65%`
  }}
  >
<p className='font-normal text-2xl text-center mt-4 cursor-pointer hover:ml-1'>Get Started</p>
<div className='h-10 w-10 bg-black rounded-full ml-auto mr-3 ml-auto mt-3 cursor-pointer get-started-arrow-kemet hover:mr-4'>

  <img src="/images/home/arrow-right-circle-svgrepo-com.svg" alt="get-started-arrow-kemet" />

</div>

  </div>

</div>


<div className='h-[400px] w-screen bg-slate-100 relative md:pt-10 md:pb-10 md:pl-20 md:pr-20 md:pt-28'>
  {/* Create 6 copies of inner-img */}

  <p className='font-normal text-3xl'>Medicine For You, By You</p>
  <p className=' text-2xl font-thin'>Make Your Own Medicine.</p>

  <Link href={"/patients/custom/request"} className='h-10 w-48 bg-black rounded-full mt-4 text-center flex text-center items-center cursor-pointer hover:ml-2'>
      <p className='text-white text-center text-xs ml-auto'>Patients</p>

      <div className='h-8 w-8 bg-white rounded-full ml-auto mr-1 p-2'><img src="/images/home/navigation-forward-arrow-svgrepo-com.svg" alt="" /></div>

    </Link>


    <Link href={"/prescribers/custom/request"} className='h-10 w-48 bg-black rounded-full mt-4 text-center flex text-center items-center cursor-pointer hover:ml-2'>
 
      <p className='text-white text-center text-xs ml-auto'>Prescribers</p>

      <div className='h-8 w-8 bg-white rounded-full ml-auto mr-1 p-2'><img src="/images/home/navigation-forward-arrow-svgrepo-com.svg" alt="" /></div>

   
    </Link>


 
</div>


<div 
  style={{
    marginTop: `-5%`, // Random top position
    left:'10%'
  }}
className='flex w-screen justify-center'>

<div className='h-36 md:w-2/3 bg-slate-200 relative md:pt-2 md:pb-2 md:pl-5 md:pr-16 shadow-md rounded-md grid grid-cols-2'>

  <div className='h-full bg-white rounded-md'>

  </div>

  <div className='h-16 md:pl-8 pt-2 '>
    <p className='font-semibold text-sm'>Available Now</p>
    <p className='mt-2 text-zinc-400 text-xs'>Melt in your mouth tablets for <br></br>Erectile dysfunction is available NOW</p>

    <div className='h-10 w-48 bg-black rounded-full mt-4 text-center flex text-center items-center cursor-pointer hover:ml-2'>
      <p className='text-white text-center text-xs ml-auto'>Discover more</p>

      <div className='h-8 w-8 bg-white rounded-full ml-auto mr-1 p-2'><img src="/images/home/navigation-forward-arrow-svgrepo-com.svg" alt="" /></div>

    </div>

</div>


 
 </div>


</div>


<div className='h-32'></div>


<div className="w-screen h-[300px] bg-slate-200 mt-auto grid place-content-center text-3xl text-slate-300">

  
FOOTER
</div>

    </main>
  )
}
