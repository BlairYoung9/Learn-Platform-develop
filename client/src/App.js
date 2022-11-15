import UserForm from './components/register';
import Login from './components/login';
import './App.css';
import {Link, Switch, Route, BrowserRouter} from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <h1>Registration</h1>
      <Link to="/">Home</Link> 
      <hr/>
      <UserForm/>
      <Login/> 
    </div>
    </BrowserRouter>
  );
}

export default App;
