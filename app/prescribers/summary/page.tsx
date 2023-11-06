"use client"
import Image from 'next/image'
import { useState, useEffect } from "react";
import ResponsiveCarousel from "@/components/Carousel";
import Link from 'next/link';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
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


export default function Summary() {
  


const [isChecked, setIsChecked] = useState(false);
const [allSelections, setSelections] = useState([]);
const [open, setOpen] = React.useState(false);

const handleClickOpen = () => {
  setOpen(true);
};

const handleClose = () => {
  setOpen(false);
};




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
          If you agree, your information and consult requests which you have submitted will be sent to <b>CareRx Pharmacy</b> by fax and email.
         </p>

         
       </DialogContent>
       <DialogActions>
         <p className='text-zinc-400 cursor-pointer mr-10 hover:mb-1' onClick={handleClose}>Disagree</p>
         <Link className='text-zinc-700 cursor-pointer hover:mb-1' href={"../../prescribers/success"}>Agree</Link>
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



    <p className='text-center text-white text-xl font-semibold mt-10'>WELCOME TO OUR CUSTOMIZATION CONSULT REQUEST PAGE</p>
    <p className='text-center text-white text-sm mt-4 font-normal'>PLEASE LET US KNOW HOW WE CAN ASSIST YOU WITH YOUR MEDICATION NEEDS. <br></br>CUSTOMIZE MEDICATION TO UNIQUE NEEDS AND REQUEST MEDICATION THAT ARE OUT OF STOCK AND A PHARMACIST WILL CONTACT YOU TO COMPLETE AN ASSESSMENT AND GET YOUR MEDICINES CUSTOM MADE FOR YOU.</p>

 </div>
</div>


<div className='w-screen 0 md:pb-10 md:pl-20 md:pr-20 md:pt-10 flex justify-center'>
    
  {/* Create 6 copies of inner-img */}

  

  <div className='h-[300] w-2/3 bg-slate-200 rounded-md p-4 '>




    <p className='text-xl font-medium text-center    mt-10'>Summary</p>

    

    <div className="w-full flex mt-8 ">

<p className='font-medium text-sm'>Your patient&apos;s information</p>


</div>
    <div className="w-full bg-white p-4 rounded-md mt-4">

        <p className="mt-4 font-light text-sm"><span className="text-zinc-600">Patient&apos;s First Name:</span> Ebube </p>
        <p className="mt-4 font-light text-sm"><span className="text-zinc-600">Patient&apos;s First Name:</span> Ebube </p>
        <p className="mt-4 font-light text-sm"><span className="text-zinc-600">Patient&apos;s Postal Code:</span> P0V ER4 </p>
        <p className="mt-4 font-light text-sm"><span className="text-zinc-600">Patient&apos;s Phone Number:</span> +1 099 901 871 </p>
       

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
