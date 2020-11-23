import React from 'react'
import { useFetch } from '../hooks/useFetch';

export const ContextData = React.createContext(null); 

export const ContextDataProvider = (props) => {

  const {data, loading, error} = useFetch()
  const {news, cotizaciones} = data
  console.log(news)
  console.log(cotizaciones);
  
  return (
    <ContextData.Provider value={{news,cotizaciones, loading, error}}>
      {props.children}
    </ContextData.Provider>
  );
};