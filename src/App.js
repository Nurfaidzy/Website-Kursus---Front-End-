import "./App.css";
import Creator from "./Components/Homepage/Creator";
import Jumbotron from "./Components/Homepage/Jumbotron";
import Popular from "./Components/Homepage/Popular";
import Project from "./Components/Homepage/Project";
import Testimoni from "./Components/Homepage/Testimoni";
import Toprated from "./Components/Homepage/Toprated";
import Tranding from "./Components/Homepage/Tranding";
import Learning from "./Components/Homepage/Learning";
import Menuofuser from "./Components/Homepage/Menuofuser";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

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
      <Learning />
      <Menuofuser />
      <Footer />
    </div>
  );
}

export default App;
