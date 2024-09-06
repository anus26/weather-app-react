import axios from 'axios'
import React, { useRef } from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

function App() {
  const val =useRef()
 const[counter,setcounter] =useState(0)
 const [city , setCity] = useState("")
 const [weatherData , setweatherData]=useState([])
 const submitBtn = (e) => {

  e.preventDefault()

  setCity(val.current.value)



}

//  useEffect(()=>{
//   // fetch('https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/{city}?unitGroup=us&key=49N3LQ9BW9FEBDKTWQZCFPMKU&contentType=json')
//   // fetch("https://opentdb.com/api.php?amount=29&category=21&difficulty=easy&type=multiple&encode=base64")
//   .then(response => response.json())
//   .then(json =>{
//     console.log(json);
    
//   }).catch(err => console.log(err) )
//  },[city])

useEffect(()=>{
  const apiCall =async()=>{
    await axios('https://api.weatherapi.com/v1/current.json?key=2feb46cda2064407bb560452240509&q=${city}&aqi=no')
    .then((resp)=>{
      weatherData.unshift(resp.data)
      setweatherData([...weatherData])
      val.current.value=""
    })
    .catch((err)=>{
      console.log(err.message);
      
    })
  }
  apiCall()

},[city])














  return (
    <>
    <h1>hello world{counter}</h1>
    <button onClick={() =>setcounter(counter+1)}>counter</button>
    <form onSubmit={submitBtn}>

    <input type="text" id='default-search'ref={val} />
    <button type='submit'>submit</button>
    </form>
    {/* { weatherData.map((item,index)=>{
      return <div key={index}>
       
       
        <h1> {item.location.name},{item.location.region}</h1>

      </div>
    
    }):<h1>loading ...</h1>}  */}
{weatherData.map((item,index)=>{
  return <div key={index}><h1>{item.location.name},{item.location.region},{item.location.country}</h1></div>
})

}
  
    </>
  )
}

export default App