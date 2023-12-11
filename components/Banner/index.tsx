import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Banner = () => {

	const [displayText, setDisplayText] = useState('Patient');

	useEffect(() => {
		const intervalId = setInterval(() => {
		  setDisplayText(prevText => (prevText === 'Patient' ? 'Prescriber' : 'Patient'));
		}, 5000); // Switch every set number of seconds
	
		// Clear the interval when the component unmounts
		return () => clearInterval(intervalId);
	  }, []);
	

	
	return (
		<header className='min-h-screen w-full bg-[#F4F6F9] overflow-hidden relative'>
			{/* --------------TOP BOTTOM BG IMAGES---------------- */}
			<div className='absolute top-0 right-0'>
				<Image
					src='/images/banner-bg-top.png'
					alt='top-bg'
					height={200}
					className='w-[250px] sm:w-[300px] md:w-[350px]'
					width={350}
				/>
			</div>
			<div className='absolute left-0 bottom-0'>
				<Image
					src='/images/banner-bg-bottom.png'
					alt='top-bg'
					height={350}
					className='w-[250px] sm:w-[300px] md:w-[350px]'
					width={200}
				/>
			</div>

			{/* --------------BANNER CONTENT---------------- */}
			<div className='w-[90%] lg:w-[80%] min-h-screen text-black mx-auto py-10 flex flex-col justify-center items-center'>
				{/* --------------BANNER TAG---------------- */}
				<div className='relative hidden gap-12 items-center mb-[150px] sm:flex'>
					<span className='font-bold text-[45px] text-[#000]'>i am a</span>
				

				{

					displayText =="Patient"?(<>	<Link href={"/patients/custom/request"} className='banner_btn uppercase bg-[#DE923A] text-white text-2xl font-bold px-[40px] py-4 rounded-[15px] shadow-[0_8.505px_0_0_rgba(0,0,0,0.10)]'>
					Patient
				</Link>
</>):(<>	<Link href={"/prescribers/custom/request"} className='banner_btn uppercase bg-[#DE923A] text-white text-2xl font-bold px-[40px] py-4 rounded-[15px] shadow-[0_8.505px_0_0_rgba(0,0,0,0.10)]'>
						Prescriber
					</Link>
</>)
				}
					{/* ------------ARROW ICON---------------- */}
					<div className='absolute -bottom-14 left-[40%] -translate-x-1/2'>
						<Image src='/images/arrow.png' alt='arrow-icon' height={80} width={80} />
					</div>
				</div>
				{/* --------------BANNER TEXT---------------- */}
				<div className='banner_tag text-center max-w-[890px]'>
					<h1 className='text-[27px] sm:text-[37px] font-bold mb-5'>
						Personalized Custom Medicine
					</h1>
					<p className='text-sm lg:text-md text-black/50'>
						We take your personalized needs for customized medicines and connect
						you with the pharmacies that can make or provide them. Unique
						dosages, unique formulations, out of stock medications and so on, we
						can handle it all. Currently servicing residents of Alberta.
					</p>
				</div>
			</div>
		</header>
	);
};

export default Banner;
