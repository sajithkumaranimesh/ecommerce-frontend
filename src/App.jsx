import './App.css'
import LoginForm from './components/LoginForm'
import RegisterForm from './components/RegisterForm'
import { BrowserRouter, Route, Routes } from 'react-router'

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route index element={<LoginForm/>}/>
      <Route path='/signup' element={<RegisterForm/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
