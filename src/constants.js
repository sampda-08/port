// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import nextjsLogo from './assets/tech_logo/nextjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import firebaseLogo from './assets/tech_logo/firebase.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import pythonLogo from './assets/tech_logo/python.png';
import javaLogo from './assets/tech_logo/java.png';
import gitLogo from './assets/tech_logo/git.png';
import awsLogo from './assets/tech_logo/aws.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import figmaLogo from './assets/tech_logo/figma.png';
import vercelLogo from './assets/tech_logo/vercel.png';
import ml from './assets/tech_logo/ml.jpg';
import ai from './assets/tech_logo/ai.png';
import nlp from './assets/tech_logo/nlp.png';
import iot from './assets/tech_logo/iot.png';
import cloud from './assets/tech_logo/cloud.png';
import bootstraplogo from './assets/tech_logo/bootstrap.png';


// Experience Section Logo's
import robin from './assets/company_logo/robin.png';
import praj from './assets/company_logo/praj.jpg';
import engenears from './assets/company_logo/engenears.jpg';
import zenith from './assets/company_logo/zenith.png';
import kct from './assets/company_logo/kct.png';

// Education Section Logo's
import gcoea from './assets/education_logo/gcoea.jpg';
import school from './assets/education_logo/school.png';

// Project Section Logo's
import glof from './assets/work_logo/glof.png';
import prop from './assets/work_logo/prop.png';
import water from './assets/work_logo/water.png';
import mauli from './assets/work_logo/mauli.png';
import amazon from './assets/work_logo/am.png';
import ticketbook from './assets/work_logo/ticketbook.jpg';



export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
     
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'Mongo DB', logo: mongodbLogo },
      { name: 'Firebase', logo: firebaseLogo },
    ],
  },
  {
    title: 'AI/ML',
    skills: [
      {name: 'ML',logo:ml },
      {name: 'AI',logo:ai },
      {name: 'NLP',logo:nlp},
      {name: 'IOT',logo:iot},
      {name: 'Cloud Computing',logo:cloud},
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'C++', logo: cppLogo },
      { name: 'Java', logo: javaLogo }, 
      { name: 'Python', logo: pythonLogo },
      { name: 'JavaScript', logo: javascriptLogo },

    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'Github', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Vercel', logo: vercelLogo },
      { name: 'AWS', logo: awsLogo },
      { name: 'Bootstrap', logo: bootstraplogo }, 
    ],
  },
];
  
  export const education = [

    {
      id: 0,
      img: gcoea,
      school: "Government College Of Engineering , Amravati",
      date: "Nov 2022 - May 2026",
      grade: "8.52 GPA",
      desc: "I pursuing my Bachelor's degree in Information Technology (IT) from Government College Of Engineering , Amravati. Throughout my studies, I was immersed in a variety of subjects that deepened my understanding of computing and technology. From exploring Data Structures and Algorithms to diving into Web Development and Database Management Systems, I gained practical insights into the world of software development. My time at BSA College allowed me to work on projects that applied theoretical concepts to real-world problems.",
      degree: "Bachelor of Technology - B.Tech (Information Technology)",
    },
    {
      id: 1,
      img: school,
      school:"New English Junior College, Wardha",
      date: "Mar 2020 - Mar 2022",
      grade: "83%",
      desc: "I completed my class 12 education from New English Junior College, Wardha , under the State board, where I studied Physics, Chemistry, and Mathematics (PCM) with Electrical Maintenance.",
      degree: "HSC(XII) - General Science",
    },
    {
      id: 2,
      img: school,
      school: "New English High School, Wardha",
      date: "Mar 2019 - March 2020",
      grade: "89%",
      desc: "I completed my class 10 education from New English High School, Wardha, under the Maharashtra State board.",
      degree: "SSC(X)",
    },
  ];
  
  export const projects = [
    {
      id: 0,
      title: "GLOF Early Warning System",
      description:
      "Modified the Random Forest model for the GLOF early warning system, reducing false positive alerts by 18% and increasing overall model accuracy to 95%, while maintaining a high level of threat detection accuracy, contributing to disaster preparedness and response.",
      image: glof,
      tags: ["HTML", "CSS", "JavaScript"," Streamlit","React JS", "ML","AI","IoT","Node JS","API"],
      github: "",
      webapp: "https://flooddashboardpy.streamlit.app/",
    },
    {
      id: 1,
      title: "Property Finder",
      description:
        "Built a full-stack real estate web application with dynamic search filters, using Node.js for backend and HTML, CSS, JavaScript for a responsive frontend, enabling users to search and explore property listings efficiently.",
      image:prop,
      tags: ["React JS", "Node.js", "MongoDB", "Express", "HTML", "CSS", "JavaScript"],
      github: "",
      webapp: "",
    },
    {
      id: 2,
      title: "Can Management System",
      description:
        "Built a responsive website for a water supply business to manage daily can orders, delivery tracking, and customer records. Integrated features like WhatsApp alerts and automated reminders can return reminders, resulting in a 70% reduction in manual follow-ups and improving timely returns by 80%.",
      image: water,
      tags: ["React JS","HTML","CSS","Javascript","MongoDB", "Python", "Flask"],
      github: "",
      webapp: "",
    },
    {
      id: 3,
      title: "Real Estate Web Application",
      description:
       "Designed and developed a responsive real estate website for Mauli Infra to showcase premium properties in Nagpur, highlighting modern amenities such as rainwater harvesting and underground electrification, enhancing user experience and property visibility.",
        image: mauli,
      tags: ["React JS", "ML", "HTML", "CSS", "JavaScript","NLP"],
      github: "",
      webapp: "https://mauliinfra.netlify.app/",
    },
    {
      id: 4,
      title: "Amazon’s E-commerce Platform",
      description:
        "This project is a clone of Amazon's e-commerce platform built to simulate core functionalities such as product listing, shopping cart, and order management. The goal is to replicate an Amazon-like shopping experience while practicing web development skills.",
      image: amazon,
      tags: ["JavaScript", "bootstrap", "HTML", "CSS"],
      github: "",
      webapp: "",
    },
    {
      id: 5,
      title: "Online Ticket Booking System",
      description:
        "A online ticket booking system project based on linked list for booking tickets aand selecting seats manually and complete payment and generate bill.",
      image: ticketbook,
      tags: ["HTML", "CSS", "JavaScript", "Linked List"],
      github: "",
      webapp: "",
    },
  ];  

   export const volunteering = [
  {
    id: 0,
    img:robin,
    role: "Volunteer",
    company: "Robin Hood Academy, Amravati",
    date: "Jan 2023 - Present", 
    desc: " Education for underprivileged, community work, inclusiveness, discipline and social responsibility. I have been actively involved in teaching underprivileged children, focusing on subjects like Mathematics and English. My role includes preparing lesson plans, conducting classes, and organizing educational activities to enhance their learning experience.",
    skills: [
      "Social Responsibility",
      "Community Engagement",
      "Teaching & Mentoring",
      "Diversity & Inclusion",
      "Volunteer Coordination",
    ],
  },
  {
    id: 1,
    img: praj,
    role: "Co-Convenor",
    company: "PRAJWALAN'24 -Central India's Biggest TechFest ,GCOEA ",
    date: "2024-2025",
    desc: "Served as the co-convenor for Prajwalan The Biggest Central India Tech Fest, where I coordinated logistics and managed a team of volunteers to ensure smooth event operations. I successfully facilitated workshops and technical sessions, enhancing participant engagement. Our efforts resulted in a 20% increase in attendance compared to the previous year ",
    skills: [
      "Event Coordination",
      "Team Management",
      "Workshop Facilitation",
      "Communication Skills",
      "Strategic Planning",
    ],
  },
  {
    id: 2,
    img:zenith,
    role: " convenor",
    company:  "Zenith Cultural Fest,GCOEA ",
    date:"2024-2025",
    desc: "As the convenor of the Discipline Committee for Zenith Cultural Fest, I ensured adherence to rules and regulations, fostering a respectful environment. My leadership helped maintain a smooth event execution with minimal disruptions and high participant satisfaction.",
    skills: [
      "Conflict Management",
      "Team Supervision",
      "Decision Making",
      "Event Operations",
      "Interpersonal Communication",
    ]
  },
  {
    id: 3,
    img: engenears,
    role: "IT Department Co-ordinator",
    company: "ENGE-NEARS",
    date: "Jan 2023 - Feb 2024",
    desc: "A consultancy services for college coming students after Engineering entrance exam ,providing support to them with technical aspects also with academic and getting skills for future requirement ",
    skills: [
      "Mentorship",
      "Technical Support",
      "Communication",
      "Leadership",
    ]
  },

   {
    id: 4,
    img:kct,
    role: " Cricket Secretary",
    company:  "Kalpna Chawla Trophy",
    date:"2024-2025",
    desc: " Organizing cricket matches, managing teams, ensuring rules compliance, handling on-ground logistics",
    skills: [
      "Sports Event Management",
      "Team Coordination",
      "Scheduling & Planning",
      "Leadership",
      "Decision Making",
    ]
  },
];
