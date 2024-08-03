import React, { useEffect, useState } from "react";
import ToDoItem from "./ToDoItem";
import AddToDo from "./AddToDo";
import axios from "axios";
import Hero from "./Hero";

const ToDoList = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    async function fetchTodos() {
      try {
        const response = await axios.get("http://localhost:3005/todos");
        console.log(response.data);
        setItems(response.data);
      } catch (e) {
        console.error("Error", e);
      }
    }
    fetchTodos();
  }, []);

  const addItem = (item) => {
    setItems([...items, item]);
  };

  const toggleItem = async (id) => {
    setItems(
      items.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    );
    try {
      const todo = items.find((item) => item.id === id);
      todo.completed = !todo.completed;
      // console.log(todo)
      await axios.put(`http://localhost:3005/todos/${id}`, todo);
    } catch (e) {
      console.error("Error", e);
    }
  };

  const deleteItem = async (id) => {
    setItems(items.filter((todo) => todo.id !== id));

    // Delete the todo item from the JSON server
    try {
      await axios.delete(`http://localhost:3005/todos/${id}`);
    } catch (error) {
      console.error("There was an error deleting the todo item!", error);
    }
  };

  const OnUpdate = async (id, newText) => {
   const updatedItems=items.map(item=>{
    if(item.id===id){
      item.text=newText;
    }
    return item;
   })
   setItems(updatedItems);
    try{
      const item = items.find(item => item.id===id);
      await axios.put(`http://localhost:3005/todos/${id}`, item);
    }
    catch(e){
      console.error("Error: ",e);
    }
  };
  return (
    <>
      <Hero items={items}></Hero>
      <div className="ToDoList align-items-center">
        <AddToDo addItem={addItem} />
        {items.slice().reverse().map((item) => (
          <ToDoItem
            key={item.id}
            item={item}
            onDelete={deleteItem}
            onToggle={toggleItem}
            OnUpdate={OnUpdate}
          />
        ))}
      </div>
    </>
  );
};

export default ToDoList;
