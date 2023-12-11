"use client";
import Link from "next/link";
import { FaSortDown } from "react-icons/fa";
import { ReactNode } from 'react';

interface MenuItemProps {
item: {
    id: string;
    title: string;
    path?: string;
    children?: {
      id: string;
      title: string;
      path: string;
    }[];
  };
  navItem: {
    id: string;
    title: string;
    path?: string;
    children?: {
      id: string;
      title: string;
      path: string;
    }[];
  } | null;
  setNavItem: React.Dispatch<React.SetStateAction<{
    id: string;
    title: string;
    path?: string;
    children?: {
      id: string;
      title: string;
      path: string;
    }[];
  } | null>>;
}

const MenuItem: React.FC<MenuItemProps> = ({ item, navItem, setNavItem }) => {
  
	return (
		<div className='relative'>
			{/* ------------MENU LABEL---------------- */}
			<p
				className='font-bold flex gap-1 justify-center cursor-pointer'
				onClick={() => {
					if (navItem?.id === item?.id) {
						setNavItem(null);
					} else {
						setNavItem(item);
					}
				}}>
				{item?.path ? (
					<Link href={item?.path}>
						<span>{item.title}</span>
					</Link>
				) : (
					<span>{item.title}</span>
				)}{" "}
				<span className='text-lg pt-0 mt-0'>
					{item?.children && <FaSortDown />}
				</span>{" "}
			</p>

			{/* ------------SUB MENU---------------- */}
			{item?.children && (
				<div
					className={`sub_menu absolute top-[130%] z-[60]  overflow-hidden bg-white text-black shadow-lg rounded-lg min-w-[250px] max-w-[90%] ${
						navItem?.id === item?.id ? "scale-y-100" : "scale-y-0"
					} duration-300 origin-top`}>
					<div>
						{item?.children?.map((child) => (
							<Link href={child.path} key={child.id}>
								<div className='py-2 px-4 hover:bg-black hover:text-white cursor-pointer duration-200'>
									{child.title}
								</div>
							</Link>
						))}
					</div>
				</div>
			)}
		</div>
	);
};

export default MenuItem;
