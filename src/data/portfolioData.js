// Central Data Layer for Aman Kumar Gautam's Portfolio
// 100% Authentic Data Preserved

import myImage from '../assets/img/MyImage.jpeg';
import logoImage from '../assets/img/image-modified.png';
import cvPdf from '../assets/pdf/Aman CV.pdf';

// Project Images
import projectPortfolio from '../assets/img/Projects/Screenshot 2025-06-30 174517.png';
import projectGnim from '../assets/img/Projects/Screenshot 2025-06-30 174647.png';
import projectVsiet from '../assets/img/Projects/Screenshot 2025-06-30 185649.png';
import projectLanding from '../assets/img/Projects/Screenshot 2025-06-30 185954.png';

// Experience & Certificate Images
import expCollege from '../assets/img/Experience/College.avif';
import expConferenceIimt from '../assets/img/Experience/Confrence_IIMT.jpeg';
import expConferenceTrinity from '../assets/img/Experience/Conference_Trinity.jpeg';
import expOnlineIntern from '../assets/img/Experience/Online_inter.png';
import expOfflineIntern from '../assets/img/Experience/Offline_intern.jpeg';

// Services Images
import srvWebDev from '../assets/img/Services/Web Development1.jpg';
import srvAppDesign from '../assets/img/Services/App design.webp';
import srvUxUi from '../assets/img/Services/ux_ui_design.webp';
import srvConsulting from '../assets/img/Services/Consulting-768x384.png';

export const PERSONAL_INFO = {
  name: "Aman Kumar Gautam",
  preferredName: "Aman",
  handle: "instinctaman",
  status: "Available for Opportunities",
  tagline: "Passionate Web Developer & Creative Problem Solver",
  roles: [
    "Web Developer.",
    "App Designer.",
    "UI/UX Enthusiast.",
    "Consultant."
  ],
  bio: [
    "Hello! I'm Aman Kumar Gautam, a passionate web developer with a knack for creating dynamic and responsive websites. I love coding and enjoy the challenge of solving complex problems.",
    "With a background in computer science, I have honed my skills in HTML, CSS, JavaScript, and various frameworks. I am always eager to learn new technologies and improve my craft.",
    "In my free time, I enjoy exploring new programming languages, contributing to open-source projects, and sharing my knowledge with others."
  ],
  location: {
    label: "Sirsa, Greater Noida",
    coords: "28.4744° N, 77.5040° E",
    mapUrl: "https://goo.gl/maps/u7vvVRmi2yTysDEM9?g_st=aw"
  },
  contact: {
    email: "instinctak07@gmail.com",
    phone: "+91 8287045234",
    phoneDisplay: "+91 82870 45234"
  },
  socials: [
    {
      id: "github",
      name: "GitHub",
      url: "https://github.com/instinctaman",
      icon: "fa-brands fa-github",
      color: "#2ea44f"
    },
    {
      id: "linkedin",
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/aman-kumar-38aa882b8/",
      icon: "fa-brands fa-linkedin-in",
      color: "#0a66c2"
    },
    {
      id: "twitter",
      name: "Twitter / X",
      url: "https://x.com/AmanKumar262665",
      icon: "fa-brands fa-x-twitter",
      color: "#1da1f2"
    },
    {
      id: "instagram",
      name: "Instagram",
      url: "https://www.instagram.com/aman_is_tough_07?igsh=M2N0ZTNvb3pobnli",
      icon: "fa-brands fa-instagram",
      color: "#e1306c"
    },
    {
      id: "facebook",
      name: "Facebook",
      url: "https://www.facebook.com/share/1AsajG6rNx/",
      icon: "fa-brands fa-facebook-f",
      color: "#1877f2"
    }
  ],
  assets: {
    avatar: myImage,
    logo: logoImage,
    resume: cvPdf
  }
};

export const EDUCATION = [
  {
    degree: "Bachelor of Technology in Computer Science",
    institution: "Choudhary Charan Singh University",
    duration: "2022 - 2025",
    description: "Specialized in core computer science disciplines, algorithms, software engineering, and web development technologies."
  },
  {
    degree: "Bachelor of Computer Applications (BCA)",
    institution: "Global Institute of Information Technology",
    duration: "Foundational Degree",
    description: "Built a strong foundation in programming, web development, and database management through hands-on projects, practical labs, and real-world application."
  }
];

export const SKILLS = [
  {
    name: "HTML",
    category: "Frontend Core",
    percentage: 90,
    icon: "fa-brands fa-html5",
    color: "#e34f26",
    highlight: "Semantic architecture, responsive layouts, web accessibility"
  },
  {
    name: "CSS",
    category: "Styling & Motion",
    percentage: 80,
    icon: "fa-brands fa-css3-alt",
    color: "#264de4",
    highlight: "Modern flex/grid, CSS animations, responsive systems"
  },
  {
    name: "C/C++",
    category: "Programming Core",
    percentage: 80,
    icon: "fa-solid fa-code",
    color: "#00599c",
    highlight: "Data structures, algorithms, object-oriented concepts"
  },
  {
    name: "Javascript",
    category: "Frontend Core",
    percentage: 65,
    icon: "fa-brands fa-js",
    color: "#f7df1e",
    highlight: "ES6+, DOM manipulation, asynchronous logic, API integration"
  },
  {
    name: "MySQL",
    category: "Database & Backend",
    percentage: 65,
    icon: "fa-solid fa-database",
    color: "#00758f",
    highlight: "Relational schema design, querying, database management"
  },
  {
    name: "React",
    category: "Frameworks",
    percentage: 50,
    icon: "fa-brands fa-react",
    color: "#61dafb",
    highlight: "Component architecture, hooks, state management, SPA routing"
  },
  {
    name: "Python",
    category: "Programming Core",
    percentage: 50,
    icon: "fa-brands fa-python",
    color: "#3776ab",
    highlight: "Scripting, algorithmic problem solving, backend fundamentals"
  },
  {
    name: "PHP",
    category: "Database & Backend",
    percentage: 60,
    icon: "fa-brands fa-php",
    color: "#777bb4",
    highlight: "Server-side scripting, dynamic web apps (from internships)"
  }
];

export const PROJECTS = [
  {
    id: "portfolio-website",
    title: "Portfolio Website",
    category: "Web Application",
    tag: "Featured Project",
    description: "A personal portfolio website to showcase my skills and projects.",
    extendedDetails: "Designed and engineered as a high-performance personal developer showcase with custom routing, dynamic interactive elements, and responsive layout systems.",
    image: projectPortfolio,
    liveUrl: "https://amankiportfolio.netlify.app/",
    githubUrl: "https://github.com/instinctaman",
    technologies: ["React", "JavaScript", "HTML5", "CSS3", "Responsive UI"]
  },
  {
    id: "gnim-landing",
    title: "GNIM Landing_page",
    category: "Web Application",
    tag: "Internship Project",
    description: "The Project from my internship",
    extendedDetails: "Developed during internship to provide a modern, engaging institution landing experience with responsive grid structure and interactive UI modules.",
    image: projectGnim,
    liveUrl: "https://gnim.netlify.app/",
    githubUrl: "https://github.com/instinctaman",
    technologies: ["HTML5", "CSS3", "JavaScript", "Responsive Design"]
  },
  {
    id: "vsiet-landing",
    title: "VSIET Landing_page",
    category: "Web Application",
    tag: "Internship Project",
    description: "The Project from my internship",
    extendedDetails: "Built as part of internship deliverables, focusing on structured digital presentation, smooth viewport responsiveness, and clean interactive elements.",
    image: projectVsiet,
    liveUrl: "https://vsiet-landing.netlify.app/",
    githubUrl: "https://github.com/instinctaman",
    technologies: ["HTML5", "CSS3", "JavaScript", "UI Architecture"]
  },
  {
    id: "modern-landing",
    title: "Landing Page",
    category: "Web Application",
    tag: "Commercial Design",
    description: "A modern landing page design for businesses and startups.",
    extendedDetails: "A sleek, conversion-oriented landing page interface crafted for modern businesses and startups, featuring fluid call-to-actions and clean visual hierarchy.",
    image: projectLanding,
    liveUrl: "https://amanlanding.netlify.app/",
    githubUrl: "https://github.com/instinctaman",
    technologies: ["HTML5", "CSS3", "JavaScript", "Modern Web UX"]
  }
];

export const EXPERIENCES = [
  {
    id: "offline-internship",
    type: "Internship",
    title: "Offline Internship",
    role: "Web Development Intern",
    organization: "Innoweb Solution",
    duration: "3 Months",
    summary: "I have successfully completed a 3-month offline internship",
    description: "Completed a 3-month offline internship in Web Development at Innoweb Solution, where I gained hands-on experience in designing responsive websites, developing dynamic web applications using HTML, CSS, JavaScript, PHP, and MySQL, and collaborating in a professional development environment to deliver real-world projects.",
    technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    image: expOfflineIntern,
    credentialLabel: "View Certificate"
  },
  {
    id: "online-internship",
    type: "Internship",
    title: "Online Internship",
    role: "Web Development Intern",
    organization: "EliteTech Intern",
    duration: "March 31 to April 30, 2025 (4 Weeks)",
    summary: "I have successfully completed a 1-month online internship",
    description: "Successfully completed a 4-week Web Development internship at EliteTech Intern from March 31 to April 30, 2025. Gained hands-on experience in front-end and back-end development, working with technologies like HTML, CSS, JavaScript, and PHP. Earned outstanding remarks for dedication, problem-solving skills, and contribution to real-time projects under professional mentorship.",
    technologies: ["HTML", "CSS", "JavaScript", "PHP"],
    image: expOnlineIntern,
    credentialLabel: "View Certificate"
  },
  {
    id: "tiips-seminar",
    type: "Conference & Seminar",
    title: "AI, ML & Big Data Seminar",
    role: "Attendee / Participant",
    organization: "Trinity Institute of Innovations in Professional Studies (TIIPS)",
    duration: "February 28, 2025",
    summary: "Seminar on Impact of AI, Machine Learning, and Big Data in Financial Ecosystem",
    description: "I attended a seminar at Trinity Institute of Innovations in Professional Studies (TIIPS) on \"Impact of AI, Machine Learning, and Big Data in the Financial Ecosystem\" held on 28th February 2025, which enhanced my understanding of emerging technologies and their real-world applications in the financial domain.",
    technologies: ["Artificial Intelligence", "Machine Learning", "Big Data", "FinTech"],
    image: expConferenceTrinity,
    credentialLabel: "View Seminar Photo"
  },
  {
    id: "icm-conference",
    type: "Conference & Seminar",
    title: "ICM-2023 Smart Cities & IoT Conference",
    role: "Active Volunteer",
    organization: "Global Institute of Information Technology, Greater Noida",
    duration: "October 29 - 30, 2023",
    summary: "International Conference on Recent Developments in Architecture of Smart Cities using IoT",
    description: "I actively participated as a volunteer in the International Conference Meeting on Recent Developments in the Architecture of Smart Cities using Internet of Things (ICM-2023) held at Global Institute of Information Technology, Greater Noida, on 29th–30th October 2023.",
    technologies: ["IoT", "Smart Cities", "Technical Coordination", "Event Logistics"],
    image: expConferenceIimt,
    credentialLabel: "View Conference Photo"
  },
  {
    id: "college-experience",
    type: "Academic Journey",
    title: "College Experience",
    role: "BCA Scholar",
    organization: "Global Institute of Information Technology",
    duration: "Undergraduate Program",
    summary: "I have successfully completed my Bachelor of Computer Applications (BCA)",
    description: "During my Bachelor of Computer Applications (BCA) at Global Institute of Information Technology, I built a strong foundation in programming, web development, and database management. The academic journey was not just about theory—it involved hands-on projects, practical labs, and continuous learning. My college experience helped me develop a problem-solving mindset, collaborate effectively in teams, and gain confidence in applying technical knowledge to real-world scenarios.",
    technologies: ["Computer Science Fundamentals", "Programming", "Database Systems", "Web Tech"],
    image: expCollege,
    credentialLabel: "View College Info"
  }
];

export const SERVICES = [
  {
    id: "web-development",
    title: "Web Development",
    subtitle: "High-Performance Digital Architecture",
    description: "Designing and developing robust, responsive, and high-performance websites and web applications tailored to real-world requirements with clean code and modern standards.",
    image: srvWebDev,
    icon: "fa-solid fa-laptop-code",
    features: [
      "Dynamic & responsive web applications",
      "Clean, maintainable frontend & backend code",
      "API integrations & database connectivity",
      "Cross-browser & cross-device compatibility"
    ]
  },
  {
    id: "app-design",
    title: "App Design",
    subtitle: "Fluid Digital Product Interfaces",
    description: "Crafting structured, visually engaging, and intuitive mobile and web application layouts focused on smooth user journeys, usability, and modern aesthetic balance.",
    image: srvAppDesign,
    icon: "fa-solid fa-mobile-screen-button",
    features: [
      "Modern interface layouts & wireframes",
      "Intuitive navigation & screen flow",
      "Responsive app prototyping",
      "Design consistency across screens"
    ]
  },
  {
    id: "ui-ux-design",
    title: "UI/UX Design",
    subtitle: "Human-Centered Visual Experiences",
    description: "Building user-centric digital experiences with deep attention to visual hierarchy, interactive feedback, typography, color harmony, and micro-interactions.",
    image: srvUxUi,
    icon: "fa-solid fa-pen-ruler",
    features: [
      "User journey mapping & wireframing",
      "High-fidelity interactive mockups",
      "Micro-interactions & animation design",
      "Design systems & visual components"
    ]
  },
  {
    id: "consulting",
    title: "Consulting",
    subtitle: "Technical & Strategy Guidance",
    description: "Providing technical advice and guidance on website architecture, technology stack selection, frontend modernization, and practical problem-solving.",
    image: srvConsulting,
    icon: "fa-solid fa-comments-dollar",
    features: [
      "Frontend architecture & tech stack selection",
      "Website performance optimization review",
      "Responsive UI audit & enhancements",
      "Project feasibility & execution strategy"
    ]
  }
];
