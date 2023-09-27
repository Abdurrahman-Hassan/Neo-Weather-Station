import { useState, useEffect } from "react";
import spinner from "../Assets/Spinner.gif";
import Fetching from "../Api/Forcast";
import "./days.css";
import axios from "axios";

import { useNavigate } from "react-router-dom";


const Days = (props) => {
  
  let navigate = useNavigate();
  const [days, setDays] = useState(null);

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
      .then(response => setDays(response))
      .catch(err =>
        setTimeout(()=>{
          navigate("/")
        },1000)
         );  });
  let day1, day2, day3, daytemp1, daytemp2, daytemp3, dayimg1, dayimg2, dayimg3;
  if (days) {
    day1 = days.forecast.forecastday[0].date;
    daytemp1 = days.forecast.forecastday[0].day.avgtemp_c;
    dayimg1 = days.forecast.forecastday[0].day.condition.icon;
    day2 = days.forecast.forecastday[1].date;
    daytemp2 = days.forecast.forecastday[1].day.avgtemp_c;
    dayimg2 = days.forecast.forecastday[1].day.condition.icon;
    day3 = days.forecast.forecastday[2].date;
    daytemp3 = days.forecast.forecastday[2].day.avgtemp_c;
    dayimg3 = days.forecast.forecastday[2].day.condition.icon;
  }
  function getDay1() {
    const weekday = ["S", "M", "T", "W", "T", "F", "S"];
    const d = new Date(day1);
    let day = weekday[d.getDay()];
    return day;
  }
  function getDay2() {
    const weekday = ["S", "M", "T", "W", "T", "F", "S"];
    const d = new Date(day2);
    let day = weekday[d.getDay()];
    return day;
  }
  function getDay3() {
    const weekday = ["S", "M", "T", "W", "T", "F", "S"];
    const d = new Date(day3);
    let day = weekday[d.getDay()];
    return day;
  }
  return (
    <div className="all">
      <div className="day1">
        <h3>{getDay1()}</h3>
        <img src={dayimg1} alt="icon" />
        <h3 id="tempday1">{daytemp1}°</h3>
      </div>
      <div className="day2">
        <h3>{getDay2()}</h3>
        <img src={dayimg2} alt="icon" />
        <h3 id="tempday2">{daytemp2}°</h3>
      </div>
      <div className="day3">
        <h3>{getDay3()}</h3>
        <img src={dayimg3} alt="icon" />
        <h3 id="tempday3">{daytemp3}°</h3>
      </div>
    </div>
  );
};

export default Days;
