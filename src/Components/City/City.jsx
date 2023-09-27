/* eslint-disable react-hooks/rules-of-hooks */
import { useState, useEffect } from "react";
import spinner from "../Assets/Spinner.gif";
import "./city.css";

const City = (props) => {
  const [city, setCity] = useState(null);
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
      .then(response => setCity(response))
      .catch(err => console.error(err));  });

  if (!city) {
    return (
      <div>
        <img src={spinner} alt="Loading" className="loading" />
      </div>
    );
  }

  return (
    <div className="city">
      <h3>{city.location.name}</h3>
    </div>
  );
};

export default City;
