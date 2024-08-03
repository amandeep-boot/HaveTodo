import React from 'react';
import ToDoList from './Components/ToDoList';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from './Components/Container';
import Navbar from './Components/Navbar';



function App() {
  return (
    <>
      <Navbar />
      <Container>
        <ToDoList />
      </Container>
     </>
  );
}

export default App;