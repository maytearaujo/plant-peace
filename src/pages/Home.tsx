import Button from '../components/Button';
import CardHome from '../components/CardHome';

const Home = () => {
  const cardsData = [
    { image: "/src/assets/home/2steps/Ellipse 3.png", title: 'Watering', subtitle: 'water your plants when the top inch of soil feels dry to the touch. Avoid overwatering, as it can lead to root  dehydration.' },
    { image: "/src/assets/home/2steps/Ellipse 4.png", title: 'Sunlight', subtitle: 'Most plants need adequate sunlight to thrive. Place your plants in areas that receive the appropriate amount of light for their specific needs' },
    { image: "/src/assets/home/2steps/Ellipse 5.png", title: 'Nutrients and Fertilizing', subtitle: "Choose a suitable fertilizer based on the specific needs of your plants, whether it's a balanced or specialized formula." },
  ];

  return (
    <div className="bg-white w-screen">

    <div className='flex flex-col items-center justify-center '>
      <div className='text-center mb-8'>
        <h1 className='font-ebGaramond font-bold text-64 text-primaryLunarGreen capitalize px-2 '>steps to take care of your <span className='text-primaryAvacado'>plants</span></h1>
        <p className='mt-2 px-4 md:px-4 text-darkGray text-16'>By following these three steps - proper watering, appropriate sunlight, and providing essential nutrients - you'll be well on your way to <span className='flex flex-row text-center justify-center'>maintaining healthy and thriving plants.</span></p>
      </div>

      <div className='flex flex-col md:flex-row md:justify-center md:space-x-10 lg:space-x-20 my-10 md:my-0 mx-24'>
        {cardsData.map((card, index) => (
          <CardHome key={index} cardData={card} />
        ))}
      </div>

      <div className='lg:transform lg:scale-90 flex flex-col md:flex-row md:justify-center  my-10 md:my-0 mx-24 pt-10 lg:pt-16 md:transform md:scale-50'>
        <img className=' mb-6 lg:mb-0 md:mb-0 md:mr-16 lg:mr-0' src="/src/assets/home/2steps/Rectangle 32.png" alt="plants" />
        <img className='lg:ml-[100px]' src="/src/assets/home/2steps/Rectangle 33.png" alt="plants" />

        <div className='flex flex-col pt-10 lg:pt-0 lg:ml-[100px] md:ml-[100px]'>
          <img className=' justify-center items-center' src="/src/assets/home/2steps/Rectangle 34.png" alt="plants" />
          <p className='mt-[32px] mb-[32px] text-secondarySecondary md:w-[452px] lg:w-[452px]'>Our website offers a wide array of stunning plants, ranging from vibrant flowers to lush indoor foliage, allowing you to create your very own green oasis. In addition to our extensive plant selection, we also provide gardening kits and fertilizers to equip you with everything you need to nurture your plants and achieve gardening success. But we don't stop there! We believe that knowledge is the key to a thriving garden, so we offer a wealth of information and resources on gardening techniques, plant care tips, and landscaping ideas. Whether you're a seasoned gardener or just starting your green journey, our goal is to inspire and support you every step of the way. Get ready to explore our virtual garden and discover the joys of gardening with us!</p>

          <Button>
            <p>See more photos</p>
          </Button>
        </div>
      </div>

    </div>
  </div>

       
  )
}

export default Home
