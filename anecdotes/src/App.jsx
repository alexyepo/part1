import { useState } from 'react'

const Display = (props) => {
  return (
    <div>
      <h1>Anecdote of the day</h1>
      {props.anecdoteRandom} <br />
      has {props.votes} votes
    </div>
  ) 
}
  
const Mostvotes = (props) => {
  // console.log("Mostvotes: ", props.mostVotes)
  let max = props.mostVotes[0], mostAnecdote = "none"
  for (let i = 0; i < props.mostVotes.length; i++){
    if (props.mostVotes[i] > max){
      mostAnecdote = props.anecdotes[i]
      // console.log("mostAnecdote: ", mostAnecdote)
      max = props.mostVotes[i]
      // console.log("max: ", max)
    }
  }  
  return (
    <div>      
      <h1>Anecdote with most votes</h1>
      {mostAnecdote} <br />
      has {max} votes
    </div>
  ) 
}

const Button = (props) => {
  return (
      <button onClick={props.handleClick}>
      {props.text}
    </button>
  )
}


const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  // const initialVotes = Array.from({ length: anecdotes.length }, () => 0);
  const initialVotes = anecdotes.map(value => 0);
  const [allVotes, setAllVotes] = useState(initialVotes)//A la variable allVotes se la asigna el valor initialVotes que es una array de 8 elemento inicializados en cero
  // console.log('allVotes: ', allVotes)
  const [selected, setSelected] = useState(0)
    
  const nextAnecdote = () => {
    const randomIndex = Math.floor(Math.random() * anecdotes.length);
    setSelected(randomIndex); // Update the selected state with the random index
  }
  
    
  const addVote = () => {
    const updatedVotes = [...allVotes]
    updatedVotes[selected] += 1
    setAllVotes(updatedVotes)
  }

  return (    
    <div>
      <Display anecdoteRandom={anecdotes[selected]} votes={allVotes[selected]} />
      <Button handleClick={addVote} text="vote" />
      <Button handleClick={nextAnecdote} text="next anecdote" />
      <Mostvotes mostVotes={allVotes} anecdotes={anecdotes} />
    </div>
  )
}

export default App