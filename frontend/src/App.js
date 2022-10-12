import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Contact from "./pagess/Contact";
import Login from "./pagess/Login";
import Register from "./pagess/Register";
import Home from "./pagess/Home";
import Posts from "./pagess/Posts";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/post" element={<Posts />} />
        </Routes>
      </Router>
      <ToastContainer />
    </>
  );
}

export default App;
