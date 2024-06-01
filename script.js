const input_box=document.querySelector(".input-box");
const search_button=document.querySelector(".searchBtn");
const weather_img=document.querySelector(".weather-img");
const temperature=document.querySelector(".temperature");
const humidity=document.querySelector("#humid");
const wind_speed=document.querySelector("#wind");
const description=document.querySelector(".description")
const location_not_found=document.querySelector(".location-not-found")
const weather_body=document.querySelector(".weather-body")

async function checkWeather(city){
    const api_key="7442de18626986fb2d4d140d6066cd10"
    const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`
    const weather=await fetch(url);
    const data=await weather.json();

    console.log(data);

    if(data.cod===`404`){
        location_not_found.style.display="flex";
        weather_body.style.display="none";
        return;
    }
location_not_found.style.display="none";
weather_body.style.display="flex" ; 
temperature.innerHTML=`${Math.round(data.main.temp-273.15)}°C`
description.innerHTML=`${data.weather[0].description}`
humidity.innerHTML=`${data.main.humidity}%`
wind_speed.innerHTML=`${data.wind.speed}km/h`


switch(data.weather[0].description){
    case 'scattered clouds'|| 'overcast clouds':
        weather_img.src="/images/cloud.png"
        break;
    case 'clear sky':
        weather_img.src="/images/clear.png"
        break;
    case 'Rain':
        weather_img.src="/images/rain.png"
        break;
    case 'haze':
        weather_img.src="/images/mist.png"
        break;
    case 'Snow':
        weather_img.src="/images/snow.png"
        break;
}
}
search_button.addEventListener("click",()=>{
    checkWeather(input_box.value)
})