"use client"
import Image from 'next/image'
import { useState, useEffect } from "react";
import ResponsiveCarousel from "@/components/Carousel";
import Link from 'next/link';
import Tooltip from '@mui/material/Tooltip';
import Fade from '@mui/material/Fade';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';




export default function CustomRequestForm() {
  


const [selectedValues, setSelectedValues] = useState<string[]>([]);







const router = useRouter();


{/*function below hahndles radio button selections */}
function handleRadioChange(event:any) {
  const selectedValue = event.target.value;

  if (selectedValues.includes(selectedValue)) {
    // If the value is already in the array, remove it
    setSelectedValues(selectedValues.filter(value => value !== selectedValue));
   // alert(JSON.stringify(selectedValues))
  } else {
    // If the value is not in the array, add it
    setSelectedValues([...selectedValues, selectedValue]);

  // alert(JSON.stringify(selectedValues))
  }

  if(selectedValues.length==0){

    setSelectedValues([...selectedValues, selectedValue]);

   // alert(JSON.stringify(selectedValues))

  }
}


{/*add all selected consult requests to cookies */}
function addAllSelectionsToCookies(){

  Cookies.set('allSelections',JSON.stringify(selectedValues) );

  //alert(selectedValues)

  router.push('../../patients/data/details/')


}
 
  return (
    <main className="bg-white relative">

<Header />




<div className="h-[350px] w-screen bg-cover bg-center" style={{ backgroundImage: "url('/images/home/Medicines_share.jpeg')" }}>


 
 <div className="w-full h-full grid place-content-center md:px-10" style={{backgroundColor:`rgba(0,0,0,0.7)`}}>

 <div className='w-8 absolute h-8 bg-white  rounded-full md:mt-20 ml-10 hidden md:block cursor-pointer hover:mr-2 grid place-content-center p-1'>
  <img src="/images/home/arrow-back-simple-svgrepo-com.svg" alt="arrow-back-kemnet" />
    
    </div>

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
         <input value="I have trouble swallowing your pill" type="checkbox" 
           checked={selectedValues.includes('I have trouble swallowing your pill')}
          
           onChange={handleRadioChange}
         /> 
         <p className="ml-4 font-normal text-sm flex">I have trouble swallowing your pill 
         

         <Tooltip  TransitionComponent={Fade}
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
  TransitionProps={{ timeout: 600 }} title={
    <div className='flex  w-[300px] p-2'>

       <div className="h-16 w-20 bg-slate-200 rounded-md mr-2">

       </div>

       <div className="">
       <p className='text-xs font-normal text-left'>Header</p>
     <p className='text-xs font-light text-leight'> This is a brief summary of what this option entails</p>
    
        </div> 
    </div>
  }  arrow>
         <span className='ml-2 '><img className='h-[25px] w-[25px] mt-[-2px] cursor-pointer' src="/images/home/info-circle-svgrepo-com.svg" alt="info-circle" /></span>
       
    </Tooltip>
         
         </p>

         </div>
       
         <div className='mt-4 flex'>
         <input value="I do not want to inject my hormones and other medications" type="checkbox" 
          checked={selectedValues.includes('I do not want to inject my hormones and other medications')}
          
          onChange={handleRadioChange}
         /> 
         <p className="ml-4 font-normal text-sm flex">I do not want to inject my hormones and other medications 
         <Tooltip  TransitionComponent={Fade}
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
  TransitionProps={{ timeout: 600 }} title={
    <div className='flex  w-[300px] p-2'>

       <div className="h-16 w-20 bg-slate-200 rounded-md mr-2">

       </div>

       <div className="">
       <p className='text-xs font-normal text-left'>Header</p>
     <p className='text-xs font-light text-leight'> This is a brief summary of what this option entails</p>
    
        </div> 
    </div>
  }
   arrow>
         <span className='ml-2 '><img className='h-[25px] w-[25px] mt-[-2px] cursor-pointer' src="/images/home/info-circle-svgrepo-com.svg" alt="info-circle" /></span>
         </Tooltip>
         </p>
         </div>


         <div className='mt-4 flex'>

         <input value="I want my medications to taste better" type="checkbox"
          checked={selectedValues.includes('I want my medications to taste better')}
          onChange={handleRadioChange}
         /> 
         <p className="ml-4 font-normal text-sm flex">I want my medications to taste better 

         <Tooltip  TransitionComponent={Fade}
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
  TransitionProps={{ timeout: 600 }} title={
    <div className='flex  w-[300px] p-2'>

       <div className="h-16 w-20 bg-slate-200 rounded-md mr-2">

       </div>

       <div className="">
       <p className='text-xs font-normal text-left'>Header</p>
     <p className='text-xs font-light text-leight'> This is a brief summary of what this option entails</p>
    
        </div> 
    </div>
  } arrow>
         <span className='ml-2 '><img className='h-[25px] w-[25px] mt-[-2px] cursor-pointer' src="/images/home/info-circle-svgrepo-com.svg" alt="info-circle" /></span>
         </Tooltip>
         </p>
         </div>

         <div className='mt-4 flex'>

        <input value="I want a different strength of my medication that is not commercially available." type="checkbox"
         checked={selectedValues.includes('I want a different strength of my medication that is not commercially available.')}
         onChange={handleRadioChange}
        /> 
        <p className="ml-4 font-normal text-sm flex">I want a different strength of my medication that is not commercially available. 
        
        <Tooltip  TransitionComponent={Fade}
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
  TransitionProps={{ timeout: 600 }} title={
    <div className='flex  w-[300px] p-2'>

       <div className="h-16 w-20 bg-slate-200 rounded-md mr-2">

       </div>

       <div className="">
       <p className='text-xs font-normal text-left'>Header</p>
     <p className='text-xs font-light text-leight'> This is a brief summary of what this option entails</p>
    
        </div> 
    </div>
  } arrow>
        <span className='ml-2 '><img className='h-[25px] w-[25px] mt-[-2px] cursor-pointer' src="/images/home/info-circle-svgrepo-com.svg" alt="info-circle" /></span>
        </Tooltip>
        </p>
        </div>


        <div className='mt-4 flex'>

        <input value="I want my pain medications in a form that goes through my skill." type="checkbox"
         checked={selectedValues.includes('I want my pain medications in a form that goes through my skill.')}
         onChange={handleRadioChange}
        /> 
        <p className="ml-4 font-normal text-sm flex">I want my pain medications in a form that goes through my skill. 
        <Tooltip  TransitionComponent={Fade}
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
  TransitionProps={{ timeout: 600 }} title={
    <div className='flex  w-[300px] p-2'>

       <div className="h-16 w-20 bg-slate-200 rounded-md mr-2">

       </div>

       <div className="">
       <p className='text-xs font-normal text-left'>Header</p>
     <p className='text-xs font-light text-leight'> This is a brief summary of what this option entails</p>
    
        </div> 
    </div>
  } arrow>
        <span className='ml-2 '><img className='h-[25px] w-[25px] mt-[-2px] cursor-pointer' src="/images/home/info-circle-svgrepo-com.svg" alt="info-circle" /></span>
        </Tooltip>
        </p>
        </div>

        <div className='mt-4 flex'>

        <input value="I want to combine specific strengths for my supplements." type="checkbox"
         checked={selectedValues.includes('I want to combine specific strengths for my supplements.')}
         onChange={handleRadioChange}
        /> 
        <p className="ml-4 font-normal text-sm flex">I want to combine specific strengths for my supplements. 
        
        <Tooltip  TransitionComponent={Fade}
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
  TransitionProps={{ timeout: 600 }} title={
    <div className='flex  w-[300px] p-2'>

       <div className="h-16 w-20 bg-slate-200 rounded-md mr-2">

       </div>

       <div className="">
       <p className='text-xs font-normal text-left'>Header</p>
     <p className='text-xs font-light text-leight'> This is a brief summary of what this option entails</p>
    
        </div> 
    </div>
  } arrow>
        <span className='ml-2 '><img className='h-[25px] w-[25px] mt-[-2px] cursor-pointer' src="/images/home/info-circle-svgrepo-com.svg" alt="info-circle" /></span>
        </Tooltip>
        </p>
        </div>

        <div className='mt-4 flex'>

        <input value="I want help with designing my medication, so I take it regularly and adhere to them as prescribed." type="checkbox"
         checked={selectedValues.includes('I want help with designing my medication, so I take it regularly and adhere to them as prescribed.')}
         onChange={handleRadioChange}
        /> 
        <p className="ml-4 font-normal text-sm flex">I want help with designing my medication, so I take it regularly and adhere to them as prescribed. 
        
        <Tooltip  TransitionComponent={Fade}
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
  TransitionProps={{ timeout: 600 }} title={
    <div className='flex  w-[300px] p-2'>

       <div className="h-16 w-20 bg-slate-200 rounded-md mr-2">

       </div>

       <div className="">
       <p className='text-xs font-normal text-left'>Header</p>
     <p className='text-xs font-light text-leight'> This is a brief summary of what this option entails</p>
    
        </div> 
    </div>
  } arrow>
        <span className='ml-2 '><img className='h-[25px] w-[25px] mt-[-2px] cursor-pointer' src="/images/home/info-circle-svgrepo-com.svg" alt="info-circle" /></span>
        </Tooltip>
        </p>
        </div>

        <div className='mt-4 flex'>

        <input value="I want a speedy erection." type="checkbox"
         checked={selectedValues.includes('I want a speedy erection.')}
         onChange={handleRadioChange}
         /> 
        <p className="ml-4 font-normal text-sm flex">I want a speedy erection.
        
        <Tooltip  TransitionComponent={Fade}
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
  TransitionProps={{ timeout: 600 }} title={
    <div className='flex  w-[300px] p-2'>

       <div className="h-16 w-20 bg-slate-200 rounded-md mr-2">

       </div>

       <div className="">
       <p className='text-xs font-normal text-left'>Header</p>
     <p className='text-xs font-light text-leight'> This is a brief summary of what this option entails</p>
    
        </div> 
    </div>
  } arrow>
         <span className='ml-2 '><img className='h-[25px] w-[25px] mt-[-2px] cursor-pointer' src="/images/home/info-circle-svgrepo-com.svg" alt="info-circle" /></span>
                 </Tooltip>
         </p>
        </div>

        <div className='mt-4 flex'>

        <input value="I want a medication that is out of stock." type="checkbox"
        
        checked={selectedValues.includes('I want a medication that is out of stock.')}
        onChange={handleRadioChange}
        /> 
        <p className="ml-4 font-normal text-sm flex">I want a medication that is out of stock. 
        
        <Tooltip  TransitionComponent={Fade}
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
  TransitionProps={{ timeout: 600 }} title={
    <div className='flex  w-[300px] p-2'>

       <div className="h-16 w-20 bg-slate-200 rounded-md mr-2">

       </div>

       <div className="">
       <p className='text-xs font-normal text-left'>Header</p>
     <p className='text-xs font-light text-leight'> This is a brief summary of what this option entails</p>
    
        </div> 
    </div>
  } arrow>
        <span className='ml-2 '><img className='h-[25px] w-[25px] mt-[-2px] cursor-pointer' src="/images/home/info-circle-svgrepo-com.svg" alt="info-circle" /></span>
        </Tooltip>
        </p>
        </div>

        <div className='mt-4 flex'>

        <input value="I want a medication that is currently out of stock." type="checkbox" 
        
        checked={selectedValues.includes('I want a medication that is currently out of stock.')}
        onChange={handleRadioChange}
        /> 
        <p className="ml-4 font-normal text-sm flex">I want a medication that is currently out of stock. 
        
        <Tooltip  TransitionComponent={Fade}
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
  TransitionProps={{ timeout: 600 }} title={
    <div className='flex  w-[300px] p-2'>

       <div className="h-16 w-20 bg-slate-200 rounded-md mr-2">

       </div>

       <div className="">
       <p className='text-xs font-normal text-left'>Header</p>
     <p className='text-xs font-light text-leight'> This is a brief summary of what this option entails</p>
    
        </div> 
    </div>
  } arrow>
        <span className='ml-2 '><img className='h-[25px] w-[25px] mt-[-2px] cursor-pointer' src="/images/home/info-circle-svgrepo-com.svg" alt="info-circle" /></span>
        </Tooltip>
        </p>
        </div>

        <div className='mt-4 flex'>

        <input value="I want to request a specific Customization of my medications." type="checkbox"
        
        checked={selectedValues.includes('I want to request a specific Customization of my medications.')}
        onChange={handleRadioChange}
        /> 
        <p className="ml-4 font-normal text-sm flex">I want to request a specific Customization of my medications. 
        

        <Tooltip  TransitionComponent={Fade}
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
  TransitionProps={{ timeout: 600 }} title={
    <div className='flex  w-[300px] p-2'>

       <div className="h-16 w-20 bg-slate-200 rounded-md mr-2">

       </div>

       <div className="">
       <p className='text-xs font-normal text-left'>Header</p>
     <p className='text-xs font-light text-leight'> This is a brief summary of what this option entails</p>
    
        </div> 
    </div>
  } arrow>
        <span className='ml-2 '><img className='h-[25px] w-[25px] mt-[-2px] cursor-pointer' src="/images/home/info-circle-svgrepo-com.svg" alt="info-circle" /></span>
        
        </Tooltip>
        </p>
        </div>

        <div className='mt-4 flex'>


        <input value="I want to request a specific compound." type="checkbox"
        
        checked={selectedValues.includes('I want to request a specific compound.')}
        onChange={handleRadioChange}
        /> 
        <p className="ml-4 font-normal text-sm flex">I want to request a specific compound. 
        
        <Tooltip  TransitionComponent={Fade}
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
  TransitionProps={{ timeout: 600 }} title={
    <div className='flex  w-[300px] p-2'>

       <div className="h-16 w-20 bg-slate-200 rounded-md mr-2">

       </div>

       <div className="">
       <p className='text-xs font-normal text-left'>Header</p>
     <p className='text-xs font-light text-leight'> This is a brief summary of what this option entails</p>
    
        </div> 
    </div>
  } arrow>
        <span className='ml-2 '><img className='h-[25px] w-[25px] mt-[-2px] cursor-pointer' src="/images/home/info-circle-svgrepo-com.svg" alt="info-circle" /></span>
        </Tooltip>
        </p>
        </div>

    </div>

<p className='text-sm text-zinc-800 font-semibold mt-10'>Additional information</p>
    
    <div className='w-full flex justify-center mt-2'>
<textarea className='border border-zinc-300 text-sm text-zinc-300 p-4 w-[500px] rounded-md text-light text-zinc-700'>
    Additional information
  </textarea>
</div>

<div className='w-full flex justify-center mt-2'>

    <button onClick={addAllSelectionsToCookies} className='text-center text-sm text-white font-light bg-black rounded-3xl py-2 px-6 hover:mt-2'>Submit</button>
</div>

  </div>



  </div>

<div className="w-screen flex justify-center md:p-16">

  <div className="py-8 bg-slate-200 w-2/3 px-4 rounded-md flex">

    <div className="">
    <p className='font-medium text-xs'>What To Tell Your Provider To Meet Your Unique Medicine Needs </p>
    <p className='font-light text-xs'>Kemet Simplifies Compounding; Download &quot;Customised Medicine Companion&quot;. </p>

    </div>
   
   <div className="ml-auto hover:mr-2">

   <Link href="" className='text-center text-sm text-white font-light bg-black rounded-3xl py-2 px-6 hover:mt-2 '>Download</Link>

   </div>


  </div>
</div>

<Footer />

    </main>
  )
}
