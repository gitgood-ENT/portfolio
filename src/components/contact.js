import React, { Component } from 'react';
import octocat from "./graphics/Octocat.png";
import E2H from './graphics/E2H_logo.png'
import linkedIn from './graphics/linkedIn.png'
import './contact.css'

export default class Contact extends Component {
    
    
    
    render() {
        return <>
    <div className='ABCDEFGH'>
        <div className='contact'>
            <div className='unlimited'>
                The only limits we have are the ones we place on ourselves. That being said, let's create something together. 
            </div>
            <br/>
            <div>
            Email me: <a href='mailto:ward.noahd@gmail.com'>ward.noahd@gmail.com</a>
            </div>
            <div></div>
            <h4>Here are some helpful links for you to check out.</h4>
            <a className='iconLink' href='https://github.com/gitgood-ENT'>
                <img src={octocat} alt="Github Octocat"/>
            </a>
            <a className='iconLink' href='https://www.linkedin.com/in/ward-noahd/'>
                <img src={linkedIn} alt="LinkedIn Logo"/>
            </a>
            
            
        </div>
        <div className='e2h'>
            <h4>Looking for something else? Check this out if you're curious about enhancing communication and productivity in your workplace.</h4>
            <a className='iconLink' href='https://www.exploretoheal.com/'>
                <img src={E2H} alt="Explore to Heal"/>
            </a>
        </div>
    </div>
        
    
    </>
  }
}
