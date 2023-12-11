"use client"
import Image from 'next/image'
import { useState, useEffect } from "react";
import ResponsiveCarousel from "@/components/Carousel";
import Link from 'next/link';

import { PhoneInput } from 'react-international-phone';
import 'react-international-phone/style.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Cookies from 'js-cookie';

import { useRouter } from 'next/navigation';
import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';
import ParticipatingPharms from '@/components/ParticipatingPharms';


const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});


export default function CustomerDetails() {
  


const [allSelections, setSelections] = useState([]);
const [additionalInformation, setAdditionalInformation] = useState("");

const [firstName, setFirstName]= useState("");
const [lastName, setLastName]= useState("");
const [postal, setPostal]= useState("");
const [phone, setPhone]= useState("");





const [open, setOpen] = React.useState(false);

const router = useRouter();


function goBack()
{
  router.back();
}



{/*hold all selections */}



useEffect(() => {
  const selections = Cookies.get('allSelections');
  const addedDetails = Cookies.get('additionalInformation');
  


  if(addedDetails !==undefined){

     // 'allSelections' is a string, so you can work with it here
     console.log(allSelections);

     setAdditionalInformation(addedDetails);

  }

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


{/*add all selected consult requests to cookies */}
function addAllDataToCookies(){

  //save items to cookies
  Cookies.set('firstName', firstName);
  Cookies.set('lastName', lastName);
  Cookies.set('postal', postal);
  Cookies.set('phone', phone);

 
  if(phone == "" || phone == null || postal == "" || postal == null ||lastName == "" || lastName == null || firstName == "" || firstName == null){
    alert("Please completely fill every field for all your information")
  }
 

  else{
 

  //alert(selectedValues)

  router.push('../../patients/pharmacies')
  }


}


  return (

    <>

    
   
 
    <main className="bg-white relative">

<Navbar />


<div className="h-[350px] w-screen bg-cover bg-center md:pt-[100px]" style={{ backgroundImage: "url('/images/home/Medicines_share.jpeg')" }}>
 
 <div className="w-full h-full grid place-content-center md:px-10" style={{backgroundColor:`rgba(0,0,0,0.7)`}}>
 <div className='w-8 absolute h-8 bg-white  rounded-full md:mt-20 ml-10 hidden md:block cursor-pointer hover:mr-2 grid place-content-center p-1'>
  <img onClick={goBack} src="/images/home/arrow-back-simple-svgrepo-com.svg" alt="arrow-back-kemnet" />
    
    </div>

    <p className='text-center text-white text-xl font-semibold mt-6'>Welcome to your Medication Customization Consultation Request page.</p>
    <p className='text-center text-white text-sm mt-4 font-normal'>Please let us know how we can assist with your medication needs. You can customize<br></br> medications to meet your unique requirements and request medications that are currently out<br></br> of stock. A pharmacist will contact you to conduct an assessment and arrange for your<br></br> medicines to be custom-made for you.
</p>
 </div>
</div>

<div className="flex w-screen justify-center md:px-10 px-2">

<div className='md:w-1/3 w-full bg-slate-100 py-2 px-6 flex mt-8 rounded-md justify-center '>

<p className="text-md text-center font-medium text-zinc-800"> I am a patient</p>

 

  
</div>
</div>
<div className='w-screen 0 md:pb-10 md:pl-20 md:pr-20 md:pt-10 px-2 flex justify-center'>
    
  {/* Create 6 copies of inner-img */}

  

  <div className='h-[300] md:w-2/3 w-full bg-slate-200 rounded-md p-4 mt-4 '>




    <p className='text-xl font-medium text-center md:mt-10 mt-2'>Enter Your Information</p>

   
    <p className='text-sm text-zinc-800 font-extralight text-center mt-2'>Provide your full information, so we can contact you to make your custom medicine for you.</p>


    <div className="w-full  mt-2 flex justify-center">
<div >
<input type="text"  onChange={(e) => setFirstName(e.target.value)} className='p-2 border border-zinc-300 rounded-md w-[300px]  font-light text-xs' placeholder='First Name' />

    </div>
    </div>

 

    <div className="w-full  mt-2 flex justify-center">
<div >
<input type="text" onChange={(e) => setLastName(e.target.value)}  className='p-2 border border-zinc-300 rounded-md w-[300px] font-light text-xs' placeholder='Last Name' />

    </div>
    </div>

    <div className="w-full  mt-2 flex justify-center">
<div >
<input type="text" onChange={(e) => setPostal(e.target.value)}  className='p-2 border border-zinc-300 rounded-md w-[300px] font-light text-xs' placeholder='Postal Code' />

    </div>
    </div>


    <div className="w-full  mt-2 flex justify-center">
<div >
<input type="text" onChange={(e) => setPhone(e.target.value)}  className='p-2 border border-zinc-300 rounded-md w-[300px] font-light text-xs' placeholder='Phone Number' />

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






    <div className="w-full flex mt-8 ">

<p className='font-medium text-sm'>Additional information</p>


</div>

<div className="w-full">

<div className="w-full p-6 bg-white rounded-xl mt-4 text-sm font-light ">

{additionalInformation}





</div>
</div>

    <div className="w-full  mt-4 flex justify-center">

  
        <button onClick={addAllDataToCookies} className='text-center text-sm text-white font-light bg-black rounded-3xl flex items-center justify-center px-6 py-2 hover:mt-2 ml-[20px] mr-6'>Submit</button>




</div>

</div>

</div>

<ParticipatingPharms />
<Footer />



    </main>

    </>
  )
}
