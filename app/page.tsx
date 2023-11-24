"use client"
import Image from 'next/image'
import { useState, useEffect } from "react";
import ResponsiveCarousel from "@/components/Carousel";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Link from 'next/link';
import Tooltip from '@mui/material/Tooltip';
import Fade from '@mui/material/Fade';
import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';
import CookieConsent from "react-cookie-consent";




export default function Home() {
  

const [isOpenOne, setIsOpenOne] = useState(false);
const [isOpenTwo, setIsOpenTwo] = useState(false);
const [isOpenThree, setIsOpenThree] = useState(false);

const [displayText, setDisplayText] = useState('Patient');
const [displayTextLink, setDisplayTextLink] = useState('patients/custom/request');




const router = useRouter();

function switchScreens(){

    

     
}

useEffect(() => {
  const interval = setInterval(() => {

 

    setDisplayText((currentText) => (currentText == 'Patient' ? 'Prescriber' : 'Patient'));
 

    console.log(displayText)
  }, 6000);

  return () => {
    clearInterval(interval);
  };
}, []);


 

  return (
    <main className="bg-white relative">

<Header />

<div className='h-screen w-screen bg-slate-100 relative md:pt-10 md:pb-10 md:pl-20 md:pr-20'>
  {/* Create 6 copies of inner-img */}

  <div className='text-black justify-center font-medium text-2xl mt-40 flex'>

    {/* change link of item, depending on text */}
    <p className='mt-2'>I&apos;m a</p>  <Link href={displayText=="Prescriber"?"/prescribers/custom/request":"patients/custom/request"} className='p-2 rounded-md bg-white w-60 ml-8  text-center cursor-pointer' onClick={switchScreens}>{displayText}</Link>

   
    
    
  </div>
  <img
  src="/images/home/curved-arrow-svgrepo-com.svg"
  alt=""
  className="w-32 h-16"
  style={{
    marginLeft: "36%",
    marginTop:`-2%`,
    transform: "rotate(45deg)", // Rotate the image itself by 15 degrees
  }}
/>


  <div className='text-black justify-center  text-2xl mt-8 '>

  <p className='text-xl text-center font-medium'>Make Your Medicine</p>
  <p className='text-sm text-center text-zinc-600 mt-2 font-extralight'>Kemet Makes Medicines For You, By You</p>
  </div>


  <Tooltip  TransitionComponent={Fade}
  TransitionProps={{ timeout: 600 }} title="let us change from the logo with tagline to just the logo with no tagline" arrow
  componentsProps={{
    tooltip: {
      sx: {
        bgcolor: 'common.white',
        color: 'common.black',
        '& .MuiTooltip-arrow': {
          color: 'common.white',
        },
      },
    },
  }}
  >
  <div
     
     className='h-16 w-32 rounded-md bg-green-300 inner-img absolute '
     style={{
       top: `11%`, // Random top position
      right:'8%'
     }}
   ></div>

   </Tooltip>

<Tooltip  TransitionComponent={Fade}
  TransitionProps={{ timeout: 600 }} title="let us change from the logo with tagline to just the logo with no tagline" arrow
  componentsProps={{
    tooltip: {
      sx: {
        bgcolor: 'common.white',
        color: 'common.black',
        '& .MuiTooltip-arrow': {
          color: 'common.white',
        },
      },
    },
  }}
  >

<div

     
     className='h-16 w-32 rounded-md bg-red-400 inner-img absolute '
     style={{
       top: `33%`, // Random top position
      right:'4%'
     }}
   >


   </div>

</Tooltip>

{
  //bg-yellow-box
}

<Tooltip  TransitionComponent={Fade}
  TransitionProps={{ timeout: 600 }} title="let us change from the logo with tagline to just the logo with no tagline" arrow
  componentsProps={{
    tooltip: {
      sx: {
        bgcolor: 'common.white',
        color: 'common.black',
        '& .MuiTooltip-arrow': {
          color: 'common.white',
        },
      },
    },
  }}
  >
<div
    
    

     className='h-16 w-32 rounded-md bg-yellow-400 inner-img absolute cursor-pointer bg-yellow -box cursor-pointer'
     style={{
       top: `80%`, // Random top position
      right:'6%'
     }}
   >





   </div>

</Tooltip>
   {
  //bg-orange-box
}


<Tooltip  TransitionComponent={Fade}
  TransitionProps={{ timeout: 600 }} title="let us change from the logo with tagline to just the logo with no tagline" arrow
  componentsProps={{
    tooltip: {
      sx: {
        bgcolor: 'common.white',
        color: 'common.black',
        '& .MuiTooltip-arrow': {
          color: 'common.white',
        },
      },
    },
  }}
  >
  <div
      
     className='h-16 w-32 rounded-md bg-orange-400 inner-img absolute cursor-pointer '
     style={{
       top: `70%`, // Random top position
      left:'35%',

     }}
   >



   </div>

</Tooltip>

   {
  //bg-teal-box
}


<Tooltip  TransitionComponent={Fade}
  TransitionProps={{ timeout: 600 }} title="let us change from the logo with tagline to just the logo with no tagline" arrow
  componentsProps={{
    tooltip: {
      sx: {
        bgcolor: 'common.white',
        color: 'common.black',
        '& .MuiTooltip-arrow': {
          color: 'common.white',
        },
      },
    },
  }}
  >
    <div


     
     className='h-16 w-32 rounded-md bg-teal-300 inner-img absolute cursor-pointer'
     style={{
       top: `25%`, // Random top position
      left:'20%'
     }}
   >



   </div>
</Tooltip>

   <Tooltip  TransitionComponent={Fade}
  TransitionProps={{ timeout: 600 }} title="let us change from the logo with tagline to just the logo with no tagline" arrow
  componentsProps={{
    tooltip: {
      sx: {
        bgcolor: 'common.white',
        color: 'common.black',
        '& .MuiTooltip-arrow': {
          color: 'common.white',
        },
      },
    },
  }}
  >

    
  <div
     
     className='h-16 w-32 rounded-md bg-blue-600 inner-img absolute custom-tooltip cursor-pointer '
     style={{
       top: `55%`, // Random top position
      left:'8%'
     }}
   ></div>

   </Tooltip>

   <Tooltip  TransitionComponent={Fade}
  TransitionProps={{ timeout: 600 }} title="let us change from the logo with tagline to just the logo with no tagline" arrow
  componentsProps={{
    tooltip: {
      sx: {
        bgcolor: 'common.white',
        color: 'common.black',
        '& .MuiTooltip-arrow': {
          color: 'common.white',
        },
      },
    },
  }}
  >

    <div
     
      className='h-16 w-32 rounded-md bg-brown-300 inner-img absolute '
      style={{
        top: `15%`, // Random top position
         // Random left position
      }}
    ></div>
    </Tooltip>

    

    <Tooltip  TransitionComponent={Fade}
  TransitionProps={{ timeout: 600 }} title="let us change from the logo with tagline to just the logo with no tagline" arrow
  componentsProps={{
    tooltip: {
      sx: {
        bgcolor: 'common.white',
        color: 'common.black',
        '& .MuiTooltip-arrow': {
          color: 'common.white',
        },
      },
    },
  }}
  >
<div
     
     className='h-16 w-32 rounded-md bg-green-600 inner-img absolute '
     style={{
       top: `10%`, // Random top position
       left:'10%'
     }}
   ></div>
</Tooltip>
</div>


<div 
  style={{
    marginTop: `-5%`, // Random top position
    left:'10%'
  }}
className='flex w-screen justify-center'>

<div className='h-40 md:w-2/3 bg-slate-200 relative md:pt-2 md:pb-2 md:pl-5 md:pr-16 shadow-md rounded-md grid grid-cols-2'>

  <div className='h-full bg-white rounded-md'>

  </div>

  <div className='h-16 md:pl-8 pt-2 '>
    <p className='font-medium text-sm'>Shortage Resolution </p>
    <p className='mt-2 text-zinc-600 text-xs font-extralight'>We&apos;ve got you covered. Access affordable solutions to meet your patients&apos; immediate medication needs with confidence and without delay.</p>

    <div className='h-10 w-48 bg-black rounded-full mt-4 text-center flex text-center items-center cursor-pointer hover:ml-2'>
      <p className='text-white text-center text-xs ml-auto font-extralight'>Meet A Prescriber</p>

      <div className='h-8 w-8 bg-white rounded-full ml-auto mr-1 p-2'><img src="/images/home/navigation-forward-arrow-svgrepo-com.svg" alt="" /></div>

    </div>

</div>


 
 </div>


</div>

{
  //first feature section
}

<div className=' h-48 w-screen mt-16 md:px-20  items-center '>

 <div className='md:px-40 h-full w-full inner-padding flex'>

 <div className="bg-teal-300 h-full w-80 rounded-md left-sub-section">


</div>

<div className='right-sub-section md:px-10 py-4 '>

  <p className="text-xl font-medium">Make Your Medicine</p>

  <p className="text-sm text-zinc-600 mt-2 font-extralight">Do you want to custom make your medications to suit your unique body?</p>
  <p className="text-sm text-zinc-600 mt-2 font-extralight">Do you need a medication that is currently not available?</p>

  <div className='h-10 w-48 bg-black rounded-full mt-4 text-center flex text-center items-center cursor-pointer hover:ml-2'>
      <Link href={"/options"} className='text-white text-center text-xs ml-auto font-extralight'>Ask A Pharmacist</Link>

      <div className='h-8 w-8 bg-white rounded-full ml-auto mr-1 p-2'><img src="/images/home/navigation-forward-arrow-svgrepo-com.svg" alt="" /></div>

    </div>

</div>

 </div>

</div>


{
  //second feature section
}

<div className=' h-48 w-screen mt-16 md:px-20  items-center  hidden'>

 <div className='md:px-40 h-full w-full inner-padding flex'>



<div className='right-sub-section  py-4 '>

  <p className="md:text-xl text-sm font-medium">Make Your Facility <br></br> To Make Your Medicine</p>

  <p className="md:text-sm text-xs text-zinc-600 mt-2 font-extralight">Lorem ipseum is simply the dummy text of the printing and typesetting industry.</p>
 

  <div className='h-10 w-48 bg-black rounded-full mt-4 text-center flex text-center items-center cursor-pointer hover:ml-2'>
      <p className='text-white text-center text-xs ml-auto font-extralight'>Discover more</p>

      <div className='h-8 w-8 bg-white rounded-full ml-auto mr-1 p-2'><img src="/images/home/navigation-forward-arrow-svgrepo-com.svg" alt="" /></div>

    </div>

</div>

<div className="bg-yellow-300 h-full w-80 rounded-md left-sub-section">


</div>

 </div>

</div>

{
  //partners


}

<div className='w-screen items-center mt-16'>

  <p className='font-medium text-xl text-center'>Backed By</p>
  <p className='text-sm text-zinc-600 text-center mt-2 font-extralight'>Partered With The Very Best</p>


<div className='w-full flex justify-center mt-4'>

<div className='grid md:grid-cols-4 grid-cols-1 gap-4 gap-10  px-20 w-full ml-40'>
    <p className='text-slate-400 text-3xl font-medium mt-2'><img src="/images/clients/carerx-logo-1.png" className='h-16 w-36' alt="carerx logo kemet partners" /></p>
    <p className='text-slate-400 text-3xl font-medium mt-2'><img src="/images/clients/_axis pharmacy logo.png" className='h-16 w-36' alt="carerx logo kemet partners" /></p>
    <p className='text-slate-400 text-3xl font-medium mt-2'><img src="/images/clients/_strathcona prescription centre logo .png" className='h-16 w-36' alt="carerx logo kemet partners" /></p>
    <p className='text-slate-400 text-3xl font-medium mt-2'><img src="/images/clients/centre pharmacy.png" className='h-16 w-36' alt="carerx logo kemet partners" /></p>


    <p className='text-slate-400 text-3xl font-medium mt-2'><img src="/images/clients/_pharmasave-logo.png" className='h-16 w-36' alt="carerx logo kemet" /></p>
    <p className='text-slate-400 text-3xl font-medium mt-2'><img src="/images/clients/_waldins pharmacy logo.png" className='h-16 w-36' alt="waldins logo kemet partners" /></p>
    <p className='text-slate-400 text-3xl font-medium mt-2'><img src="/images/clients/hamptons_pharmacy_logo.png" className='h-16 w-36' alt="hamptons logo kemet partners" /></p>
    <p className='text-slate-400 text-3xl font-medium mt-2'><img src="/images/clients/lemarchand.png" className='h-16 w-36' alt="lemarchand logo kemet partners" /></p>

  </div>
</div>





  
</div>


{
  //Awards


}

<div className='w-screen items-center mt-16'>

  <p className='font-medium text-xl text-center'>Recognized & Awarded</p>
  <p className='text-sm text-zinc-600 text-center mt-2 font-light'>Partered With The Very Best</p>


<div className='w-full flex justify-center mt-4'>

<div className='grid grid-cols-4 grid-cols-gap-4  px-20 w-full ml-40 mt-4'>
   <div className='items-center'>

    <div className='h-16 w-16 rounded-full bg-slate-300'>

    </div>
    <p className='text-sm'>Award Name</p>


   </div>


   <div className='items-center'>

<div className='h-16 w-16 rounded-full bg-slate-300'>

</div>
<p className='text-sm'>Award Name</p>


</div>



<div className='items-center'>

<div className='h-16 w-16 rounded-full bg-slate-300'>

</div>
<p className='text-sm'>Award Name</p>


</div>


<div className='items-center'>

<div className='h-16 w-16 rounded-full bg-slate-300'>

</div>
<p className='text-sm'>Award Name</p>


</div>


    
  </div>
</div>





  
</div>


{
  //Case Study


}

<div className='w-screen items_center mt-16 px-20'>

  <p className='font-medium text-xl text-center'>Case Study</p>
 



<div className='w-full flex justify-center mt-8 '>
<ResponsiveCarousel  />

</div>

{
  //Awards


}



 






</div>

{
  //section below case study
}

<div className='w-full flex   mt-48'>

<div className='grid grid-cols-3 grid-cols-gap-4  px-20 w-full ml-20 '>
  


   <div className='h-20 w-60 p-2 rounded-md shadow-xl flex '>



   <div className='h-16 w-16 bg-slate-600 rounded-full'>

   </div>


   <div className="ml-2 mt-2">
   <p className='font-semibold text-zinc-700 text-sm '>Sample small</p>
   <p className='text-zinc-700  text-xs'>Sample small</p>
   </div>
  



</div>



<div className='h-20 w-60 p-2 rounded-md shadow-xl flex '>



   <div className='h-16 w-16 bg-slate-600 rounded-full'>

   </div>


   <div className="ml-2 mt-2">
   <p className='font-semibold text-zinc-700 text-sm '>Sample small</p>
   <p className='text-zinc-700  text-xs'>Sample small</p>
   </div>
  



</div>




<div className='h-20 w-60 p-2 rounded-md shadow-xl flex '>



   <div className='h-16 w-16 bg-slate-600 rounded-full'>

   </div>


   <div className="ml-2 mt-2">
   <p className='font-semibold text-zinc-700 text-sm '>Sample small</p>
   <p className='text-zinc-700  text-xs'>Sample small</p>
   </div>
  



</div>




    
  </div>






  
</div>

{
  //mentioned in
}

<div className=' h-48 w-screen mt-16 md:px-20  items-center '>

 <div className='md:px-40 h-full w-full inner-padding flex'>

 

<div className='right-sub-section md:px-10 py-4 '>

  <p className="text-xl font-semimedium">Mentioned</p>

 

  

</div>

<div className=" h-full w-full rounded-md left-sub-section">

<div className='w-full flex justify-center mt-4'>

<div className='grid grid-cols-4 grid-cols-gap-4  px-20 w-full ml-40'>
    <p className='text-slate-400 text-2xl font-semibold mt-2'>Logo</p>
    <p className='text-slate-400 text-2xl font-semibold mt-2'>Logo</p>
    <p className='text-slate-400 text-2xl font-semibold mt-2'>Logo</p>
    <p className='text-slate-400 text-2xl font-semibold mt-2'>Logo</p>


    <p className='text-slate-400 text-2xl font-semibold mt-2'>Logo</p>
    <p className='text-slate-400 text-2xl font-semibold mt-2'>Logo</p>
    <p className='text-slate-400  text-2xl font-semibold mt-2'>Logo</p>
    <p className='text-slate-400 text-2xl font-semibold mt-2'>Logo</p>

    <p className='text-slate-400 text-2xl font-semibold mt-2'>Logo</p>
    <p className='text-slate-400 text-2xl font-semibold mt-2'>Logo</p>
    <p className='text-slate-400  text-2xl font-semibold mt-2'>Logo</p>
    <p className='text-slate-400 text-2xl font-semibold mt-2'>Logo</p>

    <p className='text-slate-400 text-2xl font-semibold mt-2'>Logo</p>
    <p className='text-slate-400 text-2xl font-semibold mt-2'>Logo</p>
    <p className='text-slate-400  text-2xl font-semibold mt-2'>Logo</p>
    <p className='text-slate-400 text-2xl font-semibold mt-2'>Logo</p>
  </div>
</div>


</div>

 </div>

</div>

{
  //other section
}

<div className='w-full flex   mt-10'>

<div className='grid grid-cols-3 grid-cols-gap-3  px-20 w-full  '>
  

<div className='p-2  '>
<div className='h-48 bg-zinc-300 rounded-md shadow-xl grid place-content-center'><p className="text-slate-500">Sample</p></div>
  </div>



<div className='p-2  '>
<div className='h-48 bg-zinc-300 rounded-md shadow-xl grid place-content-center'><p className="text-slate-500">Sample</p></div>
  </div>




<div className='p-2  '>
<div className='h-48 bg-zinc-300 rounded-md shadow-xl grid place-content-center'><p className="text-slate-500">Sample</p></div>
  </div>




    
  </div>






  
</div>

<Footer />

<CookieConsent
  location="bottom"
  buttonText="Yes, I'm cool!"
  cookieName="myAwesomeCookieName2"
  style={{ background: "#2B373B" }}
  declineButtonText="Not interested"
  buttonStyle={{ color: "#000000", backgroundColor:"#ffffff", fontSize: "13px" }}
  expires={150}

  enableDeclineButton
  onDecline={() => {
   // alert("nay!");
  }}
>
  This website uses cookies to enhance the user experience.{" "}
  <span style={{ fontSize: "10px" }}>You can enable cookies to allows store your session data</span>
</CookieConsent>

    </main>
  )
}
