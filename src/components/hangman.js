import wordArray from "./words";
import React, { Component } from 'react'
import './hangman.css'


class Hangman extends Component {
  constructor(props){
    super(props)
    this.state = {
      alreadyGuessed: false,
      currentGuess: '',
      didWin: null,
      didLose: null,
      displayedCharacters: [],
      previousGuesses: [],
      theAnswer: "",
      wrongGuesses: 0,
      
    }
  }
  startGame(){
    let theWord = this.getRandomWord(wordArray)
    console.log(theWord);
    
    setTimeout(this.setState({
      alreadyGuessed: false,
      currentGuess: '',
      didWin: null,
      didLose: null,
      displayedCharacters: [...(theWord.split(""))].map(value => value = "_ "),
      previousGuesses: [],
      theAnswer: theWord,
      wrongGuesses: 0
    }))
  }

  getRandomWord = (arr) => {
    return arr[Math.floor(Math.random()*wordArray.length)]
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
    setTimeout(this.hangmanLogic(this.state.currentGuess))
    e.preventDefault()
  }



  handleChange = (e) => {
    this.setState({currentGuess: e.target.value})

  }

  hangmanLogic = (guess) => {
    console.log(guess);
    if (guess.toLowerCase() === this.state.theAnswer){
      this.setState({
        didWin: true,
      displayedCharacters: guess
      })
    }

    if (!this.state.displayedCharacters.includes(guess)) {
      for (let i = 0; i < this.state.theAnswer.length; i++) {
        if (guess.toLowerCase() === this.state.theAnswer[i]) {
          let updatedArray = this.state.displayedCharacters
          updatedArray[i] = guess.toLowerCase()
          this.setState({
            displayedCharacters: [...updatedArray],
          })
          console.log(this.state.displayedCharacters);
        }
      }
    }
    if (!this.state.displayedCharacters.includes(guess) && !this.state.previousGuesses.includes(guess)) {
      this.setState({
        wrongGuesses: this.state.wrongGuesses + 1
      })
    }
    if (this.state.displayedCharacters.join("") === this.state.theAnswer) {
      this.setState({didWin: true})
    }
    setTimeout(this.endGame)
  }

    endGame = () => {
      if(this.state.wrongGuesses === 6){
        this.setState({
          didLose: true,
          displayedCharacters: this.state.theAnswer
        })
      }
    }

  restart = () => {
    this.startGame()
    this.setState({
      previousGuesses: []
    })
  }


  //           Below this line is the return 
  // -----------------------------------------------------------------

  render() {
    const {
      alreadyGuessed,
      currentGuess,
      didWin,
      didLose,
      displayedCharacters,
      previousGuesses,
      theAnswer,
      wrongGuesses, } = this.state
    return (
      <div>
         Hey there, you aren't lost are you? Well, if you are, why not play a game?
         <br/>
         <p>Let's play Hangman!</p>
         <p>The rules are simple, guess letters, or words, until you get the word or you make six incorrect guesses. Good luck! </p>
         <br/>
        {displayedCharacters}
        <br/>
        
        <br/>
        {didWin && <p>Congratulations! You found the word!</p>}
        {didLose && <p>You couldn't escape the hangman's noose! Want to play again?</p>}
        {alreadyGuessed ? <p>You already guessed that!</p> : <p>{}</p>}
        <br/>
        {theAnswer && !didLose && !didWin && <form onSubmit={this.handleSubmit}>
          <label>Enter your guess:
          <input 
            type="text" 
            name=''
            value={currentGuess} 
            onChange={this.handleChange}
          />
          </label>
          <input type='submit' />
        </form>}

        
        <br/>
        {!theAnswer ? <button onClick={this.restart}>Click here to start.</button> : <button onClick={this.restart}>Click here to restart.</button>}
        <br/>
        {!didLose && !didWin && <p>You have {6 - wrongGuesses} guesses remaining.</p>}
        <div className="prevGuesses">
          <p>Your previous Guesses</p>
          <br/>
          <ul>
            {previousGuesses.map((value, index) => (
              <li className='pGuesses' key={index}>
                {index + 1 + ". " + value}
              </li>
              ))}
          </ul>
        </div>

        
      </div>
    )
  }
}

export default Hangman;