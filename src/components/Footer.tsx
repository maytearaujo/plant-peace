import React from 'react'

const Footer = () => {
  return (
    <footer className='relative bg-bgFooter h-160 md:h-572'>
      <div className='md:mx-100 text-white'>
        <div className='absolute inset-0 bg-cover bg-center' style={{ backgroundImage: "url('../src/assets/footer/1102973_204 1.png')" }}></div>
        <div className='relative flex'>
          <div className='ml-10 my-20 md:my-135 space-y-[0.3125rem] md:space-y-[1rem]'>
            <h3 className='font-ebGaramond-bold text-20 md:text-24'>Stay Fresh</h3>
            <p className='font-raleway text-10 md:text-16'>compassinhos@gmail.com</p>
            <p className='font-raleway text-10 md:text-16'>+55 41 99999-9999</p>
          </div>
          <div className=' ml-auto mt-20 md:mt-174 flex'>
            <ul className="mr-8 md:mr-52 space-y-[0.3125rem] md:space-y-[1rem]">
              <h4 className='font-lato text-12 md:text-24'>Links</h4>
              <li className='font-raleway text-10 md:text-16'><a href="/about" className='hover:text-green-500'>About Us</a></li>
              <li className='font-raleway text-10 md:text-16'><a href="/all-products" className='hover:text-green-500'>Products</a></li>
              <li className='font-raleway text-10 md:text-16'><a href="/blogs" className='hover:text-green-500'>Blogs</a></li>
            </ul>
            <ul className='mr-10 space-y-[0.3125rem] md:space-y-[1rem]'>
              <h4 className='font-lato text-12 md:text-24'>Community</h4>
              <li className='font-raleway text-10 md:text-16'><a href="/about" className='hover:text-green-500'>About Us</a></li>
              <li className='font-raleway text-10 md:text-16'><a href="/all-products" className='hover:text-green-500'>Products</a></li>
              <li className='font-raleway text-10 md:text-16'><a href="/blogs" className='hover:text-green-500'>Blogs</a></li>
            </ul>
          </div>
        </div>
        <div className='flex justify-center'>
          <img src="src/assets/footer/Line 1.png" className='w-[80%] md:w-[100%]' alt="Line" />
        </div>
        <div className='flex md:mt-28'>
          <img src="src/assets/footer/Group 26.png" className='w-24 mt-10 md:w-54' alt="" />
          <p className='font-raleway ml-auto mt-10 text-10 text-center md:text-16 md:text-center w-80 md:w-200'>Compassinhos ®. All rights reserved.</p>
        </div>
      </div>
    </footer>
    )
  }
  
  export default Footer