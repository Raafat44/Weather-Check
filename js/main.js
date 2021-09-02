let Button = document.getElementById("submitButton");
let input = document.getElementById("searchBox");

let speed = document.getElementById("Speed"),
    humidity =document.getElementById("humidity"),
    pressure = document.getElementById("pressure"),
    degree = document.getElementById("degree"),
    cloudState = document.getElementById("cloudState"),
    date = document.getElementById("date"),
    time = document.getElementById("time");
    
Button.onclick = function()
{
    getrepo();
}
function getrepo()
{
    let req = new XMLHttpRequest();
    req.onreadystatechange = function()
    {
        if(this.readyState ==4 && this.status ==200)
        {
            let js = JSON.parse(this.responseText);
            speed.innerHTML = js.wind.speed ;           
            humidity.innerHTML = js.main.humidity;
            pressure.innerHTML = js.main.pressure;
            cloudState.innerHTML = js.weather[0].description;
            degree.innerHTML = Math.floor( js.main.temp-273.15);
                           
        }
    };
    req.open("GET",`https://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=cc7402ce8000298a571200986049f994`,true);
    req.send();
}
var d = new Date(1627558714);
console.log(d.getDate());


