import maszul from "../assets/testimoni/maszul.jpeg";
import idham from "../assets/testimoni/idham.jpeg";
import masshamir from "../assets/testimoni/masshamir.jpeg";
import arham from "../assets/testimoni/arham.jpeg";
import ilham from "../assets/testimoni/ilham.jpeg";
import akbar from "../assets/testimoni/akbar.jpeg";

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
