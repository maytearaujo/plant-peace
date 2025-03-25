// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import { useNavigate } from 'react-router-dom';

import imagensJSON from '../../data/plants.json'; // Importando o JSON

import Tag from './Tag';
import { HTMLAttributes, useEffect, useState } from 'react';

interface PlantsCardProps extends HTMLAttributes<HTMLDivElement> {
    id: string;
    plantName: string;
    price: string;
    discountPrice?: string;
    label: string;
}

const PlantCard = ({ id, plantName, price, discountPrice, label, ...rest }: PlantsCardProps) => {
    const [discount, setDiscount] = useState<number>(0);

    const navigate = useNavigate();

    function handleNavigate() {
        navigate(`/Product/${id}`);
        window.scrollTo(0, 0);
    }

    useEffect(() => {
        const priceNumber = parseFloat(price.replace('R$', '').replace(',', '.'));
        const discountPriceNumber = parseFloat(discountPrice?.replace('R$', '').replace(',', '.') ?? '0');

        if (priceNumber && discountPriceNumber) {
            const total = ((priceNumber - discountPriceNumber) / priceNumber) * 100;
            const totalFixed = total.toFixed(0);
            setDiscount(parseInt(totalFixed));
        }
    }, [price, discountPrice]);

    return (
        <div className='flex flex-col max-w-[389px] my-24 drop-shadow-md cursor-pointer' onClick={handleNavigate} {...rest}>
            <img className='opacity-75 hover:opacity-100' src={imagensJSON.plants[0]?.imgUrl} alt={plantName} />

            <div className='flex flex-col gap-6 bg-white px-8 pb-8 pt-4'>
                <div>
                    <h3 className='text-primaryLunarGreen font-lato font-bold text-2xl mb-1'>{plantName}</h3>
                    <div className='flex gap-4'>
                        <span className='text-primaryLunarGreen font-raleway'>
                            {discountPrice ? (
                                `R$${discount}`
                            ) : (
                                price
                            )}
                        </span>
                        {discountPrice && <span className='text-darkGray font-raleway line-through'>{price}</span>}
                    </div>
                </div>

                <Tag label={label} style='carousel' />
            </div>
        </div>
    );
};

export default PlantCard;
