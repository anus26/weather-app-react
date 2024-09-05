import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

function App() {
 const[counter,setcounter] =useState(0)
 const [city , setCity] = useState("")
 useEffect(()=>{
  fetch('https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/{city}?unitGroup=us&key=49N3LQ9BW9FEBDKTWQZCFPMKU&contentType=json')
  // fetch("https://opentdb.com/api.php?amount=29&category=21&difficulty=easy&type=multiple&encode=base64")
  .then(response => response.json())
  .then(json =>{
    console.log(json);
    
  }).catch(err => console.log(err) )
 },[city])
 const handleCityChange =(event)=>{
  setCity(event.target.value)

 }
 const handleSubmit =()=>{
  if(city)
    setCity(city)
 }
  return (
    <>
    <h1>hello world{counter}</h1>
    <button onClick={() =>setcounter(counter+1)}>counter</button>
    <input type="text" id='city' value={city} onChange={handleCityChange} />
    <button onClick={handleSubmit}>submit</button>
    {/* {data ? data.map((weatherdata)=>{
      return <div key={index}>
        <h1>
        
          
           </h1>
        <h1>Timezone : {weatherdata.timezone}</h1>
      </div>

    }):<h1>loading ...</h1>} */}
    {city?(
      <div>
        <h1>Timezone: {city.timezone}</h1>
      </div>
    ):<h1>lodaing ...</h1>}
    </>
  )
}

export default App