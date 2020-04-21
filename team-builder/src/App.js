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
    position: 'Wide Reciever'

  }

  //State

  const [teammates, setTeammates] = useState(startingTeammates)

  const [form, setForm] = useState(startingValues)

  //Event listeners
  
  const onChange = e => {

  }

  const onSubmit = e => {

  }
  
  
  
  
  
  return (
    <div className="App">
    <h1>Teammates</h1>

    { teammates.map(player => {
      return <Team profile={player} key={player.id} />
    })}

    <AddTeammate values={{}} onChange={onChange} onSubmit={onSubmit} />
    </div>
  );
}

export default App;
