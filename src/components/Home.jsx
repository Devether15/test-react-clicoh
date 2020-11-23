import React from 'react'
import { Fragment } from 'react'
import Header from './Header'
import Footer from './Footer'
import Cotizaciones from '../pages/Cotizaciones'
import Climas from '../pages/Climas'


function Home() {
 return (
  <Fragment>
  <Header/>
  <Cotizaciones/>
  <Climas/>
  <Footer/>
  </Fragment>
 )
}

export default Home
