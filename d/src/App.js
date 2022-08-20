import logo from './logo.svg';
import './App.css';
import React,{useState} from 'react'

function App() {

  const [set,reSet]=useState('');
  const [set1,reSet1]=useState('');
  const [set2,reSet2]=useState('');

  const a=()=>{

    fetch(`/y/${set}/${set1}`).then((obj)=>obj.text())
    .then((mess)=>{
      reSet2(mess)
      console.log(String(mess));
    })
  }

  const b=(e)=>{

    return reSet(e.target.value)
  }

  const c=(e)=>{

    return reSet1(e.target.value)
  }

  return (
   <>
   <button onClick={a}>Click me</button>

   <input type="text" name="" id="" onChange={b} />
   <input type="text" name="" id="" onChange={c}/>
<h1>{set2}</h1>
   </>
  );
}

export default App;
