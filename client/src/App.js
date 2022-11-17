import UserForm from './components/register';
import Login from './components/login';
import Page from './components/page';
import './App.css';
import { Link, Switch, Route, BrowserRouter } from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <h1>Registration</h1>
          <Link to="/">Home</Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Link to ="/login">Log-In</Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Link to ="/register">Sign-Up</Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <hr />
        <Switch> 
          <Route exact path ="/register">
            <UserForm />
          </Route>
          <Route exact path="/page" >
            <Page />
          </Route>
          <Route exact path = "/login" >
            <Login />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
