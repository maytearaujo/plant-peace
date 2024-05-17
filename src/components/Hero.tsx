import Rectangle from "../assets/home/1discover/rectangle.png"
import Button from "../components/Button"


const Hero = () => {
  return (
    <div className="bg-wisper h-[90vh] flex items-center justify-between">
      <div className="flex flex-col justify-around items-center h-[100%] md:w-[50vw]  ">

        <div className="w-[80%] h-[100%] flex flex-col justify-evenly md:w-[70%]">
          <div className="flex flex-row items-center justify-around w-[60%] md:w-[30%]">
            <img src={Rectangle} alt="" className="w-8 h-[0.18rem]" />
            <p className="text-black font-stylish text-[1.4rem]">Love for Nature</p>
          </div>

          <section className="h-[100%] flex flex-col justify-evenly">
            <h1 className="font-ebGaramond font-bold text-primaryLunarGreen text-[4rem] capitalize px-6 leading-[5.2rem] md:text-64">Discover your <span className="text-primaryAvacado">green</span> side</h1>
            <p>We are your one-stop destination for all things green and growing. Our website offers a wide array of stunning plants, ranging from vibrant flowers  to lush indoor foliage, allowing you to create your very own green oasis. </p>
            <Button children="Shop now" />
          </section>
        </div>

        <div className="flex flex-row justify-items-start items-center w-[100%] h-[80%] bg-[url('../../src/assets/home/1discover/left_plant.png')] mix-blend-luminosity bg-no-repeat gap-2 bg-left">

          <div className="flex flex-row justify-evenly items-center w-40 font-raleway">
            <a href="#" className="flex">Learn Gardening</a>
            <img src="../../src/assets/home/1discover/arrow.png" alt="" className="w-3 h-[0.8rem]" />
          </div>
        </div>


      </div>
      <img src="../../src/assets/home/1discover/image.png" className="w-[50%] h-[100%] hidden mix-blend-luminosity md:flex flex-row" />
    </div>
  )
}

export default Hero