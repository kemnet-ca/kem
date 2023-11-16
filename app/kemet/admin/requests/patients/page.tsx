"use client"
// Import necessary React and Material-UI components

import Link from 'next/link';
import { AppBar, Toolbar, IconButton, Drawer, List, ListItem, ListItemText, Menu, MenuItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import React, { useState,useEffect } from 'react';

import axios, { AxiosError, AxiosResponse } from "axios";

import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';
import { useRouter } from 'next/navigation';




const Transition = React.forwardRef(function Transition(
    props: TransitionProps & {
      children: React.ReactElement<any, any>;
    },
    ref: React.Ref<unknown>,
  ) {
    return <Slide direction="up" ref={ref} {...props} />;
  });
// Your main component
const AdminPatients = () => {
    const [isMenuOpen, setMenuOpen] = useState(false);
   
    const [anchorEl, setAnchorEl] = useState(null);
    const [anchorElTwo, setAnchorElTwo] = useState(null);
    
    const [patientRequestData, setPatientRequestData] = useState([]);
    const [open, setOpen] = React.useState(false);
    const [requestData, setRequestData] = React.useState([]);

    const [additionalInfo, setAdditionalInfo] = React.useState([]);



    const router = useRouter();

    const gotToPatients = () => {
      router.push("../requests/patients")
     };

   
 


   const goToPrescribers = () => {
       router.push("../requests/prescribers")
     };
  
    const toggleMenu = () => {
      setMenuOpen(!isMenuOpen);
    };
  
    const handleMenuClick = (event:any) => {
      setAnchorEl(event.currentTarget);
    };

    const goToMed = () => {
      router.push("../cms/med_blog")
    };

    const goToRD = () => {
       router.push("../requests/prescribers")
     };

     const goToKnowledge = () => {
       router.push("../requests/prescribers")
     };
 


const handleClickOpen = () => {
    setOpen(true);
  };
  
  const handleClose = () => {
    setOpen(false);
  };
  
    const handleMenuClose = () => {
      setAnchorEl(null);
    };

//get patient request data
    useEffect(() => {
        // Fetch all posts
        axios.get('https://kemet.care/api/requests/patients', {
         
        })
          .then((response: { data: any; }) => {
            const data = response.data;
           console.log(data);
            setPatientRequestData(data );
          })
          .catch((error: any) => {
            console.error('Error fetching data:', error);
          });
      }, []);
  

function showRequestInf(data:any, additionalInformation:any){

   
    setRequestData(JSON.parse(data));
    setAdditionalInfo(additionalInformation);
    setOpen(true);

}


const handleMenuClickTwo = (event:any) => {
  setAnchorElTwo(event.currentTarget);
};

const handleMenuCloseTwo = () => {
  setAnchorElTwo(null);
};


const goToDashboard = () => {
  router.push("../../admin/crm")
};

  return (
    <div >

<React.Fragment>
     
     <Dialog
       open={open}
       TransitionComponent={Transition}
       keepMounted
       onClose={handleClose}
       aria-describedby="alert-dialog-slide-description"
     >
       <DialogTitle className="font-semibold text-md">{"Request Details"}</DialogTitle>
       <DialogContent>

       {requestData !== null && requestData.map((single: any, index: any) => (
        <p key={index} id="alert-dialog-slide-description " className="text-zinc-900 text-sm font-normal"><span className="mr-2">{index+1}</span>{single}</p>

       ))}

       <p className='mt-4 font-medium text-sm'>Additional Info:</p>

       <p className="text-zinc-900 text-sm font-normal">
        {additionalInfo}
 
       </p>


        
       </DialogContent>
       <DialogActions>
         <p className='text-zinc-400 cursor-pointer mr-10 hover:mb-1' onClick={handleClose}>Close</p>
        
       </DialogActions>
     </Dialog>
   </React.Fragment>

      {/* Top Navigation Bar */}
      <AppBar position="static">
        <Toolbar style={{ backgroundColor: 'black' }}>
          {/* Hamburger Icon to toggle the slide-in menu */}
          <IconButton edge="start" color="inherit" onClick={toggleMenu}>
            <MenuIcon />
          </IconButton>
          {/* Your other top navigation bar content goes here */}
        </Toolbar>
      </AppBar>

      {/* Slide-in Menu */}
      <Drawer anchor="left" open={isMenuOpen} onClose={toggleMenu} PaperProps={{
            sx: { width: "20%" , marginTop:`5%`},
          }}>
        <List>
          {/* Add your menu items here */}
          <ListItem button onClick={goToDashboard}>
            <ListItemText primary="Dashboard" />
          </ListItem>

          <hr></hr>
          <ListItem button>
            <ListItemText primary="Pharmacies" />
          </ListItem>

          <hr></hr>

          {/* Main Menu Item: Requests */}
          <ListItem button onClick={handleMenuClick}>
            <ListItemText primary="Requests" />
          </ListItem>
          <hr></hr>

          {/* Sub Menu Items: Patients and Prescribers */}
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
          >
           <MenuItem onClick={gotToPatients}>Patients</MenuItem>
            <hr></hr>
            <MenuItem onClick={goToPrescribers}>Prescribers</MenuItem>
          </Menu>


            {/* Main Menu Item: Requests */}
            <ListItem button onClick={handleMenuClickTwo}>
            <ListItemText primary="Blogs" />
          </ListItem>
          <hr></hr>

            {/* Sub Menu Items: Patients and Prescribers */}
            <Menu
            anchorEl={anchorElTwo}
            open={Boolean(anchorElTwo)}
            onClose={handleMenuCloseTwo}
          >
            <MenuItem onClick={goToMed}>Med Info</MenuItem>
            <hr></hr>
            <MenuItem onClick={goToRD}>R & D</MenuItem>
            <hr></hr>
            <MenuItem onClick={goToKnowledge}>Knowledge</MenuItem>
          </Menu>        


        </List>
      </Drawer>

    

      <div className="w-screen h-screen px-4 py-4">
        <div className="grid grid-cols-4 gap-4">

        <div className="w-full h-40 shadow-xl rounded-xl border border-zinc-200 border-2 p-4">
  <p className="text-sm text-zinc-500 font-medium">Total Patient Requests</p>

  <p className="text-xl text-zinc-700 font-medium mt-4">{patientRequestData.length}</p>


</div>

<div className="w-full h-40 shadow-xl rounded-xl border border-zinc-200 border-2 p-4">
  <p className="text-sm text-zinc-500 font-medium">Today&apos;s Patient Requests</p>

  <p className="text-xl text-zinc-700 font-medium mt-4">{ patientRequestData.length}</p>
</div>

            

        </div>
     

       

      {/* Your main content goes here */}

      <div className="overflow-x-auto shadow-md sm:rounded-lg mt-8">
    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-200 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-200">


            
            <tr>
                <th scope="col" className="px-6 py-3">
Full Name
                </th>
                <th scope="col" className="px-6 py-3">
                    Phone
                </th>

                <th scope="col" className="px-6 py-3">
                    Pharmacy
                </th>


                <th scope="col" className="px-6 py-3">
                Postal 
                </th>



                 <th scope="col" className="px-6 py-3">
               IP addr
                </th>
                <th scope="col" className="px-6 py-3">
                    Request Info
                </th>
                <th scope="col" className="px-6 py-3">
                   Date
                </th>
                <th scope="col" className="px-6 py-3">
                    Action
                </th>
            </tr>
        </thead>
        <tbody>

             {patientRequestData !== null && patientRequestData.map((singleRequest: any, index: any) => (

                <>

<tr className="bg-gray-200 border-b dark:border-gray-700 even:text-white odd:text-black" key={index}>
             <th scope="row" className="px-6 py-4 font-medium text-zinc-900 whitespace-nowrap text-zinc-900">
                   {singleRequest.first_name + " "+singleRequest.last_name}
                </th>
                <td className="px-6 py-4 text-gray-700">
                   {singleRequest.phone}
                </td>

                <td className="px-6 py-4 text-gray-700">
                   {singleRequest.pharmacy_name}
                </td>
                <td className="px-6 py-4 text-gray-700">
                   {singleRequest.postal_code}
                </td>
                <td className="px-6 py-4 text-gray-700">
                   {singleRequest.ip_address}
                </td>
                 <td className="px-6 py-4 text-gray-700">
                   {formatMySQLTimestamp(singleRequest.created_at)}
                </td>

               
                <td className="px-6 py-4 text-gray-700 font-medium cursor-pointer hover:font-semibold">
                   <p onClick={()=>showRequestInf(singleRequest.consult_request,singleRequest.additional_info)}>View</p> 
                </td>
                <td className="px-6 py-4 text-gray-700">
                    <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Delete</a>
                </td>
            </tr>



                </>
          

        ))}
      



         
        </tbody>
    </table>
</div>
</div>
      <div>
        {/* table content */}


       
      </div>
    </div>
  );
};

function formatMySQLTimestamp(mysqlTimestamp:any) {
  const formattedTimestamp = new Date(mysqlTimestamp).toLocaleString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    timeZoneName: 'short'
  });

  return formattedTimestamp;
}

export default AdminPatients;
