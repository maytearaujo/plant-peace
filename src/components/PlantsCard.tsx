import axios from 'axios'
import {useState, useEffect, Fragment} from 'react'

import photo1 from '../../src/assets/home/3this/photo 1.png';
import photo2 from '../../src/assets/home/3this/Photo 2.png';
import photo3 from '../../src/assets/home/3this/Photo 3.png';
import photo4 from '../../src/assets/home/3this/Photo 4.png';

const PlantsCard =  (props) =>{
    const [list, setList] = useState([]);

    useEffect(()=>{
        axios.get('https://run.mocky.io/v3/6cb751aa-2238-405e-8537-7f1ac9b7aefb')
        .then((response) =>{
          setList(response.data)
          console.log(list)
        })
      },[]);
    
    const images = [photo1, photo2, photo3, photo4]
    return (
        <Fragment>
            {list.lenght > 0 ? (
                <Fragment>
            <h1>Hello World</h1>
            <img src={images[props.num]} alt="Plants" />
            <p>{list[props.num].name}</p>    
            </Fragment>
 
            ): (
                <p> Loading ...</p>
            )  
            }
        </Fragment>
        
    )
}

export default PlantsCard