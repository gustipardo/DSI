import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

export default function ImageSlider({name, posts}) {

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
