import { Tooltip, Fade } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

export default function OldBanner() {
    const [displayText, setDisplayText] = useState('Patient');

    const router = useRouter();

function switchScreens(){

    

     
}

    return (

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
);
    }