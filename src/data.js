import cybersecurity1 from "./images/cybersecurity1.jpeg";
import cybersecurity2 from "./images/cybersecurity2.jpeg";
import cybersecurity3 from "./images/cybersecurity3.jpeg";
import cybersecurity4 from "./images/cybersecurity4.jpeg";
import cybersecurity5 from "./images/cybersecurity5.jpeg";
import dataAnalysis1 from "./images/data_analysis.jpeg";
import dataAnalysis2 from "./images/data_analysis2.jpeg";
import dataAnalysis3 from "./images/data_analysis3.jpeg";
import dataAnalysis4 from "./images/data_analysis4.jpeg";
import dataAnalysis5 from "./images/data_analysis5.jpeg";
import soloLearnCss from "./images/soloLearnCss.jpg";
import soloLearnHtml from "./images/soloLearnHtml.png";
import soloLearnJavascript from "./images/soloLearnJavascript.jpg";
import soloLearnPython from "./images/soloLearnPython.jpg";

export const pageLinks = [
  { id: 1, href: "#home", text: "home" },
  { id: 2, href: "#about", text: "about" },
  { id: 3, href: "#skills", text: "skills" },
  { id: 4, href: "#certifications", text: "certifications" },
  { id: 4, href: "#recommendation", text: "recommendation" },

];

export const socialLinks = [
  { id: 1, href: "https://github.com/JXSoto26", icon: "fab fa-github" },
  { id: 2, href: "https://www.linkedin.com/in/jeremy-soto-4b6a58278/", icon: "fab fa-linkedin" },

];

export const skills = [
  {
    id: 1,
    icon: "fas fa-laptop fa-fw",
    title: "Front-End",
    text: (
      <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>Responsive Design</li>
      </ul>
    ),
  },
  {
    id: 2,
    icon: "fas fa-laptop-code fa-fw",
    title: "Back-End",
    text: (
      <ul>
        <li>Node.js</li>
        <li>SQL</li>
        <li>NoSQL</li>
        <li>RESTFul APIs</li>
      </ul>
    ),
  },
  {
    id: 3,
    icon: "fab fa-stack-overflow fa-fw",
    title: "Full-Stack",
    text: (
      <ul>
        <li>MEAN Stack</li>
        <li>MERN Stack</li>
      </ul>
    ),
  },
  {
    id: 4,
    icon: "fas fa-wallet fa-fw",
    title: "Data Analysis",
    text: (
      <ul>
        <li>Python</li>
        <li>Microsoft Excel</li>
        <li>Tableau</li>
        <li>SQL</li>
        <li>Git</li>
      </ul>
    ),
  },
  {
    id: 5,
    icon: "fas fa-wallet fa-fw",
    title: "Security",
    text: (
      <ul>
        <li>Networking Fundamentals</li>
        <li>Secure Coding Practices</li>
        <li>Security Information and Event Management (SIEM)</li>
        <li>Incident Response and Forensics</li>
        <li>Data Flow</li>
      </ul>
    ),
  },
  {
    id: 6,
    icon: "fas fa-wallet fa-fw",
    title: "UI/UX Design",
    text: (
      <ul>
        <li>User Research</li>
        <li>Visual Design</li>
        <li>Responsive Design</li>
        <li>Usability Testing</li>
        <li>Collaboration and Communication</li>
      </ul>
    ),
  },
];

export const certification = [
  {
    id: 1,
    image: cybersecurity1,
    title: "Assets,Threats and Vulnerabilities",
  },
  {
    id: 2,
    image: cybersecurity2,
    title: "Connect and Protect: Network and Network Security",
  },
  {
    id: 3,
    image: cybersecurity3,
    title: "Foundations of Cybersecurity",
  },
  {
    id: 4,
    image: cybersecurity4,
    title: "Play it Safe: Manage Security Risks",
  },
  {
    id: 5,
    image: cybersecurity5,
    date: "august 1st, 2020",
    title: "Tools of the Trade: Linux and SQL",
  },
  {
    id: 7,
    image: dataAnalysis1,
    title: "Process Data From Dirty to Clean",
  },
  {
    id: 8,
    image: dataAnalysis2,
    title: "Ask Questions to Make Data-Driven Decisions ",
  },
  {
    id: 9,
    image: dataAnalysis3,
    title: "Foundations: Data, Data Everywhere",
  },
  {
    id: 10,
    image: dataAnalysis4,
    title: "Prepare Data for Exploration",
  },
  {
    id: 11,
    image: dataAnalysis5,
    title: "Analize Data to Answer Questions",
  },
  {
    id: 12,
    image: soloLearnHtml,
    title: "HTML",
  },
  {
    id: 13,
    image: soloLearnCss,
    title: "CSS",
  },
  {
    id: 14,
    image: soloLearnJavascript,
    title: "JavaScript",
  },
  {
    id: 15,
    image: soloLearnPython,
    title: "Python",
  },
];

export const projects = [
  {
    id: 1,
    image: cybersecurity1,
    title: "Best Of Java",
   
  },
  {
    id: 2,
    image: cybersecurity2,
    title: "Best Of Java",
    
  },
];
