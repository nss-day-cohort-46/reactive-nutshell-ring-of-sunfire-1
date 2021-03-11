import React, { useState, createContext } from "react"
import { useParams } from "react-router"

export const TaskContext = createContext()

export const TaskProvider = (props) => {
    const [tasks, setTasks] = useState([])

    const getTasks = () => {
        return fetch("http://localhost:8088/tasks")
            .then(res => res.json())
            .then(setTasks)
    }

    const getTaskById = (id) => {
        return fetch(`http://localhost:8088/tasks/${id}`)
            .then(res => res.json())
    }

    const addTask = taskObj => {
        return fetch("http://localhost:8088/tasks", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(taskObj)
        })
            .then(getTasks)
    }

    const deleteTask = taskId => {
        return fetch(`http://localhost:8088/tasks/${taskId}`, {
            method: "DELETE"
        })
            .then(getTasks)
    }

    const editTask = task => {
        return fetch(`http://localhost:8088/tasks/${task.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(task)
        })
            .then(getTasks)
    }

    const completeTask = (task,) => {
        return fetch(`http://localhost:8088/tasks/${task.id}`, {
            method: "PATCH",
            body: JSON.stringify({
                completed: true
            }),
            headers: {
                "Content-type": "application/json"
            }
        })
            .then(getTasks)
    }

    return (
        <TaskContext.Provider value={{
            tasks, getTasks, getTaskById, addTask, deleteTask, editTask, completeTask
        }}>
            {props.children}
        </TaskContext.Provider>
    )
}