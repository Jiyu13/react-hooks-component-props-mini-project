import React from "react";
import blogData from "../data/blog";
import Header from "./Header"


function App() {
  return (
    <div className="App">
      <Header blogData={blogData}/>
    </div>
  );
}

export default App;
