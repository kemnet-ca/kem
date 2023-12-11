"use client";
import React from "react";
import Image from "next/image";
import SectionHeader from "@/components/SectionHeader";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper/modules";
import SlideItem from "./SlideItem";

const CaseStudy = () => {
	return (
		<div className='pb-[120px] relative'>
			<SectionHeader title={"Case Study"} subtitle={""} />

			{/* ---------------- Slider list ----------------- */}
			<div className='slider_container w-full h-[600px] absolute rounded-2xl overflow-hidden'>
				<Swiper
					slidesPerView={1}
					spaceBetween={30}
					loop={true}
					pagination={{
						clickable: true,
					}}
					navigation={true}
					modules={[Pagination, Navigation]}
					className='mySwiper'>
					<SwiperSlide>
						<SlideItem />
					</SwiperSlide>
					<SwiperSlide>
						<SlideItem />
					</SwiperSlide>
					<SwiperSlide>
						<SlideItem />
					</SwiperSlide>
					<SwiperSlide>
						<SlideItem />
					</SwiperSlide>
					<SwiperSlide>
						<SlideItem />
					</SwiperSlide>
				</Swiper>
			</div>
		</div>
	);
};

export default CaseStudy;
