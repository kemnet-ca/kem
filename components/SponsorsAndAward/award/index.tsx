import React from "react";
import Image from "next/image";
import SectionHeader from "@/components/SectionHeader";
import { awardData } from "@/app/data/AwardData";

const Award = () => {
	return (
		<div className='py-[20px] mt-[-10px]'>
			<SectionHeader title={"Recognized & Awarded"} subtitle={""} />

			{/* ---------------- Award list ----------------- */}
			<div className='grid grid-cols-2 sm:grid-cols-4 gap-12'>
				{awardData?.map((v) => {
					return (
						<div
							className='flex flex-col gap-6 justify-center items-center'
							key={v?.id}>
							<Image
								src={v.image}
								alt={"dont know"}
								className='max-w-full'
								height={100}
								width={180}
							/>
							<div className='desc h-[180px] overflow-auto'>
								<p className='text-sm font-medium text-center'>
									{v.description}
								</p>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default Award;
