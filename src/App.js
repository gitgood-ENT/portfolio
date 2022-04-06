import React, { Component } from 'react'
import Hangman from "./components/hangman";
import Noah from "./components/noah";
import Contact from "./components/contact";
import Languages from './components/languages'


import './App.css';

export default class App extends Component {
  constructor(props){
    super(props)
    
  }

    render() {
      return (
        <div>
          <Noah />
        <br/>
        <Languages />
        <br/>
        <Contact />
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <div className='Hangman'>
        <Hangman />
        </div>
        <div>
        </div>
        
      </div>
    )
  }
}

