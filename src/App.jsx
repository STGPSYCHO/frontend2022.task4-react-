import React from 'react';
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import {PageMain} from './components/PageMain'
import {Posts} from './components/Posts'
import './styles/main.scss'


function App() {
  return(  
  <>
  <Header/>
  <PageMain/>
  <Posts/>
  <Footer/>
  </>
  ) 
  }

export default App
