import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

 
    const [color,setColor] = useState("olive")
     return (
  <div className="w-full h-screen duration 200"
  style={{backgroundColor:color}}>
    <div className='fixed flex flex-wrap justify-center bottom-12 inset_x_0 px-2'>
      <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2">test
        <button 
        className="outline-none px-4" style={{backgroundColor:"red"}}>Red</button>
      </div>
    </div>

  </div>
  )
}

export default App
