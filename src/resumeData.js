import riskprofile1 from "./images/riskprofile1.png";
import riskprofile2 from "./images/riskprofile2.png";
import riskprofile3 from "./images/riskprofile3.png";
let resumeData = {
  fullName: "Ann Roshin Thomas",
  description: "A full stack developer focussed on turning ideas into reality!",
  experience: [
    {
      company: "HEWLETT PACKARD ENTERPRISE",
      role: "React/NodeJS developer",
      date: "2019 - 2022",
      details: `Web application that tracks and notifies security vulnerabilities in open-source components used in HPE products.
      • Enforced agile principles, organized continuous improvement, and removed impediments to the team as a Scrum Master.
      • Created UI elements and REST API functionalities to assess and manage the vulnerabilities in the application.
      • Built an automated mechanism to track the application status, thereby reducing downtime by 80%. 
      • Improved user experience and application performance by updating the codebase to include react 16.8 features and redux toolkit. 
      • Developed importing complex data feeds from the National Vulnerability Database and other third-party feeds.`,
    },
    {
      company: "COGNIZANT",
      role: "React/NodeJS developer",
      date: "(2017 - 2019)",
      details: `Web application that aggregates medical records from digital source.
      • Developed UI elements and backend APIs to digitize patient summary pdfs to user friendly interface
      • Wrote the UI components which were used by the team to build the whole UI
      • Wrote the elements to convert the UI into downloadable pdfs of varying sizes and complexity
      • Create APIs on server side to upload health data to the database
      • Create API methods for audit and error logging`,
    },
    {
      company: "COGNIZANT",
      role: "Dotnet developer",
      date: "(2013 - 2016)",
      details: `Developed applications using ASP.net, C# and SQL`,
    },
  ],
  aboutMe: ` As a multi-dimensional Web Developer, I am passionate about creating functional and user-friendly web experiences. I have built enterprise Web Applications through the whole life cycle, from prototyping to production. I am deeply enthusiastic about building dynamic and interactive web applications to bring innovative ideas to life.

  I am a very organized and self-driven individual, and as a Scrum Master, I've led co-located teams in an agile setting.
   `,

  skills: [
    "React",
    "Redux",
    "NodeJS",
    "Javascript",
    "REST API",
    "Express",
    "Jest",
    "HTML",
    "CSS",
    "MSSQL",
    "PostgreSQL",
    "MySQL",
    "Git",
    "Agile",
  ],
  projects: [
    {
      title: "Risk Profile Gateway",
      images: [riskprofile1, riskprofile2, riskprofile3],
      projectDescription: `This is a Cognizant product which digitizes and expedites health data retrieval enabling life insurers to process more policy applications faster. 
               I created the main dashboard screens in an easy to read format which enabled the underwriters to quickly understand patient history. In addition, I also developed other frontend and backend capabilities.
               This application was developed on a tech stack of React/Redux/NodeJS/MySQL. 
      `,
    },
  ],
  testimonials: [
    {
      fullName: "Ajeya Simha",
      title: "Engineering Leader at Hewlett Packard Enterprise",
      relationship: "Ajeya managed Ann Roshin directly",
      recommendation:
        "Roshin is a diligent engineer and her deliverables are always of high quality. She is a team player and a quick learner. She has inquisitive nature to question the status quo and also provide valuable suggestions for improving product/process.",
      date: "November 9,2022",
      link: "https://www.linkedin.com/in/annroshinthomas/details/recommendations/",
    },
    {
      fullName: "Chetan S Vakkalad",
      title: "Software Engineer II at Hewlett Packard Enterprise",
      relationship: "Chetan worked with Ann Roshin on the same team",
      recommendation: `Roshin, is a fantastic co-worker I have ever come across. Her expertise in full stack domain makes value added to the team. Her experience, problem-solving, decision-making skills helped us in guiding the team, and also she is a team player, anyone would love to work with her. She also played as Scrum Master role in our team, when we were adopting Agile process. 
    I’ve enjoyed my experience working with Roshin, and I know that anyone looking to hire or work with her will, too.`,
      date: "October 15,2022",
      link: "https://www.linkedin.com/in/annroshinthomas/details/recommendations/",
    },
  ],
  socialLinks: {
    linkedIn: "https://www.linkedin.com/in/annroshinthomas/",
    github: "https://github.com/ann-roshinthomas",
    email: "annroshinthomas@gmail.com",
  },
};

export default resumeData;
