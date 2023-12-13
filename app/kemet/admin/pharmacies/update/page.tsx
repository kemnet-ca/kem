"use client"
// Import necessary React and Material-UI components

import Link from 'next/link';
import { AppBar, Toolbar, IconButton, Drawer, List, ListItem, ListItemText, Menu, MenuItem, FormControl, Select } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import React, { useState,useEffect } from 'react';
import Cookies from 'js-cookie';
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

import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import { error } from 'console';





const Transition = React.forwardRef(function Transition(
    props: TransitionProps & {
      children: React.ReactElement<any, any>;
    },
    ref: React.Ref<unknown>,
  ) {
    return <Slide direction="up" ref={ref} {...props} />;
  });
// Your main component
const AdminEditPharm = () => {
  var errorMessage ="";
    const [isMenuOpen, setMenuOpen] = useState(false);
   
    const [anchorEl, setAnchorEl] = useState(null);

    const [loading, setLoading] = useState(false);
    const [anchorElTwo, setAnchorElTwo] = useState(null);
    
    const [pharmaciesRequestData, setPharmRequestData] = useState([]);
    const [open, setOpen] = React.useState(false);
    const [requestData, setRequestData] = React.useState([]);

    const [additionalInfo, setAdditionalInfo] = React.useState([]);
    const [selectedOption, setSelectedOption] = React.useState('APPROVED');
  


    const [pharmName, setPharmName] = useState("");
    const [pharmAddress, setPharmAddress] = useState("");
    const [pharmPhone, setPharmPhone] = useState("");
    const [pharmID, setPharmID] = useState("");

    const [province, setProvince] = useState("");
    const [postal, setPostal] = useState("");

    const [city, setCity] = useState("");
    //const [address, setAdress] = useState("");
    const [fax, setFax] = useState("");
    const [email, setEmail] = useState("");


  
  
    useEffect(() => {
      
      const nameFromCookie = Cookies.get('name');
      const postalFromCookie = Cookies.get('postal');
      const phoneFromCookie = Cookies.get('phone');
      const faxFromCookie = Cookies.get('fax');
      const cityFromCookie = Cookies.get('city');
      const idFromCookie = Cookies.get('id');
      const emailFromCookie = Cookies.get('email');
      const addressFromCookie = Cookies.get('address');
  
      if(nameFromCookie != null){
       // alert(nameFromCookie)
        setPharmName(nameFromCookie);
      }

      if(postalFromCookie != null){

       // alert(postalFromCookie)
        setPostal(postalFromCookie);
      }
     
     if(phoneFromCookie != null){
      setPharmPhone(phoneFromCookie);
     }

     if(faxFromCookie){

      setFax(faxFromCookie);

     }
     
      if(cityFromCookie){
        setCity(cityFromCookie);
      }

      if(idFromCookie){

        setPharmID(idFromCookie);

      }

      if(emailFromCookie){
        setEmail(emailFromCookie);
      }

      if(addressFromCookie){
        setPharmAddress(addressFromCookie);
      }
      
     
    }, []);
  
    const handleStatusChange = (event:any) => {
      setSelectedOption(event.target.value);
  
      
    };
  




    const router = useRouter();

    const gotToPatients = () => {
      router.push("../../admin/requests/patients")
     };

   
 


   const goToPrescribers = () => {
       router.push("../../admin/requests/prescribers")
     };
  
    const toggleMenu = () => {
      setMenuOpen(!isMenuOpen);
    };
  
    const handleMenuClick = (event:any) => {
      setAnchorEl(event.currentTarget);
    };

    const goToMed = () => {
      router.push("../../admin/cms/med_blog")
    };

    const goToRD = () => {
      router.push("../../admin/cms/research")
    };

    const goToKnowledge = () => {
      router.push("../../admin/cms/knowledge")
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





const handleMenuClickTwo = (event:any) => {
  setAnchorElTwo(event.currentTarget);
};

const handleMenuCloseTwo = () => {
  setAnchorElTwo(null);
};


const goToDashboard = () => {
  router.push("../../../kemet/admin/crm")
};


function update(){

  setLoading(true)

  //  alert(selectedFromDate.toString())
   // alert(selectedToDate.toString())
  // alert(selectedOption.toString());
    const formData = new FormData();

    formData.append('email',  email.toString());
    formData.append('id',  pharmID.toString());
    formData.append('status',  selectedOption.toString());

    try {

 


      // create new guest post
       axios.post('https://www.back.kemet.care/api/pharm/update', formData )
         .then((response: { data: any; }) => {
           const data = response.data;
           console.log(data);

           alert("Pharmacy Updated Successfully!");

          // setPatientRequestData(data);

          setLoading(false)
   
        
           
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

      setLoading(false)
   }
   
   
   //setIsLoading(false);
   
   
   }
   finally {
   ///  setIsLoading(false);
   setLoading(false)
   }
   
      }
   

 
  
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
          <p className="font-medium text-xl text-white ml-4">New Pharmacy</p>

          <Link href={"../pharmacies"}className="font-medium text-sm text-white ml-auto border-1 border-white  border p-2 rounded-md">View Pharmacies</Link>
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

        <p className="text-xl text-zinc-700 ">CREATE A NEW PHARMACY</p>

        <Box sx={{ maxWidth: 400 }}>
      <TextField
        label="Pharmacy Name"
        name="name"
        value={pharmName
        }
       onChange={(e) => setPharmName(e.target.value)}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Address"
        name="address"
        value={pharmAddress}
      onChange={(e) => setPharmAddress(e.target.value)}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Phone"
        name="phone"
        value={pharmPhone}
       onChange={(e) => setPharmPhone(e.target.value)}
        fullWidth
        margin="normal"
      />

<TextField
        label="Postal Code"
        name="postal"
        value={postal}
       onChange={(e) => setPostal(e.target.value)}
        fullWidth
        margin="normal"
      />



<TextField
        label="Fax"
        name="fax"
        value={fax}
       onChange={(e) => setFax(e.target.value)}
        fullWidth
        margin="normal"
      />

<TextField
        label="Email"
        name="email"
        value={email}
       onChange={(e) => setEmail(e.target.value)}
        fullWidth
        margin="normal"
      />

<p className='text-zinc-500 text-sm mb-2' >Status</p>
       <FormControl className='w-80'>
      <Select
      className='w-80'
        value={selectedOption}
        onChange={handleStatusChange}
        displayEmpty

       // className="w-full md:w-[200px] mr-auto"
      >
      

        <MenuItem value="APPROVED">APPROVED</MenuItem>
        <MenuItem value="PENDING">PENDING</MenuItem>
       
      </Select>
    </FormControl>
      {/* Add other text fields for the remaining data */}
      <div className='h-2'>

</div>
{
  loading==true?(<><p>Sending ...</p></>):(<>
  
  <Button onClick={update} className='text-zinc-700 hover:text-white mt-6 mb-10 hover:bg-black' variant="contained" >
        Submit
      </Button>
  </>)
}
    </Box>

      

       

      {/* Your main content goes here */}

     </div> 
      <div>
        {/* table content */}




       
      </div>
    </div>
  );
};

export default AdminEditPharm;
