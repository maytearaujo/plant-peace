import Hero from '../components/Hero';
import InSale from '../components/InSale';
import MostPopular from '../components/MostPopular';
import StepsHome from '../components/StepsHome';

const Home = () => {
  return (
    <div className="w-screen">
      <Hero />
      <StepsHome />
      <MostPopular />
      <InSale />

    </div>

  )
}

export default Home
