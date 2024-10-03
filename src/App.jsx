import "./App.css";

import Home from "./pages/home/home";
import Projects from "./pages/projects/projects";
import { useState } from "react";

function App() {
  const [homeActive, setHomeActive] = useState(true);

  const toggleHomeActive = () => {
    setHomeActive(!homeActive);
  };

  return (
    <>
      {homeActive ? (
        <>
          <Home id="home" toggleHomeActive={toggleHomeActive} />
        </>
      ) : (
        <Projects toggleHomeActive={toggleHomeActive} />
      )}
    </>
  );
}

export default App;
