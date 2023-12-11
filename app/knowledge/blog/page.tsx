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

export default function Blog() {
  

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
        <MenuItem value="Drug Product Compendium">Drug Product Compendium</MenuItem>
        <MenuItem value="Compounding Clinical Practice Guidelines">Compounding Clinical Practice Guidelines</MenuItem>
       
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
  
{postsData !== null && postsData.map((singlePost: any, index: any) => (
    <div  key={index} className='h-60 w-full bg-slate-300 rounded-2xl single-item'>


   

        <div className="sub-inner w-full h-full bg-zinc-300 rounded-2xl cursor-pointer p-4 ">

       
        <div  className='w-full h-8 bg-400 rouned-br-2xl p-2 rounded-bl-2xl   border-t grid place-content-center  '>

<p   className='text-sm font-medium  text-center '>{singlePost.title}</p>


</div>

        </div>

   

       
    </div>
    ))}

  





  </div>
  
</div>
  </>):(<>
  
    <div className='flex w-screen justify-center  flex'>

<div className="w-2/3 grid grid-cols-2 p-4 gap-4  items-center place-content-center mx-auto">

{postsData !== null && postsData.map((singlePost: any, index: any) => (
  
  <div  key={index} className="flex w-full shadow-xl p-2 rounded-xl border border-slate-200">
    <div className="h-20 w-32 bg-slate-200 rounded-md">

    </div>
  <div>
  <p   className='text-xs font-medium text-start ml-2'>{singlePost.title}</p>


    <p   className='text-xs  mt-2 text-start ml-2'>{formatText(singlePost.body)}</p>

    </div>


  </div>

))}
   

  
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
