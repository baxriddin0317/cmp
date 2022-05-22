import React from "react";
import "./App.scss"
import About from "./Components/About";
import Cases from "./Components/Cases";
import Check from "./Components/check";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Jumbotron from "./Components/Jumbotron";
import List from "./Components/List";
import Members from "./Components/Members";
import Service from "./Components/Service";
import Smart from "./Components/Smart";

function App() {
  return (
    <div className="app">
      {/* ===== header start ===== */}
      <Header />
      {/* ===== header end ===== */}

      {/* ===== main start ===== */}
      <main>
        <Jumbotron />
        <About />
        <List />
        <Smart />
        <Cases />
        <Service />
        <Members />
        <Check />
      </main>
      {/* ===== main end ==== */}

      {/* ===== footer start ==== */}
      <Footer />
      {/* ===== footer end ==== */}
    </div>
  );
}

export default App;
