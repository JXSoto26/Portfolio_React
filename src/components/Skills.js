import React from "react";
import Title from "./Title";
import { skills } from "../data";
export default function Skills() {
  return (
    <section className="section services" id="skills">
      <Title title="Main" subTitle="Skills" />

      <div className="section-center skills-center">
        {skills.map((link) => {
          const { id, icon, title, text } = link;
          return (
            <article className="skill" key={id}>
              <span className="skill-icon">
                <i className={icon}></i>
              </span>
              <div className="skill-info">
                <h4 className="skill-title">{title}</h4>
                <p className="skill-text">{text}</p>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
