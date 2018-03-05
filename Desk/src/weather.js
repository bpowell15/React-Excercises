import React from 'react';
import MDSpinner from "react-md-spinner";

const toQueryString = (obj) => {
  let parts = [];
  for (let i in obj) {
      if (obj.hasOwnProperty(i)) {
          parts.push(`${encodeURIComponent(i)}=${encodeURIComponent(obj[i])}`);
      }
  }
  return parts.join('&');
};


class Weather  extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      weather: null
    };
    this.pollWeather = this.pollWeather.bind(this);
  }
  componentDidMount(){
   navigator.geolocation.getCurrentPosition(this.pollWeather);
 }

 pollWeather(location){
   let lat = location.coords.latitude;
   let lon = location.coords.longitude;
   let url = 'http://api.openweathermap.org/data/2.5/weather?';
  let params = {
    lat: lat,
    lon: lon
  };

  url += toQueryString(params);
    const apiKey = '198aa90c2f1a5cfc56eaf987988eb8b8';
    url += `&APPID=${apiKey}`;

  let xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = () => {
      //ready state of DONE means this is complete
      if (xmlhttp.status === 200 && xmlhttp.readyState === XMLHttpRequest.DONE) {
        const data = JSON.parse(xmlhttp.responseText);
        this.setState({weather: data});
      }
    };

    xmlhttp.open('GET', url, true);
    xmlhttp.send();
 }

 render() {
   let content = <div></div>;
   if (this.state.weather) {
     let weather = this.state.weather;
     let url = `http://openweathermap.org/img/w/${weather.weather[0].icon}.png`;
     let temp = (weather.main.temp - 273.15) * 1.8 + 32;
     content = <div>
                 <p style={{fontSize: "36px"}}>{temp.toFixed(1)} <span style={{fontSize:"20px"}}>&#8457;</span></p><img className="image" src={url}></img>
                 <p style={{marginTop: "-21px", borderBottom: "1px solid black"}}>{weather.weather[0].description}</p>
                 <ul className="weather-details" style={{display: "flex", justifyContent: "center"}}>
                   <li style={{padding: "5px"}}>{weather.clouds.all}%<br /> Cloud Coverage</li>
                   <li style={{padding: "5px"}}>{weather.main.humidity}%<br /> Humidity</li>
                   <li style={{padding: "5px"}}>{weather.wind.speed}MPH<br /> Wind Speed</li>
                   <li style={{padding: "5px"}}>{weather.wind.gust}MPH<br /> Gusts Up To</li>
                 </ul>
               </div>;
   } else {
     content = <MDSpinner singleColor="rgb(18, 16, 185)" size="60" />;
   }
   return (
     <div className='weather'>
       <div>
         {content}
       </div>
     </div>
   );
 }
}

export default Weather;
