import { Link } from 'react-router-dom'
import logo from '../assets/footer/Group 26.png'

const Footer = () => {
  return (
    <footer className='relative bg-bgFooter h-[150px] md:h-[572px]'>
      <div className='md:mx-[100px] text-white'>
        <div className='absolute inset-0 bg-cover bg-center' style={{ backgroundImage: "url('../src/assets/footer/1102973_204 1.png')" }}></div>
        <div className='relative flex'>
          <div className='ml-[10px] my-[20px] md:my-[135px] space-y-[5px] md:space-y-[16px]'>
            <h3 className='font-ebGaramond-bold text-[20px] md:text-[64px]'>Stay Fresh</h3>
            <p className='font-raleway text-[10px] md:text-[16px]'>compassinhos@gmail.com</p>
            <p className='font-raleway text-[10px] md:text-[16px]'>+55 41 99999-9999</p>
          </div>
          <div className=' ml-auto mt-[20px] md:mt-[174px] flex'>
            <ul className="mr-[8px] md:mr-[52px] space-y-[5px] md:space-y-[16px]">
              <h4 className='font-lato text-[12px] md:text-[24px]'>Links</h4>
              <li className='font-raleway text-[10px] md:text-[16px]'><Link to="/About" className='hover:text-green-500'>About Us</Link></li>
              <li className='font-raleway text-[10px] md:text-[16px]'><Link to="/all-products" className='hover:text-green-500'>Products</Link></li>
              <li className='font-raleway text-[10px] md:text-[16px]'><Link to="/NotFound" className='hover:text-green-500'>Blogs</Link></li>
            </ul>
            <ul className='space-y-[5px] mr-[10px] md:space-y-[16px]'>
              <h4 className='font-lato text-[12px] md:text-[24px]'>Community</h4>
              <li className='font-raleway text-[10px] md:text-[16px]'><Link to="/About" className='hover:text-green-500'>About Us</Link></li>
              <li className='font-raleway text-[10px] md:text-[16px]'><Link to="/all-products" className='hover:text-green-500'>Products</Link></li>
              <li className='font-raleway text-[10px] md:text-[16px]'><Link to="/NotFound" className='hover:text-green-500'>Blogs</Link></li>
            </ul>
          </div>
        </div>
        <img src="src/assets/footer/Line 1.png" className='' alt="" />
        <div className='relative flex justify-between md:mt-[28px]'>
          <Link to='/' className='cursor-pointer w-fit hover:opacity-80 '>
            <img src={logo} className='w-[24px] mt-[10px] md:w-[54px]' alt="" />
          </Link>
          <p className='mt-[10px] text-[5px] text-center md:text-[16px] md:text-center w-[80px] md:w-[200px]'>Compassinhos ®. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
