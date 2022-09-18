import { Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar/Navbar"
import Admin from "./pages/Admin/Admin"
import Error from "./pages/Error/Error"
import Home from './pages/Home/Home'
import Login from "./pages/Login/Login"
import Profile from "./pages/Profile/Profile"
import Register from "./pages/Register/Register"

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/error' element={<Error />} />
        <Route path='/auth/me' element={<Profile />} />
        <Route path='/admin' element={<Admin />} />
      </Routes>
    </>
  )
}

export default App