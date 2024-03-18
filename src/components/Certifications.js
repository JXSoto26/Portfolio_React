import React from "react";

import Title from "./Title";
import { certification } from "../data";

export default function Certifications() {
  return (
    <section className="section" id="certifications">
      <Title title="Education /" subTitle="Certifications" />

      <div className="section-center certification-center">
        {certification.map((link) => {
          const { id, image, title } = link;
          return (
            <article className="certification-card" key={id}>
              <div className="certification-img-container">
                <img src={image} className="certification-img" alt="" />
              </div>
              <div className="certification-info">
                <div className="certification-title">
                  <h4>{title}</h4>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
