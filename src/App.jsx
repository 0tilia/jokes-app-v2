import './style.css'
import React from "react"
import Joke from './components/Joke'

export default function App() {
  return (
      <div>
        <Joke 
        setup="How did the hacker escape the police?"
        punchline="He just ransomware!"
        isPun={true}
        upvotes={10}
        downvotes={2}
        comments={[{author: "", body: "", title: ""}]}
        />
        <Joke 
          setup="I got my daughter a fridge for her birthday." 
          punchline="I can't wait to see her face light up when she opens it." 
        />
        <Joke 
          setup="How did the hacker escape the police?" 
          punchline="He just ransomware!" 
        />
        <Joke 
          setup="Why don't pirates travel on mountain roads?" 
          punchline="Scurvy." 
        />
        <Joke 
          setup="Why do bees stay in the hive in the winter?" 
          punchline="Swarm." 
        />
        <Joke 
          setup="What's the best thing about Switzerland?" 
          punchline="I don't know, but the flag is a big plus!" 
        />
      </div>
  )
}