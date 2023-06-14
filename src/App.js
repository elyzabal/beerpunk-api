import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';



function App() {

const [beers, setBeers]=useState([])

  useEffect(()=>{
    axios.get('https://api.punkapi.com/v2/beers?page=1&per_page=10').then(res=>{ 
      setBeers(res.data)
     // console.log(res.data)
    }).catch(error=>console.log(error))
  },[])
  return (
    <>
      { beers.map(per=>(
        <div className='card'>
          <figure className='image-card'>
          <img src={per.image_url}></img>
          </figure>
          <div className='card-body'>
            <h3>{per.name}</h3>
            <p>{per.tagline}</p>
          </div>
        </div>
        
      ))
      
      }
    </>

  );
}

export default App;
