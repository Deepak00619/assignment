import React from "react";
import Client from "./components/Client";
import Footer from "./components/Footer";
import Forms from "./components/Forms";
//import Forms from "./components/Forms";
import Header from "./components/Header";
import Story from "./components/Story";
import Student from "./components/Student";

function App() {
  return (
    <div className="App">
      <Header />
      <Client />
      <Student />
      <Story />
      <Forms />
      <Footer />
    </div>
  );
}

export default App;
