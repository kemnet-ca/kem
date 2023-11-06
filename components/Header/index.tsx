import Link from "next/link";

export default function Header() {


    return (


        <>
       <div className="bg-slate-200 w-screen py-2 hidden md:flex  px-28 fixed z-10 shadow-sm top-header">

  
<p className="main-logo text-black font-bold text-2xl"><Link href={"/"}><img src="/images/KEMET_Black Tagline_Updated.png" className="logo h-10 w-32" alt="KEMET LOGO" /></Link></p>
<ul className="main-menu text-black flex space-x-6 justify-center ml-40 pt-2">
  <li className="menu-item  text-sm cursor-pointer hover:text-zinc-600 "><Link href={"../../about"}>About Us</Link></li>
  <li className="menu-item text-sm cursor-pointer hover:text-zinc-600 "><Link href={"../../focus"}>Our Focus</Link></li>
  <li className="menu-item text-sm cursor-pointer hover:text-zinc-600 ">Med Info Blog</li>
  <li className="menu-item text-sm cursor-pointer hover:text-zinc-600 ">Healthcare Pro Tools</li>
</ul>



<Link href={"/options"} className='h-20 w-60 bg-white rounded-br-xl rounded-bl-xl shadow-sm absolute z-20 mt-12 mr-10 pl-4 pr-2 py-2 flex'
style={{
  left:`65%`
}}
>
<p className='font-medium text-2xl  cursor-pointer hover:ml-1'>Get<br></br> <span className="font-light">Started</span></p>
<div className='h-10 w-10 bg-black rounded-full ml-auto mr-3 ml-auto mt-3 cursor-pointer get-started-arrow-kemet hover:mr-4'>

<img src="/images/home/arrow-right-circle-svgrepo-com.svg" alt="get-started-arrow-kemet" />

</div>

</Link>

</div>

        </>

    )

}