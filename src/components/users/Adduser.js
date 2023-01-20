
import { useState } from 'react'
import Card from '../UI/Card'
import classes from './Adduser.module.css'
import Button from '../UI/Button'

const users = []


const Adduser = (props) => {
    
    const handleOnSubmit = (e) => {
        e.preventDefault()

    }
    
    
    return (
        <Card className={classes.input}>
        <form onSubmit={handleOnSubmit}>
            <label>Username</label>
            <input htmlFor="username" id="username" type="text"/>
            <label>Age (years)</label>
            <input htmlFor="age" id="age" type="number"/>
            <Button type="submit">Add user</Button>
        </form>
        </Card>
    )
}

export default Adduser