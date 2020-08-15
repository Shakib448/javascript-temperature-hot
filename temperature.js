const API_KEY = "d8145f1c9f1913e2512cd701c771e6fc";

function getWeather(){
    const city = document.getElementById('input-city').value;

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`)
    .then(res => res.json())
    .then(data => {
        console.log(data)
        document.getElementById('temperature').innerHTML = data.main.temp.toFixed(0) + ' ' + `&deg;C`;
        document.getElementById('city').innerHTML = data.name;
            if(data.main.temp <= 15){
                document.getElementById('status').innerHTML = "Cold";
                document.getElementById('cold').style.display = "block";
                document.getElementById('cool').style.display = "none";
                document.getElementById('rainy').style.display = "none";
                document.getElementById('sunny').style.display = "none";
                document.getElementById('hot').style.display = "none";
                document.getElementById('extreme-hot').style.display = "none";
            }else if(data.main.temp <=  19){
                document.getElementById('status').innerHTML = "Cool";
                document.getElementById('cold').style.display = "none";
                document.getElementById('cool').style.display = "block";
                document.getElementById('rainy').style.display = "none";
                document.getElementById('sunny').style.display = "none";
                document.getElementById('hot').style.display = "none";
                document.getElementById('extreme-hot').style.display = "none";
            }else if(data.main.temp <=  25){
                document.getElementById('status').innerHTML = "Rainy";
                document.getElementById('cold').style.display = "none";
                document.getElementById('cool').style.display = "none";
                document.getElementById('rainy').style.display = "block";
                document.getElementById('sunny').style.display = "none";
                document.getElementById('hot').style.display = "none";
                document.getElementById('extreme-hot').style.display = "none";
            }else if(data.main.temp <=  30){
                document.getElementById('status').innerHTML = "Sunny";
                document.getElementById('cold').style.display = "none";
                document.getElementById('cool').style.display = "none";
                document.getElementById('rainy').style.display = "none";
                document.getElementById('sunny').style.display = "block";
                document.getElementById('hot').style.display = "none";
                document.getElementById('extreme-hot').style.display = "none";
            }else if(data.main.temp <=  40){
                document.getElementById('status').innerHTML = "Hot";
                document.getElementById('cold').style.display = "none";
                document.getElementById('cool').style.display = "none";
                document.getElementById('rainy').style.display = "none";
                document.getElementById('sunny').style.display = "none";
                document.getElementById('hot').style.display = "block";
                document.getElementById('extreme-hot').style.display = "none";
            }else if(data.main.temp <=  60){
                document.getElementById('status').innerHTML = "Extreme Hot";
                document.getElementById('cold').style.display = "none";
                document.getElementById('cool').style.display = "none";
                document.getElementById('rainy').style.display = "none";
                document.getElementById('sunny').style.display = "none";
                document.getElementById('hot').style.display = "none";
                document.getElementById('extreme-hot').style.display = "block";
            }
        
    }).catch((error) =>{
        console.log(error);
        alert("Please Try to write valid city name. Thanks")
    })

}


getWeather();