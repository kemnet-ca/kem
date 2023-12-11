"use client"
import Image from 'next/image'
import { useState, useEffect } from "react";
import ResponsiveCarousel from "@/components/Carousel";
import Link from 'next/link';
import Tooltip from '@mui/material/Tooltip';
import Fade from '@mui/material/Fade';

import Footer from '@/components/Footer';
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';
import Navbar from '@/components/Navbar';




export default function CustomRequestForm() {
  


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

  {/*save additional info to cookies*/}
  Cookies.set("additionalInformation", additionalInfo);

  //alert(selectedValues)

  if(selectedValues.length > 0){
    router.push('../../patients/data/details/')

  }
  else{

    alert("Please select atleast one custom request option. ")

  }


}
 
  return (
    <main className="bg-white relative">

<Navbar />




<div className="h-[350px] w-screen bg-cover bg-center md:mt-[100px]" style={{ backgroundImage: "url('/images/home/Medicines_share.jpeg')" }}>


 
 <div className="w-full h-full grid place-content-center md:px-10" style={{backgroundColor:`rgba(0,0,0,0.7)`}}>

 <div className='w-8 absolute h-8 bg-white  rounded-full md:mt-20 ml-10 hidden md:block cursor-pointer hover:mr-2 grid place-content-center p-1'>
  <img onClick={goBack} src="/images/home/arrow-back-simple-svgrepo-com.svg" alt="arrow-back-kemnet" />
    
    </div>

    <p className='text-center text-white text-xl font-semibold mt-6'>WELCOME TO OUR CUSTOMIZATION CONSULT REQUEST PAGE</p>
    <p className='text-center text-white text-sm mt-4 font-normal'>PLEASE LET US KNOW HOW WE CAN ASSIST YOU WITH YOUR MEDICATION NEEDS. <br></br>CUSTOMIZE MEDICATION TO UNIQUE NEEDS AND REQUEST MEDICATION THAT ARE OUT OF STOCK AND A PHARMACIST WILL CONTACT YOU TO COMPLETE AN ASSESSMENT AND GET YOUR MEDICINES CUSTOM MADE FOR YOU.</p>

 </div>
</div>

<div className="flex w-screen justify-center px-10">

<div className='w-1/3 bg-slate-100 py-2 px-6 flex mt-8 rounded-md justify-center '>

<p className="text-md text-center font-medium  text-zinc-800"> I am a patient</p>

 

  
</div>
</div>

<div className='w-screen 0 md:pb-10 md:pl-20 md:pr-20 md:pt-10 flex justify-center'>
    
  {/* Create 6 copies of inner-img */}

  

  <div className='h-[850px] w-2/3 bg-slate-100 rounded-md p-4 overflow-scroll'>




    <p className='text-xl font-normal text-center mt-10'>Customization Request</p>



    <div className="w-full  mt-8">

         <div className='mt-4 flex'>
         <input value="I have trouble swallowing your pill" type="checkbox" 
           checked={selectedValues.includes('I have trouble swallowing your pill')}
          
           onChange={handleRadioChange}
         /> 
         <p className="ml-4 font-normal text-sm flex">I have trouble swallowing my pill 
         

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
     <p className='text-xs font-light text-leight'> Pick this option if you have trouble swallowing pills.</p>
    
        </div> 
    </div>
  }  arrow>
         <span className='ml-2 '><img className='h-[25px] w-[25px] mt-[-2px] cursor-pointer' src="/images/home/info-circle-svgrepo-com.svg" alt="info-circle" /></span>
       
    </Tooltip>

  */
}
        
         
         </p>

         </div>
       
         <div className='mt-4 flex'>
         <input value="I do not want to inject my hormones and other medications" type="checkbox" 
          checked={selectedValues.includes('I do not want to inject my hormones and other medications')}
          
          onChange={handleRadioChange}
         /> 
         <p className="ml-4 font-normal text-sm flex">I do not want to inject medications 
     
     
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
     <p className='text-xs font-light text-leight'> Pick this option if you&apos;re avoiding taking injections.</p>
    
        </div> 
    </div>
  }
   arrow>
         <span className='ml-2 '><img className='h-[25px] w-[25px] mt-[-2px] cursor-pointer' src="/images/home/info-circle-svgrepo-com.svg" alt="info-circle" /></span>
         </Tooltip>

  */
}
     
        
         </p>
         </div>


         <div className='mt-4 flex'>

         <input value="I want my medications to taste better" type="checkbox"
          checked={selectedValues.includes('I want my medications to taste better')}
          onChange={handleRadioChange}
         /> 
         <p className="ml-4 font-normal text-sm flex">I want my medications to taste better 



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
     <p className='text-xs font-light text-leight'> Improve the general taste of your medications.</p>
    
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

        <input value="I want a different strength of my medication that is not commercially available." type="checkbox"
         checked={selectedValues.includes('I want a different strength of my medication that is not commercially available.')}
         onChange={handleRadioChange}
        /> 
        <p className="ml-4 font-normal text-sm flex">I want a different strength of my medication that is not commercially available. 



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
     <p className='text-xs font-light text-leight'> Pick this option if you are requesting a medication with a specialized dosage strength that isn't commercially available.</p>
    
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

        <input value="I want my pain medications in a form that goes through my skin." type="checkbox"
         checked={selectedValues.includes('I want my pain medications in a form that goes through my skin.')}
         onChange={handleRadioChange}
        /> 
        <p className="ml-4 font-normal text-sm flex">I want my medications in a form that goes through my skin. 
      
      
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
     <p className='text-xs font-light text-leight'> I&apos;m seeking a pain relief medication formulated to be administered through the skin for a transdermal, non-oral delivery method.</p>
    
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

        <input value="I want to combine specific strengths for my supplements." type="checkbox"
         checked={selectedValues.includes('I want to combine specific strengths for my supplements.')}
         onChange={handleRadioChange}
        /> 
        <p className="ml-4 font-normal text-sm flex">I want to combine specific strengths for my supplements. 



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
     <p className='text-xs font-light text-leight'>Blend supplement strengths</p>
    
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

        <input value="I want help with designing my medication, so I take it regularly and adhere to them as prescribed." type="checkbox"
         checked={selectedValues.includes('I want help with designing my medication, so I take it regularly and adhere to them as prescribed.')}
         onChange={handleRadioChange}
        /> 
        <p className="ml-4 font-normal text-sm flex">I want help with designing my medication, so I take it regularly and adhere to them as prescribed. 


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
     <p className='text-xs font-light text-leight'> I'm looking for personalized medication design assistance to ensure regular intake and adherence to prescribed treatment plans.</p>
    
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

        <input value="I want to request a specific compounded medication." type="checkbox" 
        
        checked={selectedValues.includes('I want to request a specific compounded medication.')}
        onChange={handleRadioChange}
        /> 
        <p className="ml-4 font-normal text-sm flex">I want to request a specific compounded medication. 



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
     <p className='text-xs font-light text-leight'> Temporarily unavailable meds?</p>
    
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

        <input value="I want to request a specific Customization of my medications." type="checkbox"
        
        checked={selectedValues.includes('I want to request a specific Customization of my medications.')}
        onChange={handleRadioChange}
        /> 
        <p className="ml-4 font-normal text-sm flex">I want to request a specific Customization of my medications. 
        




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
     <p className='text-xs font-light text-leight'>Specific medication tweak?</p>
    
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


        <input value="I want to request a specific compound." type="checkbox"
        
        checked={selectedValues.includes('I want to request a specific compound.')}
        onChange={handleRadioChange}
        /> 
        <p className="ml-4 font-normal text-sm flex">I want to request a specific compound. 



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
     <p className='text-xs font-light text-leight'> Seeking specific compound?</p>
    
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

<div className="w-full flex justify-center">
  <p className="font-medium text-sm">Participating Pharmacies</p>
  </div>

<div className="flex w-screen justify-center px-10 mt-4 ">



<div className='w-2/3 bg-slate-100 py-4 px-6 flex mt-8 rounded-md grid grid-cols-3 gap-4 '>



  <div className="w-32 h-32 bg-white rounded-md ">

  </div>

  <div className="md:w-[300px]">

    <p className="text-xs mt-2"><span className="font-medium">Pharmacy Name:</span> <span className="font-light">Kempound Compounding & Repackaging Pharmacy Inc</span></p>
    <p className="text-xs mt-4"><span className="font-medium">Licensee:</span> Morẹ́nikẹ́ Ẹniọlá Ọláòṣebìkan</p>
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

<Footer />

    </main>
  )
}
