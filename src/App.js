import logo from "./logo.svg";
import "./App.css";
import React, { useState ,useEffect} from "react";
import Home from "./Home";

function App() {
  const [count, setCount] = useState(0);
  const [show,setShow]=useState(false)
const handleShow=()=>{
  show ? setShow(false): setShow(true)
}
  const increment = () => {
    setCount(count + 1);
  };
const decrement=()=>{
  (count > 0) &&setCount(count-1)
}
//mounting
/* useEffect(()=>{
 alert('hello')
}) */
//updating
/* useEffect(()=>{
 alert('updating')
},[count]) */
  return (
    <div className="App">
      <h1>
        {" "}
        <button onClick={increment}>+</button>
      </h1>

      <h1> {count}</h1>
      <h1>
        {" "}
        <button onClick={decrement}>-</button>
      </h1>
      <button onClick={handleShow}>
        Show
      </button>
      <div>
        {show ?  <Home/>:null}
     
      </div>
    </div>
  );
}

export default App;
