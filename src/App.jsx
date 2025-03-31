import "react";
import "./App.css";
import Header from "./components/Header";
import WebDisplay from "./components/WebDisplay";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="wrapper">
      <div className="container sect-1">
        <Navbar />
        <Header />
      </div>
      <div className="container text-center">
        <WebDisplay />
      </div>
      <div className="container">
        <About />
      </div>
      <Footer />
    </div>
  );
}

export default App;
