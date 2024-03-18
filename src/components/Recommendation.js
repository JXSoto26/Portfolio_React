import React from "react";
import hiram from "../images/hiram.jpg";
import Title from "./Title";
export default function Recommendation() {
  return (
    <section className="section" id="recommendation">
      <Title title="Professional" subTitle="Recommendation" />

      <div className="section-center about-center">
        <div className="about-img-wrapper">
          <div className="about-img">
            <img src={hiram} className="about-photo" alt="hiram" />
          </div>
        </div>
        <article className="about-info">
          <h3>Hiram Lugo Rodriguez</h3>{" "}
          <i>
            Co-Founder @One Gig | Tech Startup | Full Stack Software Engineer
          </i>
          <p>
            I am delighted to provide this letter of recommendation for Jeremy
            Soto based on his outstanding contributions and commendable
            performance during his tenure working on our project, The One Gig.
            Jeremy showcased a remarkable aptitude for programming and an innate
            ability to generate innovative ideas that significantly enhanced the
            development of our application.
          </p>{" "}
          <p>
            Jeremy consistently displayed a high level of intelligence and an
            exceptional capacity to adapt and learn new technologies swiftly.
            His proactive approach to problem-solving and his talent for
            brainstorming inventive solutions greatly influenced our project's
            success. His suggestions and insights significantly enriched our
            discussions, leading to the implementation of efficient
            functionalities within the application.
          </p>
          <p>
            Throughout his time with us, Jeremy consistently exhibited a
            disciplined work ethic, a professional demeanor, and a genuine
            passion for his work. His reliability, dedication, and
            professionalism made him an invaluable asset to our team. I do not
            doubt that his skills, creativity, and commitment will make a
            substantial impact in any professional setting.
          </p>
          <p>
            It is without hesitation that I recommend Jeremy Soto for any
            endeavor he chooses to pursue. His exceptional talents, paired with
            his admirable work ethic, will undoubtedly contribute to the success
            of any company fortunate enough to have him on board.
          </p>
        </article>
      </div>
    </section>
  );
}
