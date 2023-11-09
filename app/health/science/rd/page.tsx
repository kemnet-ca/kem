"use client"
import Image from 'next/image'
import { useState, useEffect } from "react";
import ResponsiveCarousel from "@/components/Carousel";
import Link from 'next/link';
import Header from '@/components/Header';
import React from 'react';
import Footer from '@/components/Footer';
import { ClassNames } from '@emotion/react';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Tooltip from '@mui/material/Tooltip';
import Fade from '@mui/material/Fade';

export default function ResearchAndDev() {
  

    const [selectedOption, setSelectedOption] = React.useState('Categories');
    const [selectedView, setSelectedView] = React.useState('GALLERY');
  
    const handleCategoryChange = (event:any) => {
      setSelectedOption(event.target.value);
    };
  
    const setViewGallery = () => {
      setSelectedView("GALLERY");
    };
  
    const setViewSnippet = () => {
      setSelectedView("SNIPPET");
    };


  return (
    <main className="bg-white relative">

 <Header />


<div className='h-[100px] w-screen  relative md:pt-10 md:pb-10 md:pl-20 md:pr-20 md:pt-28 flex'>

<Link href={"/"} style={{marginLeft:'60px', marginTop:'-35px'}} className='w-8 absolute h-8 bg-white  rounded-full md:mt-[-20]   ml-10 hidden md:block cursor-pointer absolute hover:ml-2 grid place-content-center p-1 shadow-md'>
  <img src="/images/home/arrow-back-simple-svgrepo-com.svg" alt="arrow-back-kemnet" />
    
    </Link>

   <div className='w-full flex justify-center'>
   <p className='text-center text-xl font-medium ' style={{marginTop:`-20px`}}>Research & Development</p>




   </div>

 
 
</div>



<div className="flex w-screen justify-center px-10">

<div className='w-2/3 bg-slate-100 py-2 px-6 flex mt-8 rounded-md '>

<p className="text-xs font-light text-zinc-800"> Take the confusion out of compounding and get all of your burning questions answered. Kemet simplifies compounding: &apos;Customized medicine companion: Mastering the Basics with Ease&apos;</p>

  <button  className='text-center text-xs text-white font-light bg-black rounded-3xl flex items-center justify-center px-6 py-2 hover:mt-2 ml-[20px] mr-6'>Download PDF</button>


  
</div>
</div>



<div className="flex w-screen justify-center px-4">

<div className='w-2/3 py-2 px-6  mt-8 rounded-md '>

<p className="text-sm font-light text-zinc-800 mt-4"> At Kemet, innovation is at the heart of everything we do. We&apos;re committed to expanding our product offerings through user discovery programs, strategic alliances with industry partners and research institutes, and it&apos;s a cornerstone of our growth strategy.</p>



<p className="text-sm font-light text-zinc-800 mt-4"> Our dedication extends to ensuring medication accessibility for all, especially in underserved communities. Kemet is deeply committed to understanding the unique medication needs of equity deserving people and populations. Together, we co-create, make, and deliver equitable, sustainable, and personalized medicine solutions.</p>


<p className="text-sm font-light text-zinc-800 mt-4"> Within the Kemet Group, we continuously conceive and develop groundbreaking medications with novel delivery methods. These medicines have the potential to positively impact the lives of millions in African countries and around the world each year. We prioritize your medication experience and overall health outcomes, which is why we invest in creating new drug formulations.</p>



<p className="text-sm font-light text-zinc-800 mt-4"> Our commitment to innovation is backed by scientific rigor, cutting-edge capabilities, and a highly specialized team. This enables us to maintain a robust and innovative product pipeline that paves the way for a healthier future.</p>


  
</div>
</div>



  <div className='w-full flex justify-center mt-10'>
   <p className='text-center text-xl font-medium ' style={{marginTop:`-20px`}}>Our Library</p>




   </div>



   <div className="w-screen flex  justify-center mt-6 ">

  <div className="w-2/3 px-8  flex ">

  <FormControl>
      <Select
        value={selectedOption}
        onChange={handleCategoryChange}
        displayEmpty

        className="w-full md:w-[200px] mr-auto"
      >
        <MenuItem value="Categories" disabled >
          Categories
        </MenuItem>
        <MenuItem value="Category 1">Category 1</MenuItem>
        <MenuItem value="Category 2">Category 2</MenuItem>
        <MenuItem value="Category 3">Category 3</MenuItem>
      </Select>
    </FormControl>


   <div className="w-[100px]  flex ml-auto mt-4 ">


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
   
     <p className='text-xs font-light text-leight'> Change post view to gallery mode</p>
    
        
  } arrow>

<img onClick={setViewGallery} src="/images/grid-svgrepo-com (2).svg" alt=" " className="h-8 w-8 cursor-pointer" />
   
    </Tooltip>
    <div className="w-4"></div>

    <div className="w-1 bg-zinc-400"></div>

    <div className="w-4"></div>

    <img onClick={setViewSnippet} src="/images/snippet-svgrepo-com.svg" alt=" " className="h-8 w-8 cursor-pointer" />


   </div>


  </div>

</div>
{

selectedView=="GALLERY"?(<>

<div className='flex w-screen justify-center  flex'>

<div className="w-2/3 grid grid-cols-2 p-4 gap-4  items-center place-content-center mx-auto">
    <div className='h-60 w-full bg-slate-300 rounded-2xl single-item'>

        <div className="sub-inner w-full h-full bg-zinc-300 rounded-2xl cursor-pointer p-4 ">

       
        <div  className='w-full h-8 bg-400 rouned-br-2xl p-2 rounded-bl-2xl   border-t grid place-content-center  '>

<p   className='text-sm font-light text-center '>Blog Item</p>


</div>

        </div>

       
    </div>
   

    <div className='h-60 w-full bg-slate-300 rounded-2xl single-item'>

<div className="sub-inner w-full h-full bg-zinc-300 rounded-2xl cursor-pointer p-4">

       
<div  className='w-full h-8 bg-400 rouned-br-2xl p-2 rounded-bl-2xl   border-t grid place-content-center p-4  '>

    <p   className='text-sm font-light text-center '>Blog Item</p>

  
</div>

</div>

</div>




<div className='h-60 w-full bg-slate-300 rounded-2xl single-item'>

<div className="sub-inner w-full h-full bg-zinc-300 rounded-2xl cursor-pointer border-t grid place-content-center p-4 ">

       
<div  className='w-full h-8 bg-400 rouned-br-2xl p-2 rounded-bl-2xl    '>

    <p   className='text-sm font-light text-center '>Blog Item</p>

 
</div>

</div>

</div>


<div className='h-60 w-full bg-slate-300 rounded-2xl single-item'>

<div className="sub-inner w-full h-full bg-zinc-300 rounded-2xl cursor-pointer border-t grid place-content-center p-4 ">

       
<div  className='w-full h-8 bg-400 rouned-br-2xl p-2 rounded-bl-2xl   border-t grid place-content-center   '>

    <p   className='text-sm font-light text-center '>Blog Item</p>

 
</div>

</div>

</div>


<div className='h-60 w-full bg-slate-300 rounded-2xl single-item'>

<div className="sub-inner w-full h-full bg-zinc-300 rounded-2xl cursor-pointer p-4">

       
<div  className='w-full h-8 bg-400 rouned-br-2xl p-2 rounded-bl-2xl   border-t grid place-content-center  '>

    <p   className='text-sm font-light text-center '>Blog Item</p>

 
</div>

</div>

</div>


<div className='h-60 w-full bg-slate-300 rounded-2xl single-item'>

<div className="sub-inner w-full h-full bg-zinc-300 rounded-2xl cursor-pointer border-t flex flex-col justify-center items-center p-4">

  <p className='text-sm font-light text-center'>Blog Item</p>

</div>


</div>

  </div>
  
</div>
  </>):(<>
  
    <div className='flex w-screen justify-center  flex'>

<div className="w-2/3 grid grid-cols-2 p-4 gap-4  items-center place-content-center mx-auto">


  <div className="flex w-full shadow-xl p-2 rounded-xl border border-slate-200">
    <div className="h-20 w-32 bg-slate-200 rounded-md">

    </div>
    <p   className='text-xs font-light text-start ml-2'>Blog Item</p>



  </div>
   

  <div className="flex w-full shadow-xl p-2 rounded-xl border border-slate-200">
    <div className="h-20 w-32 bg-slate-200 rounded-md">

    </div>
    <p   className='text-xs font-light text-start ml-2'>Blog Item</p>



  </div>






  <div className="flex w-full shadow-xl p-2 rounded-xl border border-slate-200">
    <div className="h-20 w-32 bg-slate-200 rounded-md">

    </div>
    <p   className='text-xs font-light text-start ml-2'>Blog Item</p>



  </div>


  <div className="flex w-full shadow-xl p-2 rounded-xl border border-slate-200">
    <div className="h-20 w-32 bg-slate-200 rounded-md">

    </div>
    <p   className='text-xs font-light text-start ml-2'>Blog Item</p>



  </div>


  <div className="flex w-full shadow-xl p-2 rounded-xl border border-slate-200">
    <div className="h-20 w-32 bg-slate-200 rounded-md">

    </div>
    <p   className='text-xs font-light text-start ml-2'>Blog Item</p>



  </div>


  <div className="flex w-full shadow-xl p-2 rounded-xl border border-slate-200">
    <div className="h-20 w-32 bg-slate-200 rounded-md">

    </div>
    <p   className='text-xs font-light text-start ml-2'>Blog Item</p>



  </div>

  </div>
  
</div>
  
  </>)
}



{/*Medicine For You, By You */}




<div className='flex-grow'></div>




<Footer />

    </main>
  )
}
