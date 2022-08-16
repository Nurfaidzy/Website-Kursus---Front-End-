import "./App.css";
import Jumbotron from "./Components/Homepage/Jumbotron";
import Popular from "./Components/Homepage/Popular";
import Toprated from "./Components/Homepage/Toprated";
import Tranding from "./Components/Homepage/Tranding";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <div className="bg-[#051b34]">
      <Navbar className="absolute" />
      <Jumbotron />
      <Popular />
      <Tranding />
      <Toprated />
    </div>
  );
}

export default App;
