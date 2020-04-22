import React from 'react'

function Team(props) {
    const { profile, editHandler } = props
return (
    <div>
    <h1>{profile.name}</h1>
    <h4>{profile.email}</h4>
    <p>Known as {profile.nickName}, plays for {profile.team} 
     as a {profile.position}</p>
     
     <button onClick={e => editHandler(profile)}>Edit</button>
    </div>
    
)
}

export default Team