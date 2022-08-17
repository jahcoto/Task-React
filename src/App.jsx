import { useState } from 'react'
import './App.css'
import './components/Tasks.css'

import Form from './components/Form'
import List from './components/List'

function App() {
  const [count, setCount] = useState(0)
  return (
    <>
      <Form />
      <List />
    </>
  )
}

export default App
