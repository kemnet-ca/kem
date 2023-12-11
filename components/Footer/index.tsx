import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
	FaFacebookF,
	FaInstagram,
	FaLinkedinIn,
	FaTwitter,
	FaXTwitter,
	FaYoutube,
} from "react-icons/fa6";

const NewFooter = () => {
	return (
		<footer className='bg-black text-white'>
			{/* UPPER PART OF FOOTER */}
			<div className='w-[95%] sm:w-[85%] lg:w-[60%] mx-auto text-center pt-[100px] pb-[55px]'>
				<div className='flex justify-between gap-20 flex-col md:flex-row lg:gap-40'>
					{/* LEFT  */}
					<div className='flex flex-col gap-8'>
						<Link href='/'>
							<Image src='/logo.png' width={150} height={50} alt='logo' />
						</Link>

						<p className='text-lg font-medium text-left'>
							Kemet Group Inc Incorporated ESR.2023
						</p>

						<ul className='flex gap-4'>
							<li>
								<Link href='https://youtube.com/@kemnet8236?si=k3cDACBj72p8Osgz'>
									<p className='bg-[#FFFFFF33] h-9 w-9 rounded-full flex justify-center items-center hover:bg-white duration-200 text-white hover:text-black'>
										<FaYoutube />
									</p>
								</Link>
							</li>
							<li>
								<Link href='https://www.linkedin.com/company/kemet-group'>
									<p className='bg-[#FFFFFF33] h-9 w-9 rounded-full flex justify-center items-center hover:bg-white duration-200 text-white hover:text-black'>
										<FaLinkedinIn />
									</p>
								</Link>
							</li>
							<li>
								<Link href='https://www.facebook.com/kemetglobalgroup'>
									<p className='bg-[#FFFFFF33] h-9 w-9 rounded-full flex justify-center items-center hover:bg-white duration-200 text-white hover:text-black'>
										<FaFacebookF />
									</p>
								</Link>
							</li>
							<li>
								<Link href='https://www.instagram.com/kemnet_/'>
									<p className='bg-[#FFFFFF33] h-9 w-9 rounded-full flex justify-center items-center hover:bg-white duration-200 text-white hover:text-black'>
										<FaInstagram />
									</p>
								</Link>
							</li>

                            <li>
								<Link href='https://twitter.com/KemNet_'>
									<p className='bg-[#FFFFFF33] h-9 w-9 rounded-full flex justify-center items-center hover:bg-white duration-200 text-white hover:text-black'>
                                    <FaXTwitter icon="fa-brands fa-x-twitter" />
									</p>
								</Link>
							</li>


                           
						</ul>
					</div>

					{/* RIGHT */}
					<div className='flex gap-[50px]  text-left'>
						<ul className='flex flex-col gap-7'>

                            {
                                /*
                                <li className='text-sm '>
								<Link href={"/"}> Site Map</Link>
							</li>


                            <li className='text-sm '>
								<Link href={"/"}>Support</Link>
							</li>
							<li className='text-sm '>
								<Link href={"/"}>Contact Us</Link>
							</li>
                                */
                            }
							


							
						</ul>

						<ul className='flex flex-col gap-7'>
{
                        /*
							<li className='text-sm '>
								<Link href={"/"}> Share Our Stories with your Friends</Link>
							</li>
							<li className='text-sm '>
								<Link href={"/"}>Modern Slavery Statement</Link>
							</li>
							<li className='text-sm '>
								<Link href={"/"}>Safety Information</Link>
							</li>

                            */
}
						</ul>

						<ul className='flex flex-col gap-7'>

                            { /*
							<li className='text-sm '>
								<Link href={"/"}> Quality Statement</Link>
							</li>
							<li className='text-sm '>
								<Link href={"/"}>Legal Disclaimers</Link>
							</li>

                            */

}
						</ul>
					</div>
				</div>
			</div>

			<div className='w-full h-[1px] bg-[#E5E7EB]'></div>

			{/* BOTTOM PART OF FOOTER */}
			<div className='w-[95%] sm:w-[85%] lg:w-[60%] mx-auto text-center py-[30px] flex justify-between items-center'>
				<p className='text-sm '>©KEMET2023, All rights reserved.</p>

				<ul className='flex items-center gap-9'>
					<li className='text-sm '>
						<Link href={"/"}> Terms</Link>
					</li>
					<li className='text-sm '>
						<Link href={"/"}>Privacy</Link>
					</li>

					<li className='text-sm '>
						<Link href={"/"}>Cookies</Link>
					</li>
				</ul>
			</div>
      {/* Floating Action Button */}
 <div
        className="fixed bottom-[100px] right-10 h-16 w-16 bg-blue-500 text-white rounded-full flex items-center justify-center cursor-pointer hover:bg-blue-600">


<Link href={"https://wa.link/o3sg6d"} className="h-16 w-16 bg-white rounded-full fixed z-400 p-2" >

<img src="/images/home/whatsapp-svgrepo-com.svg" className="w-full h-full" alt="whatsapp-kemnet"/>
</Link>

        
</div>
		</footer>
	);
};

export default NewFooter;
