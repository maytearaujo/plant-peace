import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import PlantCard from './PlantCard.tsx';
import { useEffect, useState } from 'react';
import axios from 'axios';

type Plant = {
  id: string;
  plantName: string;
  plantSubtitle: string;
  label: string[];
  labelArray: { plantType: string; label: string }[];
  price: string;
  discountPercentage: string;
  features: string;
  description: string;
  imgUrl: string;
};

type FilteredPlant = {
  id: string;
  plantName: string;
  plantSubtitle: string;
  label: string[];
  labelArray: { plantType: string; label: string }[];
  price: string;
  discountPercentage: number;
  features: string;
  description: string;
  imgUrl: string;
};

interface CarouselProps {
  margin?: boolean;
  isInSale?: boolean;
}

const Carousel = ({ margin, isInSale }: CarouselProps) => {
  const [plants, setPlants] = useState<Plant[]>([]);
  const [plantsWithDiscount, setPlantsWithDiscount] = useState<FilteredPlant[]>([]);
  const [plantsWithoutDiscount, setPlantsWithoutDiscount] = useState<FilteredPlant[]>([]);

  useEffect(() => {
    const fetchPlants = async () => {
      try {
        const response = await axios.get('http://localhost:3000/plants');
        setPlants(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchPlants();
  }, []);

  useEffect(() => {
    const cleanedDiscount = plants.map((plant) => {
      const filteredDiscount = plant.discountPercentage.replace('%', '');
      const discount = parseInt(filteredDiscount);

      return {
        ...plant,
        discountPercentage: discount,
      };
    });

    function filterPlantsWithDiscount() {
      const plantsWithDiscount = cleanedDiscount.filter((plant) => plant.discountPercentage > 0);
      setPlantsWithDiscount(plantsWithDiscount);

      const plantsWithoutDiscount = cleanedDiscount.filter((plant) => plant.discountPercentage === 0);
      setPlantsWithoutDiscount(plantsWithoutDiscount);
    }
    filterPlantsWithDiscount();
  }, [plants]);


  return (
    <div className={`w-screen ${margin && 'mt-[72px]'}`}>
      <div className='pl-[100px] w-full'>
        <div>
          <Swiper
            spaceBetween={50}
            slidesPerView={3.8}
            draggable={true}
            breakpoints={{
              1600: { slidesPerView: 3.8 },
              1400: { slidesPerView: 3.25 },
              1200: { slidesPerView: 3 },
              1024: { slidesPerView: 2.5 },
              768: { slidesPerView: 2, spaceBetween: 30 },
              576: { slidesPerView: 1.5, spaceBetween: 20 },
              375: { slidesPerView: 1.25, spaceBetween: 15 },
              320: { slidesPerView: 1, spaceBetween: 10 },
            }}
            className='flex gap-[48px]'
          >
            {isInSale === true && plants.length > 0 ? plantsWithDiscount.map((item) => (
              <SwiperSlide key={item.id}>
                <PlantCard
                  id={item.id}
                  plantName={item.plantName}
                  price={item.price}
                  discountPrice={item.discountPercentage.toString()}
                  label={item.labelArray[0].label}
                  imgUrl={item.imgUrl}                />
              </SwiperSlide>
            )) : plantsWithoutDiscount.length > 0 && plantsWithoutDiscount.map((item) => (
              <SwiperSlide key={item.id}>
                <PlantCard
                  id={item.id}
                  plantName={item.plantName}
                  price={item.price}
                  label={item.labelArray[0].label}
                  imgUrl={item.imgUrl}                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
