import React from 'react';
import { useSelector } from "react-redux";

function WeatherDisplay() {

  let weatherData = useSelector((state)=> state.WeatherReducer);
  console.log("Data From:- ", Array(weatherData))

  return (
    <div>
      {
        Array(weatherData).map((elem, index)=> {
          if (elem.error === "") {
            return (
                <div key={index}>
                  <h2 >{elem.name}</h2>
                  <h2 >{elem.desc}</h2>
                  <h2 >{elem.maxTemp}</h2>
                  <h2 >{elem.icon}</h2>
              
                </div>
              )
          }
          else {
            return (
              <h2 style={{color:"red"}} key={index}>{elem.error}</h2>
            )
          }
          
        })
      }   
    </div>
  )
}

export default WeatherDisplay