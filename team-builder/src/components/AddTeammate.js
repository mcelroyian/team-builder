import React from 'react'

function AddTeammate(props) {

    const { values } = props

return(
    <form>
        <h2>Add a Teammate</h2>
        <label>Name:&nbsp; <input 
            value=''
            onChange={values.onChange}
            name='name'
            type='text'
        /></label>< br/>
        <label>Nick Name:&nbsp; <input 
            value=''
            onChange={values.onChange}
            name='nickName'
            type='text'
        /></label>< br/>
        <label>Email:&nbsp; <input 
            value=''
            onChange={values.onChange}
            name='email'
            type='text'
        /></label>< br/>
        <label>Team:&nbsp; <select
            name='team'
            value=''
            onChange={values.onChange}
        >
            <option value='Hattiesburg'>Hattiesburg</option>
            <option value='Houma'>Houma</option>
            <option value='New Orleans'>New Orleans</option>
            <option value='Gulf Coast'>Gulf Coast</option>
            <option value='Mobile'>Mobile</option>
        </select></label>< br/>
        <label>Position:&nbsp; <select
            name='position'
            value=''
            onChange={values.onChange}
        >
            <option value='QuarterBack'>QuarterBack</option>
            <option value='LineMan'>Linemen</option>
            <option value='Wide Reciever'>Wide Reciever</option>
        </select></label>
    </form>

)
}

export default AddTeammate