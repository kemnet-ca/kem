import Link from "next/link";
import React from "react";
import { FaChevronRight } from "react-icons/fa";

const MedicineTwo = () => {
	return (
		<section>
			<div className='bg-[#2D86C8] text-white bg-[url("/doctor-bg.png")] bg-no-repeat sm:bg-right-top py-10'>
				{/* --------------- CONTENT------------------  */}
				<div className='container min-h-[550px] w-[95%] md:w-[65%] mx-auto h-full flex justify-center flex-col'>
					<h1 className='content_title text-[50px] font-bold capitalize mb-10'>
						Get Started As A
					</h1>
				
					<div className="flex">

                    <Link href={"patients/custom/request"} className='bg-white rounded-[50px] text-[#2D86C8] px-9 py-3 max-w-fit font-medium pr-16 relative'>
						Patient
						<span className='absolute top-1/2 right-2 -translate-y-1/2'>
							<p className=''>
								<span className='bg-[#2D86C8] text-white rounded-full h-[35px] w-[35px] flex justify-center items-center text-xl cursor-pointer select-none'>
									<FaChevronRight />
								</span>
							</p>
						</span>
					</Link>

                    <div className="w-8"></div>

                    <Link href={"prescribers/custom/request"} className='bg-white rounded-[50px] text-[#2D86C8] px-9 py-3 max-w-fit font-medium pr-16 relative'>
						Prescriber
						<span className='absolute top-1/2 right-2 -translate-y-1/2'>
							<p className=''>
								<span className='bg-[#2D86C8] text-white rounded-full h-[35px] w-[35px] flex justify-center items-center text-xl cursor-pointer select-none'>
									<FaChevronRight />
								</span>
							</p>
						</span>
					</Link>
                    </div>
				</div>
			</div>
		</section>
	);
};

export default MedicineTwo;
