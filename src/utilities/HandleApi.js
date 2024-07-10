import axios from 'axios'

const baseUrl = "https://fullstack-todo-app-backend-rlhon.onrender.com"

const getAllToDo = (setToDo) => {
    axios
    .get(baseUrl)
    .then(({data}) => {
        console.log('data ----> ', data);
        setToDo(data)
    })
}

const addToDo = (text, setText, setToDo) => {
    axios
    .post(`${baseUrl}/save`, {text})
    .then((data) => {
        console.log(data);
        setText("")
        getAllToDo(setToDo)
    })
}

const updateToDo = (toDoId, text, setToDo, setText, setIsUpdating) => {
    axios
    .post(`${baseUrl}/update`, {_id: toDoId, text})
    .then((data) => {
        setText("")
        setIsUpdating(false)
        getAllToDo(setToDo)
    })
    .catch((err) => console.log(err))
}

const deleteToDo = (toDoId, setToDo) => {
    axios
    .post(`${baseUrl}/delete`, {_id: toDoId})
    .then((data) => {
        console.log(data)
        getAllToDo(setToDo)
    })
    .catch((err) => console.log(err))
}

const handleClick = (toDoId, done, setIsDone, setToDo, setText) => {
    axios
    .post(`${baseUrl}/state`, {_id: toDoId, done: done})
    .then((data) => {
        setText("")
        setIsDone(done)
        getAllToDo(setToDo)

    })
}

export {getAllToDo, addToDo, updateToDo, deleteToDo, handleClick}
