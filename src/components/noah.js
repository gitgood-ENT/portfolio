import React, { Component } from 'react';
import './noah.css'

export default class Noah extends Component {

  render() {
    return <div className='Noah'>
        <div className='title'>
          <h1 className='name'>Noah</h1>
          <div className='about'>
              <h2 className='intro'>A creative mind with the desire to both create and dismantle, and to have fun doing it.</h2>
              <p className='aboutMe'>
                  I specialize in front-end development and have a hearty appetite for challenges and optimization. <em>"It doesn't have to be perfect."</em> or <em>"Good enough for government work"</em> may be statements that you've probably heard before, but I don't like phrases like that. I strive to make my products more than just functional, I strive to make them memorable...and fun when possible.
              </p>
          </div>

            <div className='lists'>
              <div className='skills'>
                <h2 className='skillz'>Skills</h2>
                <ul className='listSkills'>
                  <li>Critical Thinking</li>
                  <li>Attention to Detail</li>
                  <li>Creative</li>
                  <li>Adaptability</li>
                  <li>Communication</li>
                  <li>Quick learner</li>
                  <li>Compassionate</li>
                </ul>
              </div>
                <div className='passions'>
                  <h2 className='passionz'>Passions</h2>
                  <ul>
                    <li>Travel and Exploration</li>
                    <li>Mental Health</li>
                    <li>Physical Health</li>
                    <li>Education</li>
                    <li>Self-awareness</li>
                    <li>Environmentalism</li>
                    <li>Ending Animal Cruelty</li>
                  </ul>
                </div>
            </div>

        </div>
    </div>;
  }
}
