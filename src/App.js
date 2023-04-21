import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Pages/Home";
import './App.css';
import CreatePost from "./Pages/CreatePost";
import Login from "./Pages/Login";
import { useState } from "react";
import { signOut } from "firebase/auth";
import { auth } from "./firebase";


function App() {
  const [ isAuth, setIsAuth ] = useState(false);

  const signUserOut = () => {
    signOut(auth).then(() => {
      localStorage.clear();
      setIsAuth(false);
      window.location.pathname = "/login";
    });
  }

  return (
    <>
      <Router>
        <nav>
          <Link to="/" >Home</Link>
          <Link to="/createpost" >Create Post</Link>
          {!isAuth ? <Link to="/login" >Login</Link> : <button onClick={signUserOut}>Logout</button>}
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/createpost" element={<CreatePost />} />
          <Route path="/login" element={<Login setIsAuth={setIsAuth}/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
