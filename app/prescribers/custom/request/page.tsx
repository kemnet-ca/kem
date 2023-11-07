"use client"
import Image from 'next/image'
import { useState, useEffect } from "react";
import ResponsiveCarousel from "@/components/Carousel";
import Link from 'next/link';
import Tooltip from '@mui/material/Tooltip';
import Fade from '@mui/material/Fade';
import Header from '@/components/Header';
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';




export default function PrescriberRequestForm() {
  

  const [selectedValues, setSelectedValues] = useState<string[]>([]);






  const [additionalInfo, setAdditionalInfo] = useState('Additional information');
  
  {/*handle function to process additional information text*/}
    const handleTextareaChange = (event:any) => {
      setAdditionalInfo(event.target.value);
    };
  



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
  
   //  alert(JSON.stringify(selectedValues))
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

    router.push('../../prescribers/details/')
  
  
  }


  return (
    <main className="bg-white relative">

<Header />


<div className="h-[450px] w-screen bg-cover bg-center" style={{ backgroundImage: "url('/images/home/Medicines_share.jpeg')" }}>
 
 <div className="w-full h-full grid place-content-center md:px-10" style={{backgroundColor:`rgba(0,0,0,0.7)`}}>

    <p className='text-center text-white text-xl font-semibold mt-6'>WELCOME TO OUR CUSTOMIZATION CONSULT REQUEST PAGE</p>
    <p className='text-center text-white text-sm mt-4 font-normal'>PLEASE LET US KNOW HOW WE CAN ASSIST YOU WITH YOUR MEDICATION NEEDS FOR YOUR PATIENT. <br></br>CUSTOMIZE MEDICATION TO UNIQUE NEEDS AND REQUEST MEDICATION THAT ARE OUT OF STOCK AND A PHARMACIST WILL CONTACT YOU TO COMPLETE AN ASSESSMENT AND GET YOUR MEDICINES CUSTOM MADE FOR YOU.</p>
    <p className='text-center text-white text-sm mt-4 font-normal'>WE ARE ABLE TO FAX AN AVAILABLE COMPOUNDER TO SOURCE YOUR PATIENT&apos;S SPECIFIC NEEDS. UPON YOUR REQUEST, A PHARMACIST WILL CONTACT YOU AS REQUIRED, AS REQUIRED TO COMPLETE AN ASSESSMENT AND GET YOUR MEDICINES CUSTOM MADE FOR YOUR PATIENTS.</p>

 </div>
</div>


<div className="flex w-screen justify-center px-10">

<div className='w-1/3 bg-slate-100 py-2 px-6 flex mt-8 rounded-md justify-center '>

<p className="text-md text-center font-medium  text-zinc-800"> I am a licensed prescriber</p>

 

  
</div>
</div>
<div className='w-screen 0 md:pb-10 md:pl-20 md:pr-20 md:pt-10 flex justify-center'>
    
  {/* Create 6 copies of inner-img */}

  

  <div className='h-[550px] w-2/3 bg-slate-100 rounded-md p-4 overflow-scroll'>




    <p className='text-xl font-normal text-center mt-10'>Consult Request</p>



    <div className="w-full  mt-8">

         <div className='mt-4 flex'>
         <input value="Change the medication formulation" type="checkbox"
          checked={selectedValues.includes('Change the medication formulation')}
          
          onChange={handleRadioChange}
         /> 
         <p className="ml-4 font-normal text-sm flex">Change the medication formulation
         

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
         <input value="Change the medication flavor" type="checkbox"
         
         checked={selectedValues.includes('Change the medication flavor')}
          
         onChange={handleRadioChange}
           /> 
         <p className="ml-4 font-normal text-sm flex">Change the medication flavor
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

         <input value="Change the medication dose" type="checkbox" 
         checked={selectedValues.includes('Change the medication dose')}
          
         onChange={handleRadioChange}
         /> 
         <p className="ml-4 font-normal text-sm flex">Change the medication dose

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

        <input value="Create a combination medication." type="checkbox"
         checked={selectedValues.includes('Create a combination medication.')}
          
         onChange={handleRadioChange}
        /> 
        <p className="ml-4 font-normal text-sm flex">Create a combination medication. 
        
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

        <input value="I want to consult with a compounding pharmacist." type="checkbox"
         checked={selectedValues.includes('I want to consult with a compounding pharmacist.')}
          
         onChange={handleRadioChange}
         /> 
        <p className="ml-4 font-normal text-sm flex">I want to consult with a compounding pharmacist. 
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

        <input value="I am looking for a specific compounding medication." type="checkbox"
        checked={selectedValues.includes('I am looking for a specific compounding medication.')}
          
        onChange={handleRadioChange}
        /> 
        <p className="ml-4 font-normal text-sm flex">I am looking for a specific compounding medication.
        
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
<textarea
onChange={handleTextareaChange}
 className='border border-zinc-300 text-sm text-zinc-300 p-4 w-[500px] rounded-md text-light text-zinc-700'>
    Additional information
  </textarea>
</div>

<div className='w-full flex justify-center mt-2'>

    <button onClick={addAllSelectionsToCookies} className='text-center text-sm text-white font-light bg-black rounded-3xl py-2 px-6 hover:mt-2'>Submit</button>
</div>

  </div>



  </div>


  <div className="w-full flex justify-center">
  <p className="font-medium text-sm">Participating Pharmacies</p>
  </div>

<div className="flex w-screen justify-center px-10 mt-4 ">



<div className='w-2/3 bg-slate-100 py-4 px-6 flex mt-8 rounded-md grid grid-cols-3 gap-4 '>



  <div className="w-32 h-32 bg-white rounded-md ">

  </div>

  <div className="md:w-[300px]">

    <p className="text-xs mt-2"><span className="font-medium">Pharmacy Name:</span> <span className="font-light">Kempound Compounding & Repackaging Pharmacy Inc</span></p>
    <p className="text-xs mt-4"><span className="font-medium">Licensee:</span> Onyinyechi Nnaji</p>
    <p className="text-xs mt-4"><span className="font-medium">Pharmacy License Number:</span> 4088</p>
    


  </div>

  <div className="w-32 h-32 bg-white rounded-md ml-auto  items-center py-4">

    <p className="font-light text-xs text-center">View all participating pharmacies</p>

    <div className="mt-4 flex justify-center">

<Link href={"../../focus/clients"} className='text-center text-xs text-white font-light bg-black rounded-3xl flex items-center justify-center px-6 hover:mt-2 ml-[20px] w-20 h-10 '>Click Here</Link>

</div>


</div>
  
</div>
</div>

    </main>
  )
}
