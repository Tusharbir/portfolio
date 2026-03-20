export const resumeData = {
  basics: {
    name: "Tusharbir Singh Mutty",
    initials: "TSM",
    title: "Software Engineer",
    summary:
      "Master of Applied Computing candidate with strong programming skills in Java, Kotlin, C/C++, Python and solid understanding of Data Structures, Algorithms, and Operating Systems.",
    location: "Windsor, ON",
    email: "mutty@uwindsor.ca",
    phone: "226-787-1339",
    linkedin: "https://linkedin.com/in/tusharbir",
    github: "https://github.com/Tusharbir",
  },
  profile: [
    "Master of Applied Computing candidate with strong programming skills in Java, Kotlin, C/C++, Python and solid understanding of Data Structures, Algorithms, and Operating Systems.",
    "Experienced with the full Software Development Life Cycle (SDLC) and Agile teamwork, from requirements and design through implementation, testing, and deployment.",
    "Passionate about building reliable, large-scale software systems and eager to contribute to data-intensive and distributed applications.",
    "Available for a 12–16 week Software Engineer Internship starting May/June 2026 (fulfilling 4/8-Month Co-op requirement).",
  ],
  experience: [
    {
      company: "Simmi's Tiffin Service",
      role: "Operations & Technology Support Coordinator",
      dates: "Oct 2025 – Present",
      location: "Windsor, ON",
      bullets: [
        "Monitored IT systems and ERP workflows, helping ensure reliable and continuous business operations.",
        "Coordinated digital assets and staff workflows, troubleshooting system-related issues in a fast-paced environment.",
        "Created menus, promotional posters, and digital assets for the business brand.",
        "Designed and developed the business website at simmistiffinservice.com.",
        "Also designed and built goldengatecatering.com for Golden Gate Catering as a freelance client project.",
      ],
    },
    {
      company: "Glocify Technologies",
      role: "Mobile Application Development Intern",
      dates: "Dec 2023 – Feb 2024",
      location: "Chandigarh, India",
      bullets: [
        "Developed Android components in an Agile/Scrum team using Kotlin and Android Studio.",
        "Improved application stability by executing unit tests and debugging with JUnit.",
        "Used Git and GitHub for version control and collaborative development.",
      ],
    },
  ],
  achievements: [
    {
      title: 'Awarded "Best Overall Presentation"',
      context: "University of Windsor Demo Day 2026",
      type: "award",
    },
    {
      title: "Built PlanWise API with AVL-trees & Tries",
      context:
        "Engineered advanced data structures for efficient internet plan comparison",
      type: "engineering",
    },
    {
      title: "Zero-Upload Auth System (PapDocAuthX)",
      context:
        "Architected cryptographic document verification without storing sensitive content",
      type: "engineering",
    },
    {
      title: "DreamTale — AI-Powered Storytelling App",
      context:
        "Built a cross-platform Flutter app with AI-generated narratives using OpenAI and Supabase",
      type: "engineering",
    },
    {
      title: "Full SDLC & Agile Experience",
      context:
        "End-to-end software development from requirements through deployment",
      type: "leadership",
    },
    {
      title: "MERN Stack Certified Developer",
      context:
        "Developed Prism ED, a Udemy-style course platform during industrial training",
      type: "certification",
    },
  ],
  projects: [
    {
      title: "DreamTale",
      stack: ["Flutter", "Dart", "Supabase", "OpenAI API", "PostgreSQL"],
      bullets: [
        "Built a cross-platform mobile app (Android & iOS) that lets users create imaginary worlds, characters, and AI-driven evolving storylines.",
        "Integrated OpenAI API for daily AI-generated story events based on world rules, characters, and prior context.",
        "Implemented Supabase backend with PostgreSQL for auth, real-time data, and user-specific data isolation with RLS.",
        "Designed a DB-driven plan system (Free/Standard/Premium) with story lifecycle, chapter limits, and subscription management.",
        "Built a central prompt engine enforcing system rules, plan constraints, world rules, and sanitized user input with multiple generation modes.",
      ],
      github: null,
      featured: true,
    },
    {
      title: "PlanWise API",
      stack: ["Java", "Spring Boot", "Selenium", "Algorithms"],
      bullets: [
        "Engineered a RESTful Java Spring Boot API for internet plan comparison, using AVL-trees for indexing and Tries for prefix-based lookup.",
        "Implemented Levenshtein-based typo correction to handle user input errors and improve search relevance.",
        "Automated data extraction from provider websites with Selenium to build a reliable data pipeline.",
      ],
      github: "https://github.com/Tusharbir/PlanWiseAPI",
    },
    {
      title: "PapDocAuthX",
      stack: ["Cryptography", "System Design", "Azure"],
      bullets: [
        "Architected a zero-upload authentication system using document cryptographic fingerprints to verify documents without storing sensitive content.",
        "Designed secure workflows on Azure services to compute and compare signatures, ensuring user privacy and data sovereignty.",
        'Awarded "Best Overall Presentation" at University of Windsor Demo Day 2026.',
      ],
      github: "https://github.com/Tusharbir/papauthdocx",
    },
    {
      title: "Weather Application",
      stack: ["Android", "Kotlin", "MVVM", "REST API"],
      bullets: [
        "Built an Android weather forecasting application using Kotlin with MVVM architecture for clean separation of concerns.",
        "Integrated weather REST APIs for real-time forecasting data with location-based services.",
        "Implemented LiveData and ViewModel for reactive UI updates and lifecycle-aware data handling.",
      ],
      github: "https://github.com/Tusharbir/WeatherApplication",
      stars: 3,
    },
    {
      title: "Friends Flame",
      stack: ["Android", "Kotlin", "MVVM", "Firebase"],
      bullets: [
        "Built a social media Android app using MVVM architecture and Kotlin, integrating Firebase for real-time data.",
        "Leveraged Firebase for real-time social interactions, friend connections, and integrated Google and Facebook sign-ins.",
        "Designed user profile management, post feeds, and notification features with a clean Material Design UI.",
      ],
      github: "https://github.com/Tusharbir/FriendsFlameSocialMedia",
      stars: 2,
    },
    {
      title: "Uni Learning Management System",
      stack: ["Java Swing", "MySQL", "Azure"],
      bullets: [
        "Developed a desktop LMS using Java Swing and MySQL to manage users, courses, and enrollment with role-based access control.",
        "Implemented admin, instructor, and student roles with differentiated dashboards and permissions.",
        "Deployed the MySQL database on Azure for cloud-based data persistence and remote access.",
      ],
      github: "https://github.com/Tusharbir/UniLearningManagement",
    },
    {
      title: "Razorpay Clone",
      stack: ["HTML", "CSS", "JavaScript"],
      bullets: [
        "Recreated the Razorpay payment gateway landing page as a front-end project with responsive design and modern UI patterns.",
        "Implemented pixel-perfect layout with CSS Flexbox and Grid, matching the original site's typography and spacing.",
        "Added interactive elements including navigation, hero animations, and feature sections with mobile-first responsiveness.",
      ],
      github: "https://github.com/Tusharbir/razorpay-clone",
    },
  ],
  skills: [
    {
      category: "Languages",
      items: ["Java", "Kotlin", "Dart", "C/C++", "Python", "JavaScript", "SQL", "HTML5/CSS3"],
    },
    {
      category: "Frameworks & Tools",
      items: [
        "Spring Boot", "Flutter", "Node.js", "React", "JUnit", "Selenium",
        "Android Studio", "Git", "GitHub", "Jira", "Azure",
      ],
    },
    {
      category: "Databases",
      items: ["MySQL", "Firebase", "MongoDB", "Supabase", "PostgreSQL"],
    },
    {
      category: "Core Concepts",
      items: [
        "Data Structures & Algorithms", "Object-Oriented Design", "Operating Systems",
        "REST APIs", "SDLC", "Agile/Scrum",
      ],
    },
  ],
  education: [
    {
      institution: "University of Windsor",
      location: "Windsor, ON",
      degree: "Master of Applied Computing",
      dates: "May 2025 – Present",
      details: [
        "Relevant coursework: Algorithms, Data Structures, Operating Systems, Database Systems, Software Engineering.",
      ],
    },
    {
      institution: "I.K. Gujral Punjab Technical University",
      location: "Punjab, India",
      degree: "B.Tech. in Computer Science and Engineering",
      dates: "Jul 2020 – Apr 2024",
      details: ["GPA: 3.4/4.0"],
    },
  ],
  certifications: [
    {
      title: "Industrial Project Training – MERN Stack",
      dates: "Feb 2024 – Jun 2024",
      provider: "VMM Education India",
      details: [
        "Trained in MongoDB, Express.js, React, Node.js; developed Prism ED, a Udemy-style course platform.",
      ],
    },
    {
      title: "Industrial Training – Java Standard Edition",
      dates: "Jun 2022 – Aug 2022",
      provider: "VMM Education India",
      details: [
        "Completed training in Core Java, OOP concepts, and desktop application development.",
      ],
    },
  ],
  awards: [
    {
      title: "Best Overall Presentation",
      event: "University of Windsor Demo Day 2026",
      project: "PapDocAuthX",
    },
  ],
  extra: [],
} as const;

export type ResumeData = typeof resumeData;
