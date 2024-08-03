import axios from 'axios';
import React,{useState} from 'react';
import { v4 } from 'uuid';

const AddToDo=({addItem})=>{
  const [text, setText]= useState('');

  const handleChange= (e) => {
    setText(e.target.value);
  };
  const handleSubmit=async (e)=>{
    e.preventDefault();
    if(text.trim!==''){
      const newItem={
        id:v4(),
        text:text,
        completed:false
      };
      try{
        const response= await axios.post('http://localhost:3005/todos',newItem)
        addItem(response.data);
        setText('');
      }catch(err){
        console.error('Error',err)
      }

    }
  };

  return(
    <form onSubmit={handleSubmit} className='d-flex justify-content-between row-cols-2 mt-5 mb-5'>
      <input className=' rounded-4  text-secondary fw-bold bg-dark col-10  ' type="text" value={text} onChange={handleChange} placeholder='Add a new To-do item' />  
      <button className='bg-danger btn rounded-5 text-white col-2 mx-2' type="submit"><h2>+</h2></button>
    </form>
    
  );
};

export default AddToDo;