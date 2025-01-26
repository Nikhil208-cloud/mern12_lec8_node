
import { useState } from 'react'
import './App.css'
import Child from './Child'
function App() {
   const [a,setA]=useState(11);
   const[name,setName ]= useState("gaurav");
   const [obj,setObj]= useState({
    'roll':7,
    "desig":"student"

   });
   function radhey(){
    setA(a+10);
    console.log(a);
    
   }
   function changename(){
    setName("raj");
   }
//  var a=10;
//  function radhey(){
//  a= a+8;
//  console.log(a);
//   ye sab likjh rahe hai toh dom maichange ho raha hai
 
  return (
      <>
      <div>
       my first vite project {a} {name} {obj.desig} {obj.roll}
       <br/>
       
       <button onClick={radhey}> change A </button>
       <button onClick={changename}> change A</button>
       <Child/>
      </div>
      </>
  )
}

export default App
