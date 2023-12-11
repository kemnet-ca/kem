/* eslint-disable @next/next/no-img-element */
import React from "react";
import Image from "next/image";
import UserStoryCard from "./UserStoryCard";
import { seeonData } from "@/app/data/SeeonData";

const UserStory = () => {
	return (
		<section className='bg-[#F4F6F9] relative mt-[-350px]'>
			{/* --------------TOP BOTTOM BG IMAGES---------------- */}
			<div className='absolute top-5 left-0'>
				<Image
					src='/user-story-top-bg.png'
					alt='top-bg'
					height={200}
					className='w-[120px] sm:w-[150px]'
					width={200}
				/>
			</div>
			<div className='absolute right-0 bottom-0'>
				<Image
					src='/user-story-bottom-bg.png'
					alt='top-bg'
					height={200}
					className='w-[120px] sm:w-[150px]'
					width={200}
				/>
			</div>

			{/* ------------------USER PROFILE CARD------------------ */}
			<div className='absolute left-1/2 -top-1/2 w-full -translate-x-1/2 '>
			{/*	<UserStoryCard />*/}
			</div>

			<div className='container w-[95%] sm:w-[85%] lg:w-[60%] mx-auto text-center relative z-40   md:pt-[400px] pt-[310px] pb-20'>
				<div className='flex flex-wrap justify-evenly gap-10 items-center'>
					<div className=''>
						<p className='text-[36px] font-bold'>As seen on</p>
					</div>

					<div className=''>
						{/* ---------------- Sponsor list ----------------- */}
						<div className='grid grid-cols-2 sm:grid-cols-4 gap-12'>
							{seeonData?.map((v) => {
								return (
									<div className='flex justify-center items-center' key={v?.id}>
										<img
											src={v.path}
											alt={"dont know"}
											className='max-w-[120px] object-cover h-auto'
										/>
									</div>
								);
							})}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default UserStory;
