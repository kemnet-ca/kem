"use client"

import { useState, useEffect } from "react";

import Navbar from "@/components/Navbar";
import SponsorsAndAward from "@/components/SponsorsAndAward";
import Blank from "@/components/Blank";

import { useRouter } from 'next/navigation';


import CookieConsent from "react-cookie-consent";
import Banner from '@/components/Banner';
import Medicine from '@/components/Medicine';
import UserStory from '@/components/UserStory';
import Footer from '@/components/Footer';




export default function Home() {
  


const [displayText, setDisplayText] = useState('Patient');



const router = useRouter();



useEffect(() => {
  const interval = setInterval(() => {

 

    setDisplayText((currentText) => (currentText == 'Patient' ? 'Prescriber' : 'Patient'));
 

    console.log(displayText)
  }, 6000);

  return () => {
    clearInterval(interval);
  };
}, []);


/*return(

  <>
  
  <main className="bg-white relative grid place-content-center h-screen w-screen">
  <p className='text-3xl text-zinc-400 text-center'>Oops! We havn't launched yet </p>
<p className='text-3xl text-zinc-400 text-center'>Kemet Is Coming Soon </p>


    </main>
  </>
);*/

 

  return (
    <div>

<Navbar />

<Banner />
<Medicine />

<SponsorsAndAward />

<Blank />

<UserStory />

<Footer />






<CookieConsent
  location="bottom"
  buttonText="Yes, I'm cool!"
  cookieName="myAwesomeCookieName2"
  style={{ background: "#2B373B" }}
  declineButtonText="Not interested"
  buttonStyle={{ color: "#000000", backgroundColor:"#ffffff", fontSize: "13px" }}
  expires={150}

  enableDeclineButton
  onDecline={() => {
   // alert("nay!");
  }}
>
  This website uses cookies to enhance the user experience.{" "}
  <span style={{ fontSize: "10px" }}>You can enable cookies to allows store your session data</span>
</CookieConsent>

    </div>
  )
}
