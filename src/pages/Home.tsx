import MostPopular from '../components/MostPopular';
import InSale from '../components/InSale';
import Hero from '../components/Hero';
import StepsHome from '../components/StepsHome';

const Home = () => {
  const cardsData = [
    { image: "/src/assets/home/2steps/Ellipse 3.png", title: 'Watering', subtitle: 'water your plants when the top inch of soil feels dry to the touch. Avoid overwatering, as it can lead to root  dehydration.' },
    { image: "/src/assets/home/2steps/Ellipse 4.png", title: 'Sunlight', subtitle: 'Most plants need adequate sunlight to thrive. Place your plants in areas that receive the appropriate amount of light for their specific needs' },
    { image: "/src/assets/home/2steps/Ellipse 5.png", title: 'Nutrients and Fertilizing', subtitle: "Choose a suitable fertilizer based on the specific needs of your plants, whether it's a balanced or specialized formula." },
  ];


  return (
      <div className="w-screen">
        <Hero />
        <StepsHome />


        <div>
          <h1 className='font-ebGaramond font-bold text-64 text-primaryLunarGreen capitalize'>This weeks most popular<span className='text-primaryAvacado'>and best selling</span></h1>
          <MostPopular />
          <h1 className='font-ebGaramond font-bold text-64 text-primaryLunarGreen capitalize'>Plants<span className='text-primaryAvacado'>in sale</span></h1>
        </div>

      </div>

      )
}

      export default Home
