import "./App.css";
import Jumbotron from "./Components/Homepage/Jumbotron";
import Popular from "./Components/Homepage/Popular";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <div className="bg-[#051b34]">
      <Navbar className="absolute" />
      <Jumbotron />
      <Popular />
    </div>
  );
}

export default App;
