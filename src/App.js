import React from 'react';
import './App.css';
{/* BrowserRouter is the parent component of all Route components*/}
{/* Route components get rendered based on the route and are classes of the node module*/}
import
{
BrowserRouter as Router,
Route,
} from "react-router-dom";
import Navbar from './components/Navbar';


function App() {
  return (
    <Router>
    <div className="App">
    <Navbar><Navbar/> 
    </div>
    </Router>
  );
}

export default App;
