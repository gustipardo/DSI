import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import '../styles/swiperComponent.css'
export default function ImageSlider({ posts}) {

  const urlParts = window.location.href.split('/');

  console.log(urlParts[urlParts.length-1])
  const name=urlParts[urlParts.length-1]
console.log(posts)
  const props = posts.find(prop => prop.frontmatter.name === name);
  console.log(props)
  return (
    <div style={{
      height: '50vh',
      width: window.innerWidth < 800 ? '90vw' : '50vw',
      transition: 'width 0.5s',  // Agregado para una transición suave del ancho
    }}>
      <Swiper
        className='bg-white max-h[500px]'
        spaceBetween={50}
        slidesPerView={1}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {props.frontmatter.imagenes.map((image, index) => (
          <SwiperSlide key={index}>
            <img
              className='Swiper-image'
              src={`/projects/${props.frontmatter.name}/${image}`}
              alt={`Image ${index + 1}`}

            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}