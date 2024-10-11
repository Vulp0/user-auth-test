import './App.css'
import { Routes, Route } from "react-router-dom";
import Homepage from './Homepage';
import Login from './Login';
import Signup from './Signup';
import Dashboard from './Dashboard';

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Homepage />}></Route>
        <Route path='login' element={<Login />}></Route>
        <Route path='signup' element={<Signup />}></Route>
        <Route path='dashboard' element={<Dashboard />}></Route>
      </Routes>
    </>
  )
}

export default App
