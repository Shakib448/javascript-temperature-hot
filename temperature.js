const API_KEY = "d8145f1c9f1913e2512cd701c771e6fc"


function getWeather(){
    const city = document.getElementById('input-city').value;
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`)
    .then(res => res.json())
    .then(data => {
        console.log(data);
        document.getElementById('temperature').innerHTML = data.main.temp;
        document.getElementById('city').innerHTML = data.name;
        if(data.main.temp > 10){
            document.getElementById('status').innerHTML = "very Hot";
        }
    })

}
getWeather();