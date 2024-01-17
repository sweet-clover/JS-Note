import { useState } from "react"

function App() {

  const [text, setText] = useState('')
  const [tasks, setTasks] = useState([])

  const handleTextChange = (event) => {
    setText(event.target.value.trim())
  }

  const addTask = () => {
    let check = tasks.find((task) => task.name === text)
    if(check){
      alert("Task is already exist!")
    }else{
      let task = {
        id: tasks.length + 1,
        name: text,
        completed: false,
        createdAt: new Date()
      }
      setTasks([...tasks, task])
      setText('')
    }
  }

  const handleCheckboxChange = (event, id) => {
    let newTasks = tasks.map((task) => {
      if(task.id === id){
        return {...task, completed: !task.completed}
      }else{
        return task
      }
    })
    setTasks(newTasks)
  }

  return (
    <div>
      <div>
        <input type="text" value={text} onChange={handleTextChange} />
        <button onClick={addTask}>Add</button>
      </div>
      <div>
        {
          tasks.map((task) => {
            return <div key={task.id}>
              <input
                type="checkbox"
                checked={task.completed}
                onChange={(event) => handleCheckboxChange(event, task.id)}
              />
              {task.name}
            </div>
          })
        }

      </div>
    </div>
  )
}

export default App;
