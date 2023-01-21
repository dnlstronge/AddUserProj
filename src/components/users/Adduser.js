
import { useState } from 'react'
import Card from '../UI/Card'
import classes from './Adduser.module.css'
import Button from '../UI/Button'




const Adduser = (props) => {
    const [username, setUsername] = useState('')
    const [age, setAge] = useState('')
    
    const handleOnSubmit = (e) => {
        e.preventDefault()
        if (username.trim().length === 0 || age.trim().length === 0) {
            return;
        }
        if (+age < 1) {
            return;
        }
        setUsername('');
        setAge('');
    }
    const handleUsername = (e) => {
        setUsername(e.target.value)
    }
    const handleAge = (e) => {
        setAge(e.target.value)
    }
    
    
    return (
        <Card className={classes.input}>
        <form onSubmit={handleOnSubmit}>
            <label>Username</label>
            <input 
            htmlFor="username" 
            id="username" 
            type="text" 
            onChange={handleUsername}
            value={username}
            />
            <label>Age (years)</label>
            <input 
            htmlFor="age" 
            id="age" 
            type="number" 
            onChange={handleAge}
            value={age}
            />
            <Button type="submit">Add user</Button>
        </form>
        </Card>
    )
}

export default Adduser