import { useState, useEffect } from "react";
import "./scene.css";
import axios from "axios";
import morning from "../Assets/morning.webp";
import night from "../Assets/night.webp";
import sundown from "../Assets/sundown.webp";
import sunup from "../Assets/sunup.webp";

const Sceneimg = (props) => {
  const [time, setTime] = useState(null);
  const [astro, setAstro] = useState(null);

  let date, hour, realImage, sunrise, sunset;

  function astrology() {
    const options = {
      method: "GET",
      url: "https://weatherapi-com.p.rapidapi.com/astronomy.json",
      params: { q: `${props.city}` },
      headers: {
        "X-RapidAPI-Key": "09dce2443fmsh2ed2e65290fae4ap1c31f8jsnac0c0ac5c095",
        "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        setAstro(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  }

  useEffect(() => {
    astrology();
  }, []);
  const convertTime12to24 = (time12h) => {
    const [time, modifier] = time12h.split(" ");

    let [hours, minutes] = time.split(":");

    if (hours === "12") {
      hours = "00";
    }

    if (modifier === "PM") {
      hours = parseInt(hours, 10) + 12;
    }

    return `${hours}:${minutes}`;
  };
  if (astro) {
    sunrise = astro.astronomy.astro.sunrise;
    /*    sunrise = sunrise.slice(1, 2);
    sunrise = parseInt(sunrise);
    sunrise += 12; */
    sunset = astro.astronomy.astro.sunset;
    /*     sunset = sunset.slice(1, 2);
    sunset = parseInt(sunset);
    sunset += 12; */
    sunrise = convertTime12to24(sunrise);
    sunrise = parseInt(sunrise);
    sunset = convertTime12to24(sunset);
    sunset = parseInt(sunset);
  }
  

  if (astro) {
    date = astro.location.localtime;
    hour = date.slice(11, 13);
    hour = parseInt(hour);
    imageSetting();
  }
  
  function imageSetting() {
    if (hour === sunrise) {
      realImage = "";
      realImage = sunup;
    } else if (hour > sunrise && hour < sunset) {
      realImage = "";
      realImage = morning;
    } else if (hour === sunset) {
      realImage = "";
      realImage = sundown;
    } else if (hour > sunset || hour < sunrise) {
      realImage = "";
      realImage = night;
    }
  }

  return (
    <div className="mainImage">
      <div id="neo">
        <img src={realImage} alt="Image" id="centerImage" />
      </div>
    </div>
  );
};

export default Sceneimg;
