import React from "react";

import Title from "./Title";
import { projects } from "../data";

export default function Projects() {
  return (
    <section className="section" id="projects">
      <Title title="Front End" subTitle="Development Projects" />

      <div className="section-center featured-center">
        {projects.map((link) => {
          const { id, image, title } = link;
          return (
            <article className="tour-card" key={id}>
              <div className="tour-img-container">
                <img src={image} className="tour-img" alt="" />
              </div>
              <div className="tour-info">
                <div className="tour-title">
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
