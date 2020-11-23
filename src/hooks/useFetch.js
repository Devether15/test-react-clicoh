
import {useEffect, useState} from 'react'
import axios from 'axios'

export const urlCotizaciones = 'https://www.dolarsi.com/api/api.php?type=valoresprincipales';

export const urlWeather = 'https://api.openweathermap.org/data/2.5/weather?q=argentina&appid=9023f60df840b15465ca512c913495ab';

export const config = {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
    body: {
        
    }
}

export const useFetch = () => {

    const [state, setState] = useState({data: {}, loading: true, error: ''})

    useEffect(() => {
        axios.all([
            axios.get(urlCotizaciones),
            axios.get(urlWeather),
          ])
            .then(axios.spread((urlCotizaciones, urlWeather) => {
                setState({
                    data: {
                        cotizaciones: urlCotizaciones.data,
                        climas: urlWeather.data,                        
                    },
                    loading: false, 
                    error: ''
                   })
                // console.log("SUCCESS", urlCotizaciones);
                // console.log("SUCCESS2", urlWeather);
            }))
            .catch(() => {
             //...Error
            });
    }, []);
    return state
}