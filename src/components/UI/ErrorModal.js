import Card from "./Card";
import Button from "./Button"
import classes from "./ErrorModal.module.css"
import ReactDOM from "react-dom";


const Backdrop = (props) => {
    return <div className={classes.backdrop} onClick={props.closeError}></div>
};

const ModalOverlay = (props) => {
    return (
        <Card className={classes.modal}>
            <header className={classes.header}>
                <h2>{props.title}</h2>
            </header>
            <div className={classes.content}>
                <p>{props.message}</p>
            </div>
            <footer className={classes.actions}>
                <Button onClick={props.closeError}>Okay</Button>
            </footer>
        </Card>
    )
}

const ErrorModal = (props) => {


    return (
    <>
        {ReactDOM.createPortal(<Backdrop closeError={props.closeError}/>, 
                                document.getElementById("backdrop-root"))}
    </>)
} 

export default ErrorModal;