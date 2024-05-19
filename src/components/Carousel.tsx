import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import "swiper/css";

import PlantCard from './PlantCard.tsx';
import { plants } from '../../data/plants.json';

interface CarouselProps {
  margin?: boolean;
}

const Carousel = ({ margin }: CarouselProps) => {

  return (
    <div className={`w-screen ${margin && 'mt-[72px]'}`}>
      <div className='pl-[100px] w-full'>
        <div>
          <Swiper
            spaceBetween={50}
            slidesPerView={3.8}
            draggable={true}
            breakpoints={{
              1600: {
                slidesPerView: 3.8,
              },
              1400: {
                slidesPerView: 3.25,
              },
              1200: {
                slidesPerView: 3,
              },
              1024: {
                slidesPerView: 2.5,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              576: {
                slidesPerView: 1.5,
                spaceBetween: 20,
              },
              375: {
                slidesPerView: 1.25,
                spaceBetween: 15,
              },
              320: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
            }}
            className='flex gap-[48px]'
          >
            {plants.map((item) => (
              <SwiperSlide key={item.id}>
                <PlantCard
                  id={item.id}
                  name={item.name}
                  price={item.price}
                  discountPrice={item.discountPercentage.toString()}
                  label={item.label[0]}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  )
}

export default Carousel;
