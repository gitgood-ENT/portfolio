import React, { Component } from 'react';
import octocat from "./graphics/Octocat.png";
import E2H from './graphics/E2H_logo.png'
import './contact.css'

export default class contact extends Component {



  render() {
    return <>
    <div className='ABCDEFGH'>
        <div className='contact'>
            <div className='unlimited'>
                The only limits we have are the ones we place on ourselves. That being said, what do you want to create? 
            </div>
            <br/>
            <div>Email me: ward.noahd@gmail.com</div>
            <div></div>
            <h4>Still not convinced? Check out some of my other work</h4>
            <a className='iconLink' href='https://github.com/gitgood-ENT'>
                <img src={octocat} />
            </a>
            
            
        </div>
        <div className='e2h'>
            <h4>Looking for something else? Check this out if you're curious about enhancing communication and productivity in your workplace.</h4>
            <a className='iconLink' href='https://www.exploretoheal.com/'>
                <img src={E2H} />
            </a>
        </div>
    </div>
        
    
    </>
  }
}
