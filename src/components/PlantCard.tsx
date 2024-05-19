import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import { useNavigate } from 'react-router-dom'

import imagensJSON from '../assets/data/plants.json'; // Importando o JSON
import Tag from './Tag';

interface PlantsCardProps {
    id: number;
    name: string;
    price: string;
    discountPrice: string;
    label: string;
}

const PlantCard = ({ id, name, price, discountPrice, label }: PlantsCardProps) => {
    const navigate = useNavigate();

    function handleNavigate() {
        navigate(`/Product/${id}`);
        window.scrollTo(0, 0);
    }

    return (
        <div className='flex flex-col max-w-[389px] my-24 drop-shadow-md cursor-pointer' onClick={handleNavigate}>
            <img src={imagensJSON[0].imgUrl} alt={name} />

            <div className='flex flex-col gap-6 bg-white px-8 pb-8 pt-4'>
                <div>
                    <h3 className='text-primaryLunarGreen font-lato font-bold text-2xl mb-1'>{name}</h3>
                    <span className='text-primaryLunarGreen font-raleway'>{price}</span>
                </div>

                <Tag label={label} style='carousel' />
            </div>
        </div>
    )
}

export default PlantCard;
