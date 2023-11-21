"use client"
// Import necessary React and Material-UI components

import Link from 'next/link';
import { AppBar, Toolbar, IconButton, Drawer, List, ListItem, ListItemText, Menu, MenuItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useRouter } from 'next/navigation';
import { LineChart } from '@mui/x-charts/LineChart';
import React, { useState,useEffect } from 'react';
import axios, { AxiosError, AxiosResponse } from "axios";

// Your main component
const AdminPanel = () => {
    const [isMenuOpen, setMenuOpen] = useState(false);
    
    const [anchorEl, setAnchorEl] = useState(null);
    const [prescribersRequestData, setPrescribersRequestData] = useState<any[]>([]); 

    const dataPatients = [2, 5.5, 2, 8.5, 1.5, 5];
   // const dataPrescribers = [3, 6, 3.5, 7, 2, 4.5];
    //const xAxisData = [1, 2, 3, 5, 8, 10];
   
    const router = useRouter();

    const gotToPatients = () => {
      router.push("../admin/requests/patients")
     };

     
 


   const goToPrescribers = () => {
       router.push("../admin/requests/prescribers")
     };
  

     const goToMed = () => {
      router.push("../admin/cms/med_blog")
    };

    const goToRD = () => {
      router.push("../admin/requests/prescribers")
    };

    const goToKnowledge = () => {
      router.push("../admin/requests/prescribers")
    };

    const goToDashboard = () => {
      router.push("../admin/crm")
    };

    const goToPharmacies = () => {
      router.push("../admin/pharmacies")
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
        

         
        })
        .catch((error: any) => {
          console.error('Error fetching data:', error);
        });
    }, []);



    //handle  prescriber charts

    // Count prescribers signed up on each date
  const prescribersCountByDate = prescribersRequestData.reduce((acc: { [x: string]: any; }, prescriber: {
    created_at: any; date: any; 
}) => {
    const date = prescriber.created_at;
    acc[date] = (acc[date] || 0) + 1;
    return acc;
  }, {});

  // Extract dates and prescriber counts for plotting
  const xAxisData = Object.keys(prescribersCountByDate); // Dates for x-axis
  const dataPrescribers = Object.values(prescribersCountByDate); // Number of prescribers for y-axis



   
  


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

          <p className="font-medium text-xl text-white ml-4">Admin CRM</p>
        </Toolbar>
      </AppBar>

      {/* Slide-in Menu */}
      <Drawer anchor="left" open={isMenuOpen} onClose={toggleMenu} PaperProps={{
            sx: { width: "20%" , marginTop:`5%`},
          }}>
        <List>
          {/* Add your menu items here */}
          <ListItem button onClick={goToDashboard}>
            <ListItemText primary="Dashboard"  />
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

        <div className="w-full h-32 shadow-xl rounded-xl border border-zinc-200 border-2 p-4">
  <p className="text-sm text-zinc-500 font-medium">Total Patient Requests</p>

  <p className="text-xl text-zinc-700 font-medium mt-4">5</p>

  <div className="flex-shrink-0 align-items-flex-end text-sm">
    <Link href={"../admin/requests/patients"}>View All</Link>
  </div>
</div>

<div className="w-full h-32 shadow-xl rounded-xl border border-zinc-200 border-2 p-4">
  <p className="text-sm text-zinc-500 font-medium">Total Prescriber Requests</p>

  <p className="text-xl text-zinc-700 font-medium mt-4">10</p>

  <div className="flex-shrink-0 align-items-flex-end text-sm">
    <Link href={"../admin/requests/prescribers"}>View All</Link>
  </div>
</div>

            <div className="w-full h-32 shadow-xl rounded-xl border border-zinc-200 border-2 p-4">
                 <p className="text-sm text-zinc-500 font-medium">Pharmacies</p>
              <p className="text-xl text-zinc-700 font-medium mt-4">41</p>

                <div className="flex-shrink-0 align-items-flex-end text-sm">
    <Link href={"../admin/pharmacies"}>View All</Link>
  </div>

            </div>

        </div>

       <div className="grid md:grid-cols-2 gap-2 mt-8">

        <div className="">

        <p className="mt-4 font-semibold">Total Visits</p>

<LineChart
xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
series={[
{
  data: [2, 5.5, 2, 8.5, 1.5, 5],
},
]}
width={500}
height={300}
/>
        </div>

        <div className="">

<p className="mt-4 font-semibold">Prescriber & Patients Requests</p>

{
  /*<LineChart
      xAxis={[{ data: xAxisData }]}
      series={[
        { data: dataPatients },
        { data: dataPrescribers },
      ]}
      width={500}
      height={300}
    />*/

}
</div>
       </div>


     </div>


    

      {/* Your main content goes here */}
      <div>
        {/* Add your main content components here */}
      </div>
    </div>
  );
};

export default AdminPanel;
