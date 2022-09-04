const API_KEY =`272bb5834bdc3f792453b3cb3bc2deb1`;
const loadTempature = city => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=imperial`;
    fetch(url)
    .then(res => res.json())
        .then(data => displayTemperature(data));
} 
const displayTemperature = data =>{
    // const temperature = document.getElementById('temperature');
    // temperature.innerText = data.main.temp;
    setInnerTextById('temperature', data.main.temp);
    setInnerTextById('condition', data.weather[0].main);
    console.log(data.weather[0].main);
}

const setInnerTextById=(id, text) =>{
    const temperature = document.getElementById(id);
    temperature.innerText = text;
}

// Enter  keypress 
document.getElementById('input-field').addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
        event.preventDefault()
        document.getElementById('btn-search').click()
    }
})


document.getElementById('btn-search').addEventListener('click', function(){
    const searchField = document.getElementById('input-field');
    const city = searchField.value ; 
    searchField.value ='';
    document.getElementById('city').innerText = city;
    loadTempature(city);
})

loadTempature('dhaka');

