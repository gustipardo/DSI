import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

export default function ImageSlider() {

  const props =
  {
    frontmatter: {
      title: 'Barrio Walsh',
      ubicacion: 'González Catán',
      imagenes: [ 'Barrio_Walsh.jpeg', 'Barrio_Walsh2.jpg', 'Barrio_Walsh3.jpg' ],
      order: 1,
      layout: '../../Layout/ProjectPost.astro',
      name: 'Barrio_Walsh'
    },
    file: 
      'C:/Users/gusm2/OneDrive/Escritorio/DSI Nuevo/DSI React/DSI/src/pages/projects/Barrio_Walsh.md',
    url: '/projects/Barrio_Walsh',
  }

  return (
    <div>
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {props.frontmatter.imagenes.map((image, index) => (
          <SwiperSlide key={index}>
            <img
              className="p-2 mx-auto my-auto h-96 object-cover max-w-full "
              src={`/projects/${props.frontmatter.name}/${image}`}
              alt={`Image ${index + 1}`}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
