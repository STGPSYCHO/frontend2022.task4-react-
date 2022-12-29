import React from 'react';
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import {Page_main} from './components/Page_main'
import {Posts} from './components/Posts'
import './styles/main.scss'


function App() {
  return(  
  <>
  <Header/>
  <Page_main/>
  <Posts/>
  <Footer/>
  </>
  ) 
  }

export default App
