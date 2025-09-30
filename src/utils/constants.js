// asset for testimonial section
import maszul from "../assets/testimoni/maszul.jpeg";
import idham from "../assets/testimoni/idham.jpeg";
import masshamir from "../assets/testimoni/masshamir.jpeg";
import arham from "../assets/testimoni/arham.jpeg";
import ilham from "../assets/testimoni/ilham.jpeg";
import akbar from "../assets/testimoni/akbar.jpeg";
// asset for skill section
import html from "../assets/skill/html.png";
import sass from "../assets/skill/sass.png";
import typescript from "../assets/skill/typescript.svg";
import angular from "../assets/skill/angular.png";
import react from "../assets/skill/react.png";
import tailwind from "../assets/skill/tailwind.png";
import ant from "../assets/skill/antdesign.png";
import next from "../assets/skill/nextjs.png";
import vue from "../assets/skill/vue.png";
import redux from "../assets/skill/redux.svg";
import vite from "../assets/skill/vite.svg";
import jest from "../assets/skill/jest.png";
import git from "../assets/skill/git.svg";
import lighthouse from "../assets/skill/lighthouse.svg";
import flagsmith from "../assets/skill/flagsmith.png";
import firebase from "../assets/skill/firebase.svg";
// asset for projects section
import kellsblog from "../assets/projects/kellsblog.png";
import skribblclone from "../assets/projects/skribblclone.jpeg";
import multicursor from "../assets/projects/multicursor.png";
import appinfinid from "../assets/projects/appinfinid.png";
import apppijar from "../assets/projects/apppijar.png";
import linistoref from "../assets/projects/linistoref.jpg";
import miniemployeemng from "../assets/projects/miniemployeemng.png";
import pokedex from "../assets/projects/pokedex.png";
import jakmallpayment from "../assets/projects/jakmallpayment.png";
import sentimenanf from "../assets/projects/sentimenanf.jpg";
import kellsmoviezf from "../assets/projects/kellsmoviezf.jpg";
import kellnewsf from "../assets/projects/kellnewsf.jpg";
import moviewatchlist from "../assets/projects/moviewatchlist.JPG";
import kellsocmed from "../assets/projects/kellsocmed.JPG";
import potretbudayaf from "../assets/projects/potretbudayaf.jpg";
import freecodecamp from "../assets/projects/freecodecamp.JPG";
import {
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaSteam,
  FaWhatsapp,
} from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";
import { RiNotionFill } from "react-icons/ri";

export const WORK_EXPERIENCES = [
  {
    id: 1,
    period: "May 2023 - Present",
    position: "Front-End Engineer",
    company: "PT. Inovasi Finansial Untuk Indonesia (InfinID Group)",
    achievements: [
      "Contributed to multiple InfinID web projects, including App InfinID (Web & Mobile), SHIELD, Lender Marketplace, and EDITH.",
      "Collaborated with the design team to implement Figma designs into web applications, ensuring pixel-perfect accuracy and responsiveness.",
      "Designed and implemented custom UI-Kit private npm package library using Atomic Design Methodology, enabling reusable components across all InfinID web projects.",
      "Researched and integrated OpenFeature with Flagsmith provider for feature flagging, enabling rapid production deployments and improving engineering delivery.",
      "Introduced and prepared RFC for UAT Environment, collaborated with division heads to define requirements for beta testing.",
      "Integrated Google Analytics, Segment, and Adjust attribution tools into customer-facing web applications to enhance marketing data collection.",
      "Optimized web page performance using Google Lighthouse, resulting in improved load times and user experience.",
      "Reduced bundle sizes across all InfinID web projects by 26% through improved import strategies and cache control, achieving cost savings.",
      "Researched email monitoring to store logs and metrics to prometheus using simple nodejs post api with open telemetry.",
    ],
  },
  {
    id: 2,
    period: "June 2022 - March 2023",
    position: "Front-End Engineer",
    company: "PT. Sejahtera Lunaria Annua (Koinworks)",
    achievements: [
      "Successfully developed and deployed Business Calculator Webview for business user to calculate their Cost of Goods Sold and Break Even Point using React JS + Bootstrap",
      "Develop Influencer Marketplace to help business user find influencer for their product endorsement using Next JS",
      "Successfully developed and deployed Business Dashboard & Explore Page in Backoffice for add new feature menu with it's category in Business Account using Laravel + Vue JS",
      "Maintaining Koinbill Product Backoffice and revamp in transaction history and sub product CRUD using Laravel + Vue JS",
      "Maintaining NEO Backoffice feature config using React JS + Ant Design",
      "Maintaining NEO Payment Link Webview hotfixes React JS + Ant Design",
    ],
  },
  {
    id: 3,
    period: "September 2020 - May 2022",
    position: "Front-End Engineer",
    company: "PT. Kreasi Kode Digital (Codify - MacroAd)",
    description:
      "Task performed are, develop LINISTORE web-app and content management system (CMS) using angular, implement UI using ngx-bootstrap on angular website and integration API to backend using http services from angular and return it through pipe.",
    achievements: [
      "Successfully developed and deployed LINISTORE storefront for merchant and small shop for buying their product stocks using Angular JS and ngx-bootstrap. (https://linistore.id)",
      "Successfully developed and deployed LINISTORE admin CMS and warehouse CMS for master data and warehouse products.",
      "Successfully developed Know Your Customer (KYC) form for LINISTORE user with Google maps pinpoin location service for verifying user merchant.",
      "Develop Mobile Point of Sales (MPOS) using React Native to help LINISTORE merchant maintain their shop's stocks, consignment item and transaction.",
    ],
    additionalProjects: [
      {
        description:
          "In partnership with PT Gudang Anak Bangsa (KeepPack), develop Kelola Client and Staff CMS for maintaining warehouse goods using Angular JS and tailwind css :",
        achievements: [
          "Build dashboard page (total order, total sales, etc) with date filter in Kelola Client app.",
          "Successfully develop edit client and staff account data and profile pic, and edit account password.",
        ],
      },
    ],
  },
  {
    id: 4,
    period: "June 2019 - September 2019",
    position: "Front-End Engineer Intern",
    company: "PT. Lingkar Niaga Solusindo (SIRCLO)",
    achievements: [
      "Develop Template Development Kit (TDK) project using React JS and GraphQL.",
    ],
  },
];

export const ANIMATION_DELAYS = {
  TITLE: 0,
  PERIOD: 50,
  POSITION: 100,
  DESCRIPTION: 150,
  ACHIEVEMENT_BASE: 200,
  ACHIEVEMENT_INCREMENT: 50,
};

export const TESTIMONIALS = [
  {
    id: 1,
    name: "Zulfikar Idris",
    role: "VP Engineering @InfinID Group",
    linkedInProfile: "https://www.linkedin.com/in/zulfikar-idris-71938925/",
    image: maszul,
    testimonial:
      "Kevin is a dedicated and promising frontend engineer who consistently delivers clean, reliable code and scalable UI solutions, shows strong ownership in project execution, and demonstrates a growth mindset—making him a valuable team member with the potential to become a standout senior engineer.",
  },
  {
    id: 2,
    name: "Ahmad Idham T. Lubis",
    role: "Engineering Manager @InfinID Group",
    linkedInProfile: "https://www.linkedin.com/in/ahmad-idham-t-lubis/",
    image: idham,
    testimonial: `Working with Kevin has been one of the highlights of my time as an Engineering Manager. What strikes me most about Kevin is how effortlessly he brings people together, he has this natural ability to make everyone feel heard and valued, creating an environment where the whole team thrives. You'll rarely find someone more approachable or willing to lend a hand, regardless of how busy he is. Kevin's work ethic is something I deeply admire. He tackles every project with genuine dedication, staying late when needed and always following through on his commitments. But what really sets him apart is how he handles pressure. I've watched him navigate some of our most challenging deadlines and complex technical hurdles with a calm determination that keeps the entire team grounded. When things get tough, Kevin doesn't just persevere, he finds a way to keep everyone's spirits up while delivering exceptional results.
      
      Kevin isn't just a talented front-end engineer, he's the kind of person who makes you excited to come to work every day. Any team would be incredibly fortunate to have him.`,
  },
  {
    id: 3,
    name: "Shamir Hussein",
    role: "Engineering Manager @InfinID Group",
    linkedInProfile: "https://www.linkedin.com/in/shamirhusein/",
    image: masshamir,
    testimonial: `I had the pleasure of working with Kevin as a Frontend Engineer, and I can confidently say he is one of the most talented and reliable professionals I've encountered.

Kevin delivers high-quality work with impressive speed, ensuring smooth and efficient project progress. Beyond his technical skills, what truly stands out is his positive energy—his cheerful and supportive nature keeps the team motivated, even during tight deadlines.

What I admire most is his willingness to support other engineers whenever he finishes his tasks. Instead of stepping back, he steps up, offering help and guidance to his peers. This kind of teamwork is rare and invaluable.

Any team would be lucky to have Kevin—his combination of skill, dedication, and uplifting spirit makes him an exceptional engineer and an even better colleague.`,
  },
  {
    id: 4,
    name: "Arham Abiyan",
    role: "Sr. Software Engineer @InfinID Group",
    linkedInProfile: "https://www.linkedin.com/in/arham-abiyan/",
    image: arham,
    testimonial:
      "It was a pleasure to work with Kevin on infinID. Kevin is a talented frontend developer, proficient in React & TypeScript. He played a key role in developing several internal tools and customer platform, consistently delivering clean, efficient code that made a real impact on our user experience. What truly makes Kevin stand out is his positive and proactive approach to challenges. No task was too difficult, and he always met tight deadlines with enthusiasm and a creative, problem-solving mindset.",
  },
  {
    id: 5,
    name: "Ilham Anshari",
    role: "Software Engineer @InfinID Group",
    linkedInProfile: "https://www.linkedin.com/in/ilham-anshari/",
    image: ilham,
    testimonial: `Kevin is a talented frontend engineer with a strong eye for user experience and detail. He consistently delivers clean, responsive, and maintainable UI components that make the product look and feel great.
      
      He’s also a great teammate—collaborative, open to feedback, and always ready to find solutions when challenges come up. Working with Kevin has been a smooth and productive experience.`,
  },
  {
    id: 6,
    name: "Akbar Idria",
    role: "Frontend Engineer @InfinID Group",
    linkedInProfile: "https://www.linkedin.com/in/akbaridria/",
    image: akbar,
    testimonial:
      "Kevin is a great frontend engineer, especially with React. He always pays attention to detail and creates clean, high-quality UI. He’s also very eager to learn new things and improve his skills. Working with him is always a great experience. reliable, skilled, and passionate about frontend development.",
  },
];

export const CONTACTS = [
  {
    id: 1,
    platform: "LinkedIn",
    url: "https://www.linkedin.com/in/kevin-isyanta-b5962117b/",
    icon: <FaLinkedin />,
    content: "Kevin Kelly Isyanta",
    bgColor: "#0e76a8",
    cColor: "text-white",
  },
  {
    id: 2,
    platform: "GitHub",
    url: "https://github.com/kevinkellyyyy",
    icon: <FaGithub />,
    content: "kevinkellyyyy",
    bgColor: "#171515",
    cColor: "text-white",
  },
  {
    id: 3,
    platform: "WhatsApp",
    url: "https://wa.me/6282297017693",
    icon: <FaWhatsapp />,
    content: "+6282297017693",
    bgColor: "#25d366",
    cColor: "text-black",
  },
  {
    id: 4,
    platform: "Email",
    url: "mailto:kellyisyanta@gmail.com",
    icon: <MdAlternateEmail />,
    content: "kellyisyanta@gmail.com",
    bgColor: "#ea4355",
    cColor: "text-white",
  },
  {
    id: 5,
    platform: "Instagram",
    url: "https://www.instagram.com/kevinkellyyyy",
    icon: <FaInstagram />,
    content: "@kevinkellyyyy",
    bgColor: "#8134af",
    cColor: "text-white",
  },
  {
    id: 6,
    platform: "Notion",
    url: "https://kevinkellyyyy.notion.site/Welcome-to-Kell-s-Notion-23e9ff12179c801eb033cb7fd6af84f3",
    icon: <RiNotionFill />,
    content: "Kell's Notion",
    bgColor: "#ffc526",
    cColor: "text-black",
  },
  {
    id: 7,
    platform: "Steam",
    url: "https://steamcommunity.com/id/zhypr",
    icon: <FaSteam />,
    content: "zhypr",
    bgColor: "#122832",
    cColor: "text-white",
  },
];

export const SKILL = [
  {
    id: 1,
    name: "HTML",
    icon: html,
    titleClassName: "my-4",
  },
  {
    id: 2,
    name: "SASS",
    icon: sass,
    titleClassName: "mt-5",
  },
  {
    id: 3,
    name: "TYPESCRIPT",
    icon: typescript,
    titleClassName: "my-4",
  },
  {
    id: 4,
    name: "REACT JS",
    icon: react,
    titleClassName: "my-4",
  },
  {
    id: 5,
    name: "ANT DESIGN",
    icon: ant,
    titleClassName: "my-4",
  },
  {
    id: 6,
    name: "REDUX TOOLKIT",
    icon: redux,
    titleClassName: "my-4",
  },
  {
    id: 7,
    name: "VITE",
    icon: vite,
    titleClassName: "my-4",
  },
  {
    id: 8,
    name: "JEST",
    icon: jest,
    titleClassName: "my-4",
  },
  {
    id: 9,
    name: "GIT",
    icon: git,
    titleClassName: "mt-6",
  },
  {
    id: 10,
    name: "FIREBASE",
    icon: firebase,
    titleClassName: "my-4",
  },
  {
    id: 11,
    name: "FLAGSMITH",
    icon: flagsmith,
    titleClassName: "mt-6",
  },
  {
    id: 12,
    name: "LIGHTHOUSE",
    icon: lighthouse,
    titleClassName: "mt-6",
  },
  {
    id: 13,
    name: "NEXT JS",
    icon: next,
    titleClassName: "my-4",
  },
  {
    id: 14,
    name: "TAILWIND CSS",
    icon: tailwind,
    titleClassName: "my-4",
  },
  {
    id: 15,
    name: "ANGULAR",
    icon: angular,
    titleClassName: "my-4",
  },
  {
    id: 16,
    name: "VUE JS",
    icon: vue,
    titleClassName: "my-4",
  },
];

export const PROJECTS = [
  // -nextjs Blogs (next js + shadcn/ui + prisma orm + neon db + kinde auth)
  // -live multi user cursor realtime view (websocket)
  // -live multi user drawing board (websocket socket.io)
  // -infinid customer web app (react + typescript + redux toolkit + custom ui-kit + feature flag + jest + lighthouse + google analytics + google maps)
  // -pijar customer web app (react + typescript + redux toolkit + ant design + feature flag + jest + lighthouse + adjust attribution)
  // -store inventory management system (react + supabase) (on progress)
  // -Linistore (angular)
  // -(movie watchlist) the movie db
  // -freeCodeCamp projects (vanilla js + html + css) (
  // Random Quotes
  // Markdown Previewer
  // Drum Machine
  // JavaScript Calculator
  // Pomodoro Clock
  // )
  // takehome test project (
  // -employee management system (angular)
  // -test sprout (pokedex)
  // -test jakmal (simple e-commerce shipping and payment)
  // -test codify (simple ig clone)
  // )
  // college projects (
  // -Skripsi
  // -Ragam Budaya
  // -kell's moviez (vanilla js with fetch api from movie db)
  // -kell's blog (java android)
  // )
  {
    id: 1,
    name: "Kell's Blog",
    description:
      "Create and share your stories effortlessly! With our platform, anyone can explore and read blog posts, while registered users can sign up to publish, edit, and manage their own blogs. Whether you just want to browse as a guest or build your own blogging space, the choice is yours. Start reading, start writing, start connecting.",
    technologies: [
      "Next.js",
      "Tailwind",
      "Prisma ORM",
      "Neon DB",
      "Kinde Auth",
    ],
    image: kellsblog,
    liveDemo: "https://crud-blog-neon-db-prisma-orm.vercel.app/",
    sourceCode: "https://github.com/kevinkellyyyy/crud-blog-neon-db-prisma-orm",
  },
  {
    id: 2,
    name: "Live Multi-User Cursor Realtime Position View",
    description:
      "This simple React + Node.js app uses WebSocket to bring multiple users together on one screen. Just enter your name, and your live cursor appears instantly alongside others. Built as a learning project with a client–server monorepo, it’s a fun demo of WebSocket in action (not a full production release, just for exploration).",
    technologies: ["React.js", "Node.js", "WebSocket", "Express.js"],
    image: multicursor,
    liveDemo: "https://live-cursor-multi-user.vercel.app/",
    sourceCode: "https://github.com/kevinkellyyyy/live-cursor-multi-user",
  },
  {
    id: 15,
    name: "Simple Skribbl.io drawing game clone",
    description:
      "This simple Next + Node.js app uses socket.io to bring multiple users drawing together on one screen. Just open and it will broadcast to all open client window. Built as a learning project with a client–server monorepo, it’s a fun demo of socket.io in action (not a full production release, just for exploration, need more polish such as add username and cursor).",
    technologies: ["Next.js", "Node.js", "Socket.io", "Express.js"],
    image: skribblclone,
    liveDemo: "https://simple-skribblio-clone.vercel.app/",
    sourceCode: "https://github.com/kevinkellyyyy/simple-skribblio-clone",
  },
  {
    id: 16,
    name: "Infinid Customer Web App",
    description:
      "In this project, I led the revamp from the initial vendor version up to version 4, adapting it to business needs while also introducing several improvements. These included the addition of a custom private UI-kit library, mobile responsiveness, attribution tools, A/B Testing, feature flagging, file upload with real-time size progress, web accessibility and caching optimizations, Unit testing (jest), as well as Google Maps pinpoint integration.",
    technologies: [
      "React.js",
      "TypeScript",
      "Redux Toolkit",
      "Custom UI-Kit",
      "Feature Flag",
      "Jest",
      "Lighthouse",
      "Google Analytics",
      "Google Maps",
    ],
    image: appinfinid,
    liveDemo: null,
    sourceCode: "https://app.infinid.id/",
  },
  {
    id: 17,
    name: "Pijar Customer Web App",
    description:
      "I was involved from the initiation of the repository. My responsibilities included building entry forms for prospective debtors, document upload features, integrating OCR for KTP & KK. with a strong focus on mobile view since it's main purpose was to serve as a backup during the transition period when the mobile app difficult timeline. Implementing adjusted attribution, unit testing, accessibility optimizations, and feature flagging.",
    technologies: [
      "React.js",
      "TypeScript",
      "Redux Toolkit",
      "Ant Design",
      "Feature Flag",
      "Jest",
      "Lighthouse",
      "Adjust Attribution",
    ],
    image: apppijar,
    liveDemo: null,
    sourceCode: "https://app.pijar.com/",
  },
  {
    id: 3,
    name: "Mini Inventory Management System (On Progress)",
    description:
      "A simple inventory management system built with React and Supabase. It allows users to manage products, categories, and suppliers with full CRUD functionality. Features include product listing, category management, supplier management, and responsive design for seamless use across devices.",
    technologies: ["React.js", "Supabase", "Ant Design", "Vite"],
    image: "",
    liveDemo: "",
    sourceCode:
      "https://github.com/kevinkellyyyy/store-inventory-with-supabase",
  },
  {
    id: 4,
    name: "LINISTORE",
    description:
      "LINISTORE is a B2B e-commerce platform that helps small shops and merchants in Indonesia to buy product stocks directly from suppliers. It offers a wide range of products, competitive prices, and convenient ordering and delivery options.",
    technologies: ["Angular", "Bootstrap", "TypeScript"],
    image: linistoref,
    liveDemo: null,
    sourceCode: "https://linistore.id",
  },
  {
    id: 5,
    name: "Movie Watchlist",
    description:
      "A simple React app that allows users to search for movies and TV shows using The Movie Database (TMDb) API. Users can add movies and shows to their watchlist, view details, and manage their list with local storage.",
    technologies: ["React.js", "Redux", "The Movie DB API"],
    image: moviewatchlist,
    liveDemo: "https://kevinkellyyyy-movie-watchlist.vercel.app/",
    sourceCode: "https://github.com/kevinkellyyyy/movie-watchlist",
  },
  {
    id: 6,
    name: "FreeCodeCamp Projects",
    description:
      "A collection of mini projects built using vanilla JavaScript, HTML, and CSS as part of the FreeCodeCamp curriculum. Projects include a Random Quote Generator, Markdown Previewer, Drum Machine, JavaScript Calculator, and Pomodoro Clock.",
    technologies: ["JavaScript", "HTML", "CSS"],
    image: freecodecamp,
    liveDemo: "https://kevinkellyyyy-fcc-projects.vercel.app/",
    sourceCode: "",
  },
  {
    id: 7,
    name: "Employee Management System (Take-Home Test Project)",
    description:
      "A simple employee management system built with Angular as part of a take-home test project. It allows users to view, add, edit, and delete employee records with a user-friendly interface.",
    technologies: ["Angular", "Material UI", "Tailwind CSS"],
    image: miniemployeemng,
    liveDemo: "https://employee-management-mini-proj.vercel.app/",
    sourceCode:
      "https://github.com/kevinkellyyyy/employee-management-mini-proj",
  },
  {
    id: 8,
    name: "POKEDEX (Take-Home Test Project)",
    description:
      "A simple Pokedex app built with React as part of a take-home test project. It allows users to search for Pokemon, view details, and manage their favorite list using the PokeAPI.",
    technologies: ["React.js", "PokeAPI", "Bootstrap"],
    image: pokedex,
    liveDemo: "https://test-sprout.vercel.app/",
    sourceCode: "https://github.com/kevinkellyyyy/test-sprout",
  },
  {
    id: 9,
    name: "Kell's Socmed (Take-Home Test Project)",
    description:
      "Angular JS based simple socmed app (instagram clone) that display list user and their detail post with dummy.io API.",
    technologies: ["Angular", "Bootstrap"],
    image: kellsocmed,
    liveDemo: "https://kells-socmed.vercel.app/",
    sourceCode: "https://github.com/kevinkellyyyy/codify-test-frontend",
  },
  {
    id: 10,
    name: "Simple Payment & Shipping E-Commerce (Take-Home Test Project)",
    description:
      "A simple e-commerce web app for selecting shipping options and payment methods, built with React JS as part of a take-home test project.",
    technologies: ["React.js", "Redux"],
    image: jakmallpayment,
    liveDemo: "https://tes-jakmall.vercel.app/",
    sourceCode: "https://github.com/kevinkellyyyy/tes-jakmall",
  },
  {
    id: 11,
    name: "Sentiment analysis in Ecommerce Platform (Thesis Project)",
    description:
      "Using Multilayer Perceptron (MLP) for ML classification algorithm, and FastText for word embedding",
    technologies: ["Python", "Machine Learning", "Flask", "HTML", "CSS"],
    image: sentimenanf,
    liveDemo: "",
    sourceCode:
      "https://www.warse.org/IJATCSE/static/pdf/file/ijatcse171942020.pdf",
  },
  {
    id: 12,
    name: "Kell's Moviez (College Project)",
    description:
      "A simple movie browsing web app using The Movie Database (TMDb) API built with vanilla JavaScript, HTML, and CSS.",
    technologies: ["JavaScript", "HTML", "CSS", "The Movie DB API"],
    image: kellsmoviezf,
    liveDemo: "https://kellsmovies.surge.sh/",
    sourceCode: "https://github.com/kevinkellyyyy/kellsmoviez",
  },
  {
    id: 13,
    name: "Kell's News (College Project)",
    description:
      "Java android based app using News API to display news headlines and details.",
    technologies: ["Java", "Android", "News API"],
    image: kellnewsf,
    liveDemo: "",
    sourceCode: "https://github.com/kevinkellyyyy/kellnews",
  },
  {
    id: 14,
    name: "Ragam Budaya (College Project)",
    description:
      "Angular Ionic based app for educational and fun, take and share your pic with included fun frame and take the Indonesian knowledge quiz",
    technologies: ["Ionic Angular", "Cordova", "Android"],
    image: potretbudayaf,
    liveDemo:
      "https://play.google.com/store/apps/details?id=app.hatchoko.ragambudaya",
    sourceCode: "https://github.com/agustinusnathaniel/ragambudaya",
  },
];
