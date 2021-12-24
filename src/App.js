import React from "react"
import Main from "./components/Main"
import Footer from "./components/Footer"
import CoverPhoto from "./components/CoverPhoto"
import './style.css';

function App() {
  return (
      <div>
        <CoverPhoto />
        <Main />
        <Footer />
      </div>
  );
}

export default App;
