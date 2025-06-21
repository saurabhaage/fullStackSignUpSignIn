import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import  SignIn  from './component/TempSignIn.jsx';
import SignUp from './component/signUp.jsx';
import Welcome from './component/welcome.jsx';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
      <Router>
        <Routes>
          <Route exact path='/' element={<SignIn />}/>
          <Route exact path='/signUp' element={<SignUp />}/> 
          <Route exact path='/welcome' element={<Welcome />}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
