import React from "react";
import Image from "next/image";
import Sponsor from "./sponsor";
import Award from "./award";
import CaseStudy from "./case-study";

const SponsorsAndAward = () => {
	return (
		<section className='bg-[#F4F6F9] relative min-h-screen'>
			{/* --------------TOP BOTTOM BG IMAGES---------------- */}
			<div className='absolute top-20 left-0'>
				<Image
					src='/sponsor-left-bg.png'
					alt='top-bg'
					height={200}
					className='w-[120px] sm:w-[150px] md:w-[200px]'
					width={200}
				/>
			</div>
			<div className='absolute right-0 top-1/2 -translate-y-1/2'>
				<Image
					src='/sponsor-right-bg.png'
					alt='top-bg'
					height={200}
					className='w-[120px] sm:w-[150px] md:w-[200px]'
					width={200}
				/>
			</div>
			<div className='container w-[95%] sm:w-[85%] lg:w-[60%] mx-auto text-center relative z-40'>
				<Sponsor />
				<Award />
				{/*<CaseStudy />*/}
			</div>
		</section>
	);
};

export default SponsorsAndAward;
