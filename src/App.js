import React, { useState } from 'react'
import Data from './Data'
import List from './List'

const App = () => {
  const[people,setPeople]= useState(Data)
  return (
    <div>
      <h1>BIRTHDAYS</h1>
      <List people={people}/>
      <button>CLEAR ALL</button>

    </div>
  )
}

export default App
