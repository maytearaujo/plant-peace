import Button from "../components/Button"


import Rectangle from "../assets/home/1discover/rectangle.png"
import LeftPlant from "../assets/home/1discover/leftPlant.png"
import CostelaAdao from "../assets/home/1discover/costelaAdao.png"
import Arrow from "../assets/home/1discover/arrow.png"

import { Link } from 'react-router-dom'

const Hero = () => {

  return (
    <div className="bg-wisper h-[90vh] flex items-center justify-between pt-8">
      <div className="flex flex-col justify-between items-center h-[100%] md:w-[50vw]  ">

        <div className="w-[80%] h-[100%] flex flex-col justify-evenly md:w-[65%]">
          <div className="flex flex-row items-center">
            <img src={Rectangle} alt="" className="w-8 h-[0.18rem]" />
            <p className="text-black font-pacifico text-[1.4rem]">Love for Nature</p>
          </div>

          <section className="h-[100%] flex flex-col justify-between">
            <h1 className="font-ebGaramond font-bold text-primaryLunarGreen text-[4rem] capitalize  leading-[5.2rem] md:text-64">Discover your <span className="text-primaryAvacado">green</span> side</h1>
            <p>We are your one-stop destination for all things green and growing. Our website offers a wide array of stunning plants, ranging from vibrant flowers  to lush indoor foliage, allowing you to create your very own green oasis.</p>
            <Button redirect="NotFound" children="Shop now" />
          </section>
        </div>

        {/* <div className="flex flex-row justify-items-start items-center w-[100%] h-[80%] bg-[url('../../src/assets/home/1discover/leftPlant.png')] mix-blend-luminosity bg-no-repeat gap-2 bg-left"> */}
        <div 
        className="flex flex-row justify-items-start items-center w-[95%] h-[80%] bg-no-repeat gap-2 bg-left" 
        style={{ backgroundImage: `url(${LeftPlant})` }}
      >

          <div className="flex flex-row justify-evenly items-center w-60 font-raleway pl-10 pt-10">
            <Link to="./NotFound" className="flex">Learn Gardening</Link>
            <img src={Arrow} alt="" className="w-3 h-[0.8rem]" />

          </div>
        </div>

      </div>
      <img src={CostelaAdao} className="w-[50%] h-[100%] hidden mix-blend-luminosity md:flex flex-row" />
    </div>
  )
}

export default Hero;