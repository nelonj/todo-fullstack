import React, {useState, useEffect} from 'react';
import './App.css';
import {ListItem} from './components/model'

interface IItem {
  description: string
}


function App() {
  const emptyList: IItem[] = []
  useEffect(() => {
    const fetchList = async () => {
      const response = await fetch(
        "http://localhost:4000/todos"
      );
      const startList = await response.json();
      
    }}, []); 
  const [item, setItem] = useState('')
  const [list, setList] = useState(emptyList)
  
  
  async function getList() {
    const response = await fetch("http://localhost:4000/todos");
    const allItems = await response.json() // makes the body of the response available in json format
    setList(allItems.message)
  }

  async function clickHandler() { 
    await fetch("http://localhost:4000/todos", {
          method: 'post',
          headers: {'Content-Type':'application/json'}, //need this to be read by app(express.json())
          body: JSON.stringify({ //data needs to be SERIALISED to make the journey
           "description": item
          })
        });
    await getList();
  }
  
  return (
    <div className="App">
      <h1> My ToDo List</h1>
      
      <input 
        type='text' 
        placeholder='add item' 
        onChange={e => setItem(e.target.value)}></input>
      <button onClick={clickHandler} 
      > ADD </button>

      <ol> {list.map((element, index) => <ListItem {...element} key={index}/>)}</ol>
    </div>
  );
}


export default App;
