import React from 'react'
import { Fragment } from 'react'
import Header from './Header'
import Footer from './Footer'
import Cotizaciones from '../pages/Cotizaciones'
import NewsContainer from '../pages/NewsContainer'


function Home() {
 return (
  <Fragment>
  <Header/>
  <Cotizaciones/>
  <NewsContainer/>
  <Footer/>
  </Fragment>
 )
}

export default Home
