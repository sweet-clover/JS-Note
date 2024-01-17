import { useState } from "react"


// function App() {
//   let [count, setCount] = useState(0)

//   const handleIncrease = () => {
//     setCount(count+=1)
//     console.log("handleIncrease ", count)
//   }

//   const handleDecrease = () => {
//     setCount(count-=1)
//     console.log("handleDecrease ", count)
//   }

//   return(
//     <div>
//       <button onClick={handleIncrease}>+</button>
//       <span>{count}</span>
//       <button onClick={handleDecrease}>-</button>
//     </div>
//   )
// }

function App() {
  let count = 0

  const handleIncrease = () => {
    count+=1
    console.log("handleIncrease ", count)
  }

  const handleDecrease = () => {
    count-=1
    console.log("handleDecrease ", count)
  }

  return(
    <div>
      <button onClick={handleIncrease}>+</button>
      <span>{count}</span>
      <button onClick={handleDecrease}>-</button>
    </div>
  )
}

export default App;
