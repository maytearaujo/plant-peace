import Carousel from './Carousel'

function InSale() {
    return (
        <div className='flex flex-col items-center justify-center bg-[#F0F1EE]'>
            <h1 className='font-ebGaramond font-bold text-64 text-primaryLunarGreen capitalize'><span className='text-primaryAvacado'> Plants In </span>Sale</h1>
            <Carousel isInSale={true} />
        </div>
    )
}

export default InSale;
