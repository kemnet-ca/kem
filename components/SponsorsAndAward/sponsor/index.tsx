/* eslint-disable @next/next/no-img-element */
import { sponsorList } from "@/app/data/SponsorList";
import React from "react";
import Image from "next/image";
import SectionHeader from "@/components/SectionHeader";

const Sponsor = () => {
	return (
		<div className='py-[140px]'>
			<SectionHeader
				title={"Backed By"}
				subtitle={"Partnered with very best"}
			/>

			{/* ---------------- Sponsor list ----------------- */}
			<div className='grid grid-cols-2 sm:grid-cols-4 gap-8'>
				{sponsorList?.slice(0, 8)?.map((v) => {
					return (
						<div
							className='flex justify-center items-center bg-white overflow-hidden rounded-2xl border border-[#E5E7EB] shadow-sm px-6 py-4'
							key={v?.id}>
							<Image
								src={v.path}
								alt={"dont know"}
								className='max-w-[200px] max-h-[52px] object-cover'
								height={100}
								width={100}
							/>
						</div>
					);
				})}
			</div>
			<div className='grid grid-cols-2 sm:grid-cols-3 mt-8 gap-8'>
				{sponsorList?.slice(8)?.map((v) => {
					return (
						<div
							className='flex justify-center items-center bg-white overflow-hidden rounded-2xl border border-[#E5E7EB] shadow-sm px-6 py-4'
							key={v?.id}>
							<img
								src={v.path}
								alt={"dont know"}
								className='max-w-[200px] max-h-[52px]'
							/>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default Sponsor;
