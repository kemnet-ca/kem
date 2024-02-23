"use client"
import Image from 'next/image'
import { useState, useEffect } from "react";
import ResponsiveCarousel from "@/components/Carousel";
import Link from 'next/link';
import Tooltip from '@mui/material/Tooltip';
import Fade from '@mui/material/Fade';
import Navbar from '@/components/Navbar';
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';
import Footer from '@/components/Footer';
import ParticipatingPharms from '@/components/ParticipatingPharms';




export default function PrescriberRequestForm() {

  
  

  const [selectedValues, setSelectedValues] = useState<string[]>([]);






  const [additionalInfo, setAdditionalInfo] = useState('--');
  
  {/*handle function to process additional information text*/}
    const handleTextareaChange = (event:any) => {
      setAdditionalInfo(event.target.value);
    };
  



    const router = useRouter();

    function goBack()
    {
      router.back();
    }
  
  
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

  

     {/*save additional info to cookies*/}
  Cookies.set("additionalInformation", additionalInfo);
  
    //alert(selectedValues)

    if(selectedValues.length > 0){
      router.push('../../prescribers/details/')

    }
    else{
      alert("Please select atleast one custom request option. ")
    }

   
  
  
  }


  return (
    <main className="bg-white relative">

<Navbar />


<div className="h-[450px] w-screen bg-cover bg-center md:pt-[100px]" style={{ backgroundImage: "url('/images/home/Medicines_share.jpeg')" }}>
 
 <div className="w-full h-full grid place-content-center md:px-10" style={{backgroundColor:`rgba(0,0,0,0.7)`}}>

 <div className='w-8 absolute h-8 bg-white  rounded-full md:mt-20 ml-10 hidden md:block cursor-pointer hover:ml-2 grid place-content-center p-1'>
  <img onClick={goBack} src="/images/home/arrow-back-simple-svgrepo-com.svg" alt="arrow-back-kemnet" />
    
    </div>

    <p className='text-center text-white text-xl font-semibold mt-6'>Welcome to your Customization Consultation Request page.</p>
    <p className='text-center text-white text-sm mt-4 font-normal'>Please let us know how we can assist you in customizing medications to meet your patient&apos;s<br></br> unique needs, and in requesting medications that are currently out of stock. A pharmacist will<br></br> contact you for a consultation.</p>
   
 </div>
</div>


<div className="flex w-screen justify-center md:px-10 px-2">

<div className='md:w-1/3  w-full bg-slate-100 py-2 px-2 flex mt-8 rounded-md justify-center '>

<p className="text-md text-center font-medium  text-zinc-800"> I am a licensed prescriber</p>

 

  
</div>
</div>
<div className='w-screen 0 md:pb-10 md:pl-20 md:pr-20 md:pt-10 px-2 mt-12  flex justify-center'>
    
  {/* Create 6 copies of inner-img */}

  

  <div className='h-[550px] md:w-2/3  w-full bg-slate-100 rounded-md p-4 overflow-scroll'>




    <p className='text-xl font-normal text-center mt-10'>Consult Request</p>



    <div className="w-full  mt-8">

         <div className='mt-4 flex'>
         <input value="Modify the medication formulation." type="checkbox"
          checked={selectedValues.includes('Modify the medication formulation.')}
          
          onChange={handleRadioChange}
         /> 
         <p className="ml-4 font-normal text-sm flex">Modify the medication formulation.
         

         {
  /*
   
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
       <p className='text-xs font-normal text-left'>Hint</p>
     <p className='text-xs font-light text-leight'> Update medication type. Adjust the formulation.</p>
    
        </div> 
    </div>
  } arrow>
         <span className='ml-2 '><img className='h-[25px] w-[25px] mt-[-2px] cursor-pointer' src="/images/home/info-circle-svgrepo-com.svg" alt="info-circle" /></span>
       
    </Tooltip>

  */
}        
    
       
         
         </p>

         </div>
       
         <div className='mt-4 flex'>
         <input value="Alter the medication flavor." type="checkbox"
         
         checked={selectedValues.includes('Alter the medication flavor.')}
          
         onChange={handleRadioChange}
           /> 
      
         <p className="ml-4 font-normal text-sm flex">Alter the medication flavor.
     
         {
  /*
   
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
       <p className='text-xs font-normal text-left'>Hint</p>
     <p className='text-xs font-light text-leight'> Modify taste preference to suit your tolerance.</p>
    
        </div> 
    </div>
  } arrow>
         <span className='ml-2 '><img className='h-[25px] w-[25px] mt-[-2px] cursor-pointer' src="/images/home/info-circle-svgrepo-com.svg" alt="info-circle" /></span>
         </Tooltip>

  */
}        
    
     
     
        
         </p>
         </div>


         <div className='mt-4 flex'>

         <input value="Adjust the medication dosage." type="checkbox" 
         checked={selectedValues.includes('Adjust the medication dosage.')}
          
         onChange={handleRadioChange}
         /> 
         <p className="ml-4 font-normal text-sm flex">Adjust the medication dosage.


         {
  /*
   
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
       <p className='text-xs font-normal text-left'>Hint</p>
     <p className='text-xs font-light text-leight'> Adjust dosage amount.</p>
    
        </div> 
    </div>
  } arrow>
         <span className='ml-2 '><img className='h-[25px] w-[25px] mt-[-2px] cursor-pointer' src="/images/home/info-circle-svgrepo-com.svg" alt="info-circle" /></span>
         </Tooltip>

  */
}        
    
        
         </p>
         </div>

         <div className='mt-4 flex'>

        <input value="Formulate a combination medication." type="checkbox"
         checked={selectedValues.includes('Formulate a combination medication.')}
          
         onChange={handleRadioChange}
        /> 
        <p className="ml-4 font-normal text-sm flex">Formulate a combination medication. 



       {
  /*
   
          
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
       <p className='text-xs font-normal text-left'>Hint</p>
     <p className='text-xs font-light text-leight'> Combine different meds in a safe and efficient mixture.</p>
    
        </div> 
    </div>
  } arrow>
        <span className='ml-2 '><img className='h-[25px] w-[25px] mt-[-2px] cursor-pointer' src="/images/home/info-circle-svgrepo-com.svg" alt="info-circle" /></span>
        </Tooltip>

  */
}     
        </p>
        </div>


        <div className='mt-4 flex'>

        <input value="I wish to consult with a compounding pharmacist." type="checkbox"
         checked={selectedValues.includes('I wish to consult with a compounding pharmacist.')}
          
         onChange={handleRadioChange}
         /> 
        <p className="ml-4 font-normal text-sm flex">I wish to consult with a compounding pharmacist. 
      
        {
  /*
   
          
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
       <p className='text-xs font-normal text-left'>Hint</p>
     <p className='text-xs font-light text-leight'> Seek pharmacist advice.</p>
    
        </div> 
    </div>
  } arrow>
        <span className='ml-2 '><img className='h-[25px] w-[25px] mt-[-2px] cursor-pointer' src="/images/home/info-circle-svgrepo-com.svg" alt="info-circle" /></span>
        </Tooltip>

  */
}     
      
      
       
        </p>
        </div>

        <div className='mt-4 flex'>

        <input value="I am searching for a specific compounded medication." type="checkbox"
        checked={selectedValues.includes('I am searching for a specific compounded medication.')}
          
        onChange={handleRadioChange}
        /> 
        <p className="ml-4 font-normal text-sm flex">I am searching for a specific compounded medication.
        
     
        {
  /*
   
          
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
       <p className='text-xs font-normal text-left'>Hint</p>
     <p className='text-xs font-light text-leight'> Find specific compound.</p>
    
        </div> 
    </div>
  } arrow>
        <span className='ml-2 '><img className='h-[25px] w-[25px] mt-[-2px] cursor-pointer' src="/images/home/info-circle-svgrepo-com.svg" alt="info-circle" /></span>
        </Tooltip>

  */
}     
      
     
       
        </p>
        </div>

       
    </div>

    {
      /*

      <p className='text-sm text-zinc-800 font-semibold mt-10'>Additional information</p>
    
    <div className='w-full flex justify-center mt-2'>
<textarea
onChange={handleTextareaChange}
 className='border border-zinc-300 text-sm text-zinc-300 p-4 w-[500px] rounded-md text-light text-zinc-700'>
   
  </textarea>
</div>

<div className='w-full flex justify-center mt-2'>

    <button onClick={addAllSelectionsToCookies} className='text-center text-sm text-white font-light bg-black rounded-3xl py-2 px-6 hover:mt-2'>Submit</button>
</div>


      */
    }


  </div>



  </div>

  <ParticipatingPharms />
<Footer />

    </main>
  )
}
