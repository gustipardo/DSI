import { Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/css';
export default function ImageSlider() {
  return (
    
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide><img src="../../public/1.jpg"/></SwiperSlide>
      <SwiperSlide><img src="../../public/3.jpg"/></SwiperSlide>
      <SwiperSlide><img src="../../public/2.png"/></SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
    </Swiper>
  );
}
