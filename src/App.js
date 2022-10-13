import { useState } from "react";
import { Cards } from "./components/Cards";
import { Cover } from "./components/Cover";
import { Layout } from "./components/Layout";
import { Navbar } from "./components/Navbar.jsx";

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
        <Cards />
      </Layout>
    </div>
  );
}

export default App;
