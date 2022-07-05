const options = {
    method:'GET',
    headers: {
        'X-RapidAPI-Key': 'e9825437e2mshdfb1f99588b26cdp12b3abjsn52e10a3758bf',
        'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
    }
}

export default function GetWeatherFromService(query = "Málaga"){
    return fetch(`https://weatherapi-com.p.rapidapi.com/forecast.json?q=${query}&days=3`, options);
}