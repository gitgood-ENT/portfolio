import wordArray from "./words";
import React, { Component } from 'react'
import './hangman.css'


class Hangman extends Component {
  constructor(props){
    super(props)
    this.state = {
      displayedCharacters: [],
      currentGuess: '',
      previousGuesses: [],
      alreadyGuessed: false,
      theAnswer: "",
      didWin: null,
      goodGuess: null,

    }
  }
  componentDidMount(){
    let theWord = wordArray[Math.floor(Math.random()*wordArray.length)]
    this.setState({
      theAnswer: theWord
    })
    let hangmansWordArray = [...(theWord.split(""))].map(value => value = "_ ")
    this.setState({
      displayedCharacters: hangmansWordArray,
    })
  }

  getRandomWord = (arr) => {
    let theWord = arr[Math.floor(Math.random()*wordArray.length)]
    this.setState({
      theAnswer: theWord
    })
  }


  handleSubmit = (e) => {
    if ((this.state.previousGuesses.includes(this.state.currentGuess)) === false) {
      this.setState({
        previousGuesses: [...this.state.previousGuesses, this.state.currentGuess],
        alreadyGuessed: false
      })
    } else {
      this.setState({alreadyGuessed: true})
    }
    this.setState({currentGuess: ''})
    this.hangmanLogic(this.state.currentGuess)
    e.preventDefault()
  }



  handleChange = (e) => {
    this.setState({currentGuess: e.target.value})
    console.log(e.target.value)
  }

  hangmanLogic = (guess) => {
    if (guess.toLowerCase() === this.state.theAnswer){
      this.setState({didWin: true})
    }

    if (!this.state.displayedCharacters.includes(guess)) {
      for (let i = 0; i < this.state.theAnswer.length; i++) {
        if (guess.toLowerCase() === this.state.theAnswer[i]) {
          let updatedArray = this.state.displayedCharacters
          updatedArray[i] = guess.toLowerCase()
          this.setState({
            displayedCharacters: [...updatedArray],
            goodGuess: true
          })
          console.log(this.state.displayedCharacters);
        } else {
          this.setState({
            goodGuess: false
          })
        }
      }
    } 
  }


  restart = () => {
    this.componentDidMount()
    this.setState({
      previousGuesses: []
    })
  }



  // -----------------------------------------------------------------

  render() {
    return (
      <div>
         Hey there, you aren't lost are you? Well, if you are, why not play a game?
         <br/>
        {this.state.displayedCharacters}
        <br/>
        
        <br/>
        {/* {this.state.theAnswer} */}
        
        <br/>
        <form onSubmit={this.handleSubmit}>
          <label>Enter your guess:
          <input 
            type="text" 
            name=''
            value={this.state.currentGuess} 
            onChange={this.handleChange}
          />
          </label>
          <input type='submit' />
        </form>

        
        <br/>
        <button onClick={this.restart}>Click here to restart.</button>
        <br/>

        Your previous Guesses
        <br/>
          {this.state.alreadyGuessed ? <p>You already guessed that!</p> : null}
        <ul>
          {this.state.previousGuesses.map((value, index) => (
            <li className='pGuesses' key={index}>
              {value}
            </li>
            ))}
        </ul>

        <br/>
        
      </div>
    )
  }
}

export default Hangman;