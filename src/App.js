import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import About from "./components/About";

function App() {
  return (
    <div>
      <Header />
      <div className="mainBody">
        <Main />
        <About />
      </div>
    </div>
  );
}

export default App;
