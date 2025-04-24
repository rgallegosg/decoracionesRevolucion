import React, { useState } from "react";
import { IconsServices } from '../data/icons';

export const Services = (props) => {

  const [icons, setIcons] = useState(IconsServices);

  return (
    <div id="services" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Nuestros Servicios</h2>
          <p>
            Contamos con una varierdad de servicios relacionada a la construcción y decoración de interiores y exteriores para convertir tu casa en el hogar de tus sueños
          </p>
        </div>
        <div className="row">
          {icons
            ? icons.map((d, i) => (
                <div key={`${d.name}-${i}`} className="col-md-4">
                  {" "}
                  <img src={d.icon} alt={d.text}/>
                  <div className="service-desc">
                    <h3>{d.name}</h3>
                    <p>{d.text}</p>
                  </div>
                </div>
              ))
            : "loading"}
        </div>
      </div>
    </div>
  );
};
