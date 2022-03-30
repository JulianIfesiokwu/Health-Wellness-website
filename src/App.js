import Navbar from "./components/Navbar/Navbar.component";
import Landing from "./components/Landing/Landing.component";
import Main from "./components/Main/Main.component";
import Footer from "./components/Footer/Footer.component";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Landing />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
