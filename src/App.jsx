import './App.css'
import ForgotPasswordForm from './components/ForgotPasswordForm'
import LoginForm from './components/LoginForm'
import RegisterForm from './components/RegisterForm'
import { BrowserRouter, Route, Routes } from 'react-router'

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route index element={<LoginForm/>}/>
      <Route path='signup' element={<RegisterForm/>}/>
      <Route path='forgot-password' element={<ForgotPasswordForm/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
