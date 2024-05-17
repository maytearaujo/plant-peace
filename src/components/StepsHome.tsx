import React from 'react'
import Button from '../components/Button';
import CardHome from '../components/CardHome';

const StepsHome = () => {
    const cardsData = [
        { image: "/src/assets/home/2steps/Ellipse 3.png", title: 'Watering', subtitle: 'water your plants when the top inch of soil feels dry to the touch. Avoid overwatering, as it can lead to root  dehydration.' },
        { image: "/src/assets/home/2steps/Ellipse 4.png", title: 'Sunlight', subtitle: 'Most plants need adequate sunlight to thrive. Place your plants in areas that receive the appropriate amount of light for their specific needs' },
        { image: "/src/assets/home/2steps/Ellipse 5.png", title: 'Nutrients and Fertilizing', subtitle: "Choose a suitable fertilizer based on the specific needs of your plants, whether it's a balanced or specialized formula." },
      ];
      
  return (
    <div>
      <div className='flex flex-col bg-white items-center justify-center pt-24 pb-24'>
        <div className='text-center mb-8'>
          <h1 className='font-ebGaramond font-bold text-64 text-primaryLunarGreen capitalize px-2'>steps to take care of your <span className='text-primaryAvacado'>plants</span></h1>
          <p className='mt-2 px-4 md:px-4 text-darkGray text-16'>By following these three steps - proper watering, appropriate sunlight, and providing essential nutrients - you'll be well on your way to <span className='flex flex-row text-center justify-center'>maintaining healthy and thriving plants.</span></p>
        </div>

        <div className='flex flex-col md:flex-row md:justify-center md:space-x-10 lg:space-x-20 my-10 md:my-0 mx-24'>
          {cardsData.map((card, index) => (
            <CardHome key={index} cardData={card} />
          ))}
          

        </div>

        <div className="flex flex-wrap lg:flex-nowrap my-10 mx-6 pt-10">
          <div className="md:flex md:flex-col md:items-center xl:justify-center xl:gap-10 xl:mx-10 lg:mx-8 lg:flex-row lg:items-start" >
            <div className='w-full px-10 md:px-16 lg:w-1/3 mb-6 lg:mb-0 lg:pr-10 lg:px-0'>
              <img className='w-full' src="/src/assets/home/2steps/Rectangle 32.png" alt="plant" />
            </div>
            <div className='w-full px-10 md:px-16 lg:w-1/3 mb-6 lg:mb-0 lg:pr-10 lg:px-0'>
              <img className='w-full' src="/src/assets/home/2steps/Rectangle 33.png" alt="plant" />
            </div>

            <div className="w-full px-10 md:px-16 lg:w-1/3 flex flex-col lg:px-0 " >
              <img src="/src/assets/home/2steps/Rectangle 34.png" alt="plant" className='w-full' />
              <p className="mt-8 mb-8 text-left lg:text-14 text-secondarySecondary text-sm leading-relaxed">Our website offers a wide array of stunning plants, ranging from vibrant flowers to lush indoor foliage,
                allowing you to create your very own green oasis. In addition to our extensive plant selection,
                we also provide gardening kits and fertilizers to equip you with everything you need to nurture your plants and achieve gardening success.
                But we don't stop there! We believe that knowledge is the key to a thriving garden,
                so we offer a wealth of information and resources on gardening techniques, plant care tips,
                and landscaping ideas. Whether you're a seasoned gardener or just starting your green journey,
                our goal is to inspire and support you every step of the way. Get ready to explore our virtual
                garden and discover the joys of gardening with us!
              </p>
              <Button>
                See more photos
              </Button>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default StepsHome
