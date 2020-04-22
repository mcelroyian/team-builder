import React from 'react'

function AddTeammate(props) {

    const { values, onInputChange, onSubmit, playerToEdit } = props

return(
    <form>
        <h2>Add a Teammate</h2>
        <label>Name:&nbsp; <input 
            value={values.name}
            onChange={onInputChange}
            name='name'
            type='text'
        /></label><br/>
        <label>Nick Name:&nbsp; <input 
            value={values.nickName}
            onChange={onInputChange}
            name='nickName'
            type='text'
        /></label><br/>
        <label>Email:&nbsp; <input 
            value={values.email}
            onChange={onInputChange}
            name='email'
            type='text'
        /></label><br/>
        <label>Team:&nbsp; <select
            name='team'
            value={values.team}
            onChange={onInputChange}
        >
            <option value='Hattiesburg'>Hattiesburg</option>
            <option value='Houma'>Houma</option>
            <option value='New Orleans'>New Orleans</option>
            <option value='Gulf Coast'>Gulf Coast</option>
            <option value='Mobile'>Mobile</option>
        </select></label><br/>
        <label>Position:&nbsp; <select
            name='position'
            value={values.position}
            onChange={onInputChange}
        >
            <option value='QuarterBack'>QuarterBack</option>
            <option value='LineMan'>Linemen</option>
            <option value='Wide Reciever'>Wide Reciever</option>
        </select></label><br />
        <button onClick={onSubmit}>Add New Teammate</button>
    </form>

)
}

export default AddTeammate