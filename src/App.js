import "./App.css";
import Creator from "./Components/Homepage/Creator";
import Jumbotron from "./Components/Homepage/Jumbotron";
import Popular from "./Components/Homepage/Popular";
import Project from "./Components/Homepage/Project";
import Testimoni from "./Components/Homepage/Testimoni";
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
      <Project />
      <Testimoni />
      <Creator />
    </div>
  );
}

export default App;
