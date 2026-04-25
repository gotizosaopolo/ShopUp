import { useState } from "react"
function App() {
  const [name, setName] = useState("")

  return (
    <>
      <input type='text' placeholder='votre Blaz' onChange={(e)=>{setName(e.target.value)}}/>
      {name}
    </>
  )
}

export default App
