import Nav from "./components/Nav";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Projects from "./pages/Projects";
import { GithubProvider } from "./context/Github/GithubContext";

function App() {
  return (
    <GithubProvider>
      <Router>
        <div classname="relative min-h-screen pb-20">
          <Nav />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </GithubProvider>
  );
}

export default App;
