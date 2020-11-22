import React from 'react'
import { Fragment } from 'react'
import Header from './Header'
import Footer from './Footer'
import Cotizaciones from '../pages/Cotizaciones'


function Home() {
 return (
  <Fragment>
  <Header/>
  <Cotizaciones/>
  <Footer/>
  </Fragment>
 )
}

export default Home
