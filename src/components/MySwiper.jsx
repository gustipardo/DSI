import { Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/css';
export default function ImageSlider({ props }) {
  console.log(props)
  return (
    
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <p>Test 2.</p>
      {props && props.imagenes && (
  <Swiper>
    {props.imagenes.map((image, index) => (
      <SwiperSlide key={index}>
        <img src={`../../public/${props.url}/${image}`} alt={`Image ${index + 1}`} />
      </SwiperSlide>
    ))}
  </Swiper>
)}
    </Swiper>
  );
}
