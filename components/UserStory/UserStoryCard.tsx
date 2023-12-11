/* eslint-disable @next/next/no-img-element */
import React from "react";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import { IoIosStarOutline } from "react-icons/io";

const UserStoryCard = () => {
	return (
		<div className='w-[90%] lg:w-[75%] mx-auto rounded-[20px] bg-[#2D86C8] min-h-[700px] bg-[url("/user-story-pattern-bg.png")] bg-cover bg-no-repeat'>
			{/* ----------- CARD CONTENT ------------- */}
			<div className='w-[95%] lg:w-[75%] mx-auto pt-[100px] pb-[60px]'>
				{/* UPPER CONTENT  */}
				<div className='grid grid-cols-1 md:grid-cols-2 gap-[70px]'>
					{/* LEFT CONTENT */}
					<div className='profile-img'>
						<img src='/placeholder.png' alt='profile-img' />
					</div>

					{/* RIGHT CONTENT */}
					<div className='col-span-1 text-[#fff] flex flex-col'>
						<h6 className='mb-7 text-[20px] font-medium'>USER STORY</h6>
						<h1 className='text-2xl font-bold text-[40px] capitalize leading-[58px] grow'>
							Our revenue grew to 144% more after just one month of use.
						</h1>
						<div className='bottom_content'>
							<div className='h-[1px] bg-white w-full mb-10'></div>
							<div className='profile-name flex justify-between'>
								<div className='flex flex-col'>
									<h3 className='text-[20px] font-medium'>Julia Roberts</h3>
									<p className='text-[14px]'>Product and Sales Manager</p>
								</div>

								<div className='flex items-center gap-4'>
									<div className='h-11 w-11 bg-transparent rounded-full border-[1.5px] border-white flex justify-center items-center cursor-pointer'>
										<FaChevronLeft />
									</div>
									<div className='h-11 w-11 rounded-full border-[1.5px] border-white flex justify-center items-center cursor-pointer bg-white text-[#2D86C8]'>
										<FaChevronRight />
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* BOTTOM CONTENT */}
				<div className='grid grid-cols-2 md:grid-cols-4 gap-8 mt-12'>
					{/* CARD ITEM  */}
					<div className='col-span-1 flex items-center  rounded-[10px] bg-white'>
						<div className='w-[100px] rounded-[10px] bg-[#DE923A] h-full -translate-x-1 flex justify-center items-center'>
							<img
								src='/person-1.png'
								alt='profile-img'
								height={60}
								width={60}
								className='rounded-full'
							/>
						</div>
						<div className='flex flex-col px-2 py-3'>
							<h3 className='text-[14px] font-medium'>Julia Roberts</h3>
							<p className='flex'>
								<IoIosStarOutline className='text-yellow-600' />
								<IoIosStarOutline className='text-yellow-600' />
								<IoIosStarOutline className='text-yellow-600' />
								<IoIosStarOutline />
								<IoIosStarOutline />
							</p>
							<p className='text-[14px] text-black/50'>5 October 2023</p>
						</div>
					</div>

					<div className='col-span-1 flex items-center  rounded-[10px] bg-white'>
						<div className='w-[100px] rounded-[10px] bg-[#38B2A1] h-full -translate-x-1 flex justify-center items-center'>
							<img
								src='/person-2.png'
								alt='profile-img'
								height={60}
								width={60}
								className='rounded-full'
							/>
						</div>
						<div className='flex flex-col px-2 py-3'>
							<h3 className='text-[14px] font-medium'>Julia Roberts</h3>
							<p className='flex'>
								<IoIosStarOutline className='text-yellow-600' />
								<IoIosStarOutline className='text-yellow-600' />
								<IoIosStarOutline className='text-yellow-600' />
								<IoIosStarOutline />
								<IoIosStarOutline />
							</p>
							<p className='text-[14px] text-black/50'>5 October 2023</p>
						</div>
					</div>

					<div className='col-span-1 flex items-center  rounded-[10px] bg-white'>
						<div className='w-[100px] rounded-[10px] bg-[#DE923A] h-full -translate-x-1 flex justify-center items-center'>
							<img
								src='/person-2.png'
								alt='profile-img'
								height={60}
								width={60}
								className='rounded-full'
							/>
						</div>
						<div className='flex flex-col px-2 py-3'>
							<h3 className='text-[14px] font-medium'>Julia Roberts</h3>
							<p className='flex'>
								<IoIosStarOutline className='text-yellow-600' />
								<IoIosStarOutline className='text-yellow-600' />
								<IoIosStarOutline className='text-yellow-600' />
								<IoIosStarOutline />
								<IoIosStarOutline />
							</p>
							<p className='text-[14px] text-black/50'>5 October 2023</p>
						</div>
					</div>

					<div className='col-span-1 flex items-center  rounded-[10px] bg-white'>
						<div className='w-[100px] rounded-[10px] bg-[#38B2A1] h-full -translate-x-1 flex justify-center items-center'>
							<img
								src='/person-3.png'
								alt='profile-img'
								height={60}
								width={60}
								className='rounded-full'
							/>
						</div>
						<div className='flex flex-col px-2 py-3'>
							<h3 className='text-[14px] font-medium'>Julia Roberts</h3>
							<p className='flex'>
								<IoIosStarOutline className='text-yellow-600' />
								<IoIosStarOutline className='text-yellow-600' />
								<IoIosStarOutline className='text-yellow-600' />
								<IoIosStarOutline />
								<IoIosStarOutline />
							</p>
							<p className='text-[14px] text-black/50'>5 October 2023</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default UserStoryCard;
