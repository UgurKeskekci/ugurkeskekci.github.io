import Home from "./pages/homepage";
import Developer from "./pages/developer";
import Fitness from "./pages/fitness";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  NavLink,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <>
    
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/developer" element={<Developer />} />
          <Route path="/fitness" element={<Fitness />} />
        </Routes>
      </Router>
  
    </>
  );
}

export default App;
