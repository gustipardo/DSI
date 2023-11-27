import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

export default function Title({ posts}) {

  const urlParts = window.location.href.split('/');

  console.log(urlParts[urlParts.length-1])
  const name=urlParts[urlParts.length-1]
  console.log(posts)
  const props = posts.find(prop => prop.frontmatter.name === name);
  const Title = props.frontmatter.title
  console.log("title "+Title)
  return (
    <h1 >{Title}</h1>
  );
}