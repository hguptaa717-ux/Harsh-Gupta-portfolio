import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Harsh",
  lastName: "Gupta",
  name: "Harsh Gupta",
  role: "Business Analytics MBA Candidate",
  avatar: "/images/harsh-gupta.jpg..jpeg",
  email: "harsh.gupta37@s.amity.edu",
  location: "Asia/Kolkata",
  languages: ["English"],
  locale: "en",
};

const newsletter: Newsletter = {
  display: false,
  title: <>Updates from {person.firstName}</>,
  description: <>Business analytics, data, and process improvement.</>,
};

const social: Social = [
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/hguptaa717-ux",
    essential: true,
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/harshgupta-businessanalyst/",
    essential: true,
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
    essential: true,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name} | Business Analyst Portfolio`,
  description: "Business analytics portfolio of Harsh Gupta.",
  headline: <>Turning business data into clear, practical insights</>,
  featured: {
    display: false,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">Telecom Customer Churn Analysis</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Tableau dashboard
        </Text>
      </Row>
    ),
    href: "/work",
  },
  subline: (
    <>
      I’m {person.firstName}, a Business Analytics MBA candidate interested in
      business analysis, reporting, and process improvement. I use tools such
      as Excel, Power BI, and Tableau to organize information and communicate
      useful findings.
    </>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `${person.name} is a Business Analytics MBA candidate pursuing Business Analyst roles.`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: false,
    link: "",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        I’m pursuing an MBA in Business Analytics at Amity Business School,
        Amity University Uttar Pradesh. My experience includes analyzing
        operational data, reconciling financial transactions, supporting
        compliance, and improving Excel-based workflows. I’m interested in
        using data and clear communication to help teams understand business
        problems and make informed decisions.
      </>
    ),
  },
  work: {
    display: true,
    title: "Work Experience",
    experiences: [
      {
        company: "AGMS & Co",
        timeframe: "December 2024 – August 2025",
        role: "Accounts Assistant",
        achievements: [
          <>
            Validated and reconciled more than 100 monthly financial
            transactions across 20+ client accounts using Excel trackers.
          </>,
          <>
            Supported GST and TDS compliance for 15+ entities and coordinated
            documentation for regulatory filings.
          </>,
          <>
            Streamlined payroll workflows for 50+ employees, reducing manual
            errors by approximately 20%.
          </>,
        ],
        images: [],
      },
      {
        company: "Agile Capital Services",
        timeframe: "May 2026 – June 2026",
        role: "Management Trainee Intern",
        achievements: [
          <>
            Completed a structured management trainee program with
            cross-functional exposure to Sales, Marketing, HR, and Finance
            operations.
          </>,
          <>
            Analyzed operational data across four business functions, identified
            process gaps, and presented findings and recommendations in a
            remote capstone project.
          </>,
          <>
            Built cross-functional coordination and business understanding
            through direct exposure to core business operations.
          </>,
        ],
        images: [],
      },
      {
        company: "JS Bedi & Associates",
        timeframe: "January 2024 – February 2024",
        role: "Accounting Intern",
        achievements: [
          <>
            Assisted with payroll processing, employee data verification, GST
            reconciliation, and financial documentation.
          </>,
        ],
        images: [],
      },
      {
        company: "CA Vikas Bagga & Co.",
        timeframe: "June 2023",
        role: "Account Assistant Intern",
        achievements: [
          <>Performed GST reconciliation and prepared financial statements from trial balance data using Excel.</>,
          <>Created client profiles in Computax and assisted with Form 16 preparation.</>,
          <>Recorded bank, credit card, sales, purchase, and TDS entries in Tally Prime.</>,
        ],
        images: [],
      },
      {
        company: "JSBA Consulting Pvt. Ltd.",
        timeframe: "January 2023 – February 2023",
        role: "Account Assistant Intern",
        achievements: [],
        images: [],
      },
      {
        company: "KBDS & Co.",
        timeframe: "September 2022",
        role: "Account Assistant Intern",
        achievements: [],
        images: [],
      },
      {
        company: "Nitin Associates",
        timeframe: "March 2022",
        role: "Account Assistant Intern",
        achievements: [],
        images: [],
      },
    ],
  },
  studies: {
    display: true,
    title: "Education",
    institutions: [
      {
        name: "Amity Business School, Amity University Uttar Pradesh",
        description: <>MBA in Business Analytics, expected 2027.</>,
      },
      {
        name: "Dr. B. R. Ambedkar University, Delhi",
        description: <>Bachelor of Vocation (B.Voc), completed 2024.</>,
      },
    ],
  },
  technical: {
    display: true,
    title: "Tools & Skills",
    skills: [
      {
        title: "Analytics and reporting",
        description: <>Microsoft Excel, Power BI, and Tableau.</>,
        tags: [],
        images: [],
      },
      {
        title: "Business and finance operations",
        description: (
          <>
            Operational data analysis, transaction reconciliation, payroll
            workflows, and GST/TDS documentation.
          </>
        ),
        tags: [],
        images: [],
      },
      {
        title: "Other tools",
        description: <>Tally and Microsoft PowerPoint.</>,
        tags: [],
        images: [],
      },
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Business Analytics Notes",
  description: `Notes and projects by ${person.name}.`,
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Business analysis and data visualization projects by ${person.name}.`,
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Gallery – ${person.name}`,
  description: `A gallery by ${person.name}.`,
  images: [],
};

export { person, social, newsletter, home, about, blog, work, gallery };
