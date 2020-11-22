
import {useEffect, useState} from 'react'
import axios from 'axios'

export const useFetch = (url, config) => {

    const [state, setState] = useState({data: {}, loading: true, error: ''})

    useEffect(() => {
        axios.post(url, config)
             .then(response => {
                 setState({
                          data: {
                              cotizaciones: response.data                              
                          },
                          loading: false, 
                          error: ''
                         })
             }).catch(error => {
                 setState({
                     data: {},
                     loading: false,
                     error: error
                 })
             });               
    }, []);
    return state
}