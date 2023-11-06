import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.min.css';

export default function ImageSlider({ props, name }) {
    console.log(name)
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {props.map((image, index) => (
        <SwiperSlide key={index}>
        <img src={`../../public/projects/${name}/${image}`} alt={`Image ${index + 1}`} />
        </SwiperSlide>

      ))}
    </Swiper>
  );
}
