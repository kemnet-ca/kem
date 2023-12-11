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
import ParticipatingPharms from '@/components/ParticipatingPharms';





export default function CustomerDetails() {
  


const [allSelections, setSelections] = useState([]);


const [selectedValues, setSelectedValues] = useState<string[]>([]);


const [additionalInfo, setAdditionalInformation] = useState("");
const router = useRouter();

//function to go back to previous page

function goBack()
{
  router.back();
}

const [firstName, setFirstName]= useState("");
const [lastName, setLastName]= useState("");
const [licensee, setLicensee]= useState("");






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


function addAllDataToCookies(){

  //save items to cookies
  Cookies.set('firstName', firstName);
  Cookies.set('lastName', lastName);
  Cookies.set('licensee', licensee);

 

 if(licensee == "" || licensee == null ||lastName == "" || lastName == null || firstName == "" || firstName == null){
    alert("Please completely fill every field for all your information")
  }
 

  else{
    //alert(selectedValues)

  router.push("../../prescribers/pharmacies/list")
  }

 

 

  


}



  return (

    <>

    
   
 
    <main className="bg-white relative">

<Navbar />


<div className="h-[350px] w-screen bg-cover bg-center mt-8" style={{ backgroundImage: "url('/images/home/Medicines_share.jpeg')" }}>
 
 <div className="w-full h-full grid place-content-center md:px-10" style={{backgroundColor:`rgba(0,0,0,0.7)`}}>
 <div className='w-8 absolute h-8 bg-white  rounded-full md:mt-20 ml-10 hidden md:block cursor-pointer hover:ml-2 grid place-content-center p-1'>
  <img onClick={goBack} src="/images/home/arrow-back-simple-svgrepo-com.svg" alt="arrow-back-kemnet" />
    
    </div>

    <p className='text-center text-white text-xl font-semibold mt-6'>Welcome to your Medication Customization Consultation Request page.</p>
    <p className='text-center text-white text-sm mt-4 font-normal'>Please let us know how we can assist with your medication needs. You can customize<br></br> medications to meet your unique requirements and request medications that are currently out<br></br> of stock. A pharmacist will contact you to conduct an assessment and arrange for your<br></br> medicines to be custom-made for you.
</p>

 </div>
</div>

<div className="flex w-screen justify-center px-10">

<div className='w-1/3 bg-slate-100 py-2 px-6 flex mt-8 rounded-md justify-center '>

<p className="text-md text-center font-medium  text-zinc-800">I am a licensed prescriber</p>

 

  
</div>
</div>
<div className='w-screen 0 md:pb-10 md:pl-20 md:pr-20 md:pt-10 flex justify-center'>
    
  {/* Create 6 copies of inner-img */}

  

  <div className='h-[300] w-2/3 bg-slate-200 rounded-md p-4 '>




    <p className='text-xl font-medium text-center mt-10'>Enter Your Prescriber Information</p>

   
    <p className='text-sm text-zinc-800 font-extralight text-center mt-2'>Provide your prescriber information.</p>


    <div className="w-full  mt-2 flex justify-center">
<div >
<input onChange={(e) => setFirstName(e.target.value)} type="text" className='p-2 border border-zinc-300 rounded-md w-[300px]  font-light text-xs' placeholder='First Name' />

    </div>
    </div>

 

    <div className="w-full  mt-2 flex justify-center">
<div >
<input onChange={(e) => setLastName(e.target.value)} type="text" className='p-2 border border-zinc-300 rounded-md w-[300px] font-light text-xs' placeholder='Last Name' />

    </div>
    </div>

    <div className="w-full  mt-2 flex justify-center">
<div >
<input onChange={(e) => setLicensee(e.target.value)} type="text" className='p-2 border border-zinc-300 rounded-md w-[300px] font-light text-xs' placeholder='License Number' />

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

{additionalInfo}





</div>
</div>

    <div className="w-full  mt-4 flex justify-center">

  
        <button onClick={addAllDataToCookies}  className='text-center text-sm text-white font-light bg-black rounded-3xl flex items-center justify-center px-6 py-2 hover:mt-2 ml-[20px] mr-6'>Submit</button>




</div>

</div>

</div>

<ParticipatingPharms />
<Footer />



    </main>

    </>
  )
}
