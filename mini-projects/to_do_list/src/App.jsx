import  './App.css';
import  './TicketNum.css';
import React from 'react'
import Lottery from './Lottery';
import './Ticket.css';
import TodoList from './TodoList'
import Ticket from './Ticket';


function App() {

  let winCondition = (ticket) => {
     return ticket.every((num) => num === ticket[0]);
  };
 

  return (
    <>
    <Lottery n={3} winCondition={winCondition}/>    

    </>
  );
}

export default App;
