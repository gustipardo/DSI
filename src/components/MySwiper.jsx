import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

export default function ImageSlider({ posts}) {

  const urlParts = window.location.href.split('/');

  console.log(urlParts[urlParts.length-1])
  name=urlParts[urlParts.length-1]
console.log(posts)
  const props = posts.find(prop => prop.frontmatter.name === name);
  console.log(props)
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
              src={`/projects/${props.frontmatter.name}/${image}`}
              alt={`Image ${index + 1}`}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
