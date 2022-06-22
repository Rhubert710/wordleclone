import {useState} from "react";
import './App.css';

// VARIABLES //
let i=0;
let j=0;





// COMPONENTS //

function App() {

  const [defaultGuessList, setDefaultGuessList] = useState ([
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
  ])
l(defaultGuessList)
  return (
    <div className="App">
      <header className="App-header">
        <WordleHeader /> 
        <WordleGrid 
           defaultGuessList={defaultGuessList}
        />
      </header>
      <Keyboard defaultGuessList={defaultGuessList} setDefaultGuessList={setDefaultGuessList}/>
    </div>
  );
}

const WordleHeader = () => {
  return (
    <h1 className="wordle-header">
      Wordle Clone
    </h1>
  )
}

const WordleGrid = (props) => {
  // const { wordleGuessList } = props;
  return (
    <div className="wordle-grid">
      {props.defaultGuessList.map((wordleGuess)=>{
        return (
          <WordleGridRow wordleGuess={wordleGuess}/> 
        )
      })}
    </div>
  )
}

const WordleGridRow = (props) => {
  return (
    <div className="wordle-grid-row">
      {props.wordleGuess.map((wordleLetter)=>{
        return (
          <WordleGridLetter wordleLetter={wordleLetter} isCorrect={wordleLetter === "A" || wordleLetter === "E"}/> 
        )
      })}
    </div>
  )
}

const WordleGridLetter = (props) => {
  return (
    <div className={`wordle-grid-letter wordle-grid-letter-${props.isCorrect}`}>
      {props.wordleLetter}
    </div>
  )
}

const KeyboardRow = (props) =>
{
  return(
    <div className="keyboardRow">
      <br/>
      {props.row.map((letter)=>
      {
        return <div className="letter" onClick={()=>{AddLetter(letter, props.defaultGuessList, props.setDefaultGuessList)}} >{letter}</div>
      })}
    </div>

  )
}
const Keyboard = (props) => 
{
  const keyboard_matrix = [
    ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"],
    ["a", "s", "d", "f", "g", "h", "j", "k", "l"],
    ["enter", "z", "x", "c", "v", "b", "n", "m", "backspace"]
  ];
    
    return (
      <div className='keyboard'>

        {keyboard_matrix.map((row)=>
        {
           return <KeyboardRow row = {row} defaultGuessList={props.defaultGuessList} setDefaultGuessList ={props.setDefaultGuessList}/>
        })}
     
      </div>
    )
}



// FUNCTIONS //
function AddLetter(key_pressed,guessList, setDefaultGuessList) 
{
  const CORRECT_ANSWER = 'while'

    let new_guessList = [...guessList]

    if(key_pressed== 'backspace')
    {
      j-=1;
      new_guessList[i][j] =''

      setDefaultGuessList(new_guessList)
      return
    }
    new_guessList[i][j]=key_pressed;

    if(j<4) 
    {
      j+=1;
    }
    else
    {
      //check answser
      if(new_guessList[i].join('')==CORRECT_ANSWER)
      {
        l('you win')
      }

      // for

      j=0; 

      if(i<5)i+=1;
      if(i==5)l('GAMEOVER')
      
    }

    console.log(new_guessList)
    setDefaultGuessList(new_guessList)

  
  
}

function l(params) {
  console.log(params)
}

export default App;

/*
Use import/export syntax with react
User require/module.export syntax with express

// Default Export / Only exporting 1 thing
export default App;
import App from "./app.js"

module.exports = App
const App = require("./app.js")

---

// Module Export / Exporting multiple things
export App
import { App } from "./app.js"

module.exports = {
  App: App
}
const { App } = require("./app.js") 
*/
