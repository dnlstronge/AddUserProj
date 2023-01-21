
import { useState } from 'react'
import Card from '../UI/Card'
import classes from './Adduser.module.css'
import Button from '../UI/Button'
import ErrorModal from '../UI/ErrorModal'




const Adduser = (props) => {
    const [username, setUsername] = useState('')
    const [age, setAge] = useState('')
    const [error, setError] = useState()
    
    const handleOnSubmit = (e) => {
        e.preventDefault()
        if (username.trim().length === 0 || age.trim().length === 0) {
            setError({
                title: 'Invalid input',
                message: 'Please enter a valid username and age '
            })
        }
        if (+age < 1) {
            setError({
                title: 'Invalid age',
                message: 'Please enter a number greater than 0 '
            })
        }
        props.onAddUser(username, age)
        setUsername('');
        setAge('');
        

    }
    const handleUsername = (e) => {
        setUsername(e.target.value)
    }
    const handleAge = (e) => {
        setAge(e.target.value)
    }
    
    const errorHandler = () => {
        setError(null)
    }

    return (
        <div>
        {error && <ErrorModal closeError={errorHandler} title={error.title} message={error.message} />}
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
        </div>
           
    )
}

export default Adduser