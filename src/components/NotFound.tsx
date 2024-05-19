import React from 'react'
import Button from './Button';

const NotFound = () => {
    return (
        <div>
            <div className='w-full h-auto flex flex-row'>
                <div className='w-1/2 flex flex-col justify-center items-start ml-5 lg:ml-24'>
                    <h1 className='font-stylish text-16 font-bold md:text-50 lg:text-7xl '>Plant not found <span className='flex flex-row justify-start'>Ops, Page not found</span></h1>
                    <div className='flex flex-row my-5 w-1/2'>
                        <Button border>
                        <a className='font-bold' href='/'>Go Back</a>
                        </Button>
                    </div>
                </div>

                <div className="w-1/2 bg-error-page bg-no-repeat bg-cover lg:pr-6">
                    <img className="relative z-20 " src="/src/assets/error/plantsError.png" alt="plant" />
                </div>
            </div>
        </div>

    )
}

export default NotFound
