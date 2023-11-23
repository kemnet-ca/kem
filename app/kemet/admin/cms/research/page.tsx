"use client"
// Import necessary React and Material-UI components
import React, { useState,useRef } from 'react';

import Link from 'next/link';
import { AppBar, Toolbar, IconButton, Drawer, List, ListItem, ListItemText, Menu, MenuItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useRouter } from 'next/navigation';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Editor } from '@tinymce/tinymce-react';

//import ReactQuill from 'react-quill';

import dynamic from 'next/dynamic';

const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });

// Use ReactQuill in your component

import 'react-quill/dist/quill.snow.css';
//import ReactMarkdown from 'react-markdown';


// Your main component
const ResearchCMS = () => {
    const [isMenuOpen, setMenuOpen] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);
    const router = useRouter();

    const editorRef = useRef([]);


    const [content, setContent] = useState('');
 // const [markdown, setMarkdown] = useState('');

  const handleEditorChange = (value:any) => {
    setContent(value);
 //   setMarkdown(value); // You can use a library to convert HTML to Markdown if needed
  };

    
    const gotToPatients = () => {
      router.push("../requests/patients")
     };
 


   const goToPrescribers = () => {
       router.push("../requests/prescribers")
     };

      const goToMed = () => {
       router.push("../cms/med_blog")
     };

     const goToRD = () => {
        router.push("../cms/med_blog")
      };

      const goToKnowledge = () => {
        router.push("../cms/med_blog")
      };

      const goToDashboard = () => {
        router.push("../crm")
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

  const [selectedOption, setSelectedOption] = React.useState('Categories');
  const [selectedView, setSelectedView] = React.useState('GALLERY');
 


  const handleCategoryChange = (event:any) => {
    setSelectedOption(event.target.value);
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

          <div className="ml-auto">
       <Link href={"../admin/pharmacies/new"} className="font-medium text-sm text-white  border-1 border-white  border p-2 rounded-md">All Posts</Link>
       
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


       <p className='font-medium text-2xl'>Add New Content</p>

       <div className="mt-6"></div>
       <p className='text-zinc-600 mb-2 text-sm'>Select A Category For This Post</p>
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
        <MenuItem value="Applied Research">Applied Research</MenuItem>
        <MenuItem value="Technical Reports">Technical Reports</MenuItem>
        <MenuItem value="Journal Articles">Journal Articles</MenuItem>
        <MenuItem value="Ebooks">Ebooks</MenuItem>
        <MenuItem value="White Papers & Literature Reviews">White Papers & Literature Reviews</MenuItem>

        
       
      </Select>
    </FormControl>



       <div className="mt-6"></div>
       

       <>
      <Editor

        
        apiKey='kady3ovshsq2e07vntd5muf0tn6yyxzez3uq52u5sufofav0'
        onInit={(evt, editor) => editorRef.current = editor}
        initialValue="<p>This is the initial content of the editor.</p>"
        init={{
          height: 500,
          menubar: false,
          plugins: 'anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount',
          toolbar: 'undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table | align lineheight | numlist bullist indent outdent | emoticons charmap | removeformat',
          content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
        }}

        
      />
       <button  className='text-center text-xs text-white font-light bg-black rounded-3xl flex items-center justify-center px-6 py-2 hover:mt-2 mt-8'>Submit</button>

    </>
    

    


      {
        /* <div className="preview">
        <ReactMarkdown>{markdown}</ReactMarkdown>
      </div>

        */
      }
     
    </div>
       
       </div>
 
  );
};

export default ResearchCMS;
