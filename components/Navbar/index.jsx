"use client";
import React, { useState } from "react";
import Image from "next/image";
import MenuItem from "./MenuItem";
import { navdata } from "@/app/data/Navdata";
import { TbGridDots } from "react-icons/tb";
import MobileSidemenu from "./MobileSidemenu";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";



const Navbar = () => {
	// ** for submenu open and close
	const [navItem, setNavItem] = useState(null);
	const [showMobileMenu, setShowMobileMenu] = useState(false);

	return (
		<nav className='bg-[#000] fixed top-0 left-0 w-full z-[999999999]'>
			<div className='nav_container w-[95%] lg:w-[80%] mx-auto py-10 text-white flex justify-between relative'>
				{/* ------------LOGO---------------- */}
				<div className='logo'>
					<Link href='/'>
						<Image src='/images/logo.png' width={98} height={22} alt='Logo' />
					</Link>
				</div>

				{/* ------------NAV ITEM---------------- */}
				<div className='nav_menus md:flex items-center hidden'>
					<div className='flex gap-12'>
						{navdata?.map((item) => (
							<MenuItem
								key={item.id}
								// @ts-ignore
								item={item}
								navItem={navItem}
								// @ts-ignore
								setNavItem={setNavItem}
							/>
						))}
					</div>
				</div>

				{/* ------------MOBILE MENU---------------- */}
				<div className='md:hidden flex items-center'>
					<div
						className='relative text-3xl cursor-pointer'
						onClick={() => {
							setShowMobileMenu(true);
						}}>
						<TbGridDots />
					</div>
				</div>

				{/* ------------Dummy Item to have sapce---------------- */}
				<div className='lg:block hidden'></div>

				{/* ------------ALERT MSG BOX---------------- */}
				<div className='alert_msg_box hidden bg-white absolute right-10 top-[101%] z-50 text-black sm:block   shadow-sm rounded-b-[37px]'>
					<div className='relative flex gap-6 px-7 py-8 pt-11 items-center'>
						<Image
							src='/images/curve.png'
							alt='curve icon'
							height={60}
							width={60}
							className='absolute top-[-1px] -left-10'
						/>
						<p className='flex flex-col text-[30px]'>
							<span className='font-bold'>Talk to a</span>
							<span className='text-[26px]'>Pharmacist</span>
						</p>
						<p className=''>
							<span className='bg-[#2D86C8] text-white rounded-full h-[50px] w-[50px] flex justify-center items-center text-2xl cursor-pointer select-none'>
								<FaArrowRight />
							</span>
						</p>
					</div>
				</div>
			</div>

			{/* ------------MOBILE SIDE MENU---------------- */}
			<div className='md:hidden'>
				<MobileSidemenu show={showMobileMenu} setShow={setShowMobileMenu} />
			</div>
		</nav>
	);
};

export default Navbar;
