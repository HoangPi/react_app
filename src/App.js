import logo from './logo.svg';
import './App.css';
import {useState} from "react"
function App() {
    const [changeColor, setColor] = useState("black");
  return (
    <div className="App">
        <button onClick={()=>{setColor(changeColor === "red" ? "black": "red")}}>Show/Hide</button>
        <h1 style={{color : changeColor}}>My name</h1>
    </div>
  );
}

export default App;
