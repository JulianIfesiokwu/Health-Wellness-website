import Navbar from "./components/Navbar/Navbar.component";
import Landing from "./components/Landing/Landing.component";
import Main from "./components/Main/Main.component";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Landing />
      <Main />
    </div>
  );
}

export default App;
