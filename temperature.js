const API_KEY = "d8145f1c9f1913e2512cd701c771e6fc"

function getWeather(){
    const city = document.getElementById('input-city').value;
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`)
    .then(res => res.json())
    .then(data => {
        console.log(data);
        document.getElementById('temperature').innerHTML = data.main.temp;
        document.getElementById('city').innerHTML = data.name;
        if(data.main.temp < 15){
            document.getElementById('status').innerHTML = "Cold";
        }else if(data.main.temp < 19){
            document.getElementById('status').innerHTML = "Cool";
        }else if(data.main.temp < 27){
            document.getElementById('status').innerHTML = "Rainy";
        }else if(data.main.temp < 35){
            document.getElementById('status').innerHTML = "Hot";
        }else if(data.main.temp < 50){
            document.getElementById('status').innerHTML = "Very Hot";
        }
    })

}
getWeather();