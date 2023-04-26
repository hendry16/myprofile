import { Route, Routes, Link } from "react-router-dom"
import './App.css';
import './styles/Header.css';
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Resume from "./pages/Resume";
import Blog from "./pages/Home";

function App() {
  return (
    <>
      {/* <Header></Header>
      <div className='flex'>
        <Profile />
        <Main></Main>
      </div> */}
      {/* <Navbar></Navbar> */}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>

      {/* </> */}
    </>
  );
}

export default App;
