"use client"
import Image from 'next/image'
import { useState, useEffect } from "react";
import ResponsiveCarousel from "@/components/Carousel";
import Link from 'next/link';
import Footer from '@/components/Footer';
import Header from '@/components/Header';


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


export default function Pharmacies() {
  

const [isOpenOne, setIsOpenOne] = useState(false);
const [isOpenTwo, setIsOpenTwo] = useState(false);
const [isOpenThree, setIsOpenThree] = useState(false);

const [displayText, setDisplayText] = useState('PATIENT');
const [isChecked, setIsChecked] = useState(false);

const [open, setOpen] = React.useState(false);

const handleClickOpen = () => {
  setOpen(true);
};

const handleClose = () => {
  setOpen(false);
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

    <>
    {/**popup to confirm faxing and emailing */}


<React.Fragment>
     
     <Dialog
       open={open}
       TransitionComponent={Transition}
       keepMounted
       onClose={handleClose}
       aria-describedby="alert-dialog-slide-description"
     >
       <DialogTitle className="font-medium text-sm">{"Confirm To Send Your Request To A Subscriber"}</DialogTitle>
       <DialogContent>
         <p id="alert-dialog-slide-description " className="text-zinc-600 text-sm font-light">
          If you agree, your information and consult requests which you have submitted will be sent to a prescriber by fax and email.
         </p>
       </DialogContent>
       <DialogActions>
         <p className='text-zinc-400 cursor-pointer mr-10 hover:mb-1' onClick={handleClose}>Disagree</p>
         <Link className='text-zinc-700 cursor-pointer hover:mb-1' href={"../../patients/success"}>Agree</Link>
       </DialogActions>
     </Dialog>
   </React.Fragment>

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

  

  <div className='h-[300] w-2/3 bg-slate-200 rounded-md p-4 '>




    <p className='text-xl font-medium text-center    mt-10'>Nearby Pharmacies</p>

    <p className='text-sm text-zinc-500 text-center  mt-2 font-light'>Select Which Pharmacy You Would Want</p>

    <div className="w-full  mt-4 flex justify-center ">

<input type="text" className='p-2 border border-zinc-400 rounded-xl w-[200px] bg-transparent text-xs text-zinc-700' placeholder='Search By Postal Code' />

<Link href="../../patients/pharmacies" className='text-center text-sm text-white font-light bg-black rounded-3xl flex items-center justify-center px-6 hover:mt-2 ml-[20px] mr-6'>Submit</Link>




</div>





   <div className='w-full flex justify-center  ml-6'>
   <div className="w-full grid grid-cols-2 grid-gap-8 mt-4 items-center">

<div className=' w-full mt-6 '>

<label>
          <input
            type="radio"
            name="options"
            value="option2"
          //  checked={this.state.selectedOption === 'option2'}
         //   onChange={this.handleOptionChange}
          />
          <Link className='ml-4 font-medium text-sm text-zinc-800 hover:text-teal-500' href={"https://www.google.com/maps/dir//Hamptons+Pharmacy%2FRemedy's+RX.+Edmonton+canada/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x539f8bec5f9eabc7:0x76fba45b9d4bc801?sa=X&ved=2ahUKEwiU_-jL46eCAxX5rYkEHbUWDwQQ9Rd6BAg4EAA&hl=en"}>Hamptons Pharmacy/Remedy&apos;s RX. Edmonton <br></br><span className='text-xs font-extralight text-zinc-600 hover:text-teal-500'>5603 199 St NW, Edmonton, AB T6M 0M8,</span></Link> 
          <span style={checkboxStyle}></span>
        </label>


</div>

<div className=' w-full mt-6 '>

<label>
          <input
            type="radio"
            name="options"
            value="option2"
          //  checked={this.state.selectedOption === 'option2'}
         //   onChange={this.handleOptionChange}
          />
          <Link href={"https://www.google.com/maps/dir//synergy+wellness+center+sherwood+park/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x53a03d8871087e8f:0x62ebd32a8cbafeb7?sa=X&ved=2ahUKEwjdhK2T6aeCAxXmrokEHd1-CFAQ9Rd6BAg5EAA"} className='ml-4 font-medium text-sm text-zinc-800 hover:text-teal-500'>Synergy Centre <br></br><span className='text-xs font-extralight text-zinc-600'>501 Bethel Dr, Sherwood Park, AB T8H 0N2, Canada</span></Link> 
          <span style={checkboxStyle}></span>
        </label>


</div>



<div className=' w-full mt-6 '>

<label>
          <input
            type="radio"
            name="options"
            value="option2"
          //  checked={this.state.selectedOption === 'option2'}
         //   onChange={this.handleOptionChange}
          />
          <span className='ml-4 font-medium text-sm text-zinc-800'>Eastwood Pharmacy <br></br><span className='text-xs font-extralight text-zinc-600'>CareRx Edmonton Compounding, 9509 156 St NW M5, Edmonton, AB T5P 4J5, Canada</span></span> 
          <span style={checkboxStyle}></span>
        </label>


</div>

<div className=' w-full mt-6 '>

<label>
          <input
            type="radio"
            name="options"
            value="option2"
          //  checked={this.state.selectedOption === 'option2'}
         //   onChange={this.handleOptionChange}
          />
          <span className='ml-4 font-medium text-sm text-zinc-800'>Shoppers Drug Mart #381 <br></br><span className='text-xs font-extralight text-zinc-600'>CareRx Edmonton Compounding, 9509 156 St NW M5, Edmonton, AB T5P 4J5, Canada</span></span> 
          <span style={checkboxStyle}></span>
        </label>


</div>

</div>


    </div>       
       
       
       
       
         <div className="mt-4 flex justify-center">

         <button onClick={handleClickOpen} className='text-center text-sm text-white font-light bg-black rounded-3xl flex items-center justify-center px-6 hover:mt-2 ml-[20px] w-32 h-10 mr-6'>Submit</button>

         </div>





</div>

</div>


<Footer />

    </main>

    </>
  )
}
