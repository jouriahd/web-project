import { BrowserRouter as Router , Routes, Route } from "react-router-dom";

import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";
import "./App.css";

import Shop from "./Pages/Shop";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Clubs from "./Pages/Clubs";
import Events from "./Pages/Events";
import Menu from "./Pages/Menu";
import Register from "./Pages/RegisterPage";

function App() {
  return (
    <Router>
      <div className="app">

        <NavBar />

        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/clubs" element={<Clubs />} />
            <Route path="/events" element={<Events />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/registerpage" element={<Register/>} />
          </Routes>
        </main>

        <Footer />

      </div>
    </Router>
  );
}

export default App