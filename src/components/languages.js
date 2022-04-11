import React, { Component } from 'react';
import './languages.css'
import rubyIcon from "./graphics/ruby.png";
import JSIcon from "./graphics/JS.png";
import pythonIcon from "./graphics/python.png";
import swiftIcon from "./graphics/swift.png";
import htmlIcon from "./graphics/HTML5.png"
import cssIcon from "./graphics/css.png"
import railsIcon from "./graphics/rails.png"

export default class languages extends Component {
  render() {
    return <>
    <div className='temp'>
        <p>Coding languages that I've picked up on my travels.</p>
        <ul className='langList'>
            <li className='langItems'><img src={rubyIcon} alt="Ruby Logo" /></li>
            <li className='langItems'><img src={JSIcon} alt ="JavaScript Logo" /></li>
            <li className='langItems'><img src={pythonIcon} alt="Python Logo" /></li>
            <li className='langItems'><img src={swiftIcon} alt="Swift Logo" /></li>
            <li className='langItems'><img src={htmlIcon} alt="HTML Logo" /></li>
            <li className='langItems'><img src={cssIcon} alt="CSS Logo" /></li>
            <li className='langItems'><img src={railsIcon} alt="Ruby on Rails Logo" /></li>
        </ul>
    </div>
    
    </>
  }
}
