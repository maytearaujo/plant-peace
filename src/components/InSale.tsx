import PlantsCard from "./PlantsCard"

const InSale = () => {
  return (
    <div className='flex flex-col items-center justify-center'>
      <h1 className='font-ebGaramond font-bold text-64 text-primaryLunarGreen capitalize'>Plants<span className='text-primaryAvacado'> in sale</span></h1>
      <PlantsCard />
    </div>
  )
}

export default InSale

