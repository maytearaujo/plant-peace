import React from 'react'

interface CardProps {
    cardData: {
        image: string;
        title: string;
        subtitle: string;
    };
}

const CardHome: React.FC<CardProps> = ({ cardData }) => {
    const { image, title, subtitle } = cardData;


    return (
        <div className='flex flex-col'>
            <div className='flex justify-center mt-6'>
                <img className=" mb-1.5 w-16 h-16 rounded-full object-cover" src={image} alt="Icon" />
            </div>

            <div className='text-center'>
                <h3 className='mt-6 text-darkIBBNB font-bold text-24'>{title}</h3>
                <p className='mt-10 text-secondarySecondary'>{subtitle}</p>
            </div>
        </div>
    )
}

export default CardHome
