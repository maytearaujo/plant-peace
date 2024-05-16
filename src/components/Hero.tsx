import Rectangle from "../assets/home/1discover/rectangle.png"
import Button from "../components/Button"
import MainPlant from "../assets/home/1discover/image.png"

const Hero = () => {
  return (
    <div className="bg-white w-screen h-1/2 border text-primaryLunarGreen border-red-600">
      <div>
        <div>
          <img src={Rectangle} alt="" />
          <p>Love for Nature</p>
        </div>
        <section>
          <h1>Discover your green side</h1>
          <p>We are your one-stop destination for all things green and growing. Our website offers a wide array of stunning plants, ranging from vibrant flowers  to lush indoor foliage, allowing you to create your very own green oasis. </p>
        </section>
        <Button label="Shop now" />
      </div>
      <img src={MainPlant} alt="Vaso de Planta" className="flex hidden md:flex flex-row h-[922px] w-[1024px]"/>
    </div>
  )
}

export default Hero