import Navbar from "./components/Navbar/Navbar.component";
import Landing from "./components/Landing/Landing.component";
import Main from "./components/Main/Main.component";
import Footer from "./components/Footer/Footer.component";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Landing />
        <Main />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
