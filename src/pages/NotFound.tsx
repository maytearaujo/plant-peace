import Button from '../components/Button';

const NotFound = () => {
    return (
        <div>
            <div className='w-full flex flex-col bg-greenError min-h-screen'>
                <div className='flex flex-col items-center lg:flex-row'>
                    <img className='h-96 lg:hidden  animate-bounce' src="/src/assets/error/plant2.png" alt="plant" />

                    <div className='lg:w-1/2 flex flex-col justify-center items-center ml-5'>
                        <h1 className='font-stylish text-center text-4xl font-bold md:text-5xl lg:text-6xl '>Plant not found <span className='flex flex-row justify-start'>Ops, Page not found</span></h1>
                        <div className='flex flex-row my-10'>
                            <Button border redirect='/'>
                                <span className='font-bold'>Go Back</span>
                            </Button>
                        </div>
                    </div>

                    <div className="lg:bg-error-page lg:bg-no-repeat lg:bg-cover lg:w-1/2 lg:min-h-screen">
                        <img className="relative z-20 hidden lg:block" src="/src/assets/error/plantsError.png" alt="plant" />
                    </div>
                </div>

            </div>
        </div>

    )
}

export default NotFound
