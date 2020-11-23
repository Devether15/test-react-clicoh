import React from 'react'
import { useFetch } from '../hooks/useFetch';

export const ContextData = React.createContext(null); 

export const ContextDataProvider = (props) => {

  const {data, loading, error} = useFetch()
  const {climas, cotizaciones} = data
  console.log(climas)
  console.log(cotizaciones);
  
  return (
    <ContextData.Provider value={{climas,cotizaciones, loading, error}}>
      {props.children}
    </ContextData.Provider>
  );
};