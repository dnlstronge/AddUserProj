import './Adduser.css'
import { useState } from 'react'

const users = []


const Adduser = (props) => {
    
    const handleOnSubmit = (e) => {
        e.preventDefault()
        
    }
    
    
    return (
        <form onSubmit={handleOnSubmit}>
            <label>Username</label>
            <input htmlfor="username" id="username" type="text"/>
            <label>Age (years)</label>
            <input htmlfor="age" id="age" type="number"/>
            <button type="submit">Add user</button>
        </form>
        
    )
}

export default Adduser