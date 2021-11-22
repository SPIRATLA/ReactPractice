import './App.css';
import Login from './components/login';
import Nav from './components/nav';
import "bootstrap/dist/css/bootstrap.css";
import Home from './components/home';
function App() {
  return (
    <div className="App">
      
      
      <Nav/>
      <Home/>
     <Login/>

    </div>
  );
}

export default App;
