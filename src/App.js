import logo from "./logo.svg";
import "./App.css";
import Background from "./components/background";
import Navbar from "./components/navbar";
import Content from "./components/content";

function App() {
  return (
    <div className="App">
      <Content />
      <Navbar />
      <Background />
    </div>
  );
}

export default App;
