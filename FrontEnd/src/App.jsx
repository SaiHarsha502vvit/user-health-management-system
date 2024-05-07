import { Route, Routes } from "react-router-dom"
import SignIn from "./pages/SigninPage"
import SignUp from "./pages/SignupPage"

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
