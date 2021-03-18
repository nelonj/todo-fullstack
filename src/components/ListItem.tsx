import React, {useState} from 'react';
import '../App.css';
// import {getList} from '../App'

interface IListItemProps {
  id: number,
  description: string,
  deleteHandler: (key:number) => void
}


export function ListItem(props: IListItemProps) {
    const [completion, setCompletion] = useState(false)
    // console.log(props.description, completion)
    const [key, setKey] = useState(props.id)
    
    return (
      <li key={key}> {props.description} 
        <input type='checkbox' onChange={() => {if (completion === true) {setCompletion(false)} else {setCompletion(true)}}}></input>
        <button 
          // key={props.id} 
          onClick={() => console.log('edited')}> EDIT </button> 
        <button 
          // key={props.id} 
          onClick={() => props.deleteHandler(key)}> DELETE </button>
      </li>
      
    )
  }


