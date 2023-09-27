import axios from "axios";

function fetching(props) {
  let api;
  let options = {
    method: "GET",
    url: "https://weatherapi-com.p.rapidapi.com/forecast.json",
    params: { q: `${props.city}`, days: "3" },
    headers: {
      "X-RapidAPI-Key": "09dce2443fmsh2ed2e65290fae4ap1c31f8jsnac0c0ac5c095",
      "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
    },
  };
  return (api = axios.request(options));
}
export default fetching;
