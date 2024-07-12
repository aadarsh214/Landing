import React from 'react';
import './Later.css';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

const texts = [
  { title: 'Job', subtitle: 'Placement' },
  { title: 'Mock', subtitle: 'Interview' },
  { title: 'Resume', subtitle: 'Preparation' },
  { title: 'AI', subtitle: 'Doubtmate' },
  { title: 'Quizmaster', subtitle: 'Hub' },
  { title: 'Certify &', subtitle: 'Propel Hub' },
  { title: "Leaders's", subtitle: 'Summit' },
  { title: 'Credentials', subtitle: 'And Badges' },
];

const Later = () => {
  return (
    <div className='maining'>
       <Swiper
    spaceBetween={50}
    slidesPerView={3}
    onSlideChange={() => console.log('slide change')}
    onSwiper={(swiper) => console.log(swiper)}
  >

    <div>
      {texts.map((text, index) => (
        <div className='talks' key={index}>
             <SwiperSlide>
             <div className='dabbe'>
            <h1 className='ai'>{text.title}
              <span className='doubt'>{text.subtitle}</span>
            </h1>
          </div>
             </SwiperSlide>
        </div>
      ))}
    </div>
  </Swiper>
    </div>
  )
}

export default Later
