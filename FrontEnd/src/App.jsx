import { Route, Routes } from "react-router-dom"
import SignIn from "./pages/SigninPage"
import SignUp from "./pages/SignupPage"
import axios from "axios"

axios.defaults.baseURL='http://localhost:8000'
axios.defaults.withCredentials=true


function App() {

  return (
    <>
      <Routes>
        <Route exact path="/" element={<SignUp/>} />
        <Route path="/signin" element={<SignIn/>} />
      </Routes>
    </>
  )
}

export default App
