/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import catAnimation from "./assets/lottie/cat_animation.json"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: catAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Viktoriia Tytarenko",
  title: "Hi, I'm Viktoriia",
  subTitle: emoji(
     "A passionate Data Analyst and Python Developer 🚀 with expertise in machine learning, database optimization, and behavioral science-driven products. I love transforming data into actionable insights through analysis and visualization."
  ),
  resumeLink:
    "https://drive.google.com/file/d/16jRTeuOfzscqqwQEvUbgYv7ojokLG1nY/view?usp=drive_link", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/Toressy",
  linkedin: "https://www.linkedin.com/in/viktoriiatytarenko/",
  gmail: "titarenkoviktoria16@gmail.com",
  kaggle: "https://www.kaggle.com/toressy",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji("⚡ Build machine learning pipelines with high accuracy (99.64% on diabetes prediction)"),
    emoji("⚡ Design and optimize relational databases "),
    emoji("⚡ Develop custom programming languages and interpreters in Python"),
    emoji("⚡ Implement NLP solutions using transformers (BERT, SBERT) and graph algorithms")
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    // Programming Languages
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "sql",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "c++",
      fontAwesomeClassname: "fas fa-code"
    },
    {
      skillName: "javascript",
      fontAwesomeClassname: "fab fa-js"
    },
    // Data Science/ML
    {
      skillName: "pandas",
      fontAwesomeClassname: "fas fa-table"
    },
    {
      skillName: "scikit-learn",
      fontAwesomeClassname: "fas fa-brain"
    },
    {
      skillName: "tensorflow",
      fontAwesomeClassname: "fas fa-project-diagram"
    },
    // Tools & Platforms
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "flask",
      fontAwesomeClassname: "fas fa-server"
    },
    {
      skillName: "git",
      fontAwesomeClassname: "fab fa-git-alt"
    },
    {
      skillName: "unity",
      fontAwesomeClassname: "fas fa-gamepad"
    }
  ],
  display: true
};

// Education Section

const educationInfo = {
  display: true,
  schools: [
    {
      schoolName: "University of Derby",
      logo: require("./assets/images/derby.png"), // Add appropriate logo
      subHeader: "Bachelor of Science in Computer Science",
      duration: "2022 - 2025",
      desc: "Key modules: Software Development, Cloud Computing, Computer Networks, IoT System Management, System Administration (Linux)",
      descBullets: [
        "Developed a machine learning pipeline to predict diabetes with 99.64% accuracy",
        "Created a custom programming language with lexer, parser, and interpreter in Python",
        "Designed a 3D animated robot using DirectX 11 with dynamic transformations and lighting"
      ]
    },
    {
      schoolName: "Taras Shevchenko National University of Kyiv",
      logo: require("./assets/images/taras.png"), // Add appropriate logo
      subHeader: "Applied Mathematics",
      duration: "2020 – 2025",
      desc: "Advanced studies in Discrete Mathematics, Differential Equations, Probability Theory, and Mathematical Statistics",
      descBullets: [
        "Strong foundation in mathematical concepts applied to computer science"
      ]
    }
  ]
};


// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true,
  experience: [
    {
      Stack: "Python Development",
      progressPercentage: "90%"
    },
    {
      Stack: "Data Analysis",
      progressPercentage: "85%"
    },
    {
      Stack: "Database Management",
      progressPercentage: "80%"
    },
    {
      Stack: "Machine Learning",
      progressPercentage: "75%"
    }
  ],
  displayCodersrank: false
};

// Work experience section
const workExperiences = {
  display: true,
  experience: [
    {
      role: "Assistant",
      company: "CHECK IN SEA, Kyiv, Ukraine",
      companylogo: require("./assets/images/checkinsea.png"), // Add appropriate logo
      date: "June 2021 – August 2021",
      desc: "Researched and managed client databases using Google Sheets, presented products to potential clients, and handled administrative tasks.",
      descBullets: [
        "Improved database organization for more efficient client management",
        "Developed interpersonal and presentation skills through direct sales"
      ]
    }
  ]
};
/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME OF MY ACADEMIC AND PERSONAL PROJECTS",
  projects: [
    {
      image: require("./assets/images/diabetes.png"), // Add appropriate image
      projectName: "Diabetes Prediction ML Pipeline",
      projectDesc: "Developed a machine learning pipeline using Python and Scikit-learn to predict diabetes with 99.64% accuracy.",
      footerLink: [
        {
          name: "View Code",
          url: "https://www.kaggle.com/code/toressy/diabetes-prediction" // Add GitHub link when available
        }
      ]
    },
    {
      image: require("./assets/images/text_sum.png"), // Add appropriate image
      projectName: "Graph-Based Extractive Summarization",
      projectDesc: "Leveraged S-BERT embeddings and PageRank to optimize summary coherence for my dissertation project.",
      footerLink: [
        {
          name: "View Code",
          url: "https://github.com/Toressy/GraphSummariser-TransformerHybrid" // Add GitHub link when available
        }
      ]
    },
    {
      image: require("./assets/images/database.png"), // Add appropriate image
      projectName: "Enterprise Database System",
      projectDesc: "Designed a normalized database (3NF) with E/R diagrams, SQL scripts, and a functional MS Access front-end.",
      footerLink: [
        {
          name: "View Code",
          url: "https://github.com/Toressy/AirplaneFleetDatabase" // Add GitHub link when available
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Key Achievements 🏆"),
  subtitle: "Notable accomplishments from my academic and professional journey",
  achievementsCards: [
    {
      title: "High-Accuracy ML Model",
      subtitle: "Developed diabetes prediction model with 99.64% accuracy",
      image: require("./assets/images/database.png"), // Add appropriate image
      imageAlt: "Machine Learning Achievement",
      footerLink: []
    },
    {
      title: "Database Optimization",
      subtitle: "Designed and implemented 3NF normalized database system",
      image: require("./assets/images/database.png"), // Add appropriate image
      imageAlt: "Database Achievement",
      footerLink: []
    }
  ],
  display: false
};


// Contact Info
const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: "Interested in discussing data analysis, Python projects, or potential opportunities? Feel free to reach out!",
  number: "+447551500688", // Add your phone number if desired
  email_address: "titarenkoviktoria16@gmail.com" // Add your email
};


// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};


const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  contactInfo,
  isHireable,
  resumeSection
};
