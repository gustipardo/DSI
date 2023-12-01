import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import '../styles/swiperComponent.css';
import ArrowIcon from '../../public/assets/arrow.svg'



export default function ImageSlider({ posts }) {
  const urlParts = window.location.href.split('/');
  const name = urlParts[urlParts.length - 1];
  const props = posts.find((prop) => prop.frontmatter.name === name);

  const imagesArray = props.frontmatter.imagenes;
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    generateSlide();
  }, [currentIndex]);

  function generateSlide() {
    const imagenn = document.getElementById('imagenn');
    if (imagenn) {
      imagenn.src = `../../projects/${name}/${imagesArray[currentIndex]}`;
      imagenn.alt = 'Imagen';
    }
  }

  function prevSlide() {
    const newIndex = (currentIndex - 1 + imagesArray.length) % imagesArray.length;
    setCurrentIndex(newIndex);
  }

  function nextSlide() {
    const newIndex = (currentIndex + 1) % imagesArray.length;
    setCurrentIndex(newIndex);
  }

  return (
    <div className="swiper-container" id="swiperContainer">
      <div className="swiper-wrapper" id="swiperWrapper">
        <img className='Swiper-image' id="imagenn" src="" alt="Imagen" />
      </div>
      <button id="prevBtn" onClick={prevSlide} className="arrow-button prev">
        <img src="/assets/arrow.svg" className='w-8 sm:w-16'/>
      </button>
      <button id="nextBtn" onClick={nextSlide} className="arrow-button next">
      <img src="/assets/arrow.svg" className='w-8 sm:w-16'/>
      </button>
      
    </div>
  );
}
