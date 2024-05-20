

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import { useNavigate } from 'react-router-dom'

import imagensJSON from '../assets/data/plants.json'; // Importando o JSON
import Tag from './Tag';
import { HTMLAttributes } from 'react';

interface PlantsCardProps extends HTMLAttributes<HTMLDivElement> {
    id: string;
    plantName: string;
    price: string;
    discountPrice: string;
    label: string;
}

const PlantCard = ({ id, plantName, price, discountPrice, label, ...rest }: PlantsCardProps) => {
    const navigate = useNavigate();

    function handleNavigate() {
        navigate(`/Product/${id}`);
        window.scrollTo(0, 0);
    }

    return (
        <div className='flex flex-col max-w-[389px] my-24 drop-shadow-md cursor-pointer' onClick={handleNavigate} {...rest}>
            <img src={imagensJSON[0].imgUrl} alt={plantName} />

            <div className='flex flex-col gap-6 bg-white px-8 pb-8 pt-4'>
                <div>
                    <h3 className='text-primaryLunarGreen font-lato font-bold text-2xl mb-1'>{plantName}</h3>
                    <span className='text-primaryLunarGreen font-raleway'>{price}</span>
                </div>

                <Tag label={label} style='carousel' />
            </div>
        </div>
    )
}

export default PlantCard;

