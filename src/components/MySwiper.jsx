import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.min.css';

export default function ImageSlider({ props }) {

  return (
    
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {props.frontmatter.imagenes.map((image, index) => (
        <SwiperSlide key={index}>
         <img src={`../../public/${props.url}/${image}`} alt={`Image ${index + 1}`} />
        </SwiperSlide>

      ))}
    </Swiper>
  );
}
