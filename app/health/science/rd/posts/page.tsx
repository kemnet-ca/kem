"use client"
import Image from 'next/image'
import { useState, useEffect } from "react";
import ResponsiveCarousel from "@/components/Carousel";
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import React from 'react';
import Footer from '@/components/Footer';
import { ClassNames } from '@emotion/react';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Tooltip from '@mui/material/Tooltip';
import Fade from '@mui/material/Fade';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import Head from 'next/head';




export default function SinglePost(props:any) {
  

    const [selectedOption, setSelectedOption] = React.useState('Categories');
    const [selectedView, setSelectedView] = React.useState('GALLERY');
    const [postsData, setPostsData] = useState<any[]>([]); 
  
    const handleCategoryChange = (event:any) => {
      setSelectedOption(event.target.value);
    };
  
    const setViewGallery = () => {
      setSelectedView("GALLERY");
    };
  
    const setViewSnippet = () => {
      setSelectedView("SNIPPET");
    };

    const router = useRouter();


  function goBack()
  {
    router.back();
  }

   //get patient request data
   useEffect(() => {
    // Fetch all posts
    axios.get('https://back.kemet.care/api/single/post/5', {
     
    })
      .then((response: { data: any; }) => {
        const data = response.data;
      
       console.log(data);
       setPostsData(data.post );
       

      
      })
      .catch((error: any) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const formatText = (text: string) => {
    if (typeof text !== 'undefined') {
        // Remove surrounding quotes if needed
        const parsedContent = text.replace(/^"|"$/g, '');
        
        // Create a temporary element to render HTML content
        const tempElement = document.createElement('div');
        tempElement.innerHTML = parsedContent;
        
        // Access the parsed content text without HTML tags
        const textContent = tempElement.textContent;
        
        return textContent;
    } else {
        // Handle the case when text is undefined
        return '';
    }
};




  return (
    <>  



    <main className="bg-white relative">
       

 <Navbar />


<div className='h-[100px] w-screen  relative md:pt-10 md:pb-10 md:pl-20 md:pr-20 md:pt-28 flex'>

<Link href={"/"} style={{marginLeft:'60px', marginTop:'-35px'}} className='w-8 absolute h-8 bg-white  rounded-full md:mt-[-20]   ml-10 hidden md:block cursor-pointer absolute hover:ml-2 grid place-content-center p-1 shadow-md'>
  <img onClick={goBack} src="/images/home/arrow-back-simple-svgrepo-com.svg" alt="arrow-back-kemnet" />
    
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

<p>{formatText(postsData!.body)}</p>

  
</div>
</div>



 




{/*Medicine For You, By You */}




<div className='flex-grow'></div>




<Footer />

    </main>
    </>
  )
}
