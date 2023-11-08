// key = c87ce66b68f6b393c8ca4b1e471bba7e
const container1 = document.getElementById("container1");
const container2 = document.getElementById("container2");

async function todaysWeather() {
    let res = await fetch("https://api.openweathermap.org/data/2.5/weather?q=Huddinge&appid=c87ce66b68f6b393c8ca4b1e471bba7e&units=metric");
    let data = await res.json();

    console.log(data);
    let headInfo = document.createElement("div");
    let desti = document.createElement("div");
    let temp = document.createElement("div");
    let weatherDescrip = document.createElement("div");
    let place = document.createElement("div");
    let feelsLike = document.createElement("div");
    let sky = document.createElement("div");
    let pressure = document.createElement("div");
    let placeSe = document.createElement("div");    
    let humidity = document.createElement("div");
    let icon = document.createElement("img");
    let tempMax = document.createElement("div");
    let tempMin = document.createElement("div");
    let tempMaxMin = document.createElement("div");


    headInfo.setAttribute("id", "head-info");
    desti.setAttribute("id", "desti");
    temp.setAttribute("id", "temp");
    weatherDescrip.setAttribute("id", "weather-descrip");
    place.setAttribute("id", "place");
    feelsLike.setAttribute("id", "feels-like");
    sky.setAttribute("id", "sky");
    pressure.setAttribute("id", "pressure");
    placeSe.setAttribute("id", "place-se");
    humidity.setAttribute("id", "humidity");
    icon.setAttribute('src','https://openweathermap.org/img/wn/'+ data.weather[0].icon +'@4x.png');
    icon.setAttribute("id", "icon");
    tempMax.setAttribute("id", "temp-max");
    tempMin.setAttribute("id", "temp-min");
    tempMaxMin.setAttribute("id", "max-min");


    desti.textContent = `${data.name}, `;
    placeSe.textContent = data.sys.country;
    temp.textContent = `${Math.floor(data.main.temp)}°C`;
    feelsLike.textContent = `Feels like ${Math.floor(data.main.feels_like)}°C `;
    sky.textContent = data.weather[0].description;
    tempMax.textContent = `Max ${Math.floor(data.main.temp_max)}°C`;
    tempMin.textContent = `Min ${Math.floor(data.main.temp_min)}°C`;
    pressure.textContent = `${data.main.pressure}hPa`;
    humidity.textContent = `Humidity: ${data.main.humidity}%`;


    container1.appendChild(headInfo);
    headInfo.appendChild(place);
    place.appendChild(desti);
    place.appendChild(placeSe);
    headInfo.appendChild(temp);
    headInfo.appendChild(icon);
    headInfo.appendChild(weatherDescrip);
    weatherDescrip.appendChild(sky);
    weatherDescrip.appendChild(feelsLike);
    weatherDescrip.appendChild(tempMaxMin);
    tempMaxMin.appendChild(tempMin);
    tempMaxMin.appendChild(tempMax);
    headInfo.appendChild(pressure);
    headInfo.appendChild(humidity);
};

todaysWeather()

fetch("https://api.openweathermap.org/data/2.5/forecast?lat=18.0649&lon=17.8976&appid=c87ce66b68f6b393c8ca4b1e471bba7e&units=metric")
.then((res) => res.json())
.then((json) =>
json.list.forEach((data) => {
    weatherDays(data);
}));

const daysArray = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Oct", "Dec"];

const weatherDays = (data) => {
    let time = data.dt_txt.slice(-8);
    const date = new Date(data.dt_txt);
    let days = date.getDate();
    let month = months[date.getMonth()];

    if (time === "15:00:00") {
        let div = document.createElement("div");
        let temp = document.createElement("p");
        let weekDays = document.createElement("p");
        let icon = document.createElement("img");

        div.setAttribute("class", "week-info");

        const iconUrl = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
        icon.setAttribute("src", iconUrl);
        icon.setAttribute("class", "icon-week");

        temp.innerText = `${Math.trunc(data.main.temp)}° ${data.weather[0].description}`;
        weekDays.innerText = `${daysArray[date.getDay()]}, ${days} ${month}`;

        div.appendChild(weekDays);
        div.appendChild(icon);
        div.appendChild(temp);
        container2.appendChild(div);
    }
};