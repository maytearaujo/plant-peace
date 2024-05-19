// import axios from 'axios'
// import { useState, useEffect, Fragment } from 'react'

// import photo1 from '../../src/assets/home/3this/photo 1.png';
// import photo2 from '../../src/assets/home/3this/Photo 2.png';
// import photo3 from '../../src/assets/home/3this/Photo 3.png';
// import photo4 from '../../src/assets/home/3this/Photo 4.png';


import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import imagensJSON from '../../src/assets/data/plants.json'; // Importando o JSON

// const PlantsCard = (props: string) => {
//     const [list, setList] = useState([]);

//     useEffect(() => {
//         axios.get('http://localhost:3000/plants')
//             .then((response) => {
//                 setList(response.data.plants)
//                 console.log(list)
//             })
//     }, []);

//     const images = [photo1, photo2, photo3, photo4]
//     return (
//         <Fragment>
//             {list.length > 0 ? (
//                 <Fragment>
//                     <img src={images[props.num]} alt="Plants" />
//                     <p>{list[props.num.name]}</p>
//                     <p>{list[props.num.price]}</p>
//                     <p>{list[props.num.label]}</p>

//                 </Fragment>

//             ) : (
//                 <p> Carregando Plantas</p>
//             )
//             }
//         </Fragment>

//     )
// }

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
            <div className='text-purple-400 text-3xl bold w-[50%] flex flex-col justify-evenly'>
                <h1 className="text-center">Carousel de Imagens</h1>
                <div>
                    <Swiper 
                        modules={[Navigation, Pagination, Scrollbar, A11y]}
                        spaceBetween={5}
                        slidesPerView={1}
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