import classes from './Button.module.css'

const Button = (props) => {
    return (
        <button 
        className={classes.button} 
        type={props.type || 'button'}
        onClick={props.onclick}
        >Add user</button>
    )
}
export default Button;