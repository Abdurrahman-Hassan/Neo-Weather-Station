import { useState, useEffect } from "react";
import spinner from "../Assets/Spinner.gif";
import Fetching from "../Api/Forcast";
import "./condition.css";
import axios from "axios";

const Condition = (props) => {
  const [condition, setCondition] = useState(null);

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
      .then(response => setCondition(response))
      .catch(err => console.error(err));
  });
  let fullTemp, cloud, humidity, wind,cloudNames;

  if (condition) {
    fullTemp = condition;
    cloud = condition.current.cloud;
    humidity = condition.current.humidity;
    wind = condition.current.wind_kph;
  }
  
  if (cloud<=25) {
    cloudNames="Clear"
  }else if (cloud<=50) {
    cloudNames="Periodic Clouds"
  }
  else if (cloud>=75) {
    cloudNames="Cloudy"
  }

  return (
    <div>
      <div className="cloud">
        <h2>{cloudNames}</h2>
      </div>
      <div className="humidity">
        <h4>Humidity</h4>
        <h4>{humidity}%</h4>
      </div>
      <div className="wind">
        <h4>Wind</h4>
        <h4>{wind}km/h</h4>
      </div>
    </div>
  );
};

export default Condition;
