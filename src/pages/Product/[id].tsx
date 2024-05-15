import productImage from '../../assets/home/3this/photo 1.png'
import Button from '../../components/Button';
import Tag from '../../components/Tag';

function Product() {
  return (
    <div className="flex w-screen justify-center items-center h-full mt-[141px] mb-[141px]">
      <div className="max-w-[1535px] w-full flex gap-[82px] my-[100px] mx-[100px] flex-wrap justify-center">
        <img src={productImage} alt="Product image" className='max-w-[752px] w-full max-h-[690px] flex' />


        <section className='flex flex-col gap-6 w-[701px]'>
          <section>
            <h1 className='text-64 text-primaryLunarGreen font-bold font-ebGaramond text'>Echinocereus Cactus</h1>
            <p className='text-2xl text-darkGray font-bold font-lato'>A Majestic Addition to Your Plant Collection</p>
          </section>

          <div className='flex gap-[14px]'>
            <Tag label='indoor' />
            <Tag label='cactus' />
          </div>

          <span className='text-black text-2xl font-lato font-bold'>$139.99</span>

          <Button>
            <p>Check out</p>
          </Button>

          <h2 className='text-black text-2xl font-lato font-bold'>Features</h2>

          <ul className="pl-2 list-none p-0 m-0">
            <li className="relative text-sm flex items-center">
              <span className="inline-block mr-2 text-xs leading-none">•</span>
              <p className='font-raleway'>Species: Echinocereus spp.</p>
            </li>
            <li className="relative text-sm flex items-center">
              <span className="inline-block mr-2 text-xs leading-none">•</span>
              <p className='font-raleway'>Mature Size: Varies by species, typically ranging from 4 to 12 inches (10-30 cm) in height.</p>
            </li>
            <li className="relative text-sm flex items-center">
              <span className="inline-block mr-2 text-xs leading-none">•</span>
              <p className='font-raleway'>Blooming Season: Typically spring or summer, with flowers lasting several days to weeks.</p>
            </li>
            <li className="relative text-sm flex items-center">
              <span className="inline-block mr-2 text-xs leading-none">•</span>
              <p className='font-raleway'>Pot Size: Available in various pot sizes to suit your preference and needs.</p>
            </li>
          </ul>

          <div>
            <h2 className='text-black text-2xl font-lato font-bold'>Description</h2>
            <p className='text-black font-raleway mt-4'>Ladyfinger cactus (*Echinocereus pentalophus*) is also known as Alice, Devil's Fingers, and Dog Tail. It needs bright sunlight, light fertilizer, and is prone to root rot. The root system is shallow and weak. Aphids and mealybugs are also a danger. Avoiding wet soil can help with success with a ladyfinger cactus.</p>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Product;
