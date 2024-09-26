import React, {useRef} from "react";

type formProps = {
   onAddHandler: (enteredInput: string) => void;
}

const Form: React.FC<formProps> = props => {
    const inputText = useRef<HTMLInputElement>(null)

    const submitHandler = (e: React.FormEvent) => {
        e.preventDefault();
        const enteredInput = inputText.current!.value //! dice a ts che va bene 
        props.onAddHandler(enteredInput)
    }

 return <form onSubmit={submitHandler}>
    <label htmlFor="taskForm"></label>
    <input type="text" id="taskInput" placeholder="Add your task..." ref={inputText}/>
    <button type="submit">Add task</button>
 </form>
}

export default Form