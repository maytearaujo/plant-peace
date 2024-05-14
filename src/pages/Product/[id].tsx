import productImage from '../../assets/home/3this/photo 1.png'
import Button from '../../components/Button';
import Tag from '../../components/Tag';

function Product() {
  return (
    <div className="flex justify-center items-center h-full mt-[141px] mb-[141px]">
      <div className="max-w-[1535px] w-full mx-auto flex justify-between pb-[100px] pt-[100px]">
        <img src={productImage} alt="Product image" className='w-[752px] h-[690px]' />

        <section className='flex flex-col gap-6 w-[701px]'>
          <section>
            <h1 className='text-64 text-primaryLunarGreen font-bold font-ebGaramond text'>Echinocereus Cactus</h1>
            <p className='text-2xl text-darkGray font-bold font-lato'>A Majestic Addition to Your Plant Collection</p>
          </section>

          <div className='flex gap-[14px]'>
            <Tag label='indoor' />
            <Tag label='cactus' />
          </div>

          <span className='text-2xl font-lato font-bold'>$139.99</span>

          <Button label='Check out' />
        </section>
      </div>
    </div>
  )
}

export default Product;
