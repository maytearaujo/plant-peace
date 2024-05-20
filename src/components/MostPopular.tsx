import Carousel from './Carousel'

const MostPopular = () => {
  return (
    <div className='flex flex-col items-center justify-center bg-[#F0F1EE]'>
      <h1 className='font-ebGaramond font-bold text-64 text-primaryLunarGreen capitalize my-10'>This weeks most popular<span className='text-primaryAvacado'> and best selling</span></h1>
      <Carousel margin />
    </div>
  )
}

export default MostPopular
