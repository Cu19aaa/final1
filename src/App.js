import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Work from "./components/Work";
import Experience from "./components/Experience";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <div className="content">
        <Home />
        <About/>
        <Work/>
        <Experience/>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
