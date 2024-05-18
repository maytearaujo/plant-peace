import { useState, useEffect, useRef } from 'react'
import '../../src/components/Popular.css'
import { motion } from 'framer-motion'
 
import photo1 from '../../src/assets/home/3this/photo 1.png';
import photo2 from '../../src/assets/home/3this/Photo 2.png';
import photo3 from '../../src/assets/home/3this/Photo 3.png';
import photo4 from '../../src/assets/home/3this/Photo 4.png';
import photo5 from '../../src/assets/home/3this/Photo 4.png';
import photo6 from '../../src/assets/home/3this/Photo 4.png';
import photo7 from '../../src/assets/home/3this/Photo 4.png';


const images = [photo1, photo2, photo3, photo4, photo5, photo6, photo7]
 
function MostPopular() {
  const carrossel = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0)
 
  useEffect(() => {
    let carrosselWidth = carrossel.current?.scrollWidth;
    if (carrosselWidth) {
      setWidth(carrosselWidth - (carrossel.current?.offsetWidth || 0))
    }
  }, [])
 
  return (
    <div className='Popular'>
      <motion.div ref={carrossel} className='carrossel' whileTap={{ cursor: "grabbing" }}>
        <motion.div className='inner flex max-w-[900px]' drag='x' dragConstraints={{ right: 0 }}>
 
          {images.map(image => (
            <motion.div className="item" key={image}>
              <img src={image} width="700px" alt="Plants" />
            </motion.div>
 
          ))}
        </motion.div>
      </motion.div>
 
    </div>
  )
}
 
export default MostPopular