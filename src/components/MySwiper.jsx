import { Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/css';
export default function ImageSlider({props}) {
  return (
    
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide><img src="../../public/1.jpg"/></SwiperSlide>
      <SwiperSlide><img src="../../public/3.jpg"/></SwiperSlide>
      <SwiperSlide><img src={props}/></SwiperSlide>
      <SwiperSlide>{props}</SwiperSlide>
    </Swiper>
  );
}
