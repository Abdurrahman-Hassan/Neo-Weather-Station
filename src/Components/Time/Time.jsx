import { useState,useEffect } from "react";
import "./time.css"
import { useNavigate } from "react-router-dom";

const Time = (props) => {
  let navigate = useNavigate();

  const[time,settime]=useState(null)
  const apifetch =()=> {
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '09dce2443fmsh2ed2e65290fae4ap1c31f8jsnac0c0ac5c095',
        'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
      }
    };
    
    fetch(`https://weatherapi-com.p.rapidapi.com/timezone.json?q=${props.city}`, options)
      .then(response => response.json())
      .then(response => settime(response.location.localtime))
      .catch(err =>
        setTimeout(()=>{
          navigate("/error")
        },1000)
         );
  }

  const[localtime,setlocaltime]=useState(null)


  let hours

/* 
console.log(props.city) */
useEffect(()=>{
  apifetch()
const a = setInterval(() => {
  apifetch()
}, 30000);
return(()=>{
  clearInterval(a)
})

},[time])
useEffect(()=>{
  const h = new Date(time);
  hours = h.toLocaleTimeString()
  setlocaltime( hours);
  const a = setInterval(()=>{
  const h = new Date(time);
   hours = h.toLocaleTimeString()
  setlocaltime( hours);
  },2000)
  return(()=>{
    clearInterval(a)
  })
})

  function getDay() {
    const weekday = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const d = new Date(time);
    let day = weekday[d.getDay()];
    return day;
  }


  /* if (time) {
/*     console.log(new Date(time.localtime))
    console.log(time.localtime.slice(11,16)) 
    var now = new Date(time.localtime);
    hours = now.getHours() % 12 || 12; 
    const d = new Date(time.localtime);
    minutes = d.getMinutes();
    temp = now.getHours(time.localtime)
    temp=parseInt(temp)
    console.log(temp)


    if (temp>=12 && temp<24) {
      ampm="PM"
    }else if (temp<12) {
      ampm="AM"
    }

  } */
 
    if (time) {

      let fulltime = `${getDay()}, ${localtime.slice(0,5)} ${localtime.slice(8,11)}`;

      return (
    <div className="time">
      <h4>{fulltime}</h4>
    </div>
  );
}
}
export default Time;
