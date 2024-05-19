import PlantsCard from './PlantsCard'

const MostPopular = () => {
  return (
    <div className='flex flex-col items-center justify-center'>
      <h1 className='font-ebGaramond font-bold text-64 text-primaryLunarGreen capitalize'>This weeks most popular<span className='text-primaryAvacado'> and best selling</span></h1>
      <h1 className='font-ebGaramond font-bold text-64 text-primaryLunarGreen capitalize'>Plants<span className='text-primaryAvacado'> in sale</span></h1>
      <PlantsCard />
      {/* <InSale/> */}
    </div>
  )
}

export default MostPopular
