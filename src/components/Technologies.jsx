import "../styles/components/technologies.css";
import { SiMongodb } from "react-icons/si";

export const Technologies = () => {
  return (
    <div className="technologies-container" id="technologies">
      <h1>Tecnologias</h1>
      <div className="technologies-grid">
        <div className="technologies-card">
          <SiMongodb className="technologies-icon" />
          <span>MongoDB</span>
        </div>
      </div>
    </div>
  );
};
