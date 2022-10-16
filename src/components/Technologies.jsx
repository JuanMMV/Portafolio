import "../styles/components/technologies.css";
import { technologiesData } from "../utils/technologiesData";

export const Technologies = () => {
  return (
    <div className="technologies-container" id="technologies">
      <h1>Tecnologias</h1>
      <div className="technologies-grid">
        {technologiesData.map((technologie, index) => {
          return (
            <div className="technologies-card" key={index}>
              {technologie.icon}
              
              <span>{technologie.name}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};
