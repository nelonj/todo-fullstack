import React, {useState, useEffect} from 'react';
import './App.css';
import {ListItem} from './components/model'

interface IItem {
  description: string
}


function App() {
  const emptyList: IItem[] = []
  const [list, setList] = useState(emptyList)
  const [item, setItem] = useState('')
  
  useEffect(() => {
    fetch("https://localhost:4000/todos").then(

    )
  }, [item]); //post
  
  
  return (
    <div className="App">
      <h1> My ToDo List</h1>
      
      <input 
        type='text' 
        placeholder='add item' 
        onChange={e => setItem(e.target.value)}></input>
      <button onClick={() => {
        const cloneList: IItem[] = [...list]
        cloneList.push({description: item})
        setList(cloneList)
      }}> ADD </button>

      <ol> {list.map((element, index) => <ListItem {...element} key={index}/>)}</ol>
    </div>
  );
}


export default App;
