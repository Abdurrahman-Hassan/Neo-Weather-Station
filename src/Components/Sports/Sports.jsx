import axios from "axios";
import { useState, useEffect } from "react";
import "./sports.css";

const Sports = (props) => {
  const [sports, setSports] = useState(null);
  let numCricket, numFootball;

  function sportsApi() {
    const options = {
      method: "GET",
      url: "https://weatherapi-com.p.rapidapi.com/sports.json",
      params: { q: `${props.city}` },
      headers: {
        "X-RapidAPI-Key": "09dce2443fmsh2ed2e65290fae4ap1c31f8jsnac0c0ac5c095",
        "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        setSports(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  }
  useEffect(() => {
    sportsApi();
  }, []);
  if (sports) {
    numCricket = sports.cricket.length;
    numFootball = sports.football.length;
    numFootball = parseInt(numFootball);
    numCricket = parseInt(numCricket);
  }

  return (
    <div className="sports">
      {numCricket > 0 && <h2 className="titleCri">Cricket</h2>}
      {numCricket > 0 &&
        sports.cricket.map((elements) => {
          return (
            <div className="Cricket" key={elements.match}>
              <h3 key={elements.country}>{elements.country}</h3>
              <h3>{elements.match}</h3>
              <h3>{elements.start}</h3>
              <h3 key={elements.tournament}>{elements.tournament}</h3>
            </div>
          );
        })}
      {numFootball > 0 && <h2 className="titleFoot">Football</h2>}
      {numFootball > 0 &&
        sports.football.map((elements) => {
          return (
            <div className="Football" key={elements.match}>
              <h3>{elements.country}</h3>
              <h3>{elements.match}</h3>
              <h3 key={elements.start}>{elements.start}</h3>
              <h3 key={elements.tournament}>{elements.tournament}</h3>
            </div>
          );
        })}
    </div>
  );
};

export default Sports;
