import { Brand, Cta, Navbar } from "./components";
import { Blog, Features, Footer, Header, Possibility, WhatGpt } from "./containers";

import './app.css'

function App() {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGpt />
      <Features />
      <Possibility />
      <Cta />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
