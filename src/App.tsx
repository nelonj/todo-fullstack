import React, {useState} from 'react';
import './App.css';

interface IItem {
  description: string
}


function App() {
  const emptyList: IItem[] = []
  const [list, setList] = useState(emptyList)
  const [item, setItem] = useState('')
  
  return (
    <div className="App">
      <h1> My ToDo List</h1>
      
      <input type='text' onChange={e => setItem(e.target.value)}></input>
      <button onClick={() => {
        const cloneList: IItem[] = [...list]
        cloneList.push({description: item})
        setList(cloneList)
      }}> ADD </button>

      <ol> {list.map((element, index) => <ListItem {...element} key={index}/>)}</ol>
    </div>
  );
}

function ListItem(props: IItem) {
  const [completion, setCompletion] = useState(false)
  console.log(props.description, completion)
  
  return (
    <li> {props.description} 
      <input type='checkbox' onChange={() => {if (completion === true) {setCompletion(false)} else {setCompletion(true)}}}></input>
      <button onClick={() => console.log('edited')}> EDIT </button> 
      <button onClick={() => console.log('deleted')}> DELETE </button>
    </li>
    
  )
}

export default App;
