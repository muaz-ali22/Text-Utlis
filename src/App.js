import "./App.css";
import Alert from "./Components/Alert";
import About from "./Components/About";
import Navbar from "./Components/Navbar";
import Textform from "./Components/Textform";
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [alert, setalert] = useState(null);
  const showAlert = (message, type) => {
    setalert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setalert(null);
    }, 2000);
  };
  return (
    <>
      <Router>
        <Navbar
          title="TextUtlis"
          HomeText="Home"
          AboutText="About Us"
          ServiceText="Services "
        />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route path="/about" element={<About />} />
            <Route
              path="/"
              element={
                <Textform
                  showAlert={showAlert}
                  heading="Enter text here to analyze"
                />
              }
            />
          </Routes>
        </div>
      </Router>
    </>
  );
}
export default App;
