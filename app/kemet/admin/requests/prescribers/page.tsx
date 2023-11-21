"use client"
// Import necessary React and Material-UI components

import Link from 'next/link';
import { AppBar, Toolbar, IconButton, Drawer, List, ListItem, ListItemText, Menu, MenuItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import React, { useState,useEffect } from 'react';
import { useRouter } from 'next/navigation';
import axios, { AxiosError, AxiosResponse } from "axios";
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';


const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

// Your main component
const AdminPrescribers = () => {
  var errorMessage = "";
    const [isMenuOpen, setMenuOpen] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);
    const [prescribersRequestData, setPrescribersRequestData] = useState<any[]>([]); 
    const [todaysRecords, setTodayRecords] = useState<any[]>([]); 
    const [prescribersRequestDataTwo, setPrescribersRequestDataTwo] = useState<any[]>([]); 

    const [open, setOpen] = React.useState(false);
    const [requestData, setRequestData] = useState<any[]>([]); 
     const [selectedFromDate, setSelectedFromDate] = useState("");
    const [selectedToDate, setSelectedToDate] = useState("");
   
    
    const [additionalInfo, setAdditionalInfo] = React.useState([]);

    const router = useRouter();

    const gotToPatients = () => {
      router.push("../requests/patients")
     };
 


   const goToPrescribers = () => {
       router.push("../requests/prescribers")
     };


   const goToPharmacies = () => {
    router.push("../pharmacies")
  };
  
    const toggleMenu = () => {
      setMenuOpen(!isMenuOpen);
    };
  
    const handleMenuClick = (event:any) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleMenuClose = () => {
      setAnchorEl(null);
    };

    const handleClickOpen = () => {
      setOpen(true);
    };

    const goToDashboard = () => {
      router.push("../../admin/crm")
    };
     
    const handleClose = () => {
      setOpen(false);
    };

    const [anchorElTwo, setAnchorElTwo] = useState(null);
    const handleMenuClickTwo = (event:any) => {
      setAnchorElTwo(event.currentTarget);
    };
  
    const handleMenuCloseTwo = () => {
      setAnchorElTwo(null);
    };


//get patient request data
    useEffect(() => {
        // Fetch all posts
        axios.get('https://kemet.care/api/requests/prescribers', {
         
        })
          .then((response: { data: any; }) => {
            const data = response.data;
           console.log(data);
           setPrescribersRequestData(data );
           setPrescribersRequestDataTwo(data)

            // Usage in your code
            const filteredData = getTodayRecords(data); // Assuming 'data' is an array of objects with 'created_at' field
            setTodayRecords(filteredData);
          })
          .catch((error: any) => {
            console.error('Error fetching data:', error);
          });
      }, []);
  

      function showRequestInf(data:any, additionalInformation:any){
        setOpen(true);

        setAdditionalInfo(additionalInformation);
        setRequestData(JSON.parse(data))
    
    }

    {/*filter records and get today's records*/}

    function getTodayRecords(data: any[]) {
      const currentDate = new Date(); // Get today's date
      const today = currentDate.toISOString().split('T')[0]; // Format today's date as 'YYYY-MM-DD'
    
      const filteredRecords = data.filter((request: { created_at: string }) => {
        const userRegistrationDate = new Date(request.created_at.split('T')[0]); // Extract only date part
        const formattedRegistrationDate = userRegistrationDate.toISOString().split('T')[0]; // Convert to 'YYYY-MM-DD'
    
        return formattedRegistrationDate === today;
      });
    
      return filteredRecords;
    }

    //filter today's records on click
    function viewTodayRecords(data:any){

    const filteredData = getTodayRecords(data); // Assuming 'data' is an array of objects with 'created_at' field

   

    setPrescribersRequestData(filteredData);


    }
    

    //filter today's records on click
    function viewAllRecords(){

   
    
  
      setPrescribersRequestData(prescribersRequestDataTwo);
  
  
      }
      
   


      function selectBetweenDates(){

      //  alert(selectedFromDate.toString())
      //  alert(selectedToDate.toString())
        const formData = new FormData();
  
        formData.append('from_date',  selectedFromDate.toString());
        formData.append('to_date',  selectedToDate.toString());
  
        try {
  
     
  
  
          // create new guest post
           axios.post('https://kemet.care/api/prescribers/get_req_btw_dates', formData )
             .then((response: { data: any; }) => {
               const data = response.data;
               console.log(data);
  
            //   alert(JSON.stringify(data));
  
               setPrescribersRequestData(data);
       
            
               
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
       
          function refresh(){

            setPrescribersRequestData(prescribersRequestDataTwo)
      
          }

          function searchfunction(searchTerm:any){

            //  alert(patientRequestDataTwo);
        
                setPrescribersRequestData(prescribersRequestDataTwo)
               const searchResult = prescribersRequestData.filter(
                (data) =>
                  data.first_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                  data.last_name.toLowerCase().includes(searchTerm.toLowerCase())
              );
            
              
               // return searchResult;
        
               setPrescribersRequestData(searchResult);
        
        
          
            }
        

  return (
    <div >
      {/* Top Navigation Bar */}
      <AppBar position="static">
        <Toolbar style={{ backgroundColor: 'black' }}>
          {/* Hamburger Icon to toggle the slide-in menu */}
          <IconButton edge="start" color="inherit" onClick={toggleMenu}>
            <MenuIcon />
          </IconButton>
          {/* Your other top navigation bar content goes here */}

          <p className="font-medium text-xl text-white ml-4">Prescribers</p>

          <div className="ml-auto">
           <button onClick={refresh}   className="font-medium text-sm text-white ml-2 border-1 border-white  border p-2 rounded-md">Refresh</button>
    
       </div>
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
          <ListItem button onClick={goToPharmacies}>
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
            <MenuItem onClick={gotToPatients}>Med Info</MenuItem>
            <hr></hr>
            <MenuItem onClick={goToPrescribers}>R & D</MenuItem>
            <hr></hr>
            <MenuItem onClick={goToPrescribers}>Knowledge</MenuItem>
          </Menu>



        </List>
      </Drawer>



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

    

      <div className="w-screen h-screen px-4 py-4">
        <div className="grid grid-cols-4 gap-4">

        <div className="w-full h-32 shadow-xl rounded-xl border border-zinc-200 border-2 p-4">
  <p className="text-sm text-zinc-500 font-medium">Total Prescribers Requests</p>

  <p className="text-xl text-zinc-700 font-medium mt-4">{prescribersRequestDataTwo.length}</p>

  <p className="text-sm text-zinc-700 font-medium mt-4 cursor-pointer hover:font-semibold" onClick={viewAllRecords}>View All</p>

 
</div>

<div className="w-full h-32 shadow-xl rounded-xl border border-zinc-200 border-2 p-4">
  <p className="text-sm text-zinc-500 font-medium">Today&apos;s Prescribers Requests</p>

  <p className="text-xl text-zinc-700 font-medium mt-4">{todaysRecords.length}</p>

  <p onClick={()=>viewTodayRecords(prescribersRequestData)} className="text-sm text-zinc-700 font-medium mt-4 cursor-pointer hover:font-semibold">View Records</p>
</div>



        </div>

        <div className="w-screen px-4 mt-10">

<p className=" text-md font-semibold text-zinc-500">Filter Records By Date</p>

<div className='flex'>
<div className="p-2 border border-1 border-zinc-400 mt-4 rounded-md">

<input
type="date"

//  value={selectedFromDate}
onChange={(e) => setSelectedFromDate(e.target.value)}

/>

</div>



<p className='font-light text-md mx-4 text-zinc-600 mt-6'>To</p>


<div className="p-2 border border-1 border-zinc-400 mt-4 rounded-md">

<input
type="date"
//  value={selectedToDate}
onChange={(e) => setSelectedToDate(e.target.value)}
/>

</div>


<button onClick={selectBetweenDates}  className=' cursor-pointer hover:shadow-xl text-center text-sm text-zinc-700 font-light bg-zinc-200 rounded-3xl flex items-center justify-center px-6   ml-[20px] mr-6 h-10 mt-5 w-20'>Filter</button>



{/*search text field */}

<input onChange={(e) =>searchfunction(e.target.value)} type="text" className="border p-2 h-10 mt-10 border-1 border-zinc-500  ml-auto mr-10  rounded-md "  placeholder="Search Records" />
<button  className='text-center text-sm text-zinc-700 font-light bg-zinc-200 rounded-3xl flex items-center justify-center px-6   ml-[6px] mr-6 h-10 mt-10 w-20'>Search</button>


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
Pharmacy
                </th>

                <th scope="col" className="px-6 py-3">
                    License No
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
               
            </tr>
        </thead>
        <tbody>

             {prescribersRequestData !== null && prescribersRequestData.map((singleRequest: any, index: any) => (

                <>

<tr className="bg-gray-200 border-b dark:border-gray-700 even:text-white odd:text-black" key={index}>
             <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap text-zinc-900">
                   {singleRequest.first_name + " "+singleRequest.last_name}
                </th>

                <td className="px-6 py-4 text-gray-700">
                   {singleRequest.pharmacy_name}
                </td>
                <td className="px-6 py-4 text-gray-700">
                   {singleRequest.licensee}
                </td>
               
                 <td className="px-6 py-4 text-gray-700">
                   {singleRequest.ip_address}
                </td>
                <td className="px-6 py-4 text-gray-700">
                {formatMySQLTimestamp(singleRequest.created_at)}
                </td>
                <td className="px-6 py-4 text-gray-700 font-medium cursor-pointer hover:font-semibold">
                   <p onClick={()=>showRequestInf(singleRequest.consult_request, singleRequest.additional_info)}>View</p> 
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

export default AdminPrescribers;
