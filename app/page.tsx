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


/*return(

  <>
  
  <main className="bg-white relative grid place-content-center h-screen w-screen">
  <p className='text-3xl text-zinc-400 text-center'>Oops! We havn't launched yet </p>
<p className='text-3xl text-zinc-400 text-center'>Kemet Is Coming Soon </p>


    </main>
  </>
);*/

 

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

<div className=' h-48 w-screen mt-16 md:px-6  items-center '>

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

<div className=' h-48 w-screen mt-16 md:px-6  items-center  hidden'>

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

<div className='grid md:grid-cols-4 grid-cols-1 gap-4 gap-10  px-20 w-full ml-20'>
    <p className='text-slate-400 text-3xl font-medium mt-2'><img src="/images/partners/_NRC-logo.jpg" className='h-16 w-36' alt="_NRC-logo  kemet partners" /></p>
    <p className='text-slate-400 text-3xl font-medium mt-2'><img src="/images/partners/_canadian womens foundation.jpg" className='h-16 w-36' alt="_canadian womens foundation kemet partners" /></p>
    <p className='text-slate-400 text-3xl font-medium mt-2'><img src="/images/partners/_SEF.png" className='h-16 w-36' alt="_SEF kemet partners" /></p>
    <p className='text-slate-400 text-3xl font-medium mt-2'><img src="/images/partners/_alberta innovates.jpg" className='h-16 w-36' alt="_alberta innovates  kemet partners" /></p>


    <p className='text-slate-400 text-3xl font-medium mt-2'><img src="/images/partners/_canadian womens foundation.jpg" className='h-16 w-36' alt="carerx logo kemet" /></p>
    <p className='text-slate-400 text-3xl font-medium mt-2'><img src="/images/partners/_MIT_Solve.jpg" className='h-16 w-36' alt="waldins logo kemet partners" /></p>
    <p className='text-slate-400 text-3xl font-medium mt-2'><img src="/images/partners/_ERIN_logo.png" className='h-16 w-36' alt="_MIT_Solve kemet partners" /></p>
    <p className='text-slate-400 text-3xl font-medium mt-2'><img src="/images/partners/Black Opportunity Fund.png" className='h-16 w-36' alt="Black Opportunity Fund.png logo kemet partners" /></p>


    <p className='text-slate-400 text-3xl font-medium mt-2'><img src="/images/partners/Canada-AB .png" className='h-16 w-36' alt="carerx logo kemet" /></p>
    <p className='text-slate-400 text-3xl font-medium mt-2'><img src="/images/partners/edmonton unlimited.png" className='h-16 w-36' alt="edmonton unlimited kemet partners" /></p>
    <p className='text-slate-400 text-3xl font-medium mt-2'><img src="/images/partners/employment-and-social-development-canada.png" className='h-20 w-36' alt="_MIT_Solve kemet partners" /></p>
    <p className='text-slate-400 text-3xl font-medium mt-2'><img src="/images/partners/YC Logo Expanded.png" className='h-16 w-36' alt="YC Logo Expanded.png logo kemet partners" /></p>

  </div>
</div>
<div className='w-screen flex justify-center mt-6'>
<Link href={"../focus/clients"} className='text-center mt-8 font-semibold hover:ml-2 '>View All</Link>
</div>





  
</div>


{
  //Awards


}

<div className='w-screen items-center mt-16'>

  <p className='font-medium text-xl text-center'>Recognized & Awarded</p>


<div className='w-full flex justify-center mt-4'>

<div className='grid md:grid-cols-2 gap-6 grid-cols-1  px-10 w-full ml-10 mt-4'>
   <div className='p-2 shadow-xl flex'>

    <div className='h-16 w-16 rounded-full '>
      <img src="/images/award-medal-trophy-svgrepo-com.svg" alt="kemet awards" />

    </div>
   
  <div className=''>
  <p className='ml-4 text-sm text-zinc-700'>Community Award, 2021 MIT Solve Global Challenges; Health Security & Pandemics Challenge</p>
   <Link href={"https://solve.mit.edu/challenges/2021-health-security-pandemics/solutions/45940"} className='mt-2 ml-4 text-sm text-orange-300 hover:ml-6'>View</Link>

  </div>

   </div>


   <div className='p-2 shadow-xl flex'>

   <div className='h-16 w-16 rounded-full '>
   <img src="/images/award-medal-trophy-svgrepo-com.svg" alt="kemet awards" />
</div>

<div className=''>
  <p className='ml-4 text-sm text-zinc-700'>Second place, 2022 Zeton/CSChE Plant Design Competition at the Canadian Chemical Engineering Conference</p>
   <Link href={"https://www.cheminst.ca/conference/canadian-chemical-engineering-conference-2022/"} className='mt-2 ml-4 text-sm text-orange-300 hover:ml-6'>View</Link>

  </div>



</div>



<div className='p-2 shadow-xl flex'>

<div className='h-16 w-16 rounded-full '>
<img src="/images/award-medal-trophy-svgrepo-com.svg" alt="kemet awards" />
</div>

<div className=''>
  <p className='ml-4 text-sm text-zinc-700'>2023 Alumni Award Recipients, University of Alberta, Faculty of Pharmacy & Pharmaceutical Sciences</p>
   <Link href={"https://www.ualberta.ca/alumni/recognition/alumni-awards/2023-recipients.html#:~:text=Mor%E1%BA%B9%CC%81nik%E1%BA%B9%CC%81%20%E1%BA%B8ni%E1%BB%8Dl%C3%A1%20%E1%BB%8Cl%C3%A1%C3%B2%E1%B9%A3eb%C3%ACkan,%20%E2%80%9909%20BSc(Pharm)"} className='mt-2 ml-4 text-sm text-orange-300 hover:ml-6'>View</Link>

  </div>



</div>



<div className='p-2 shadow-xl flex'>

<div className='h-16 w-16 rounded-full '>
<img src="/images/award-medal-trophy-svgrepo-com.svg" alt="kemet awards" />
</div>

<div className=''>
  <p className='ml-4 text-sm text-zinc-700'>First place, Capstone - Modular Medication Manufacturing project, Schulich School of Engineering, University in Calgary, Alberta</p>
   <Link href={"https://engineeringdesignfair.ucalgary.ca/chemical/modular-medication-manufacturing"} className='mt-2 ml-4 text-sm text-orange-300 hover:ml-6'>View</Link>

  </div>



</div>











    
  </div>
</div>





  
</div>


{
  //Case Study


}



{
  //section below case study
}

{
  //other section

  /*
  <div className='w-screen items_center mt-16 px-20'>

  <p className='font-medium text-xl text-center'>Case Study</p>
 



<div className='w-full flex justify-center mt-8 '>
<ResponsiveCarousel  />

</div>

{
  //Awards


}



 






</div>




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

  */


}



{
  //mentioned in
}

<div className=' h-48 w-screen mt-16 md:px-20  items-center '>

 <div className='md:px-40 h-full w-full inner-padding '>

 

<div className='right-sub-section md:px-10 md:pt-10 '>

  <p className="text-xl font-semibold text-center ">We&apos;ve been mentioned on:</p>

 

  

</div>

<div className="  w-full rounded-md left-sub-section">

<div className='w-full flex justify-center mt-4'>

<div className='grid md:grid-cols-5 grid-cols-2 gap-10  px-20 w-full ml-10'>
    <p className='text-slate-400 text-2xl font-semibold mt-2'><img src="/images/mentioned/pharmacy-practice-plus-business-logo-vector.png" className='h-20 w-36' alt="carerx logo kemet" /></p>
    <p className='text-slate-400 text-2xl font-semibold mt-2'><img src="/images/mentioned/2560px-CTV_News.png" className='h-20 w-36' alt="ctv logo kemet" /></p>
    <p className='text-slate-400 text-2xl font-semibold mt-2'><img src="/images/mentioned/radioactive.jpeg" className='h-20 w-36' alt="radioactive kemet" /></p>
   

    <p className='text-slate-400 text-2xl font-semibold mt-2'><img src="/images/mentioned/CBC_logo.svg.png" className='h-16 w-36' alt="carerx logo kemet" /></p>
    <p className='text-slate-400 text-2xl font-semibold mt-2'><img src="/images/mentioned/uofcengineering.png" className='h-20 w-36' alt="ctv logo kemet" /></p>
    <p className='text-slate-400 text-2xl font-semibold mt-2'><img src="/images/mentioned/whatshesaidlogo.png" className='h-20 w-36' alt="radioactive kemet" /></p>
   
   
    <p className='text-slate-400 text-2xl font-semibold mt-2'><img src="/images/mentioned/melanistic magazine.png" className='h-20 w-36' alt="carerx logo kemet" /></p>
    <p className='text-slate-400 text-2xl font-semibold mt-2'><img src="/images/mentioned/uofapharm.jpeg" className='h-20 w-36' alt="ctv logo kemet" /></p>
    <p className='text-slate-400 text-2xl font-semibold mt-2'><img src="/images/mentioned/whatshesaidlogo.png" className='h-20 w-36' alt="radioactive kemet" /></p>

   <p className='text-slate-400 text-2xl font-semibold mt-2'><img src="/images/mentioned/1200px-Edmonton_Journal_(2020-01-15).svg.png" className='h-20 w-36' alt="carerx logo kemet" /></p>
    <p className='text-slate-400 text-2xl font-semibold mt-2'><img src="/images/mentioned/Bloomsbury-Radio.jpg" className='h-20 w-36' alt="ctv logo kemet" /></p>
    <p className='text-slate-400 text-2xl font-semibold mt-2'><img src="/images/mentioned/CHN-logo-new-blue-2021-320px.png" className='h-20 w-36' alt="radioactive kemet" /></p>

    <p className='text-slate-400 text-2xl font-semibold mt-2'><img src="/images/mentioned/taproot logo.png" className='h-20 w-36' alt="ctv logo kemet" /></p>
    <p className='text-slate-400 text-2xl font-semibold mt-2'><img src="/images/mentioned/canada today logo.png" className='h-20 w-36' alt="radioactive kemet" /></p>


    

  
  </div>
</div>


</div>

 </div>

</div>

{
  //other section

  /*
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


  */
}

<div className='h-32 mt-10'></div>

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
