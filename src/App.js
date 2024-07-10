import { useEffect, useState } from "react";
import ToDo from "./component/ToDo";
import { addToDo, getAllToDo, updateToDo, deleteToDo, handleClick} from "./utilities/HandleApi";

function App() {

  const [toDo, setToDo] = useState([])
  const [text, setText] = useState("")
  const [isUpdating, setIsUpdating] = useState(false)
  const [toDoId, setToDoId] = useState("")
  const [done, setIsDone] = useState("")

  useEffect(() => {
    getAllToDo(setToDo)
  }, [])
  
  const updateMode = (_id, text) => {
    
    if (isUpdating) {
      setIsUpdating(false)
      setText("")
      setToDoId(_id)
      return;
    }

    setIsUpdating(true)
    setText(text)
    setToDoId(_id)
  }

  

  return (
    <div className="App">
      <div className = "container">

        <h1> Todo App </h1>

        <form className = "todo-form">
          <input type = "text" 
            placeholder = "Add To Do..." 
            required
            value = {text}
            onChange = {(e) => setText(e.target.value)}
          />
          <button type = "submit" 
            onClick= { isUpdating? ()=> updateToDo(toDoId, text, setToDo, setText, setIsUpdating) : 
            () => addToDo(text, setText, setToDo)}> 
            {isUpdating? "Update": "Add"} 
          </button>

        </form>
        
        <div className = "list">

          {toDo.map((item) => (
            <ToDo 
              key = {item._id} 
              text = {item.text}
              done = {item.done}
              updateMode = {() => updateMode(item._id, item.text)}
              deleteToDo = {() => deleteToDo(item._id, setToDo)} 
              handleClick = {() => {done? (handleClick(item._id, false, setIsDone, setToDo, setText)): 
                (handleClick(item._id, true, setIsDone, setToDo, setText)) }
              }/>
          ))}

        </div>


      </div>
    </div>
  );
}

export default App;
