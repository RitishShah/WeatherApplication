const submitBtn = document.getElementById('submitBtn')
const cityName = document.getElementById('cityName')
const city_name = document.getElementById('city_name')
const realTemperature = document.getElementById('realTemperature')

const dataHide = document.querySelector('.middle_layer')


const getInfo = async(event) => {
    event.preventDefault();  // It will prevent submit form

    let cityVal = cityName.value;

    if(cityVal === ""){
        city_name.innerText = `Please enter city name before search`;
        dataHide.classList.add('hide_data');
    }
    else{
        try{
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=7f98ff9950fa062b02a300afc09c4518`
            const response = await fetch(url);
            const data = await response.json();
            const arrData = [data];

            city_name.innerText = `${arrData[0].name}, ${arrData[0].sys.country}`;

            realTemperature.innerText = arrData[0].main.temp;

            dataHide.classList.remove('hide_data');
        }
        catch{
            city_name.innerText = `Please enter city name properly`;
            dataHide.classList.add('hide_data');
        }
    }
}

submitBtn.addEventListener('click', getInfo);