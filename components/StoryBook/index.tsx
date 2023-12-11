"use client";
import React, { useState } from "react";
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

const StoryBook = () => {
    const [showPrevButton, setShowPrevButton] = useState(false);
    const [showNextButton, setShowNextButton] = useState(true);

    const handleSwiper = (swiper:any) => {
        swiper.on('slideChange', () => {
          if (swiper.isBeginning) {
            setShowPrevButton(false);
          } else {
            setShowPrevButton(true);
          }
    
          if (swiper.isEnd) {
            setShowNextButton(false);
          } else {
            setShowNextButton(true);
          }
        });
      };
  
	return (
		<div className='pb-[20px]   w-screen flex justify-center'>
			

			{/* ---------------- Slider list ----------------- */}
			<div className='slider_container md:w-2/3 flex  w-screen md:h-[500px] absolute rounded-2xl overflow-hidden mt-[20px]'>
				<Swiper
					slidesPerView={1}
					spaceBetween={30}
					loop={true}
					pagination={{
						clickable: true,
					}}
                 //  navi
					navigation
                    parallax={true}
                 
                    //  onSwiper={handleSwiper}

                      

                    
					modules={[Pagination, Navigation]}
					className='mySwiper'>
					<SwiperSlide>
						<SlideItem src="/storybook/4CCB5EB4-9A0C-46E8-8E5B-672687ADFD22_1_201_a.jpeg" />
					</SwiperSlide >
					<SwiperSlide>
						<SlideItem src ="/storybook/D04F4A58-199F-4B5A-AE31-A31CF97D1B41_1_201_a.jpeg" />
					</SwiperSlide>
					<SwiperSlide>
						<SlideItem src ="/storybook/507D0308-D4DA-47E5-BB51-9419EB75F2AF_1_201_a.jpeg" />
					</SwiperSlide>
					<SwiperSlide>
						<SlideItem src ="/storybook/3D4C3342-F030-4CEB-84DB-2623D0098EEC_1_201_a.jpeg" />
					</SwiperSlide>
					<SwiperSlide>
						<SlideItem src ="/storybook/219BF5BF-B867-4652-975D-9E097DDE1812_1_201_a.jpeg" />
					</SwiperSlide>

                    <SwiperSlide>
						<SlideItem src ="/storybook/466E20FF-C5F5-40BD-A444-F87E632870CA_1_201_a.jpeg" />
					</SwiperSlide>

                    <SwiperSlide>
						<SlideItem src ="/storybook/C1675766-5F29-48F7-A02E-A16EF6798FE1_1_201_a.jpeg" />
					</SwiperSlide>

                    <SwiperSlide>
						<SlideItem src ="/storybook/0BFFF3D1-CEC2-4B85-B6EB-E027017B8E5D_1_201_a.jpeg" />
					</SwiperSlide>
				</Swiper>
			</div>
		</div>
	);
};

export default StoryBook;
