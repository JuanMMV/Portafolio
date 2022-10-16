import { useRef } from "react";
import "../styles/components/proyects.css";
import { Card } from "./Card";

export const Proyects = () => {
  const ref = useRef(null);

  const scroll = (scrollOffset) => {
    ref.current.scrollLeft += scrollOffset;
  };

  return (
    <div className="card-section" id="proyects">
      <h1>Proyectos</h1>
      <div className="card-slice">
        <div className="slice-arrows left-arrow" onClick={() => scroll(-350)}>
          ❰
        </div>
        <div className="slice-arrows right-arrow" onClick={() => scroll(350)}>
          ❱
        </div>
        <div className="cards-container" ref={ref}>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>
  );
};
