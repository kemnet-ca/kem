import Link from "next/link";


export default function Footer() {


    return (


        <>

<div className="h-16 w-16 bg-white rounded-full fixed z-index p-2" style={{marginRight:`10px`, marginLeft:`90%`, marginBottom:`4%`}}>

<img src="/images/home/whatsapp-svgrepo-com.svg" className="w-full h-full" alt="whatsapp-kemnet"/>
</div>

make the button sticky and positioned to the right on scroll
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
        <li className="mt-2 hover:font-normal hover:cursor-pointer">Support</li>


        </ul>

    
</div>



<div className="">

<p className="text-sm font-medium ">Media Channels</p>


<div className="w-[130px] grid grid-cols-3 gap-2 mt-6">

  <div className="h-10 w-full bg-white rounded-full"></div>

  <div className="h-10 w-full bg-white rounded-full"></div>

  <div className="h-10 w-full bg-white rounded-full"></div>

</div>

<p className="mt-4 hover:font-light text-sm hover:cursor-pointer">Cookies Settings</p>
</div>

</div>
        </>

    )

}