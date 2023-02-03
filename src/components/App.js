import React from "react";
import blogData from "../data/blog";
import Header from "./Header"
import About from "./About"


function App() {
  return (
    <div className="App">
      <Header blogData={blogData}/>
      <About about={blogData.about}/>
    </div>
  );
}

export default App;
