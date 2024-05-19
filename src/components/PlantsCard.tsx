import axios from 'axios'
import {useState, useEffect, Fragment} from 'react'

import photo1 from '../../src/assets/home/3this/photo 1.png';
import photo2 from '../../src/assets/home/3this/Photo 2.png';
import photo3 from '../../src/assets/home/3this/Photo 3.png';
import photo4 from '../../src/assets/home/3this/Photo 4.png';

const PlantsCard =  (props) =>{
    const [list, setList] = useState([]);

    useEffect(()=>{
        axios.get('http://localhost:3000/plants')
        .then((response) =>{
          setList(response.data.plants)
          console.log(list)
        })
      },[]);
    
    const images = [photo1, photo2, photo3, photo4]
    return (
        <Fragment>
            {list.length > 0 ? (
                <Fragment>
            <img src={images[props.num]} alt="Plants" />
            <p>{list[props.num].name}</p> 
            <p>{list[props.num].price}</p> 
            <p>{list[props.num].label}</p> 

            </Fragment>
 
            ): (
                <p> Carregando Plantas</p>
            )  
            }
        </Fragment>
        
    )
}

export default PlantsCard