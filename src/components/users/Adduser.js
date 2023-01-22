
import { useState, useRef } from 'react'
import Card from '../UI/Card'
import classes from './Adduser.module.css'
import Button from '../UI/Button'
import ErrorModal from '../UI/ErrorModal'
import Wrapper from '../helpers/Wrapper'




const Adduser = (props) => {

    const nameInputRef = useRef()
    const ageInputRef = useRef()


    const [error, setError] = useState()
    
    const handleOnSubmit = (e) => {
        e.preventDefault()
        const enteredName = nameInputRef.current.value
        const enteredAge = ageInputRef.current.value
        if (enteredName.trim().length === 0 || enteredAge.trim().length === 0) {
           return setError({
                title: 'Invalid input',
                message: 'Please enter a valid username and age '
            })
        }
        if (+enteredAge < 1) {
            return setError({
                title: 'Invalid age',
                message: 'Please enter a number greater than 0 '
            })
        }
        props.onAddUser(enteredName, enteredAge)
        nameInputRef.current.value = ('')
        ageInputRef.current.value = ('')
        

    }
  
    
    const errorHandler = () => {
        setError(null)
    }

    
    return (
        <Wrapper>
        {error && 
        <ErrorModal 
            closeError={errorHandler} 
            title={error.title} 
            message={error.message} />}

         <Card className={classes.input}>
            <form onSubmit={handleOnSubmit}>
                <label>Username</label>
                <input 
                    htmlFor="username" 
                    id="username" 
                    type="text" 
                    ref={nameInputRef}
                />
                <label>Age (years)</label>
                <input 
                    htmlFor="age" 
                    id="age" 
                    type="number" 
                    ref={ageInputRef}
                />
                <Button type="submit">Add user</Button>
            </form>
        
         </Card>
        </Wrapper>
           
    )
}

export default Adduser