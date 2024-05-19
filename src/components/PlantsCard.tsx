import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import imagensJSON from '../../src/assets/data/plants.json'; // Importando o JSON

const PlantsCard = () => {

    interface Imagem {
        id: number;
        name: string;
        subtitle: string;
        label: string[];
        price: string;
        isInSale: boolean;
        features: string;
        discountPercentage: number;
        description: string;
        imgUrl: string;
    }

    const imagens: Imagem[] = imagensJSON;

    return (
        <div className='flex items-center justify-center w-full'>
            <div className='w-[50%] flex flex-col justify-evenly'>
                <div>
                    <Swiper 
                        modules={[Navigation, Pagination, Scrollbar, A11y]}
                        spaceBetween={5}
                        slidesPerView={4}
                        navigation
                        pagination={{ clickable: true }}
                        scrollbar={{ draggable: true }}
                    >
                        {imagens.map((item) => (
                            <SwiperSlide key={item.id}>
                                <img
                                    src={item.imgUrl}
                                    alt="Slider"
                                    className="w-full h-[400px] object-contain"
                                />
                                <p>{item.name}</p>
                                <p>{item.price}</p>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </div>
    )
}

export default PlantsCard