/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000, // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true, // Set to false to use static SVG
};

const greeting = {
  username: "Ethan Coomber",
  title: "Hi all, I'm Ethan",
  subTitle: emoji(
    "I'm a passionate full-stack software developer! I have experience building web and mobile applications with React / JavaScript / Node.js among other libraries and frameworks."
  ),
  resumeLink: require("./assets/resume/Ethan_Coomber_Resume_2025.pdf"), // Set to empty to hide the button
  displayGreeting: true, // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/EthanCoomber",
  linkedin: "https://www.linkedin.com/in/ethan-coomber-5a08ab197/",
  gmail: "Ethancoomber6@gmail.com",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true, // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "FULL-STACK DEVELOPER WHO LOVES EXPLORING NEW TECH STACKS",
  skills: [
    emoji(
      "⚡ Develop interactive frontend / user Interfaces for your applications"
    ),
    emoji(
      "⚡ Start from the ground up exploring every corner of the software development lifecycle"
    ),
    emoji(
      "⚡ Integration of third party services such as Firebase / AWS / Heroku"
    ),
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "java",
      fontAwesomeClassname: "fab fa-java",
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js",
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python",
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react",
    },
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5",
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt",
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node",
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm",
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database",
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws",
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire",
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker",
    },
  ],
  display: true, // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Middlebury College",
      logo: require("./assets/images/middleburyLogo.png"),
      subHeader: "Bachelor of Arts",
      duration: "September 2019 - May 2023",
      desc: "Magna Cum Laude",
      descBullets: ["Major: Computer Science (Honors)", "Minor: Mathematics"],
    },
    {
      schoolName: "Northeastern University",
      logo: require("./assets/images/northeastern.png"),
      subHeader: "Master's in Computer Science",
      duration: "September 2024 - May 2025",
      // desc: "Magna Cum Laude",
      // descBullets: [
      //   "Major: Computer Science (Honors)",
      //   "Minor: Mathematics"
      // ]
    },
  ],
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      company: "Earth Brands",
      companylogo: require("./assets/images/earthbrands.jpeg"),
      positions: [
        {
          role: "Software Developer II",
          date: "January 2025 – Present",
          desc: "Led development of e-commerce platform and ERP system",
          descBullets: [
            "Created internal tools driving 60% process improvement",
            "Optimized website stability and functionality",
          ],
        },
        {
          role: "Software Developer",
          date: "April 2024 – January 2025",
          desc: "Built B2B e-commerce portal increasing online revenue by 250%",
          descBullets: [
            "Developed order management tool improving revenue by 40%",
            "Built full-stack solutions using React Native, GraphQL, AWS",
          ],
        },
        {
          role: "Software Development Intern",
          date: "February 2024 – April 2024",
          desc: "Integrated subscription and payment systems",
          descBullets: [
            "Built automated email alert system",
            "Implemented prime membership program features",
          ],
        },
      ],
    },
    {
      company: "Publicis Sapient",
      companylogo: require("./assets/images/publicisSapient.jpeg"),
      positions: [
        {
          role: "Software Development Intern",
          date: "June 2022 – August 2022",
          desc: "Built financial portfolio app with real-time trading using React Native and Spring Boot",
          descBullets: [
            "Completed full-stack training in React, Angular, MongoDB and Spring Boot",
          ],
        },
      ],
    },
  ],
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true, // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Full Stack Projects",
  subtitle: "Here are some deployed projects of mine.",
  projects: [
    // {
    //   image: require("./assets/images/apple_logo.jpeg"),
    //   projectName: "E-commerce website",
    //   projectDesc: "Allows users to buy and sell tech products, similar to Apple's website.",
    //   footerLink: [
    //     {
    //       name: "Visit Website",
    //       url: "https://e-commerce-ec.payloadcms.app/"
    //     },
    //     {
    //       name: "GitHub",
    //       url: "https://github.com/EthanCoomber/e-commerce"
    //     }
    //     //  you can add extra buttons here.
    //   ]
    // },
    {
      image: require("./assets/images/excersize.jpg"),
      projectName: "Health Tracker",
      projectDesc:
        "A comprehensive fitness tracking application that enables users to log workouts, monitor nutrition, track body measurements, and visualize progress through interactive charts and statistics",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://health-tracker-snowy.vercel.app/dashboard",
        },
        {
          name: "GitHub",
          url: "https://github.com/EthanCoomber/health_tracker",
        },
      ],
    },
    {
      image: require("./assets/images/youtube-red.jpeg"),
      projectName: "YouTube Clone",
      projectDesc:
        "A feature-rich video platform that replicates core YouTube functionality, including video search, playback, channel browsing, and responsive design for an authentic user experience.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://ec-youtube-clone.netlify.app/",
        },
        {
          name: "GitHub",
          url: "https://github.com/EthanCoomber/youtube_clone",
        },
        //  you can add extra buttons here.
      ],
    },
    // {
    //   image: require("./assets/images/cars.jpg"),
    //   projectName: "Car rental website",
    //   projectDesc: "Allows users to browse and search for available cars to rent.",
    //   footerLink: [
    //     {
    //       name: "Visit Website",
    //       url: "https://car-showcase-kappa-lac.vercel.app/"
    //     },
    //     {
    //       name: "GitHub",
    //       url: "https://github.com/EthanCoomber/Car_showcase"
    //     }
    //     //  you can add extra buttons here.
    //   ]
    // }
  ],
  display: true, // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "",
      subtitle: "",
      // image: require("./assets/images/"),
      imageAlt: "o",
      footerLink: [
        {
          name: "",
          url: "",
        },
      ],
    },
  ],
  display: false, // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "",
  subtitle: "",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "",
      title: "",
      description: "",
    },
  ],
  display: false, // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "",
  subtitle: emoji(""),

  talks: [
    {
      title: "",
      subtitle: "",
      slides_url: "",
      event_url: "",
    },
  ],
  display: false, // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "",

  // Please Provide with Your Podcast embeded Link
  podcast: [""],
  display: false, // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: "Feel free to reach out!",
  number: "617-318-8525",
  email_address: "Ethancoomber6@gmail.com",
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false, // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
};
