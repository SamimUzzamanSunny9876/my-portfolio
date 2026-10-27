// ============================================================================
// CENTRAL PORTFOLIO DATA (JSON STRUCTURE FOR SINGLE-PAGE NEXT.JS PORTFOLIO)
// ============================================================================
// Designed to be consumed directly by components:
// Navbar.tsx, Hero.tsx, About.tsx, Skills.tsx, EducationAndExperience.tsx,
// Projects.tsx, ProjectModal.tsx, Contact.tsx, and Footer.tsx
// ============================================================================

export const portfolioData = {
  // 1. Navbar.tsx Data
  navbar: {
    brandName: "Samim.",
    logoText: "Samim Uzzaman Sunny",
    ctaButton: {
      label: "Resume",
      href: "/resume.pdf",
      download: "Samim_Uzzaman_Sunny_CV.pdf",
    },
    navLinks: [
      { id: "nav-1", label: "Home", href: "#home" },
      { id: "nav-2", label: "About", href: "#about" },
      { id: "nav-3", label: "Skills", href: "#skills" },
      { id: "nav-4", label: "Education", href: "#education" },
      { id: "nav-5", label: "Projects", href: "#projects" },
      { id: "nav-6", label: "Contact", href: "#contact" },
    ],
  },

  // 2, 3 & 4. Hero.tsx Data (Designation, Photo, Resume Button & Social Links)
  hero: {
    sectionId: "home",
    greeting: "Hello, I'm",
    name: "Samim Uzzaman Sunny",
    designation: "Full Stack Web Developer",
    roles: [
      "Full Stack Web Developer",
      "Next.js & React Developer",
      "Frontend Engineer",
      "Backend Developer (Node & Express)",
    ],
    tagline:
      "Building fast, responsive, and scalable web applications with React, Next.js, TypeScript, and Node.js.",
    shortBio:
      "I am a Computer Science & Engineering undergraduate with a strong foundation in C, C++, and Java, combined with 5 months of intensive hands-on experience building modern full-stack web applications.",
    profileImage: {
      src: "https://i.postimg.cc/26SLNRMC/Gemini-Generated-Image-s6iy0ys6iy0ys6iy.jpg",
      alt: "Samim Uzzaman Sunny - Full Stack Web Developer",
    },
    resume: {
      buttonText: "Download Resume",
      fileUrl: "/resume.pdf",
      isReady: true, // Clickable button ready with CV
    },
    ctaButtons: {
      primary: { label: "View Projects", href: "#projects" },
      secondary: { label: "Contact Me", href: "#contact" },
    },
    socialLinks: [
      {
        id: "soc-1",
        platform: "GitHub",
        url: "https://github.com/SamimUzzamanSunny9876",
        icon: "Github",
      },
      {
        id: "soc-2",
        platform: "LinkedIn",
        url: "https://www.linkedin.com/in/samim-uzzaman-sunny-2355812ab/",
        icon: "Linkedin",
      },
      {
        id: "soc-3",
        platform: "Twitter",
        url: "https://x.com/samim_uzzaman",
        icon: "Twitter",
      },
      {
        id: "soc-4",
        platform: "Facebook",
        url: "https://www.facebook.com/samim.sunny.9",
        icon: "Facebook",
      },
    ],
  },

  // 5. About.tsx Data (Journey, Work Enjoyment, Hobbies & Personality)
  about: {
    sectionId: "about",
    sectionTitle: "About Me",
    sectionSubtitle: "My programming journey, passion for web engineering, and life outside code",
    paragraphs: {
      programmingJourney:
        "My programming journey began with core Computer Science languages—C, C++, and Java—where I developed a deep appreciation for Data Structures, Algorithms, and Object-Oriented Programming. Five months ago, I dove headfirst into modern web development, channeling my problem-solving mindset into JavaScript, TypeScript, React, Next.js, and backend engineering with Node.js and Express.",
      workEnjoyment:
        "I thoroughly enjoy building end-to-end web applications that pair clean, responsive user interfaces with well-structured backend APIs. Leveraging modern AI-powered developer tools like Antigravity, Claude Code, Gemini, and OpenCode alongside VS Code and JetBrains IDEs allows me to prototype rapidly, debug systematically, and write clean, maintainable code.",
      hobbiesAndInterests:
        "When I am away from my screen, you will find me following or playing Football and Cricket. Whether it is analyzing a tactical football match or playing cricket with friends, sports keep me active, refreshed, and sharp.",
      personality:
        "I am a curious, disciplined, and team-oriented developer. Playing competitive team sports has taught me how to stay calm under pressure and collaborate effectively—qualities I bring to every software project I build.",
    },
    stats: [
      { id: "stat-1", label: "Web Dev Experience", value: "5+ Months" },
      { id: "stat-2", label: "Programming Languages", value: "5+" },
      { id: "stat-3", label: "Full-Stack Projects", value: "3+ Major" },
      { id: "stat-4", label: "Favorite Sports", value: "Football & Cricket" },
    ],
    hobbiesList: [
      { id: "hob-1", name: "Football", icon: "Trophy", description: "Playing & watching matches" },
      { id: "hob-2", name: "Cricket", icon: "Award", description: "Team sports & strategy" },
      { id: "hob-3", name: "Problem Solving", icon: "Code2", description: "Algorithmic challenges" },
    ],
  },

  // 6. Skills.tsx Data (Graphical format with percentage levels & categories)
  skills: {
    sectionId: "skills",
    sectionTitle: "My Technical Skills",
    sectionSubtitle: "Languages, frameworks, and modern AI-assisted development tools I work with",
    categories: [
      {
        id: "cat-1",
        title: "Programming Languages",
        icon: "Terminal",
        items: [
          { name: "JavaScript", level: 90, category: "Language", icon: "FileCode" },
          { name: "TypeScript", level: 85, category: "Language", icon: "FileType" },
          { name: "C++", level: 85, category: "Language", icon: "Cpu" },
          { name: "C", level: 80, category: "Language", icon: "Binary" },
          { name: "Java", level: 80, category: "Language", icon: "Coffee" },
        ],
      },
      {
        id: "cat-2",
        title: "Frameworks & Runtime",
        icon: "Layers",
        items: [
          { name: "React", level: 90, category: "Frontend", icon: "Atom" },
          { name: "Next.js", level: 88, category: "Full Stack", icon: "Globe" },
          { name: "Node.js", level: 82, category: "Backend", icon: "Server" },
          { name: "Express.js", level: 80, category: "Backend", icon: "Webhook" },
        ],
      },
      {
        id: "cat-3",
        title: "IDEs & AI Coding Tools",
        icon: "Wrench",
        items: [
          { name: "VS Code", level: 95, category: "IDE", icon: "Code" },
          { name: "JetBrains", level: 85, category: "IDE", icon: "Laptop" },
          { name: "Antigravity", level: 90, category: "AI Agent", icon: "Rocket" },
          { name: "Gemini", level: 92, category: "AI Assistant", icon: "Sparkles" },
          { name: "Claude Code", level: 90, category: "AI Agent", icon: "Bot" },
          { name: "OpenCode", level: 85, category: "AI Tool", icon: "TerminalSquare" },
        ],
      },
    ],
  },

  // 7 & 8. EducationAndExperience.tsx Data
  educationAndExperience: {
    sectionId: "education",
    sectionTitle: "Education & Experience",
    sectionSubtitle: "My academic qualifications and hands-on development journey",
    education: [
      {
        id: "edu-1",
        degree: "B.Sc. in Computer Science & Engineering (CSE)",
        institution: "North South University, Bangladesh",
        duration: "2024 – Present",
        status: "Undergraduate (Above HSC)",
        location: "Dhaka, Bangladesh",
        description:
          "Pursuing a comprehensive undergraduate degree focused on software engineering, algorithms, systems architecture, and database management.",
        highlights: [
          "Data Structures & Algorithms (C / C++)",
          "Object-Oriented Programming (Java & C++)",
          "Database Management Systems",
          "Operating Systems & Computer Architecture",
        ],
      },
    ],
    experience: [
      {
        id: "exp-1",
        role: "Full Stack Web Developer (Trainee & Project Builder)",
        company: "Self-Directed & Intensive Web Development Training",
        duration: "Last 5 Months",
        type: "Hands-on Learning & Project Development",
        description:
          "Dedicated 5 months to mastering modern full-stack web architecture using React, Next.js, TypeScript, Node.js, and Express.",
        achievements: [
          "Built and deployed 3+ production-ready web applications featuring responsive UIs and RESTful APIs.",
          "Adopted AI-native engineering workflows using Antigravity, Claude Code, Gemini, and OpenCode for rapid development.",
          "Implemented strongly typed frontend and backend architectures using TypeScript.",
        ],
      },
    ],
  },

  // 9. Projects.tsx & ProjectModal.tsx Data (At least 3 projects with modal details)
  projectsSection: {
    sectionId: "projects",
    sectionTitle: "Featured Projects",
    sectionSubtitle: "Click 'View More / Details' on any project card to explore the tech stack, challenges, and future roadmap",
    buttonText: "View More / Details",
    projects: [
      {
        id: "project-1",
        slug: "bazar-dor",
        name: "Bazar Dor (বাজার দর) – Market Price Tracker",
        image: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1000&q=80",
        shortDescription:
          "A full-stack Bangladeshi commodity price tracking web app with localized Bengali dates, translated units, and daily price trend indicators.",
        detailedDescription:
          "Bazar Dor is designed to help everyday consumers track daily grocery and essential commodity prices across local markets. It provides clean visual indicators showing whether prices have risen, fallen, or remained stable compared to previous days.",
        mainTechStack: ["Next.js", "React", "TypeScript", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
        liveLink: "https://bazar-dor-silk-one.vercel.app?_vercel_share=VIwyVRdMGw5agFgBSEUIzBjtw8s6ToA7",
        githubClientLink: "https://github.com/SamimUzzamanSunny9876/Bazar-Dor",
        challengesFaced: [
          "Creating custom Bengali date formatting and dynamically converting English numbers into Bengali numerals across the UI.",
          "Structuring queries to compute daily price differences and trend arrows without slowing down initial page rendering.",
          "Designing mobile-first data tables that display multi-column market prices clearly on small screens.",
        ],
        futurePlans: [
          "Add user-submitted price reports with admin verification to crowdsource real-time local bazaar rates.",
          "Integrate interactive historical price charts to visualize monthly inflation trends.",
          "Introduce automated price-drop notifications for registered users.",
        ],
      },
      {
        id: "project-2",
        slug: "wanderlust",
        name: "Wanderlust – Travel Package Management App",
        image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=1000&q=80",
        shortDescription:
          "A full-stack travel agency platform featuring curated tour packages, dynamic filtering, and modal-based CRUD operations.",
        detailedDescription:
          "Wanderlust enables travelers to explore destination packages while giving platform managers an intuitive interface to create, edit, and remove travel listings dynamically without page reloads.",
        mainTechStack: ["Next.js", "React", "TypeScript", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
        liveLink: "https://wanderlust-travel-demo.vercel.app",
        githubClientLink: "https://github.com/your-username/wanderlust-client",
        challengesFaced: [
          "Handling complex form validation and state synchronization inside dialog modals when editing existing tour packages.",
          "Connecting the Next.js client seamlessly with the Express.js REST API for instant UI updates after CRUD operations.",
          "Optimizing high-resolution destination images for fast loading across mobile networks.",
        ],
        futurePlans: [
          "Integrate online payment gateways (Stripe and SSLCommerz) for instant booking confirmation.",
          "Add an AI-powered trip planner using Gemini to suggest custom itineraries based on user budget.",
          "Implement traveler reviews, ratings, and wishlist functionality.",
        ],
      },
      {
        id: "project-3",
        slug: "devstack",
        name: "DevStack – Developer Tech Stack Curator",
        image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1000&q=80",
        shortDescription:
          "An interactive web application allowing developers to curate, categorize, and manage custom software engineering technology stacks.",
        detailedDescription:
          "DevStack provides software engineers with an organized workspace to build and showcase their preferred languages, frameworks, and developer tools, complete with category filtering and instant toast feedback.",
        mainTechStack: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
        liveLink: "https://devstack-curator.vercel.app",
        githubClientLink: "https://github.com/your-username/devstack",
        challengesFaced: [
          "Enforcing strict TypeScript interfaces across dynamic category filters and custom stack builder components.",
          "Preventing Next.js server-client hydration mismatches while persisting user-selected stacks in localStorage.",
          "Crafting a responsive, modern card grid with smooth feedback toast notifications.",
        ],
        futurePlans: [
          "Add GitHub authentication so users can save their stacks to a cloud database and share public profile links.",
          "Create a one-click 'Export to Markdown' feature so developers can paste their stack badges directly into GitHub READMEs.",
          "Add side-by-side comparison views for different full-stack frameworks.",
        ],
      },
    ],
  },

  // 10. Contact.tsx Data (Email, Phone, WhatsApp)
  contact: {
    sectionId: "contact",
    sectionTitle: "Get In Touch",
    sectionSubtitle: "Have a project in mind or want to discuss web development? Reach out directly!",
    contactInfo: {
      email: "samimsunny999@gmail.com",
      phone: "+880 1861805137",
      whatsapp: "+880 1861805137",
      location: "Dhaka, Bangladesh",
    },
    contactCards: [
      {
        id: "con-1",
        type: "Email",
        label: "Email Address",
        value: "samimsunny999@gmail.com",
        href: "mailto:samimsunny999@gmail.com",
        icon: "Mail",
      },
      {
        id: "con-2",
        type: "Phone",
        label: "Phone Number",
        value: "+880 1861805137",
        href: "tel:+8801861805137",
        icon: "Phone",
      },
      {
        id: "con-3",
        type: "WhatsApp",
        label: "WhatsApp",
        value: "+880 1861805137",
        href: "https://wa.me/8801861805137",
        icon: "MessageCircle",
      },
    ],
    formPlaceholders: {
      name: "Your Full Name",
      email: "Your Email Address",
      subject: "Project Inquiry / Collaboration",
      message: "Write your message here...",
      submitButtonText: "Send Message",
    },
  },

  // 11. Footer.tsx Data
  footer: {
    brandName: "Samim Uzzaman Sunny",
    tagline: "Full Stack Web Developer crafting clean, modern web experiences.",
    copyright: `© ${new Date().getFullYear()} Samim Uzzaman Sunny. All rights reserved.`,
    builtWith: "Designed & Built with Next.js, TypeScript & Tailwind CSS",
    scrollToTopLabel: "Back to Top",
  },
};

// ============================================================================
// NAMED EXPORTS FOR DIRECT COMPONENT IMPORT BY ANTIGRAVITY AGENT
// ============================================================================
export const navbarData = portfolioData.navbar;
export const heroData = portfolioData.hero;
export const aboutData = portfolioData.about;
export const skillsData = portfolioData.skills;
export const educationAndExperienceData = portfolioData.educationAndExperience;
export const projectsData = portfolioData.projectsSection;
export const contactData = portfolioData.contact;
export const footerData = portfolioData.footer;

export type PortfolioDataType = typeof portfolioData;
export type ProjectItemType = (typeof portfolioData.projectsSection.projects)[0];

export default portfolioData;