import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
import Card from './card';
import './index.css';
import 'tachyons';

const robots = [
    {id: "1", name: "John Doe", email: "jdoe@gmail.com" },
    {id: "2", name: "Jand Doe", email: "jadoe@gmail.com" },
    {id: "3", name: "Bill Boe", email: "bboe@gmail.com" },
  ];
  const robotCards = robots.map((robot)=> (
    <Card id={robot.id} name={robot.name} email={robot.email} />
    
  ))
ReactDOM.render(
  <div>
    {robotCards}
  </div>,  
    document.getElementById('root')
);
