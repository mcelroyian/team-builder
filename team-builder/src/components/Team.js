import React from 'react'

function Team(props) {
    const { profile } = props
return (
    <div>
    <h1>{profile.name}</h1>
    <h4>{profile.email}</h4>
    <p>Known as {profile.nickName}, plays for {profile.team}
     as a {profile.position}</p>
    </div>
    
)
}

export default Team