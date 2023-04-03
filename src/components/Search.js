import React, { useState } from 'react';
import { useDispatch } from "react-redux" ;
import { fetchWeatherDeatails } from "../redux/Action"

function Search() {

  const [cityValue, setCityValue] = useState("");
  let dispatch = useDispatch();

  let handleWeatherApi = (e) => {
    e.preventDefault();

    if (cityValue !== "") {
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=bf05f6752ed21dece19eeb54892e903c` ;
      console.log("***********",url)
      dispatch(fetchWeatherDeatails(url));
    }
    else {
      console.log("error")
    }
    setCityValue("");
  }


  let handleOnchange = (e) => {
    setCityValue(e.target.value)
  }

  return (
    <div>
      <form onSubmit={handleWeatherApi}>
        <label>Enter City Name: </label>
        <input type="text" value={cityValue} onChange={handleOnchange} />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default Search