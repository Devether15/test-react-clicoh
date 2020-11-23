
import {useEffect, useState} from 'react'
import axios from 'axios'

export const urlCotizaciones = 'https://www.dolarsi.com/api/api.php?type=valoresprincipales';

export const urlWeather = 'https://newsapi.org/v2/everything?q=bitcoin&from=2020-10-23&sortBy=publishedAt&apiKey=75cf29900ec8467c82b9ff0f9985b9ff';

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
                        climas: urlWeather.data.articles,                        
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