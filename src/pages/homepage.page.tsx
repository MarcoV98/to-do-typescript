import React from "react"
import Form from "../components/Form";
import List from "../components/List";

const Homepage = () =>{
    return <section className='task-wrapper' >
    <h1 className="task-wrapper__title">Welcome to your To Do List!</h1>
    <Form />
    <List />
</section>
}

export default Homepage;