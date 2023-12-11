import Link from "next/link";


export default function Footer() {


    return (


        <>




        <div className='h-32'></div>



<div className="w-screen h-[300px] bg-slate-200 mt-auto grid place-content-center text-3xl md:px-10 grid-cols-3 gap-4">


{/*footer 1 */}
  <div className=" text-black">

    <p className="text-2xl"><Link href={"/"}><img src="/images/KEMET_Black Tagline_Updated.png" className="logo h-10 w-32" alt="KEMET LOGO" /></Link></p>

    <p className="text-sm font-medium mt-8">Kemet Group Incorporated</p>

    <p className="font-medium text-sm">EST 2023.</p>

    <p className="font-light text-sm mt-8 hover:font-normal hover:cursor-pointer">Copyrights Declaration</p>

    <p className="font-light mt-4 text-sm hover:font-normal hover:cursor-pointer">Site Map</p>


  </div>



  <div className="text-xs font-light ">

    <ul>
        <li className="mt-2 hover:font-normal hover:cursor-pointer">Share our stories with your friends</li>
        
        <li className="mt-2 hover:font-normal hover:cursor-pointer">Modern slavery statement</li>
        <li className="mt-2 hover:font-normal hover:cursor-pointer">Quality statement</li>
        <li className="mt-2 hover:font-normal hover:cursor-pointer">Safety</li> 
        <li className="mt-2 hover:font-normal hover:cursor-pointer">Privacy Statement</li>
        <li className="mt-2 hover:font-normal hover:cursor-pointer">Terms Of Use</li>
        <li className="mt-2 hover:font-normal hover:cursor-pointer">Legal Notice</li>

        <li className="mt-2 hover:font-normal hover:cursor-pointer">Legal Disclaimer</li>
        <li className="mt-2 hover:font-normal hover:cursor-pointer"><Link href={"../contact"}>Support</Link></li>


        </ul>

    
</div>



<div className="">

<p className="text-sm font-medium ">Connect With Us:</p>


<div className="w-[130px] grid grid-cols-4 gap-2 mt-6">

  <div className="h-10 w-full cursor-pointer  rounded-full"><img src="/images/social/linkedin-svgrepo-com.svg"  alt="Kemet LinkedIN"/><Link href={"https://www.linkedin.com/company/kemet-group"}></Link></div>

  <div className="h-10 w-full cursor-pointer ml-2 rounded-full"><img src="/images/social/facebook-svgrepo-com.svg"  alt="Kemet LinkedIN"/><Link href={"https://www.linkedin.com/company/kemnetinc/"}></Link></div>

  <div className="h-10 w-full cursor-pointer ml-2 rounded-full"><img src="/images/social/twitter-round-svgrepo-com.svg"  alt="Kemet LinkedIN"/><Link href={"https://twitter.com/KemNet_"}></Link></div>
  <div className="h-10 w-full cursor-pointer ml-2  rounded-full"><img src="/images/social/youtube-svgrepo-com.svg"  alt="Kemet LinkedIN"/><Link href={"https://www.youtube.com/@kemetglobal"}></Link></div>


</div>


</div>

</div>

 {/* Floating Action Button */}
 <div
        className="fixed bottom-10 right-10 h-16 w-16 bg-blue-500 text-white rounded-full flex items-center justify-center cursor-pointer hover:bg-blue-600">


<Link href={"https://wa.link/o3sg6d"} className="h-16 w-16 bg-white rounded-full fixed z-400 p-2" >

<img src="/images/home/whatsapp-svgrepo-com.svg" className="w-full h-full" alt="whatsapp-kemnet"/>
</Link>

        
</div>


        </>

    )

}