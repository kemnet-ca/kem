"use client"
import Image from 'next/image'
import { useState, useEffect } from "react";
import ResponsiveCarousel from "@/components/Carousel";
import Link from 'next/link';
import Tooltip from '@mui/material/Tooltip';
import Fade from '@mui/material/Fade';
import Header from '@/components/Header';




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

<Header />


<div className="h-[350px] w-screen bg-cover bg-center" style={{ backgroundImage: "url('/images/home/Medicines_share.jpeg')" }}>
 
 <div className="w-full h-full grid place-content-center md:px-10" style={{backgroundColor:`rgba(0,0,0,0.7)`}}>

    <p className='text-center text-white text-xl font-semibold mt-6'>WELCOME TO OUR CUSTOMIZATION CONSULT REQUEST PAGE</p>
    <p className='text-center text-white text-sm mt-4 font-normal'>PLEASE LET US KNOW HOW WE CAN ASSIST YOU WITH YOUR MEDICATION NEEDS. <br></br>CUSTOMIZE MEDICATION TO UNIQUE NEEDS AND REQUEST MEDICATION THAT ARE OUT OF STOCK AND A PHARMACIST WILL CONTACT YOU TO COMPLETE AN ASSESSMENT AND GET YOUR MEDICINES CUSTOM MADE FOR YOU.</p>

 </div>
</div>


<div className='w-screen 0 md:pb-10 md:pl-20 md:pr-20 md:pt-10 flex justify-center'>
    
  {/* Create 6 copies of inner-img */}

  

  <div className='h-[850px] w-2/3 bg-slate-100 rounded-md p-4 overflow-scroll'>




    <p className='text-xl font-normal text-center mt-10'>Customisation Custom Request</p>



    <div className="w-full  mt-8">

         <div className='mt-4 flex'>
         <input value="test" type="checkbox" /> 
         <p className="ml-4 font-normal text-sm flex">I have trouble swallowing your pill 
         

         <Tooltip  TransitionComponent={Fade}
  TransitionProps={{ timeout: 600 }} title="This is a brief summary of what this option entails" arrow>
         <span className='ml-2 '><img className='h-[25px] w-[25px] mt-[-2px] cursor-pointer' src="/images/home/info-circle-svgrepo-com.svg" alt="info-circle" /></span>
       
    </Tooltip>
         
         </p>

         </div>
       
         <div className='mt-4 flex'>
         <input value="test" type="checkbox"  /> 
         <p className="ml-4 font-normal text-sm flex">I do not want to inject my hormones and other medications 
         <Tooltip  TransitionComponent={Fade}
  TransitionProps={{ timeout: 600 }} title="This is a brief summary of what this option entails" arrow>
         <span className='ml-2 '><img className='h-[25px] w-[25px] mt-[-2px] cursor-pointer' src="/images/home/info-circle-svgrepo-com.svg" alt="info-circle" /></span>
         </Tooltip>
         </p>
         </div>


         <div className='mt-4 flex'>

         <input value="test" type="checkbox" /> 
         <p className="ml-4 font-normal text-sm flex">I want my medications to taste better 

         <Tooltip  TransitionComponent={Fade}
  TransitionProps={{ timeout: 600 }} title="This is a brief summary of what this option entails" arrow>
         <span className='ml-2 '><img className='h-[25px] w-[25px] mt-[-2px] cursor-pointer' src="/images/home/info-circle-svgrepo-com.svg" alt="info-circle" /></span>
         </Tooltip>
         </p>
         </div>

         <div className='mt-4 flex'>

        <input value="test" type="checkbox" /> 
        <p className="ml-4 font-normal text-sm flex">I want a different strength of my medication that is not commercially available. 
        
        <Tooltip  TransitionComponent={Fade}
  TransitionProps={{ timeout: 600 }} title="This is a brief summary of what this option entails" arrow>
        <span className='ml-2 '><img className='h-[25px] w-[25px] mt-[-2px] cursor-pointer' src="/images/home/info-circle-svgrepo-com.svg" alt="info-circle" /></span>
        </Tooltip>
        </p>
        </div>


        <div className='mt-4 flex'>

        <input value="test" type="checkbox" /> 
        <p className="ml-4 font-normal text-sm flex">I want my pain medications in a form that goes through my skill. 
        <Tooltip  TransitionComponent={Fade}
  TransitionProps={{ timeout: 600 }} title="This is a brief summary of what this option entails" arrow>
        <span className='ml-2 '><img className='h-[25px] w-[25px] mt-[-2px] cursor-pointer' src="/images/home/info-circle-svgrepo-com.svg" alt="info-circle" /></span>
        </Tooltip>
        </p>
        </div>

        <div className='mt-4 flex'>

        <input value="test" type="checkbox" /> 
        <p className="ml-4 font-normal text-sm flex">I want to combine specific strengths for my supplements. 
        
        <Tooltip  TransitionComponent={Fade}
  TransitionProps={{ timeout: 600 }} title="This is a brief summary of what this option entails" arrow>
        <span className='ml-2 '><img className='h-[25px] w-[25px] mt-[-2px] cursor-pointer' src="/images/home/info-circle-svgrepo-com.svg" alt="info-circle" /></span>
        </Tooltip>
        </p>
        </div>

        <div className='mt-4 flex'>

        <input value="test" type="checkbox" /> 
        <p className="ml-4 font-normal text-sm flex">I want help with designing my medication, so I take it regularly and adhere to them as prescribed. 
        
        <Tooltip  TransitionComponent={Fade}
  TransitionProps={{ timeout: 600 }} title="This is a brief summary of what this option entails" arrow>
        <span className='ml-2 '><img className='h-[25px] w-[25px] mt-[-2px] cursor-pointer' src="/images/home/info-circle-svgrepo-com.svg" alt="info-circle" /></span>
        </Tooltip>
        </p>
        </div>

        <div className='mt-4 flex'>

        <input value="test" type="checkbox" /> 
        <p className="ml-4 font-normal text-sm flex">I want a speedy erection.
        
        <Tooltip  TransitionComponent={Fade}
  TransitionProps={{ timeout: 600 }} title="This is a brief summary of what this option entails" arrow>
         <span className='ml-2 '><img className='h-[25px] w-[25px] mt-[-2px] cursor-pointer' src="/images/home/info-circle-svgrepo-com.svg" alt="info-circle" /></span>
                 </Tooltip>
         </p>
        </div>

        <div className='mt-4 flex'>

        <input value="test" type="checkbox" /> 
        <p className="ml-4 font-normal text-sm flex">I want a medication that is out of stock. 
        
        <Tooltip  TransitionComponent={Fade}
  TransitionProps={{ timeout: 600 }} title="This is a brief summary of what this option entails" arrow>
        <span className='ml-2 '><img className='h-[25px] w-[25px] mt-[-2px] cursor-pointer' src="/images/home/info-circle-svgrepo-com.svg" alt="info-circle" /></span>
        </Tooltip>
        </p>
        </div>

        <div className='mt-4 flex'>

        <input value="test" type="checkbox" /> 
        <p className="ml-4 font-normal text-sm flex">I want a medication that is currently out of stock. 
        
        <Tooltip  TransitionComponent={Fade}
  TransitionProps={{ timeout: 600 }} title="This is a brief summary of what this option entails" arrow>
        <span className='ml-2 '><img className='h-[25px] w-[25px] mt-[-2px] cursor-pointer' src="/images/home/info-circle-svgrepo-com.svg" alt="info-circle" /></span>
        </Tooltip>
        </p>
        </div>

        <div className='mt-4 flex'>

        <input value="test" type="checkbox" /> 
        <p className="ml-4 font-normal text-sm flex">I want to request a specific Customization of my medications. 
        

        <Tooltip  TransitionComponent={Fade}
  TransitionProps={{ timeout: 600 }} title="This is a brief summary of what this option entails" arrow>
        <span className='ml-2 '><img className='h-[25px] w-[25px] mt-[-2px] cursor-pointer' src="/images/home/info-circle-svgrepo-com.svg" alt="info-circle" /></span>
        
        </Tooltip>
        </p>
        </div>

        <div className='mt-4 flex'>


        <input value="test" type="checkbox" /> 
        <p className="ml-4 font-normal text-sm flex">I want to request a specific compound. 
        
        <Tooltip  TransitionComponent={Fade}
  TransitionProps={{ timeout: 600 }} title="This is a brief summary of what this option entails" arrow>
        <span className='ml-2 '><img className='h-[25px] w-[25px] mt-[-2px] cursor-pointer' src="/images/home/info-circle-svgrepo-com.svg" alt="info-circle" /></span>
        </Tooltip>
        </p>
        </div>

    </div>

<p className='text-sm text-zinc-800 font-semibold mt-10'>Additional information</p>
    
    <div className='w-full flex justify-center mt-2'>
<textarea className='border border-zinc-300 text-sm text-zinc-300 p-4 w-[500px] rounded-md text-light'>
    Additional information
  </textarea>
</div>

<div className='w-full flex justify-center mt-2'>

    <Link href="../../patients/data/postal_code" className='text-center text-sm text-white font-light bg-black rounded-3xl py-2 px-6 hover:mt-2'>Submit</Link>
</div>

  </div>



  </div>




    </main>
  )
}
