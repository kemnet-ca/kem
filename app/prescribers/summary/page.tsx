"use client"
import Image from 'next/image'
import { useState, useEffect } from "react";
import ResponsiveCarousel from "@/components/Carousel";
import Link from 'next/link';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import Cookies from 'js-cookie';

import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';
import axios, { AxiosError, AxiosResponse } from "axios";
import { useRouter } from 'next/navigation';
import '../../css/loader.css';
import ParticipatingPharms from '@/components/ParticipatingPharms';


const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});


export default function Summary() {
  


const [isChecked, setIsChecked] = useState(false);

const [open, setOpen] = React.useState(false);

const handleClickOpen = () => {
  setOpen(true);
};

const handleClose = () => {
  setOpen(false);
};

const [allSelections, setSelections] = useState([]);
const [additionalInformation, setAdditionalInformation] = useState("");
const [firstName, setFirstName]= useState("");
const [lastName, setLastName]= useState("");
const [licensee, setLicensee]= useState("");
const [isLoading, setIsLoading]= useState(false);

const [selectedPharm, setSelectedPharm]= useState("");
const [currCity, setCurrCity]= useState("");
const [ip, setIP]= useState("");




useEffect(() => {
    const selections = Cookies.get('allSelections');

    const addedDetails = Cookies.get('additionalInformation');

    const selected_pharmacy = Cookies.get("selected_pharmacy");

    const curr_city = Cookies.get("curr_city");

    const ip = Cookies.get("ip_address");



    if(selected_pharmacy  !=undefined){



    //  alert (selected_pharmacy);
  
      // 'allSelections' is a string, so you can work with it here
     // console.log(allSelections);
  
      setSelectedPharm(selected_pharmacy);
  
   }

   if(curr_city  !==undefined){
  
    // 'allSelections' is a string, so you can work with it here
  //  console.log(allSelections);

    setCurrCity(curr_city);

 }

 if(ip  !==undefined){
  
  // 'allSelections' is a string, so you can work with it here
//  console.log(allSelections);

  setIP(ip);

}

   


    if(addedDetails !==undefined){
  
      // 'allSelections' is a string, so you can work with it here
      console.log(allSelections);
  
      setAdditionalInformation(addedDetails);
  
   }

  
    // Check if 'allSelections' is undefined, and provide a default value if needed
    if (selections !== undefined) {
      // 'allSelections' is a string, so you can work with it here
      console.log(allSelections);
  
      setSelections(JSON.parse(selections))
  
    //  alert(selections);
    } else {
      // 'allSelections' is undefined, handle this case, e.g., provide a default value
      console.log('Cookie not found or is undefined');
    }
  
   
  }, []);



 
  
  
//function to go back
const router = useRouter();

function goBack()
{
  router.back();
}
  
  var errorMessage = "";
  
  
  useEffect(() => {
    const selections = Cookies.get('allSelections');
    const addedDetails = Cookies.get('additionalInformation');
  
  
    const savedFirstName = Cookies.get('firstName');
    const savedLastName = Cookies.get('lastName');
  
    const savedLicensee = Cookies.get('licensee');
  
    // Do something with the retrieved values (e.g., set state)
    setFirstName(savedFirstName || '');
    setLastName(savedLastName || '');
    setLicensee(savedLicensee || '');
  
    
  
  
    if(addedDetails !==undefined){
  
       // 'allSelections' is a string, so you can work with it here
       console.log(allSelections);
  
       setAdditionalInformation(addedDetails);
  
    }
  
    // Check if 'allSelections' is undefined, and provide a default value if needed
    if (selections !== undefined) {
      // 'allSelections' is a string, so you can work with it here
      console.log(allSelections);
  
      setSelections(JSON.parse(selections))
  
      
    } else {
      // 'allSelections' is undefined, handle this case, e.g., provide a default value
      console.log('Cookie not found or is undefined');
    }
  
   
  }, []);


  const send = async () => {

   if(selectedPharm == ""|| selectedPharm ==null || selectedPharm== undefined){

    alert("You did not select a pharmacy, please select a pharmacy. ");

   
    router.push("../../prescribers/pharmacies/list")

   }
   else{


    
    setIsLoading(true);
  
    const formData = new FormData();

    
  
    formData.append('first_name',  firstName.toString());
    formData.append('last_name',  lastName.toString());
    formData.append('licensee',  licensee.toString());
    
    formData.append('additional_info',additionalInformation.toString());
    formData.append('request',  JSON.stringify(allSelections));
    formData.append('est_location',  currCity.toString());
    formData.append('selected_pharm',  selectedPharm.toString());

    formData.append('ip_address',  ip.toString());

    
  
  
    try {
  
     
  
  
     // create new guest post
      axios.post('https://www.back.kemet.care/api/new_prescriber_request', formData )
        .then((response: { data: any; }) => {
          const data = response.data;
          console.log(data);
  
          router.push("../../prescribers/success")

          Cookies.remove("selected_pharmacy")

          Cookies.remove("allSelections")

          Cookies.remove("additionalInformation")
          Cookies.remove("firstName")
          Cookies.remove("lastName")

          
        
         setIsLoading(false);
      
        })
        .catch((error: any) => {
          console.error('Error fetching data:', error);
          setIsLoading(false);
        });
    
  
  }
  
  catch (err ) {
       
  
  if (err instanceof Error) {
    const axiosError = err as AxiosError;
    if (axiosError.response) {
      const errorResponse = axiosError.response as AxiosResponse;
      if (errorResponse.data) {
        errorMessage = errorResponse.data.message;
      }
    }
  
   
  
     console.log(errorMessage);
  }
  
  
  setIsLoading(false);
  
  
  }
  finally {
    setIsLoading(false);
  
  }

}
  
  }
 



  return (

    <>
    {/**popup to confirm faxing and emailing */}


<React.Fragment>
     
     <Dialog
       open={open}
       TransitionComponent={Transition}
       keepMounted
       onClose={handleClose}
       aria-describedby="alert-dialog-slide-description"
     >


       <DialogTitle className="font-medium text-sm">{"Confirm To Send Your Request To A Pharmacy"}</DialogTitle>
       <DialogContent>
         <p id="alert-dialog-slide-description " className="text-zinc-600 text-sm font-light">
         If you agree, your information and consult requests which you have submitted will be sent to the selected Pharmacy by fax and email.
   
         
         </p>

         <p id="alert-dialog-slide-description " className="text-red-600 text-sm font-light mt-4">
        {errorMessage} 
         
         </p>

         
       </DialogContent>
       <DialogActions>
         <p className='text-zinc-400 cursor-pointer mr-10 hover:mb-1' onClick={handleClose}>Disagree</p>
          
          {
            isLoading == true?(<> <div className="loader "></div></>):(<><button onClick={send} className='text-zinc-700 cursor-pointer hover:mb-1' >Agree</button></>)
          }
         
         
       </DialogActions>
     </Dialog>
   </React.Fragment>

    <main className="bg-white relative">

<Navbar />


<div className="h-[350px] w-screen bg-cover bg-center" style={{ backgroundImage: "url('/images/home/Medicines_share.jpeg')" }}>
 
 <div className="w-full h-full grid place-content-center md:px-10" style={{backgroundColor:`rgba(0,0,0,0.7)`}}>
 <div className='w-8 absolute h-8 bg-white  rounded-full md:mt-20 ml-10 hidden md:block cursor-pointer hover:ml-2 grid place-content-center p-1'>
  <img onClick={goBack} src="/images/home/arrow-back-simple-svgrepo-com.svg" alt="arrow-back-kemnet" />
    
    </div>



    <p className='text-center text-white text-xl font-semibold mt-6'>Welcome to your Medication Customization Consultation Request page.</p>
    <p className='text-center text-white text-sm mt-4 font-normal'>Please let us know how we can assist with your medication needs. You can customize<br></br> medications to meet your unique requirements and request medications that are currently out<br></br> of stock. A pharmacist will contact you to conduct an assessment and arrange for your<br></br> medicines to be custom-made for you.
</p>

 </div>
</div>


<div className='w-screen 0 md:pb-10 md:pl-20 md:pr-20 md:pt-10 flex justify-center'>
    
  {/* Create 6 copies of inner-img */}

  

  <div className='h-[300] md:w-2/3 w-full bg-slate-200 rounded-md p-4 '>




    <p className='text-xl font-medium text-center    mt-10'>Summary</p>

    

    <div className="w-full flex mt-8 ">

<p className='font-medium text-sm'>Your information</p>


</div>
    <div className="w-full bg-white p-4 rounded-md mt-4">

        <p className="mt-4 font-light text-sm"><span className="text-zinc-600">Prescriber First Name:</span> {firstName} </p>
        <p className="mt-4 font-light text-sm"><span className="text-zinc-600">Prescriber First Name:</span> {lastName} </p>
        <p className="mt-4 font-light text-sm"><span className="text-zinc-600">Prescriber License Number:</span> {licensee}</p>
 
       

    </div>


    <div className="w-full flex mt-8 ">

<p className='font-medium text-sm'>Selected choices for consult</p>


</div>

<div className="w-full">

<div className="w-full p-6 bg-white rounded-xl mt-4 ">

{allSelections.map((value: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | React.PromiseLikeOfReactNode | null | undefined, index: React.Key | null | undefined) => (
     

      <p key={index} className='text-sm font-normal mt-4'>{value}</p>
    ))}

 





</div>
</div>

{

  /*
<div className="w-full flex mt-8 ">

<p className='font-medium text-sm'>Additional information</p>


</div>

<div className="w-full">

<div className="w-full p-6 bg-white rounded-xl mt-4 text-sm font-light ">

{additionalInformation}





</div>
</div>

  */
}
  



       
       
       
         <div className="mt-4 flex justify-center">

         <button onClick={handleClickOpen} className='text-center text-sm text-white font-light bg-black rounded-3xl flex items-center justify-center px-6 hover:mt-2 ml-[20px] w-32 h-10 mr-6'>Submit</button>

         </div>





</div>

</div>

{ //<ParticipatingPharms />
}
<Footer />

    </main>

    </>
  )
}
