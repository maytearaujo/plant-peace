// import axios from 'axios';
//import productImage from '../../assets/home/3this/photo1.png'
import Button from '../../components/Button';
import Tag from '../../components/Tag';

import { useParams } from 'react-router-dom'
// const { id } = useParams();
import { useEffect, useState } from 'react';
import { api } from '../../services/Services';

type Product = {
  id: string;
  plantName: string;
  plantSubtitle: string;
  plantType: string;
  price: number | string;
  discountPercentage: number | string;
  label: string;
  labelArray: { plantType: string; label: string }[];
  features: string;
  description: string;
  imgUrl: string;
}


function Product() {
  const { id } = useParams();

  const [product, setProduct] = useState({} as Product);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await api.get(`/plants/${id}`);
  //       setProduct(response.data);
  //       console.log(response.data);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };

  //   fetchData();
  // }, [id]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get('/plants');
        const foundProduct = response.data.find((p: Product) => p.id === id);
        if (foundProduct) {
          setProduct(foundProduct);
        } else {
          console.error('Produto não encontrado');
        }
      } catch (error) {
        console.error('Erro ao buscar dados:', error);
      }
    };
  
    fetchData();
  }, [id]);
  
  return (
    <div className="flex w-screen justify-center items-center h-full mt-[141px] mb-[141px]">
      <div className="max-w-[1535px] w-full flex gap-[82px] my-[100px] mx-[100px] flex-wrap justify-center">
        <img src={product.imgUrl} alt="Product Image" className='max-w-[752px] w-full max-h-[690px] flex' />


        <section className='flex flex-col gap-6 w-[701px]'>
          <section>
            <h1 className='text-64 text-primaryLunarGreen font-bold font-ebGaramond text'>{product.plantName}</h1>
            <p className='text-2xl text-darkGray font-bold font-lato'>{product.plantSubtitle}</p>
          </section>

          <div className='flex gap-[14px]'>

            {product.labelArray && product.labelArray.map((label, index) => {
              return <Tag key={index} label={label.label} />
            })}

            <Tag label={product.plantType} />

          </div>

          <span className='text-black text-2xl font-lato font-bold'>{product.price}</span>

          <Button redirect='/NotFound'>
            <p>Check out</p>
          </Button>

          <h2 className='text-black text-2xl font-lato font-bold'>Features</h2>

          <ul className="pl-2 list-none p-0 m-0">
            <li className="relative text-sm flex items-center">
              <span className="inline-block mr-2 text-xs leading-none">•</span>
              <p className='font-raleway'>{product.label}</p>
            </li>
            <li className="relative text-sm flex items-center">
              <span className="inline-block mr-2 text-xs leading-none">•</span>
              <p className='font-raleway'>Discount: {product.discountPercentage}</p>
            </li>
            <li className="relative text-sm flex items-center">
              <span className="inline-block mr-2 text-xs leading-none">•</span>
              <p className='font-raleway'>{product.features}</p>
            </li>
          </ul>

          <div>
            <h2 className='text-black text-2xl font-lato font-bold'>Description</h2>
            <p className='text-black font-raleway mt-4'>{product.description}</p>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Product;