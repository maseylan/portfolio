import { Logo } from "@/once-ui/components";

const person = {
  firstName: "Rafli",
  lastName: "Ahmad Fachrezi",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Developer/QA Engineer",
  avatar: "/images/pp_ico.jpg",
  email: "rafliahmad758@gmail.com",
  location: "Asia/Jakarta", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "Bahasa"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      I occasionally write technology, and share thoughts on the intersection of
      creativity and engineering.
    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/maseylan",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/rafli-ahmad-078155200/",
  },
  {
    name: "X",
    icon: "x",
    link: "",
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
  },
];

const home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>GUI-Based Web Automation Tool</>,
  featured: {
    display: true,
    title: <>Recent project: <strong className="ml-4">GUI Automation Tool</strong></>,
    href: "/work/building-once-ui-a-customizable-design-system",
  },
  subline: (
    <>
      In this project, I developed a desktop automation tool using Python's Tkinter for the graphical user interface and Selenium for web automation.
      The application allows users to interact with a simple and intuitive GUI to automate repetitive web tasks such as logging in, filling out forms, and extracting data from websites.      
    </>
  ),
};

const about = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https:/wa.me/6821383923640",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        I am a Developer and QA Engineer based in Cikarang, West Java, Indonesia. 
        I specialize in automation testing using Python and web development with Next.js. With hands-on experience in building efficient and scalable solutions, I focus on delivering high-quality software through robust testing and modern development practices. 
        Passionate about continuous learning and leveraging technology to improve workflows, I thrive in dynamic environments where innovation and quality are key.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "Tilabs",
        timeframe: "2025 - Present",
        role: "QA Engineer",
        achievements: [
          <>
            Creating Over 80+ Test cases in Odoo application.
          </>,
          <>
            Automation with GUI tool. using Tkinter to create a clean, responsive interface where users can input parameters or control automation processes. The backend logic, powered by Selenium, handles the dynamic interaction with web pages, such as clicking buttons, entering text, and extracting data — all controlled seamlessly through the GUI.
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/projects/project-01/porto.jpg",
            alt: "Once UI Project",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "Lestari Jaya Raya",
        timeframe: "2024 - 2025",
        role: "Functional",
        achievements: [
          <>
            Improving Bussines Workflow for Inventory and Purchasing Web and Mobile application.
          </>,
          <>
            Designed to streamline supply chain operations, track stock levels, and automate purchase workflows. This system allows users to manage vendors, monitor inventory movements, generate purchase orders, and receive stock updates in real time.        
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "University of Jakarta - Mathematics",
        timeframe : "2020 - Presenst",
        description: <>Mathematics</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Python",
        description: <>
      <br/>
      <h2>Overview</h2>
      <br/>
      <p>Experienced Python Developer with 2+ years of hands-on development across multiple domains including web development, machine learning, financial technology, and automation. Proven ability to deliver end-to-end solutions using modern Python frameworks and libraries.</p>
      
      <br/>
      <h2>Core Competencies</h2>
      <br/>

      <h3>Web Development & Frameworks</h3>
      <ul>
          <li><strong>Django:</strong> Full-stack web application development with robust backend architecture</li>
          <li><strong>Flask:</strong> Lightweight web services and API development for rapid prototyping and microservices</li>
          <li>Experience building scalable web applications with proper MVC architecture and database integration</li>
      </ul>

      <h3>Machine Learning & Data Science</h3>
      <ul>
          <li><strong>PyTorch:</strong> Deep learning model development, neural network architecture design, and training pipelines</li>
          <li><strong>NumPy:</strong> Advanced numerical computing, array operations, and mathematical computations</li>
          <li>Hands-on experience with model training, optimization, and deployment workflows</li>
      </ul>

      <h3>Automation & Data Processing</h3>
      <ul>
          <li><strong>Selenium:</strong> Web scraping, browser automation, and testing framework implementation</li>
          <li><strong>OpenPyXL:</strong> Excel file manipulation, automated report generation, and data pipeline development</li>
          <li>Expertise in building robust automation solutions for repetitive tasks</li>
      </ul>

      <h2>Technical Proficiencies</h2>
      <ul>
          <li><strong>Languages:</strong> Python (2+ years professional experience)</li>
          <li><strong>Development Approach:</strong> Object-oriented programming, API integration, database management</li>
          <li><strong>Problem Solving:</strong> Complex algorithm implementation, performance optimization</li>
          <li><strong>Project Delivery:</strong> End-to-end solution development from concept to deployment</li>
      </ul>

      <h2>Professional Strengths</h2>
      <ul>
          <li><strong>Versatile Skill Set:</strong> Ability to work across web development, data science, and financial technology domains</li>
          <li><strong>Integration Expertise:</strong> Experience connecting multiple systems and APIs for comprehensive solutions</li>
          <li><strong>Automation Focus:</strong> Strong background in building tools that improve efficiency and reduce manual work</li>
          <li><strong>Continuous Learning:</strong> Demonstrated ability to master diverse libraries and adapt to new technologies</li>
      </ul>

      <h2>Value Proposition</h2>
      <p>Brings a unique combination of web development expertise, machine learning capabilities, and financial technology knowledge. Capable of building comprehensive solutions that span from data collection and processing to web-based user interfaces and automated trading systems.</p>
      <br/>
      <h2>Technology Stack</h2>
      <br/>
      <h3><strong>Libraries & Frameworks</strong></h3>
      <ul>
          <li>Django</li>
          <li>Flask</li>
          <li>PyTorch</li>
          <li>NumPy</li>
          <li>Selenium</li>
          <li>Rest API</li>
          <li>OpenPyXL</li>
      </ul>

      <h3>Core Skills</h3>
      <ul>
          <li>Web Development</li>
          <li>Machine Learning</li>
          <li>Financial Technology</li>
          <li>Automation</li>
          <li>Data Processing</li>
      </ul>
      </>,
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/porto.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Next.js",
        description: <>Building next gen apps with Next.js + Once UI + Supabase.</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-04.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
    ],
  },
};

const blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
