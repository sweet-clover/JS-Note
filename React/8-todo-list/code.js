import { useState } from "react"

function App() {

  const [text, setText] = useState('')
  const [editId, setEditId] = useState(null)
  const [tasks, setTasks] = useState([])

  const handleTextChange = (event) => {
    setText(event.target.value)
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

  const deleteTask = (id) => {
    const newTasks = tasks.filter((task) => task.id !== id)
    setTasks(newTasks)
  }


  const handleEdit = (task) => {
    setText(task.name)
    setEditId(task.id)
  }

  const handleTask = () => {
    let check = tasks.find((task) => task.name === text.trim())
    if(check){
      alert("Task is already exist!")
    }else{
      if(editId){
        editTask()
      }else{
        addTask()
      }
    }
  }

  const addTask = () => {
    let task = {
      id: tasks.length + 1,
      name: text.trim(),
      completed: false,
      createdAt: new Date()
    }
    setTasks([...tasks, task])
    setText('')
  }

  
  const editTask = () => {
    let newTasks = tasks.map((task) => {
      if(task.id === editId){
        return {...task, name: text.trim()}
      }else{
        return task
      }
    })
    setTasks(newTasks)
    setText('')
    setEditId(null)
  }

  return (
    <div style={{margin: '100px'}}>
      <div>
        <input type="text" value={text} onChange={handleTextChange} />
        <button onClick={handleTask}>{editId ? 'Update' : 'Add' }</button>
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
              <button onClick={() => handleEdit(task)}>Edit</button>
              <button onClick={() => deleteTask(task.id)}>Delete</button>&nbsp;
            </div>
          })
        }

      </div>
    </div>
  )
}

export default App;
