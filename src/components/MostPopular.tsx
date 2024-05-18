import { useState, useEffect, useRef } from 'react'
import '../../src/components/Popular.css'
import { motion } from 'framer-motion'
import PlantsCard from '../components/PlantsCard';
import { react } from 'react'

function MostPopular() {

  const plantsCard = [0,1,2,3,0,1,2,3]


  const carrossel = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0)
  useState()
 
  

  useEffect(() => {
    let carrosselWidth = carrossel.current?.scrollWidth;
    if (carrosselWidth) {
      setWidth(carrosselWidth - (carrossel.current?.offsetWidth || 0))
    }
  }, [])
 
  return (
    <div className='Popular'>
      <motion.div ref={carrossel} className='carrossel' whileTap={{ cursor: "grabbing" }}>
        <motion.div className='inner flex max-w-[900px]' 
        drag="x" 
        dragConstraints={{ right: 0, left: -width}}
        initial={{ x: 100}}
        animate={{ x: 0}}
        >
 
          {plantsCard.map((image, index) => (
            <motion.div className="item" key={(index)}>
              <PlantsCard num={image}/>
            </motion.div>
 
          ))}
        </motion.div>
      </motion.div>
 
    </div>
  )
}
 
export default MostPopular