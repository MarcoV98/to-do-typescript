import React from "react"
import Form from "../components/Form";
import List from "../components/List";
import { useTranslation } from "react-i18next";
import { useSnapshot } from "valtio";
import { taskStore } from "../store/TaskStore";


const Homepage = () =>{
    const {t} = useTranslation();
    const tasksSnapshot = useSnapshot(taskStore);
    const count = tasksSnapshot.tasks.length;

    return <section className='task-wrapper' >
    <h1 className="task-wrapper__title">{t('welcomeMessage')}</h1>
    <p>{t('taskCount',  {count: count})}</p>
    <Form />
    <List />
</section>
}

export default Homepage;