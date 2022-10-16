import { useState } from "react";
import { Proyects } from "./components/Proyects";
import { Cover } from "./components/Cover";
import { Layout } from "./components/Layout";
import { Navbar } from "./components/Navbar.jsx";
import { Technologies } from "./components/Technologies.jsx";

function App() {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
    document.documentElement.setAttribute("data-theme", theme);
  };

  return (
    <div className="body" id={theme}>
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <Layout>
        <Cover />
        <Proyects />
        <Technologies />
      </Layout>
    </div>
  );
}

export default App;
