import React from 'react'
import {BiEdit} from 'react-icons/bi'
import {AiFillDelete} from 'react-icons/ai'

const ToDo = ({text, done, handleClick, updateMode, deleteToDo}) => {
    return (
        <div className ="todo">
            <div className = {done? "textstrike": "text"} onClick = {handleClick}>{text}</div>
            <div className = "icons">
                <BiEdit className = "icon" onClick = {updateMode} />
                <AiFillDelete className = 'icon' onClick={deleteToDo} />
            </div>
        </div>
    )
}

export default ToDo