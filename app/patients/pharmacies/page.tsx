"use client"
import Image from 'next/image'
import { useState, useEffect } from "react";
import ResponsiveCarousel from "@/components/Carousel";
import Link from 'next/link';




export default function Pharmacies() {
  

const [isOpenOne, setIsOpenOne] = useState(false);
const [isOpenTwo, setIsOpenTwo] = useState(false);
const [isOpenThree, setIsOpenThree] = useState(false);

const [displayText, setDisplayText] = useState('PATIENT');
const [isChecked, setIsChecked] = useState(false);

const handleCheckboxChange = () => {
  setIsChecked(!isChecked); // Toggle the checkbox state
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



  const handleMouseEnterOne = () => {
    setIsOpenOne(true);
  };

  const handleMouseLeaveOne = () => {
    setIsOpenOne(false);
  };

  const handleMouseEnterTwo = () => {
    setIsOpenTwo(true);
  };

  const handleMouseLeaveTwo = () => {
    setIsOpenTwo(false);
  };


  const handleMouseEnterThree = () => {
    setIsOpenThree(true);
  };

  const handleMouseLeaveThree = () => {
    setIsOpenThree(false);
  };


  



  return (
    <main className="bg-white relative">

<div className="bg-slate-200 w-screen py-2 hidden md:flex  px-28 fixed z-10 shadow-sm top-header mt-0">

  
  <p className="main-logo text-black font-bold text-2xl">KEMET</p>
  <ul className="main-menu text-black flex space-x-6 justify-center ml-40 pt-2">
    <li className="menu-item  text-sm cursor-pointer hover:text-zinc-600 ">About Us</li>
    <li className="menu-item text-sm cursor-pointer hover:text-zinc-600 ">Our Focus</li>
    <li className="menu-item text-sm cursor-pointer hover:text-zinc-600 ">Kemet Science</li>
    <li className="menu-item text-sm cursor-pointer hover:text-zinc-600 ">Healthcare Pro Tools</li>
  </ul>



  
</div>


<div className="h-[350px] w-screen bg-cover bg-center" style={{ backgroundImage: "url('/images/home/Medicines_share.jpeg')" }}>
 
 <div className="w-full h-full grid place-content-center md:px-10" style={{backgroundColor:`rgba(0,0,0,0.7)`}}>

    <p className='text-center text-white text-xl font-semibold'>WELCOME TO OUR CUSTOMIZATION CONSULT REQUEST PAGE</p>
    <p className='text-center text-white text-sm mt-4 font-normal'>PLEASE LET US KNOW HOW WE CAN ASSIST YOU WITH YOUR MEDICATION NEEDS. <br></br>CUSTOMIZE MEDICATION TO UNIQUE NEEDS AND REQUEST MEDICATION THAT ARE OUT OF STOCK AND A PHARMACIST WILL CONTACT YOU TO COMPLETE AN ASSESSMENT AND GET YOUR MEDICINES CUSTOM MADE FOR YOU.</p>

 </div>
</div>


<div className='w-screen 0 md:pb-10 md:pl-20 md:pr-20 md:pt-10 flex justify-center'>
    
  {/* Create 6 copies of inner-img */}

  

  <div className='h-[300] w-2/3 bg-slate-200 rounded-md p-4 '>




    <p className='text-xl font-medium text-center    mt-10'>Nearby Pharmacies</p>

    <p className='text-sm text-zinc-500 font-normal text-center  mt-2'>Select Which Pharmacy You Would Want</p>




   <div className='w-full flex justify-center px-20 ml-6'>
   <div className="w-full grid grid-cols-2 grid-gap-8 mt-4 items-center">

<div className=' w-full mt-6 '>

<label>
          <input
            type="radio"
            name="options"
            value="option2"
          //  checked={this.state.selectedOption === 'option2'}
         //   onChange={this.handleOptionChange}
          />
          <span className='ml-4 font-medium text-sm text-zinc-800'>CareRx Compounding Edmonton <br></br><span className='text-xs font-extralight text-zinc-600'>CareRx Edmonton Compounding, 9509 156 St NW M5, Edmonton, AB T5P 4J5, Canada</span></span> 
          <span style={checkboxStyle}></span>
        </label>


</div>

<div className=' w-full mt-6 '>

<label>
          <input
            type="radio"
            name="options"
            value="option2"
          //  checked={this.state.selectedOption === 'option2'}
         //   onChange={this.handleOptionChange}
          />
          <span className='ml-4 font-medium text-sm text-zinc-800'>CareRx Compounding Edmonton <br></br><span className='text-xs font-extralight text-zinc-600'>CareRx Edmonton Compounding, 9509 156 St NW M5, Edmonton, AB T5P 4J5, Canada</span></span> 
          <span style={checkboxStyle}></span>
        </label>


</div>



<div className=' w-full mt-6 '>

<label>
          <input
            type="radio"
            name="options"
            value="option2"
          //  checked={this.state.selectedOption === 'option2'}
         //   onChange={this.handleOptionChange}
          />
          <span className='ml-4 font-medium text-sm text-zinc-800'>CareRx Compounding Edmonton <br></br><span className='text-xs font-extralight text-zinc-600'>CareRx Edmonton Compounding, 9509 156 St NW M5, Edmonton, AB T5P 4J5, Canada</span></span> 
          <span style={checkboxStyle}></span>
        </label>


</div>

<div className=' w-full mt-6 '>

<label>
          <input
            type="radio"
            name="options"
            value="option2"
          //  checked={this.state.selectedOption === 'option2'}
         //   onChange={this.handleOptionChange}
          />
          <span className='ml-4 font-medium text-sm text-zinc-800'>CareRx Compounding Edmonton <br></br><span className='text-xs font-extralight text-zinc-600'>CareRx Edmonton Compounding, 9509 156 St NW M5, Edmonton, AB T5P 4J5, Canada</span></span> 
          <span style={checkboxStyle}></span>
        </label>


</div>

</div>


    </div>       
       
       
       
       
         <div className="mt-4 flex justify-center">

         <Link href="../patients/data/details" className='text-center text-sm text-white font-light bg-black rounded-3xl flex items-center justify-center px-6 hover:mt-2 ml-[20px] w-32 h-10 mr-6'>Submit</Link>

         </div>





</div>

</div>




    </main>
  )
}
