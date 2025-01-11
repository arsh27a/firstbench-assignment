import { useState } from "react";
import "./App.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Navbar from "./components/Navbar";
import PageBody from "./components/PageBody";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      {" "}
      <Navbar />
      <PageBody />
    </div>
  );
}

export default App;
