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
   
    
    return (
      <li key={props.id}> {props.description} 
        <input type='checkbox' onChange={() => {if (completion === true) {setCompletion(false)} else {setCompletion(true)}}}></input>
        <button 
          // key={props.id} 
          onClick={() => console.log('edited')}> EDIT </button> 
        <button 
          // key={props.id} 
          onClick={() => props.deleteHandler(props.id)}> DELETE </button>
      </li>
      
    )
  }


