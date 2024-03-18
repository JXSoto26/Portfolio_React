import React, { useState } from "react";
import jeremy from "../images/jeremy.jpg";
import Title from "./Title";
export default function About() {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };
  return (
    <section className="section" id="about">
      <Title title="about" subTitle="me" />

      <div className="section-center about-center">
        <div className="about-img-wrapper">
          <div className="about-img">
            <img src={jeremy} className="about-photo" alt="awesome beach" />
          </div>
        </div>
        <article className="about-info">
          <h3>My Journey</h3>
          <p>
            In 2015, I embarked on my journey to become a Software Developer
            when I enrolled in a Bachelor's Degree Program at the Interamerican
            University of Puerto Rico in San German. Unfortunately, I was unable
            to complete the degree due to the necessity of working full-time for
            personal and familiar reasons. However, this setback did not
            diminish my passion and desire to excel in software development.
          </p>{" "}
          <p>
            Currently, I am the head of my family and cannot afford to attend
            university any longer because I need to work. Fortunately, today we
            have access to various tools, including certifications and
            bootcamps, that provide the knowledge and foundations needed to
            restart my journey. I successfully completed the Complete 2023
            Fullstack Web Developer Bootcamp on Udemy, marking the beginning of
            my opportunities. I was contacted to be a part of a startup project
            named OneGig, a web application offering essential tools for
            freelancers to be successful in their day-to-day work.
          </p>
          {showMore && (
            <>
              {/* Additional content that should be displayed when 'read more' is clicked */}
              <p>
                Initially, my role was to test and document bugs since the app
                was built in React JS, while my previous experience was limited
                to HTML, CSS, and vanilla JavaScript. Through extensive reading
                and numerous inquiries, I quickly learned React and transitioned
                from testing to debugging within two weeks. My eagerness for
                success led me to join the development team, where I contributed
                to developing the app by creating custom components in React JS
                and connecting them to their respective routes on the backend
                and AWS DB. Despite the unfortunate shutdown of the OneGig
                project due to economic challenges, the experience was
                invaluable.
              </p>
              <p>
                I continued my education by completing the Google Data Analytics
                and Cybersecurity Certificate programs on Coursera. Currently, I
                possess extensive expertise in core web technologies, including
                advanced proficiency in vanilla JavaScript, CSS, and HTML. My
                skill set extends to encompassing mastery of prominent industry
                frameworks, ensuring adeptness in crafting dynamic and
                responsive web experiences. Additionally, I am well-versed in
                the intricacies of frontend development, proficiently leveraging
                frameworks such as React.js, Vue.js, and Angular to streamline
                project execution and enhance user interactions.
              </p>
              <p>
                Moreover, I exhibit a strong understanding of backend
                technologies, proficiently employing Node.js, Express.js, and
                Django to develop robust full-stack applications. With a keen
                eye on industry trends and a commitment to continuous learning,
                I remain poised to deliver innovative solutions that meet the
                evolving demands of the web development landscape.
              </p>
              <p>
                Rest assured, I am committed to making the most of any
                opportunity that comes my way—bring it on!
              </p>
            </>
          )}
          <a href="#about" className="btn" onClick={toggleShowMore}>
            {showMore ? "read less" : "read more"}
          </a>
        </article>
      </div>
    </section>
  );
}
