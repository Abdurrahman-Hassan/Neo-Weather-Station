import { useState, useEffect } from "react";
import spinner from "../Assets/Spinner.gif";
import fetching from "../Api/Forcast";
import "./temperature.css";
import axios from "axios";

const Temperature = (props) => {
  const [temperature, setTemperature] = useState(null);

  useEffect(() => {
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '09dce2443fmsh2ed2e65290fae4ap1c31f8jsnac0c0ac5c095',
        'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
      }
    };
    
    fetch(`https://weatherapi-com.p.rapidapi.com/forecast.json?q=${props.city}&days=3`, options)
      .then(response => response.json())
      .then(response => setTemperature(response))
      .catch(err => console.error(err));});
  let fullTemp;
  if (temperature) {
    fullTemp = temperature.current.temp_c;
  }

  return (
    <div className="temp">
      <h2>{fullTemp}°</h2>
    </div>
  );
};

export default Temperature;
