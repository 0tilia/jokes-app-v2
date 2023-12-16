import './style.css'
import React from "react"
import Joke from './components/Joke'
import jokesData from './jokesData'

export default function App() {
  const jokeElement = jokesData.map(joke => {
    return <Joke setup={joke.setup} punchline={joke.punchline}/>
  })

  return (
      <div>

        <h1>{jokeElement}</h1>

      </div>
  )
}