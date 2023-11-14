"use client"
import Image from 'next/image'
import { useState, useEffect } from "react";
import ResponsiveCarousel from "@/components/Carousel";
import Link from 'next/link';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';

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




const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});





export default function Pharmacies() {
  

const [isOpenOne, setIsOpenOne] = useState(false);
const [isOpenTwo, setIsOpenTwo] = useState(false);
const [isOpenThree, setIsOpenThree] = useState(false);

const [displayText, setDisplayText] = useState('PATIENT');
const [isChecked, setIsChecked] = useState(false);

const [open, setOpen] = React.useState(false);

const [allSelections, setSelections] = useState([]);

const [currCity, setCurrCity] = useState("");

const [ipData, setIPData] = useState("");



const [additionalInformation, setAdditionalInformation] = useState("");

const [firstName, setFirstName]= useState("");
const [lastName, setLastName]= useState("");
const [postal, setPostal]= useState("");
const [phone, setPhone]= useState("");

const router = useRouter();

const [pharmaciesRequestData, setPharmRequestData] = useState([]);

  // Filtered data state
  const [filteredPharmacies, setFilteredPharmacies] = useState([]);



var errorMessage = "";





//filter pharmacies

 // Filter pharmaciesRequestData when it changes

 function filterPharmacies(city) {
  const filteredData = pharmaciesRequestData.filter(
    (pharmacy) => pharmacy?.city.toLowerCase().includes(city.toLowerCase())
  );

  setFilteredPharmacies(filteredData);
}



useEffect(() => {
  const selections = Cookies.get('allSelections');
  const addedDetails = Cookies.get('additionalInformation');


  const savedFirstName = Cookies.get('firstName');
  const savedLastName = Cookies.get('lastName');
  const savedPostal = Cookies.get('postal');
  const savedPhone = Cookies.get('phone');


  // Do something with the retrieved values (e.g., set state)
  setFirstName(savedFirstName || '');
  setLastName(savedLastName || '');
  setPostal(savedPostal || '');
  setPhone(savedPhone || '');
  


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


  //alert(firstName +" "+ lastName+" "+postal)

  //this method handles creation of anoniposts for logged in user

  
  //setIsLoading(true);

  const formData = new FormData();

  formData.append('first_name',  firstName.toString());
  formData.append('last_name',  lastName.toString());
  formData.append('postal_code',  postal.toString());
  formData.append('phone', phone.toString());
  formData.append('additional_info',additionalInformation.toString());
  formData.append('request',  JSON.stringify(allSelections));
  formData.append('ip_address', ipData.toString());



  


  formData.append('selected_pharm',  "...");

  formData.append('ip_address',  "...");

  formData.append('est_location',  "...");


  try {

   


   // create new guest post
    axios.post('https://kemet.care/api/new_patient_request', formData )
      .then((response: { data: any; }) => {
        const data = response.data;
        console.log(data);

        router.push("../../patients/success")
       // setPostData(data.post_text.split('\n'));
      // setIsLoading(false);
     // setOpenSuccessDialog(true)
      })
      .catch((error: any) => {
        console.error('Error fetching data:', error);
       // setIsLoading(false);
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


//setIsLoading(false);


}
finally {
///  setIsLoading(false);

}

}




const handleClickOpen = () => {
  setOpen(true);
};

const handleClose = () => {
  setOpen(false);
};


useEffect(() => {
  const interval = setInterval(() => {
    setDisplayText((currentText) => (currentText === 'Patient' ? 'Prescriber' : 'Patient'));
  }, 3000);

  return () => {
    clearInterval(interval);
  };
}, []);


const checkboxStyle = {
  background: isChecked ? 'green' : 'white', // Change the background color when checked
  border: '1px solid #ccc',
  borderRadius: '4px',
  width: '20px',
  height: '20px',
};



//get patient request data
useEffect(() => {
  // Fetch all posts
  axios.get('https://kemet.care/api/all_pharm', {
   
  })
    .then((response: { data: any; }) => {
      const data = response.data;
     console.log(data);
      setPharmRequestData(data );
    })
    .catch((error: any) => {
      console.error('Error fetching data:', error);
    });
}, []);
 


//get patient request data
useEffect(() => {
  // Fetch all posts
  axios.get('https://kemet.care/api/get-ip', {
   
  })
    .then((response: { data: any; }) => {
      const data = response.data;
     console.log(data);
      setIPData(data.ip );
      getLocationFromIP();
     // alert(data.ip)
    })
    .catch((error: any) => {
      console.error('Error fetching data:', error);
    });
}, []);
 

function getLocationFromIP(){

  axios.get('https://ipinfo.io/?token=e04cc4d0473fbe', {
   
})
  .then((response: { data: any; }) => {
    const data = response.data;
   console.log(data);
   // setIPData(data.ip );

   setCurrCity(data.city);

  // filterPharmacies(data.city)
   // alert(data.city)
  })
  .catch((error: any) => {
    console.error('Error fetching data:', error);
  });


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
       <DialogTitle className="font-medium text-sm">{"Confirm To Send Your Request To A Prescriber"}</DialogTitle>
       <DialogContent>
         <p id="alert-dialog-slide-description " className="text-zinc-600 text-sm font-light">
         Confirm to send your request to a pharmacist  </p>
       </DialogContent>
       <DialogActions>
         <p className='text-zinc-400 cursor-pointer mr-10 hover:mb-1' onClick={handleClose}>Disagree</p>
         <button onClick={send} className='text-zinc-700 cursor-pointer hover:mb-1' >Agree</button>
       </DialogActions>
     </Dialog>
   </React.Fragment>

    <main className="bg-white relative">

<Header />


<div className="h-[350px] w-screen bg-cover bg-center" style={{ backgroundImage: "url('/images/home/Medicines_share.jpeg')" }}>
 
 <div className="w-full h-full grid place-content-center md:px-10" style={{backgroundColor:`rgba(0,0,0,0.7)`}}>
 <div className='w-8 absolute h-8 bg-white  rounded-full md:mt-20 ml-10 hidden md:block cursor-pointer hover:ml-2 grid place-content-center p-1'>
  <img src="/images/home/arrow-back-simple-svgrepo-com.svg" alt="arrow-back-kemnet" />
    
    </div>



    <p className='text-center text-white text-xl font-semibold'>WELCOME TO OUR CUSTOMIZATION CONSULT REQUEST PAGE</p>
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

  

  <div className='h-[300] w-2/3 bg-slate-200 rounded-md p-4 '>




    <p className='text-xl font-medium text-center    mt-10'>Nearby Pharmacies</p>

    <p className='text-sm text-zinc-500 text-center  mt-2 font-light'>Select Which Pharmacy You Would Want</p>

    <div className="w-full  mt-4 flex justify-center ">

<input type="text" className='p-2 border border-zinc-400 rounded-xl w-[200px] bg-transparent text-xs text-zinc-700' placeholder='Search By Postal Code' />

<Link href="../../patients/pharmacies" className='text-center text-sm text-white font-light bg-black rounded-3xl flex items-center justify-center px-6 hover:mt-2 ml-[20px] mr-6'>Submit</Link>




</div>





   <div className='w-full flex justify-center  ml-6'>
   <div className="w-full grid grid-cols-2 grid-gap-8 mt-4 items-center">

   {pharmaciesRequestData !== null && pharmaciesRequestData.map((singleRequest: any, index: any) => (


<div className=' w-full mt-6 ' key={index}>

<label>
          <input
            type="radio"
            name={singleRequest.id}
            value={singleRequest.id}
          //  checked={this.state.selectedOption === 'option2'}
         //   onChange={this.handleOptionChange}
          />
          <Link className='ml-4 font-medium text-sm text-zinc-800 hover:text-teal-500' href={"https://www.google.com/maps/dir//Hamptons+Pharmacy%2FRemedy's+RX.+Edmonton+canada/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x539f8bec5f9eabc7:0x76fba45b9d4bc801?sa=X&ved=2ahUKEwiU_-jL46eCAxX5rYkEHbUWDwQQ9Rd6BAg4EAA&hl=en"}>{singleRequest.name}<br></br><span className='text-xs font-light text-zinc-800 hover:text-teal-500'><span className="font-semibold text-black ml-8">Postal Code: </span>{singleRequest.postal_code} <br></br><span className="font-semibold text-black ml-8">City: </span>{singleRequest.city}</span></Link> 
          <span style={checkboxStyle}></span>
        </label>


</div>
   ))}









</div>


    </div>       
       
       
       
       
         <div className="mt-4 flex justify-center">

         <button onClick={handleClickOpen} className='text-center text-sm text-white font-light bg-black rounded-3xl flex items-center justify-center px-6 hover:mt-2 ml-[20px] w-32 h-10 mr-6'>Submit</button>

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
<Footer />

    </main>

    </>
  )
}
