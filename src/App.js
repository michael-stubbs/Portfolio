import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import About from "./components/About";
import Sidebars from "./components/Sidebars";

function App() {
  return (
    <div>
      <Header />
      <div className="mainBody">
        <Main />
        <About />
      </div>
      <Sidebars />
    </div>
  );
}

export default App;
