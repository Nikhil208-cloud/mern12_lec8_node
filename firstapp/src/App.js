
import './App.css';
import Test from './Test'
import {Test2} from './Test'
import {Test3} from './Test'
function App() {
  const name="radheshyamji"
  const roll=7;
  function add(){
    console.log("gaurav raj");
    
  }
  // const obj={name1:'radheshyamji' roll1:'7'}
  return (
    <div  id="abc">
      Gaurav raj is learning mern
      <Test name1={name} roll1={roll} add1={add}/>
      <Test2 name1={name} roll1={roll}/>
      <Test3/>
    </div>
    
  );
}

export default App;
// default wale ka filename kuch bhi likh sakte hai
