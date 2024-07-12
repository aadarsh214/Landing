import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, EffectCoverflow } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-coverflow';

import './Sliders.css';

// Import images
import path_to_image1 from './path_to_image1.jpg';
import path_to_image2 from './path_to_image2.jpg';
import path_to_image3 from './path_to_image3.jpg';
import path_to_image4 from './path_to_image4.jpg';
import path_to_image5 from './path_to_image5.jpg';
import back from './back.mp4';

 
const images = [path_to_image1, path_to_image2, path_to_image3, path_to_image4, path_to_image5];
  
const Sliders = () => {
  return (
       <div className="carousel">
        <h1 className='su'>Success Stories</h1>
        <h1 className='he'>Hear from our satisfied students</h1>
        <button className="read-more-btn">
          Read More <span className="arrow">&gt;</span>
        </button>
        <div className='backi'>
        <video autoPlay loop muted src={back} className='backing'></video>
        </div>

      <Swiper
        modules={[Navigation, Pagination, EffectCoverflow]}
        spaceBetween={30}
        slidesPerView={3}
        centeredSlides={true}
        navigation
        pagination={{ clickable: true }}
        loop={true}
        effect="coverflow"
        coverflowEffect={{
          rotate: 30,
          stretch: 10,
          depth: 200,
          modifier: 1,
          slideShadows: false,
        }}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <img src={image} alt={`Slide ${index}`} className="carousel__image" />
          </SwiperSlide>
        ))}
      </Swiper>

     
    </div>
  
  );
};

export default Sliders;
