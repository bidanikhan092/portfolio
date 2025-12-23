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
      <header className="container sect-1">
        <Navbar />
        <Header />
      </header>
      <main>
        <section className="container text-center">
          <WebDisplay />
        </section>

        <section className="container">
          <About />
        </section>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
