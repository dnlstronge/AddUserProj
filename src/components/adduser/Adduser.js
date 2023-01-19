import './Adduser.css'
import { useState } from 'react'

const users = []


const Adduser = () => {
    const handleSubmit = (e) => {
        e.preventDefault()
        
        users.push({id: Math.random(), name: username, age: age

        })
        
    }

    const[username, setUsername] = useState('')
    const[age, setAge] = useState('')

    const nameHandler = (e) => {
        setUsername(e.target.value)
    }
    const ageHandler  = (e) => {
        setAge(e.target.value)
    }
    
    
    return (
        <>
        <div className="form-container">
            <form onSubmit={handleSubmit}>
                <label>Username:</label> <br></br>
                <input onChange={nameHandler} type="text"/><br></br>
                <label> Age (years):</label> <br></br>
                <input  onChange={ageHandler}type="number"/><br></br>
                <button className="btn">Add user</button> 
            </form>
        </div>
        <div>{users.map((user) => { 
            console.log(users)
            return ( <div className='useritem'>
                <p>username:{user.name}</p>
                <p>age: {user.age} </p>
            </div>)
        })}</div>
        </>
    )
}

export default Adduser