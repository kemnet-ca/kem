"use client"
// Import necessary React and Material-UI components
import React, { useState } from 'react';
import Link from 'next/link';
import { AppBar, Toolbar, IconButton, Drawer, List, ListItem, ListItemText, Menu, MenuItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useRouter } from 'next/navigation';

// Your main component
const AdminPanel = () => {
    const [isMenuOpen, setMenuOpen] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);
    const router = useRouter();
  
    const toggleMenu = () => {
      setMenuOpen(!isMenuOpen);
    };
  
    const handleMenuClick = (event:any) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleMenuClose = () => {
      setAnchorEl(null);
    };


    const gotToPatients = () => {
       router.push("../admin/requests/patients")
      };
  


    const goToPrescribers = () => {
        router.push("../admin/requests/prescribers")
      };
  


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
        </Toolbar>
      </AppBar>

      {/* Slide-in Menu */}
      <Drawer anchor="left" open={isMenuOpen} onClose={toggleMenu} PaperProps={{
            sx: { width: "20%" , marginTop:`5%`},
          }}>
        <List>
          {/* Add your menu items here */}
          <ListItem button>
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


        </List>
      </Drawer>

    

      <div className="w-screen h-screen px-4 py-4">
        <div className="grid grid-cols-4 gap-4">

        <div className="w-full h-40 shadow-xl rounded-xl border border-zinc-200 border-2 p-4">
  <p className="text-sm text-zinc-500 font-medium">Total Patient Requests</p>

  <p className="text-xl text-zinc-700 font-medium mt-4">5</p>

  <div className="flex-shrink-0 align-items-flex-end text-sm">
    <Link href={"../admin/requests/patients"}>View All</Link>
  </div>
</div>

<div className="w-full h-40 shadow-xl rounded-xl border border-zinc-200 border-2 p-4">
  <p className="text-sm text-zinc-500 font-medium">Total Prescriber Requests</p>

  <p className="text-xl text-zinc-700 font-medium mt-4">10</p>
</div>

            <div className="w-full h-40 shadow-xl rounded-xl border border-zinc-200 border-2 p-4">
                 <p className="text-sm text-zinc-500 font-medium">Pharmacies</p>
              <p className="text-xl text-zinc-700 font-medium mt-4">41</p>

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
