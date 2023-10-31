"use client"
import Image from 'next/image'
import { useState, useEffect } from "react";
import ResponsiveCarousel from "@/components/Carousel";




export default function CustomRequestForm() {
  

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



  
</div>


<div className='h-screen w-screen relative md:pt-10 md:pb-10 md:pl-20 md:pr-20 md:pt-28 flex justify-center'>
    
  {/* Create 6 copies of inner-img */}

  <div className='h-full w-2/3 bg-zinc-100 rounded-md p-4 overflow-scroll'>

    <p className='text-xl font-normal text-center'>Customisation Custom Request</p>

    <div className="w-full  mt-8">

         <div className='mt-4 flex'>
         <input value="test" type="checkbox" /> 
         <p className="ml-4 font-normal text-sm">I have trouble swallowing your pill</p>

         </div>
       
         <div className='mt-4 flex'>
         <input value="test" type="checkbox"  /> 
         <p className="ml-4 font-normal text-sm">I do not want to inject my hormones and other medications</p>
         </div>


         <div className='mt-4 flex'>

         <input value="test" type="checkbox" /> 
         <p className="ml-4 font-normal text-sm">I want my medications to taste better</p>
         </div>

         <div className='mt-4 flex'>

        <input value="test" type="checkbox" /> 
        <p className="ml-4 font-normal text-sm">I want a different strength of my medication that is not commercially available.</p>
        </div>


        <div className='mt-4 flex'>

        <input value="test" type="checkbox" /> 
        <p className="ml-4 font-normal text-sm">I want my pain medications in a form that goes through my skill.</p>
        </div>

        <div className='mt-4 flex'>

        <input value="test" type="checkbox" /> 
        <p className="ml-4 font-normal text-sm">I want to combine specific strengths for my supplements.</p>
        </div>

        <div className='mt-4 flex'>

        <input value="test" type="checkbox" /> 
        <p className="ml-4 font-normal text-sm">I want help with designing my medication, so I take it regularly and adhere to them as prescribed.</p>
        </div>

        <div className='mt-4 flex'>

        <input value="test" type="checkbox" /> 
        <p className="ml-4 font-normal text-sm">I want a speedy erection.</p>
        </div>

        <div className='mt-4 flex'>

        <input value="test" type="checkbox" /> 
        <p className="ml-4 font-normal text-sm">I want a medication that is out of stock.</p>
        </div>

        <div className='mt-4 flex'>

        <input value="test" type="checkbox" /> 
        <p className="ml-4 font-normal text-sm">I want a medication that is currently out of stock.</p>
        </div>

        <div className='mt-4 flex'>

        <input value="test" type="checkbox" /> 
        <p className="ml-4 font-normal text-sm">I want to request a specific Customization of my medications.</p>
        </div>

        <div className='mt-4 flex'>

        <input value="test" type="checkbox" /> 
        <p className="ml-4 font-normal text-sm">I want to request a specific compound.</p>
        </div>

    </div>

    
   

  </div>

  </div>
    </main>
  )
}
