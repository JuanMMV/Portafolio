import "../styles/components/navbar.css";
import { DarkMode } from "./DarkMode";
import { NavItems } from "./NavItems";

//los estilos de los componentes que esta aqui, estan todos en navbar.css

export const Navbar = ({theme, toggleTheme}) => {
  return (
    <div>
      <nav className="navbar">
        <h1>LLL</h1>
        <div className="navbar-menu">
          <NavItems />  
          <DarkMode theme={theme} toggleTheme={toggleTheme}/>
        </div>
      </nav>
    </div>
  );
};
