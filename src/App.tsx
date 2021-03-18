import React, { useState, useEffect } from "react";
import "./App.css";
import { ListItem } from "./components/ListItem";

interface IItem {
  id: number;
  description: string;
}



function App() {
  const emptyList: IItem[] = [];
  const [item, setItem] = useState("");
  const [list, setList] = useState(emptyList);

  async function fetchList() {
    const response = await fetch("http://localhost:4000/todos");
    const allItems = await response.json(); // makes the body of the response available in json format
    setList(allItems.message);
  }

  useEffect(() => {
    fetchList();
  }, []);

  async function addHandler() {
    await fetch("http://localhost:4000/todos", {
      method: "post",
      headers: { "Content-Type": "application/json" }, //need this to be read by app(express.json())
      body: JSON.stringify({
        //data needs to be SERIALISED to make the journey
        description: item,
      }),
    });
    fetchList()
  }
  async function deleteHandler(key: number) {
    await fetch("http://localhost:4000/todos/" + key.toString(), {
          method: 'delete',
          headers: {'Content-Type':'application/json'}, //need this to be read by app(express.json())
          body: JSON.stringify({ //data needs to be SERIALISED to make the journey
           "id": key
          })
        });
    fetchList() 
  }

  return (
    <div className="App">
      <h1> My ToDo List</h1>

      <input
        type="text"
        placeholder="add item"
        onChange={(e) => setItem(e.target.value)}
      ></input>
      <button onClick={addHandler}> ADD </button>

      <ol>
        {" "}
        {list.map((element) => (
          <ListItem {...element} deleteHandler={deleteHandler} />
        ))}
      </ol>
    </div>
  );
}

export default App;
