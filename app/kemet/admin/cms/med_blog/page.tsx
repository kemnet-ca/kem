"use client"
// Import necessary React and Material-UI components
import React, { useState } from 'react';
import Link from 'next/link';
import { AppBar, Toolbar, IconButton, Drawer, List, ListItem, ListItemText, Menu, MenuItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useRouter } from 'next/navigation';

import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
//import ReactMarkdown from 'react-markdown';


// Your main component
const MedBlogCMS = () => {
    const [isMenuOpen, setMenuOpen] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);
    const router = useRouter();


    const [content, setContent] = useState('');
 // const [markdown, setMarkdown] = useState('');

  const handleEditorChange = (value:any) => {
    setContent(value);
 //   setMarkdown(value); // You can use a library to convert HTML to Markdown if needed
  };

    
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
  
    const toggleMenu = () => {
      setMenuOpen(!isMenuOpen);
    };
  
    const handleMenuClick = (event:any) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleMenuClose = () => {
      setAnchorEl(null);
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

          <p className='text-white text-2xl'>New Content</p>
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


           {/* Main Menu Item: Requests */}
           <ListItem button onClick={handleMenuClick}>
            <ListItemText primary="Blogs" />
          </ListItem>
          <hr></hr>

          {/* Sub Menu Items: Patients and Prescribers */}
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
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


       <p className='font-medium text-2xl'>Add New Content</p>


       <div>
      <div className="editor">
        <ReactQuill
          value={content}
          onChange={handleEditorChange}
          placeholder="Write your blog post here..."
        />
      </div>

      {
        /* <div className="preview">
        <ReactMarkdown>{markdown}</ReactMarkdown>
      </div>

        */
      }
     
    </div>
       
       </div>
    </div>
  );
};

export default MedBlogCMS;
