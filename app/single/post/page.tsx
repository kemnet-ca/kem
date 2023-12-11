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
import { useRouter } from 'next/navigation';
import Fade from '@mui/material/Fade';
import axios from 'axios';
import { Dialog, DialogTitle, DialogContent, DialogActions, Slide, TextField, Button } from '@mui/material';
import { TransitionProps } from '@mui/material/transitions';

export default function SinglePost() {
  

  const [selectedOption, setSelectedOption] = React.useState('Categories');
  const [selectedView, setSelectedView] = React.useState('GALLERY');
  const router = useRouter();
  const [postsData, setPostsData] = useState<any[]>([]); 
  const [open, setOpen] = React.useState(false);


  const handleCategoryChange = (event:any) => {
    setSelectedOption(event.target.value);
  };

  const setViewGallery = () => {
    setSelectedView("GALLERY");
  };

  const setViewSnippet = () => {
    setSelectedView("SNIPPET");
  };


  const handleClose = () => {
    setOpen(false);
  };
  
  function goBack()
  {
    router.back();
  }

  //get patient request data
  useEffect(() => {
    // Fetch all posts
    axios.get('https://www.back.kemet.care/api/cms/med_blog/posts', {
     
    })
      .then((response: { data: any; }) => {
        const data = response.data;
      
       console.log(data);
       setPostsData(data );
       

      
      })
      .catch((error: any) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const formatText = (text:any) => {
 
    
    // Remove surrounding quotes if needed
    const parsedContent = text.replace(/^"|"$/g, '');
    
     
    // Create a temporary element to render HTML content
    const tempElement = document.createElement('div');
    tempElement.innerHTML = parsedContent;
  
    // Access the parsed content text without HTML tags
    const textContent = tempElement.textContent;
  
    
  
    const truncatedText = textContent!.length > 100 ? textContent!.substring(0, 100) + '...' : textContent;
  
    return truncatedText;
  
  };


  const Transition = React.forwardRef(function Transition(
    props: TransitionProps & {
      children: React.ReactElement<any, any>;
    },
    ref: React.Ref<unknown>,
  ) {
    return <Slide direction="up" ref={ref} {...props} />;
  });

  const handleClickOpen = () => {
    setOpen(true);
  };
  


  return (
    <main className="bg-white relative">



 <Navbar />


 <React.Fragment>
     
     <Dialog
       open={open}
       TransitionComponent={Transition}
       keepMounted
       onClose={handleClose}
       aria-describedby="alert-dialog-slide-description"
     >
       <DialogTitle className=" text-center font-semibold text-md">{"Receive this Content in your email"}</DialogTitle>
       <DialogContent>


    <div className="mt-6"></div>

       <TextField
          id="outlined-basic"
          label="Your First Name"
          variant="outlined"
          className='w-full'
         // onChange={handleTitleChange}
        />

<div className="mt-6"></div>

<TextField
   id="outlined-basic"
   label="Your Email"
   variant="outlined"
   className='w-full'
  // onChange={handleTitleChange}
 />

      

       <p className="text-zinc-900 text-sm font-normal">
       
 
       </p>


        
       </DialogContent>
       <DialogActions>
        <Button className='bg-zinc-100 rounded-xl p-2 mr-6 text-xs shadow-xl text-zinc-600'>Get It Now</Button>
         <p className='text-zinc-400 cursor-pointer mr-10 hover:mb-1' onClick={handleClose}>Cancel</p>
        
       </DialogActions>
     </Dialog>
   </React.Fragment>



<div className='h-[100px] w-screen  relative md:pt-10 md:pb-10 md:pl-20 md:pr-20 md:pt-28 flex'>

<Link href={"/"} style={{marginLeft:'60px', marginTop:'-35px'}} className='w-8 absolute h-8 bg-white  rounded-full md:mt-[-20]   ml-10 hidden md:block cursor-pointer absolute hover:ml-2 grid place-content-center p-1 shadow-md'>
  <img onClick={goBack} src="/images/home/arrow-back-simple-svgrepo-com.svg" alt="arrow-back-kemnet" />
    
    </Link>

   <div className='w-full flex justify-center mt-10'>
   <p className='text-center text-xl font-medium ' >Make your Medicine - Blog & Newsletter</p>




   </div>

 
 
</div>



<div className="flex w-screen justify-center px-10 mt-20">

<div className='w-2/3 bg-slate-100 py-2 px-6 flex mt-8 rounded-md '>

<p className="text-xs font-light text-zinc-800"> Take the confusion out of compounding and get all of your burning questions answered. Kemet simplifies compounding: &apos;Customized medicine companion: Mastering the Basics with Ease&apos;</p>

  <button  className='text-center text-xs text-white font-light bg-black rounded-3xl flex items-center justify-center px-6 py-2 hover:mt-2 ml-[20px] mr-6' onClick={handleClickOpen}>Download PDF</button>


  
</div>
</div>


<div className="w-screen flex  justify-center mt-6 ">

  <div className="w-2/3 px-8  flex ">



   <div className="w-[100px]  flex ml-auto mt-4 ">




</div></div></div>


{/*Medicine For You, By You */}




<div className='flex-grow'></div>




<Footer />

    </main>
  )

  
}
