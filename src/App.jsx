import { Route, Routes } from 'react-router-dom';
import './App.css'
import Homepage from './pages/Homepage'
import Login from './pages/Login'
import PasswordRecovery from './pages/PasswordRecovery'
import SignUp from './pages/SignUp'

function App() {
  

  return (
    <>
    <Routes>
    <Route path='/' element={<Homepage/>}></Route>
    <Route path='/login' element={<Login/>}></Route>
    <Route path='/sign-up' element={<SignUp/>}></Route>
    <Route path='/password-recovery' element={<PasswordRecovery/>}></Route>
    </Routes>
    </>
  )
}

export default App
