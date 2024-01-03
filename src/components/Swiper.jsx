import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import '../styles/Swiper.css'

export default ({ posts }) => {
    const urlParts = window.location.href.split('/');
    const name = urlParts[urlParts.length - 1];
    const props = posts.find((prop) => prop.frontmatter.name === name);
  
    const imagesArray = props.frontmatter.imagenes;


    console.log(imagesArray)

  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}>
        
        {imagesArray.map((imagesArray, index) => (
        <SwiperSlide key={index} className='SwiperSlide' id={`swiperSlide-${index}`}>
          <img className='SwiperSlide-img' src={`../../projects/${name}/${imagesArray}`} alt={`Imagen ${index + 1}`} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};