import "../styles/components/card.css";
import { IoRocketSharp, IoLogoGithub } from "react-icons/io5";

export const Card = () => {
  return (
    
      <div className="card">
        <div className="card-image"></div>
        <div className="card-text">
          <span className="card-technologies">JavaScrip CSS Express</span>
          <h2>chat</h2>
          <p>
            ksdbfihabsdfuibasdfui basiufbuyeawgbuyksdbfihab sdfuibasdfuibasiu{" "}
          </p>
        </div>
        <div className="card-stats">
          <div className="card-stat card-left">
            <IoLogoGithub className="card-icon" />
            <div className="type">Repositorio</div>
          </div>
          <div className="card-stat card-right">
            <IoRocketSharp className="card-icon" />
            <div className="type">Demo</div>
          </div>
        </div>
      </div>
    
  );
};
