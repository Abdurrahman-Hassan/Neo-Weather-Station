import City from "../City/City";
import Time from "../Time/Time";
import Sceneimg from "../Sceneimg/Sceneimg";
import Temperature from "../Temperature/Temperature";
import Condition from "../Condition/Condition";
import Days from "../Days/Days";
import Sports from "../Sports/Sports";
import { useState } from "react";
import "./main.css";
import back from "../Assets/back.svg";

const Main = () => {
  const [value, setvalue] = useState("");
  const [weather, setWeather] = useState("");

  function fetchcity() {
    const data = value;
    setWeather(data);
  }

  return (
    <div className="aboveformdiv">
      {!weather && (
        <div className="form">
          <form>
            <input
              className="City"
              placeholder="Enter the City"
              type="text"
              value={value}
              onChange={(e) => setvalue(e.target.value)}
            />
          </form>
          <h5 className="credits">
            Created by{" "}
            <a
              href="https://abdurrahmanhassan.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <code>Abdurrahman Hassan</code>
            </a>
          </h5>
          <button className="next-btn" onClick={fetchcity}>
            Check
          </button>
        </div>
      )}

      {weather && (
        <div>
          <button
            className="back-btn"
            onClick={() => {
              setWeather(null);
            }}
          >
            <img src={back} />
          </button>
          <City city={weather} />
          <Time city={weather} />
          <Sceneimg city={weather} />
          <Temperature city={weather} />
          <Condition city={weather} />
          <Days city={weather} />
          <Sports city={weather} />
        </div>
      )}
    </div>
  );
};

export default Main;
