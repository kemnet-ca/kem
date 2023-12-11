"use client"
import Image from 'next/image'
import { useState, useEffect } from "react";
import ResponsiveCarousel from "@/components/Carousel";
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Footer from '@/components/Footer';
import { ClassNames } from '@emotion/react';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';


import { useRouter } from 'next/navigation';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Tooltip from '@mui/material/Tooltip';
import Fade from '@mui/material/Fade';
import axios from 'axios';



export default function Upcoming() {
  
 


 


  const [selectedOption, setSelectedOption] = useState('Categories');
  const [selectedView, setSelectedView] = useState('GALLERY');
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
      axios.get('https://www.back.kemet.care/api/cms/knowledge_hub/posts', {
       
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
  


  return (
    <main className="bg-white relative">

 <Navbar />


<div className='h-[100px] w-screen  relative md:pt-10 md:pb-10 md:pl-20 md:pr-20 md:pt-28 flex'>

<Link href={"/"} style={{marginLeft:'60px', marginTop:'-35px'}} className='w-8 absolute h-8 bg-white  rounded-full md:mt-[-20]   ml-10 hidden md:block cursor-pointer absolute hover:ml-2 grid place-content-center p-1 shadow-md'>
  <img onClick={goBack} src="/images/home/arrow-back-simple-svgrepo-com.svg" alt="arrow-back-kemnet" />
    
    </Link>

   <div className='w-full flex justify-center'>
   <p className='text-center text-xl font-medium ' style={{marginTop:`-20px`}}>Knowledge Hub</p>




   </div>

 
 
</div>



<div className='w-full flex justify-center mt-10'>
   <p className='text-center text-md font-medium ' style={{marginTop:`-20px`}}>Kemet&apos;s Bold Vision</p>




   </div>

 
 



<div className="flex w-screen justify-center px-10">

<div className='w-2/3 bg-slate-100 py-2 px-6  mt-4 rounded-md  md:grid md:grid-cols-2 gap-0 py-10 rounded-2xl'>

<div className=" w-full border  border-2 border-zinc-200 p-4">

    <div className="h-16 w-16  bg-zinc-300 shadow-md rounded-full"></div>

    <p className="text-sm font-medium mt-4 text-black">Kemet&apos;s Bold Vision</p>

    <p className="text-sm font-extralight mt-4 text-zinc-600">

    Unleashing Personalized Medicines Across Africa!

At Kemet Science, we&apos;re on a mission to combat research bias and champion the underserved.
    </p>



    </div>


    <div className=" w-full border border-2  border-zinc-200 p-4">

    <div className="h-16 w-16  bg-zinc-300 shadow-md rounded-full"></div>

<p className="text-sm font-medium mt-4 text-black">Our Commitment to Accessibility</p>

<p className="text-sm font-extralight mt-4 text-zinc-600">

We&apos;re dedicated to breaking down barriers to medication access, especially for underserved communities.
</p>


</div>


<div className=" w-full border border-2   border-zinc-200 p-4 ">

       <div className="h-16 w-16  bg-zinc-300 shadow-md rounded-full"></div>

<p className="text-sm font-medium mt-4 text-black">Empowering Diversity</p>

<p className="text-sm font-extralight mt-4 text-zinc-600">

We&apos;re deeply committed to understanding the unique medication needs of equity deserving populations, forging equitable, sustainable, personalized medicine solutions.
</p>

</div>


<div className=" w-full border border-2   border-zinc-200 p-4 ">

<div className="h-16 w-16  bg-zinc-300 shadow-md rounded-full"></div>

<p className="text-sm font-medium mt-4 text-black">The Dream Team</p>

<p className="text-sm font-extralight mt-4 text-zinc-600">

Behind every breakthrough study and groundbreaking product, there&apos;s a dynamic team of PhD-level social workers, scientists, chemists, pharmacists, lawyers, engineers, supply chain experts, and human-centered design specialists. Together, we&apos;re driving innovation in medication delivery!
</p>


</div>

  
</div>
</div>

{

/*

<div className='w-full flex justify-center mt-10'>
   <p className='text-center text-md font-medium ' style={{marginTop:`-20px`}}>Publications</p>




   </div>







<div className='flex w-screen justify-center  flex'>

<div className="w-2/3 grid grid-cols-2 p-4 gap-4  items-center place-content-center mx-auto">
    <div className='h-60 w-full bg-slate-300 rounded-2xl single-item'>

        <div className="sub-inner w-full h-full bg-zinc-300 rounded-2xl cursor-pointer ">

       
            <div  className='w-full h-8 bg-400 rouned-br-md rounded-bl-2xl flex flex-col border-t  '>
            
                <Link href="../science/studies"  style={{marginBottom:`3%`, marginTop:`53%`}} className='text-xs font-medium  text-center '>Studies</Link>
            </div>

        </div>

       
    </div>
   

    <div className='h-60 w-full bg-slate-300 rounded-2xl single-item'>

<div className="sub-inner w-full h-full bg-zinc-300 rounded-2xl cursor-pointer ">

       
<div  className='w-full h-8 bg-400 rouned-br-md rounded-bl-2xl flex flex-col border-t  '>

<p  style={{marginBottom:`3%`, marginTop:`53%`}} className='text-xs font-medium  text-center '>Technical Reports (Coming Soon)</p>
</div>

</div>

</div>






<div className='h-60 w-full bg-slate-300 rounded-2xl single-item'>

<div className="sub-inner w-full h-full bg-zinc-300 rounded-2xl cursor-pointer ">

       
<div  className='w-full h-8 bg-400 rouned-br-md rounded-bl-2xl flex flex-col border-t  '>

<p  style={{marginBottom:`3%`, marginTop:`53%`}} className='text-xs font-medium  text-center '>Case Studies (Coming Soon)</p>
</div>

</div>

</div>



<div className='h-60 w-full bg-slate-300 rounded-2xl single-item'>

<div className="sub-inner w-full h-full bg-zinc-300 rounded-2xl cursor-pointer ">

       
<div  className='w-full h-8 bg-400 rouned-br-md rounded-bl-2xl flex flex-col border-t  '>

<p  style={{marginBottom:`3%`, marginTop:`53%`}} className='text-xs font-medium  text-center '>Journal Articles (Coming Soon)</p>
</div>

</div>

</div>


  </div>
  
</div>

*/}


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
    <div key={index} className='h-60 w-full bg-slate-300 rounded-2xl single-item'>


   

        <div className="sub-inner w-full h-full bg-zinc-300 rounded-2xl cursor-pointer p-4 ">

       
        <div  className='w-full h-8 bg-400 rouned-br-2xl p-2 rounded-bl-2xl   border-t grid place-content-center  '>

<p   className='text-sm font-medium  text-center '>{singlePost.title}</p>


</div>

        </div>

   

       
    </div>
    ))}
   

  </div></div>
  </>):(<>
  
    <div  className='flex w-screen justify-center  flex'>

<div className="w-2/3 grid grid-cols-2 p-4 gap-4  items-center place-content-center mx-auto">


{postsData !== null && postsData.map((singlePost: any, index: any) => (
  
  <div key={index} className="flex w-full shadow-xl p-2 rounded-xl border border-slate-200">
    <div className="h-20 w-32 bg-slate-200 rounded-md">

    </div>
  <div>
  <p   className='text-xs font-medium text-start ml-2'>{singlePost.title}</p>


    <p   className='text-xs  mt-2 text-start ml-2'>{formatText(singlePost.body)}</p>

    </div>


  </div>

))}





</div></div>
  
  </>)
}


{/*Medicine For You, By You */}


<div className='w-full flex justify-center mt-10'>
   <p className='text-center text-md font-medium ' style={{marginTop:`-20px`}}>Kemet&apos;s Bold Commitment</p>




   </div>


   <div className='flex w-screen justify-center'>
  <div className="w-2/3">
    <div className="w-full">
      <p className="text-xl mt-8 font-semibold text-sm text-left">
        RATIONALE FOR COMPOUNDING: Empowering Underserved Communities
      </p>
    </div>

    <p className=" text-sm font-light mt-4 ">For the next 3 years, Kemet is proudly partnering with and championing the following underserved populations. Together, we&apos;ll consistently unveil essential knowledge and drive positive change for these vital communities.</p>
 
 
 <p className="mt-2"><ChevronRightIcon />   <span className="font-light text-sm">Indigenous women [Publications Coming Soon]</span></p>
  
 
 <p className="mt-2"><ChevronRightIcon />   <span className="font-light text-sm ">People who identify as Trans or Queer [Publications Coming Soon] </span></p>
  

   
 <p className="mt-2"><ChevronRightIcon />   <span className="font-light text-sm">People over 50 years old [Publications Coming Soon]</span></p>
  


   
 <p className="mt-2"><ChevronRightIcon />   <span className="font-light text-sm">People under 12 years old [Publications Coming Soon]</span></p>
  
  

 <p className="mt-2"><ChevronRightIcon />   <span className="font-light text-sm ">People frequently impacted by drug shortages [Publications Coming Soon]</span></p>
  

 <p className="mt-2"><ChevronRightIcon />   <span className="font-light text-sm ">People on the Autism spectrum [Publications Coming Soon]</span></p>
  
  
  
  
  </div>
</div>


<div className="flex w-screen justify-center px-10">

<div className='w-2/3 bg-slate-100 py-2 px-6  mt-8 rounded-xl py-8 md:px-16 '>

    <p className="font-medium text-md text-center">Join our exclusive community and stay at the forefront of groundbreaking research! </p>


    <p className="font-light text-sm mt-4 text-center">
    Subscribe now to receive timely updates that will empower your knowledge and keep you informed about the latest developments in your field.
  </p>

   <div  className='w-full h-8 bg-400 rouned-br-md rounded-bl-2xl flex flex-col border-t  '>
            
                <button className='text-xs font-medium  text-center '>Subscribe Now</button>
            </div>
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
  


<div className='flex-grow'></div>




<Footer />

    </main>
  )
}
