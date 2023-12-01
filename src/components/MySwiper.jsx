import { useState, useEffect } from 'react';
import 'swiper/css';
import '../styles/swiperComponent.css';

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

  function handleImageClick(event) {
    const image = document.getElementById('imagenn');
    const imageRect = image.getBoundingClientRect();
    const clickX = event.clientX - imageRect.left;
    const imageCenter = imageRect.width / 2;

    if (clickX < imageCenter) {
      // Clic en la mitad izquierda de la imagen
      prevSlide();
    } else {
      // Clic en la mitad derecha de la imagen
      nextSlide();
    }
  }

  return (
    <div
      className="swiper-container"
      id="swiperContainer"
      onClick={handleImageClick}
    >
      <div className="swiper-wrapper" id="swiperWrapper">
        <img className='Swiper-image' id="imagenn" src="" alt="Imagen" />
      </div>
      <button id="prevBtn" onClick={prevSlide} className="arrow-button prev">
        <img src="/assets/arrow.png" className='w-4 sm:w-8 rotate-90'/>
      </button>
      <button id="nextBtn" onClick={nextSlide} className="arrow-button next">
        <img src="/assets/arrow.png" className='w-4 sm:w-8 rotate-90'/>
      </button>
    </div>
  );
}
