import Link from "next/link";

export default function Header() {


    return (


        <>
       <div className="bg-slate-200 w-screen py-2 hidden md:flex  px-28 fixed z-10 shadow-sm top-header">

  
<p className="main-logo text-black font-bold text-2xl"><img src="/images/KEMET_Black Tagline_Updated.png" className="logo h-10 w-32" alt="KEMET LOGO" /></p>
<ul className="main-menu text-black flex space-x-6 justify-center ml-40 pt-2">
  <li className="menu-item  text-sm cursor-pointer hover:text-zinc-600 ">About Us</li>
  <li className="menu-item text-sm cursor-pointer hover:text-zinc-600 ">Our Focus</li>
  <li className="menu-item text-sm cursor-pointer hover:text-zinc-600 ">Kemet Science</li>
  <li className="menu-item text-sm cursor-pointer hover:text-zinc-600 ">Healthcare Pro Tools</li>
</ul>



<Link href={"/options"} className='h-20 w-60 bg-white rounded-br-md rounded-bl-md shadow-sm absolute z-20 mt-10 mr-10 p-2 flex'
style={{
  left:`65%`
}}
>
<p className='font-medium text-2xl text-center mt-4 cursor-pointer hover:ml-1'>Get Started</p>
<div className='h-10 w-10 bg-black rounded-full ml-auto mr-3 ml-auto mt-3 cursor-pointer get-started-arrow-kemet hover:mr-4'>

<img src="/images/home/arrow-right-circle-svgrepo-com.svg" alt="get-started-arrow-kemet" />

</div>

</Link>

</div>

        </>

    )

}