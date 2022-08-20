import logo from './logo.svg';
import './App.css';
import React,{useState} from 'react'

function App() {

  const [set,reSet]=useState('');

  const a=()=>{

    fetch("/").then((obj)=>obj.text())
    .then((mess)=>{
      reSet(mess)
      console.log(String(mess));
    })
  }

  return (
   <>
   <button onClick={a}>Click me</button>
   <h1>{set}</h1>
   </>
  );
}

export default App;
