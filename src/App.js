import Nav from "./components/Nav";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Nav />
      <Routes>{/* <Route path="/about" element={<AboutPage />} /> */}</Routes>
    </Router>
  );
}

export default App;
