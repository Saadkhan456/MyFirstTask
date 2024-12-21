import React from "react";
import "./App.css";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import CityGuides from "./components/CityGuides";
import BestOfPage from "./components/BestOfPage";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <CityGuides />
      <BestOfPage />
      <Footer />
    </div>
  );
}

export default App;
