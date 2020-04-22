import React, { useState } from 'react';
import Team from './components/Team'
import AddTeammate from './components/AddTeammate'
import { v4 as uuid } from 'uuid' 
import './App.css';

function App() {
  
  //seed teammates array
  const startingTeammates = [
    {
      id: uuid(),
      name: 'Ian',
      nickName: 'Juggernaut',
      //eligible: true,
      email: 'mcelroyian@gmail.com',
      team: 'Hattiesburg',
      position: 'Lineman'
    },
  ]

  //initial form values
  const startingValues = {
    name: '',
    nickName: '',
    email: '',
    team: 'Gulf Coast',
    position: 'Wide Reciever',
  }

  //State

  const [teammates, setTeammates] = useState(startingTeammates)

  const [form, setForm] = useState(startingValues)

  const [playerToEdit, setPlayerToEdit] = useState(null)

  //Event listeners
  
  const onInputChange = e => {
      const key = e.target.name
      const value = e.target.value
      setForm({...form, [key]:value})
  }

  const onSubmit = e => {
    e.preventDefault()
      const newTeammate = {
        id: uuid(),
        name: form.name,
        nickName: form.nickName,
        email: form.email,
        team: form.team,
        position: form.position,
      }

      setTeammates([...teammates, newTeammate])
      setForm(startingValues)
  }

  // EDIT HANDLER
  const editHandler = (player) => {
      const playerEditing = {
        id: player.id,
        name: player.name,
        nickName: player.nickName,
        position: player.position,
        email: player.email,
        team: player.team,
      }
      setPlayerToEdit(playerEditing)
  }
  
  
  
  
  
  return (
    <div className="App">
    <h1>Teammates</h1>

    { teammates.map(player => {
      return <Team profile={player} key={player.id} editHandler={editHandler} />
    })}

    <AddTeammate
      playerToEdit={playerToEdit} 
      values={form} 
      onInputChange={onInputChange} 
      onSubmit={onSubmit} 

      />
    </div>
  );
}

export default App;
