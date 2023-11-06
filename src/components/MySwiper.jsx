import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/swiper.min.css'

export default function MySwiper(name) {
  return (
    <h1>{name}</h1>
    // <Swiper>
    //   <SwiperSlide>{name}</SwiperSlide>
    //   <SwiperSlide>Slide 2</SwiperSlide>
    // </Swiper>
  );
}