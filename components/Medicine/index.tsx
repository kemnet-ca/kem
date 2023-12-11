import React from "react";
import { FaChevronRight } from "react-icons/fa";

const Medicine = () => {
	return (
		<section>
			<div className='bg-[#2D86C8] text-white bg-[url("/doctor-bg.png")] bg-no-repeat sm:bg-right-top py-10'>
				{/* --------------- CONTENT------------------  */}
				<div className='container min-h-[550px] w-[95%] md:w-[65%] mx-auto h-full flex justify-center flex-col'>
					<h1 className='content_title text-[50px] font-bold capitalize mb-10'>
						Make Your Medicine
					</h1>
					<p className='mb-10 text-2xl font-normal'>
						Do you want to custom make your medication <br /> to suit your
						unique body?
					</p>
					<p className='text-[26px] mb-10 font-normal'>
						Do you need a meditation that is currently <br /> not available?
					</p>

					<button className='bg-white rounded-[50px] text-[#2D86C8] px-9 py-3 max-w-fit font-medium pr-16 relative'>
						Discover More
						<span className='absolute top-1/2 right-2 -translate-y-1/2'>
							<p className=''>
								<span className='bg-[#2D86C8] text-white rounded-full h-[35px] w-[35px] flex justify-center items-center text-xl cursor-pointer select-none'>
									<FaChevronRight />
								</span>
							</p>
						</span>
					</button>
				</div>
			</div>
		</section>
	);
};

export default Medicine;
