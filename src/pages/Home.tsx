import Hero from '../components/Hero';
import InSale from '../components/InSale';
import MostPopular from '../components/MostPopular';
import StepsHome from '../components/StepsHome';

const Home = () => {
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
