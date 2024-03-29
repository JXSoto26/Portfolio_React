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
import { Home01Icon } from '@hugeicons/react-pro';

const LaptopProgrammingIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} color={"#000000"} fill={"none"} {...props}>
    <path d="M20 14.5V6.5C20 4.61438 20 3.67157 19.4142 3.08579C18.8284 2.5 17.8856 2.5 16 2.5H8C6.11438 2.5 5.17157 2.5 4.58579 3.08579C4 3.67157 4 4.61438 4 6.5V14.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M3.49762 15.5154L4.01953 14.5H19.9518L20.5023 15.5154C21.9452 18.177 22.3046 19.5077 21.7561 20.5039C21.2077 21.5 19.7536 21.5 16.8454 21.5L7.15462 21.5C4.24642 21.5 2.79231 21.5 2.24387 20.5039C1.69543 19.5077 2.05474 18.177 3.49762 15.5154Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M15.5 7L16.4199 7.79289C16.8066 8.12623 17 8.29289 17 8.5C17 8.70711 16.8066 8.87377 16.4199 9.20711L15.5 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M8.5 7L7.58009 7.79289C7.19337 8.12623 7 8.29289 7 8.5C7 8.70711 7.19336 8.87377 7.58009 9.20711L8.5 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M13 6L11 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

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
        <li>React</li>
        <li>Vue.js</li>
        <li>Wordpress</li>
        <li>Git</li>
      </ul>
    ),
  },
  {
    id: 2,
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
    id: 3,
    icon: "fas fa-laptop-code fa-fw",
    title: "Back-End",
    text: (
      <ul>
        <li>Node.js</li>
        <li>Nest.js</li>
        <li>Vue.js</li>
        <li>Express.js</li>
        <li>SQL</li>
        <li>NoSQL</li>
        <li>RESTFul APIs</li>
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
        <li>Google Workspace</li>
        <li>Tableau</li>
        <li>SQL</li>
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
        <li>Collaboration</li>
        <li>Communication</li>
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
