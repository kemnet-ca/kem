"use client"
import Image from 'next/image'
import { useState, useEffect } from "react";
import ResponsiveCarousel from "@/components/Carousel";
import Link from 'next/link';

import { PhoneInput } from 'react-international-phone';
import 'react-international-phone/style.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Cookies from 'js-cookie';


import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';


const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});


export default function CustomerDetails() {
  

const [isOpenOne, setIsOpenOne] = useState(false);
const [isOpenTwo, setIsOpenTwo] = useState(false);
const [isOpenThree, setIsOpenThree] = useState(false);

const [displayText, setDisplayText] = useState('PATIENT');
const [phone, setPhone] = useState('');
const [allSelections, setSelections] = useState([]);




const [open, setOpen] = React.useState(false);

const handleClickOpen = () => {
  setOpen(true);
};

const handleClose = () => {
  setOpen(false);
};


{/*hold all selections */}



useEffect(() => {
  const selections = Cookies.get('allSelections');

  // Check if 'allSelections' is undefined, and provide a default value if needed
  if (selections !== undefined) {
    // 'allSelections' is a string, so you can work with it here
    console.log(allSelections);

    setSelections(JSON.parse(selections))

  //  alert(selections);
  } else {
    // 'allSelections' is undefined, handle this case, e.g., provide a default value
    console.log('Cookie not found or is undefined');
  }

 
}, []);



  return (

    <>

    
   
 
    <main className="bg-white relative">

<Header />


<div className="h-[350px] w-screen bg-cover bg-center" style={{ backgroundImage: "url('/images/home/Medicines_share.jpeg')" }}>
 
 <div className="w-full h-full grid place-content-center md:px-10" style={{backgroundColor:`rgba(0,0,0,0.7)`}}>

    <p className='text-center text-white text-xl font-semibold'>WELCOME TO OUR CUSTOMIZATION CONSULT REQUEST PAGE</p>
    <p className='text-center text-white text-sm mt-4 font-normal'>PLEASE LET US KNOW HOW WE CAN ASSIST YOU WITH YOUR MEDICATION NEEDS. <br></br>CUSTOMIZE MEDICATION TO UNIQUE NEEDS AND REQUEST MEDICATION THAT ARE OUT OF STOCK AND A PHARMACIST WILL CONTACT YOU TO COMPLETE AN ASSESSMENT AND GET YOUR MEDICINES CUSTOM MADE FOR YOU.</p>

 </div>
</div>

<div className="flex w-screen justify-center px-10">

<div className='w-1/3 bg-slate-100 py-2 px-6 flex mt-8 rounded-md justify-center '>

<p className="text-md text-center font-medium text-zinc-800"> I am a patient</p>

 

  
</div>
</div>
<div className='w-screen 0 md:pb-10 md:pl-20 md:pr-20 md:pt-10 flex justify-center'>
    
  {/* Create 6 copies of inner-img */}

  

  <div className='h-[300] w-2/3 bg-slate-200 rounded-md p-4 '>




    <p className='text-xl font-medium text-center mt-10'>Enter Your Information</p>

   
    <p className='text-sm text-zinc-800 font-extralight text-center mt-2'>Provide your full information, so we can contact you to make your custom medicine for you.</p>


    <div className="w-full  mt-2 flex justify-center">
<div >
<input type="text" className='p-2 border border-zinc-300 rounded-md w-[300px]  font-light text-xs' placeholder='First Name' />

    </div>
    </div>

 

    <div className="w-full  mt-2 flex justify-center">
<div >
<input type="text" className='p-2 border border-zinc-300 rounded-md w-[300px] font-light text-xs' placeholder='Last Name' />

    </div>
    </div>

    <div className="w-full  mt-2 flex justify-center">
<div >
<input type="text" className='p-2 border border-zinc-300 rounded-md w-[300px] font-light text-xs' placeholder='Postal Code' />

    </div>
    </div>


    <div className="w-full  mt-2 flex justify-center">
<div >
<input type="text" className='p-2 border border-zinc-300 rounded-md w-[300px] font-light text-xs' placeholder='Phone Number' />

    </div>
    </div>

  
  

  


    <div className="w-full flex mt-8 ">

      <p className='font-medium text-sm'>Selected choices for consult</p>


</div>

    <div className="w-full">

      <div className="w-full p-6 bg-white rounded-xl mt-4 ">

      {allSelections.map((value: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | React.PromiseLikeOfReactNode | null | undefined, index: React.Key | null | undefined) => (
           

            <p key={index} className='text-sm font-normal mt-4'>{value}</p>
          ))}

       

      



      </div>
    </div>

    <div className="w-full  mt-4 flex justify-center">

  
        <Link href={"../../patients/pharmacies"} className='text-center text-sm text-white font-light bg-black rounded-3xl flex items-center justify-center px-6 py-2 hover:mt-2 ml-[20px] mr-6'>Submit</Link>




</div>

</div>

</div>
<Footer />



    </main>

    </>
  )
}
