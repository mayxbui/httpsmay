import React, {useState, useEffect} from "react";
import Preload from "./components/preload.jsx";
import Navbar from "./components/navbar.jsx";
import Home from "./components/home/home.jsx";
import About from "./components/about/about.jsx";
import Experience from "./components/experience/experience.jsx";
import Projects from "./components/projects/projects.jsx"
import Footer from "./components/footer.jsx";
import Resume from "./components/resume/resume.jsx";

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";

import ScrollToTop from "./components/scroll-to-top";
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [load, setLoad] = useState(true);

  useEffect(()=> {
    const timer = setTimeout(()=>{
      setLoad(false);
    }, 1200);

    return()=>clearTimeout(timer);
  }, []);

  return(
    <Router>
      <Preload load={load}/>
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <Navbar/>
        <ScrollToTop/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/resume" element={<Resume/>}/>
          <Route path="/project" element={<Projects/>}/>
          <Route path="/experience" element={<Experience/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="*" element={<Navigate to="/"/>} />
        </Routes>
        <Footer/>
      </div>
    </Router>
  )
}

export default App;