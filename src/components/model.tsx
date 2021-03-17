import React, {useState} from 'react';
import '../App.css';

interface IItem {
  id: number,
  description: string
}

export function ListItem(props: IItem) {
    const [completion, setCompletion] = useState(false)
    console.log(props.description, completion)
    
    return (
      <li key={props.id}> {props.description} 
        <input type='checkbox' onChange={() => {if (completion === true) {setCompletion(false)} else {setCompletion(true)}}}></input>
        <button onClick={() => console.log('edited')}> EDIT </button> 
        <button onClick={() => console.log('deleted')}> DELETE </button>
      </li>
      
    )
  }

