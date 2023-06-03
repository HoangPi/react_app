import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <Job salary = {21001} position = "Intern" company = "FPT"/>
      <Job salary = {60000} position = "Director" company = "FPT"/>
      <Job salary = {20000} position = "Intern" company = "FPT"/>
    </div>
  );
}
const Job = (props) =>
{
  return (
    <div>
      <h1>{props.salary}</h1>
      <h1>{props.position}</h1>
      <h1>{props.company}</h1>
    </div>
  );
}
export default App;
