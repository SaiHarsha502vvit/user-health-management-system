import { Route, Routes } from "react-router-dom"
import SignIn from "./pages/SigninPage"
import SignUp from "./pages/SignupPage"
import axios from "axios"
import {Toaster} from 'react-hot-toast'

axios.defaults.baseURL='http://localhost:8000'
axios.defaults.withCredentials=true


function App() {

  return (
    <>
    <Toaster position="top-center" reverseOrder={false} toastOptions={{duration:2000}}/>
      <Routes>
        <Route exact path="/" element={<SignUp/>} />
        <Route path="/signin" element={<SignIn/>} />
      </Routes>
    </>
  )
}

export default App
