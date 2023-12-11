import React, { useState } from "react";
import Image from "next/image";
import { ImCross } from "react-icons/im";
import SubMenuItem from "./MobileSubmenuItem";
import { navdata } from "@/app/data/Navdata";
import Link from "next/link";

interface MobileSidemenuProps {
	show: boolean;
	setShow: React.Dispatch<React.SetStateAction<boolean>>;
  }
  
  const MobileSidemenu: React.FC<MobileSidemenuProps> = ({ show, setShow }) => {
	const [navItem, setNavItem] = useState(null);
  
	return (
		<div
			className={`fixed duration-300 top-0 ${
				show ? "right-0" : "-right-[110%]"
			} w-full h-full z-10 overflow-hidden`}>
			{/* ------------OVERLAY----------  */}
			<div
				className={`fixed top-0 left-0 w-full h-full bg-white bg-opacity-30 z-10 ${
					show ? "block" : "hidden"
				}`}
				onClick={() => setShow(false)}></div>

			{/* --------- MOBILE MENU CONTAINER --------- */}
			<div className='bg-[#000] w-[80%] z-10 max-w-[350px] h-full absolute top-0 right-0'>
				{/* --------- MOBILE MENU HEADER --------- */}
				<div className='flex flex-col justify-center items-center py-4 pt-10 px-6'>
					<div
						className='text-3xl w-full flex justify-end mb-5 cursor-pointer text-white select-none'
						onClick={() => setShow(false)}>
						<ImCross />
					</div>
					<div className='logo'>
						<Link href='/'>
							<Image src='/images/logo.png' alt='Logo' width={100} height={22} />
						</Link>
					</div>
				</div>

				{/* --------- MOBILE MENU BODY --------- */}
				<div className='flex flex-col justify-center items-center mt-5'>
					<div className='flex flex-col gap-4 justify-center items-center text-white text-xl font-semibold'>
						{navdata?.map((item) => (
							<SubMenuItem
								key={item.id}
								item={item}
								navItem={navItem}
								setNavItem={setNavItem}
							/>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default MobileSidemenu;
