/* eslint-disable react/prop-types */
// Style Component
import './Story.css';

// Background Path
import background from '../../../assets/decorations/bgVintage2.png';

// Background Component
import Background from '../../background/Background';

// Animate
import { useAnimate } from '../../../utils/observ';

// Utils
import { useState } from 'react';

export default function Story() {
  // Data images
  const images = [
    { image: 'couple5.jpeg', alt: 'image couple one', year: 2020, story: 'First time meeting' },
    { image: 'couple1.jpeg', alt: 'image couple two', year: 2021, story: 'Start a relationship' },
    { image: 'couple2.jpeg', alt: 'image couple three', year: 2022, story: 'Getting to know each other better' },
    { image: 'couple3.jpeg', alt: 'image couple four', year: 2023, story: 'Start getting serious about a relationship' },
    { image: 'couple4.jpeg', alt: 'image couple five', year: 2024, story: 'Finally tied the relationship in marriage' },
  ];

  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openModal = (index) => {
    setCurrentIndex(index);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const nextImage = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  };

  const setRef = useAnimate();

  return (
    <section className="section story">
      <Background background={background} />
      <h2 className="story__title appearDownScroll timeline-veryslow">Our Love Story</h2>
      <div ref={setRef} className="story__slider-container hiddenUp">
        {images.map((item, index) => (
          <SliderItem key={item.image} item={item} index={index} amount={images.length} openModal={openModal} />
        ))}
      </div>
      {isOpen && <ModalStory closeModal={closeModal} prevImage={prevImage} images={images} currentIndex={currentIndex} nextImage={nextImage} />}
    </section>
  );
}

function SliderItem({ item, index, amount, openModal }) {
  function onClick() {
    openModal(index);
  }
  return (
    <div onClick={onClick} className="story__slider-item">
      <div aria-hidden className="gradasi"></div>
      <img loading="lazy" src={`images/${item.image}`} alt={item.alt} />
      <div className="story__slider-item-info">
        <h3 className="story__slider-item-title">{item.year}</h3>
        <p className="story__slider-item-story">{item.story}</p>
      </div>
      <div className="story__slider-amount">{`${index + 1}/${amount}`}</div>
    </div>
  );
}

function ModalStory({ closeModal, prevImage, images, currentIndex, nextImage }) {
  return (
    <div className="story__modal">
      <button className="story__close-btn" onClick={closeModal}>
        ×
      </button>
      <button className="story__prev-btn" onClick={prevImage}>
        <i className="bi bi-caret-left"></i>
      </button>
      <img loading="lazy" src={`images/${images[currentIndex].image}`} alt={`Gallery ${currentIndex}`} className="story__modal-image" />
      <button className="story__next-btn" onClick={nextImage}>
        <i className="bi bi-caret-right"></i>
      </button>
    </div>
  );
}
