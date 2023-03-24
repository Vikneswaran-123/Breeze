import logo from "./logo.svg";
import "./App.css";
import Background from "./components/background";
import Navbar from "./components/navbar";
import Content from "./components/content";
import Feature from "./components/feature";

function App() {
  return (
    <div className="App">
      <Background />
      <Navbar />
      <Content />
    </div>
  );
}

export default App;
