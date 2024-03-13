import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from "../CSS/Carousel.module.css";

const SimpleCarousel = () => {
    const settings = {
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,       
      autoplaySpeed: 2000, 
    };
  
    const images = [
        'https://www.asianpaints.com/content/dam/asian_paints/home/hp-banner-new-3-m.webp',
        'https://static.asianpaints.com/content/dam/asian_paints/home/webp-images/paints-and-textures/colour-catalogue-spotlight-lp.webp',
        'https://static.asianpaints.com/content/dam/asian_paints/home/homepage-ultima-protek-spotlight-v2b-asian-paints.jpg',
     'https://cdn.zeebiz.com/sites/default/files/styles/zeebiz_850x478/public/2022/12/01/213791-untitled-design.jpg?itok=tPnkWTH0'
    ];
  
    return (
      <div>
       
        <Slider {...settings}>
          {images.map((image, index) => (
            <div key={index}>
              <img src={image} alt={`${index + 1}`} className={styles.carouselImage} />
            </div>
          ))}
        </Slider>
      </div>
    );
  };
  
  export default SimpleCarousel;