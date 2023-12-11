"use client";
import Link from "next/link";
import { FaSortDown } from "react-icons/fa";

const SubMenuItem = ({ item, navItem, setNavItem }) => {
	return (
		<div className='relative'>
			{/* ------------MENU LABEL---------------- */}
			<p
				className='font-normal flex gap-1 justify-center cursor-pointer'
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
					className={`sub_menu text-base overflow-hidden rounded-lg ${
						navItem?.id === item?.id
							? // ? `h-[${item?.children?.length * 24}px]`
							  "h-auto"
							: "h-0"
					} duration-300`}>
					<div className='flex flex-col justify-center gap-2 mt-2 text-center'>
						{item?.children?.map((child) => (
							<Link href={child.path} key={child.id}>
								<div className='text-white font-normal cursor-pointer'>
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

export default SubMenuItem;
