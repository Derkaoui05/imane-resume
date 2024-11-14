import { Code,  Palette, Server, Smartphone } from 'lucide-react';

export interface Service {
  title: string;
  description: string;
  icon: React.ElementType;
  tags: string[];
}

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  status: 'completed' | 'in-progress' | 'coming-soon';
  link?: string;
  github?: string;
}


export const services: Service[] = [
  {
    title: "Web Development",
    description: "Creating responsive and performant web applications using modern frameworks and best practices.",
    icon: Code,
    tags: ["React", "Next.js", "TypeScript", "Tailwind CSS"]
  },
  {
    title: "Mobile App Development",
    description: "Building cross-platform mobile applications that provide seamless user experiences.",
    icon: Smartphone,
    tags: ["React Native", "Flutter", "iOS", "Android"]
  },
  {
    title: "Backend Development",
    description: "Designing and implementing robust server-side solutions and APIs to power your applications.",
    icon: Server,
    tags: ["Node.js", "Python", "GraphQL", "REST"]
  },
  {
    title: "UI/UX Design",
    description: "Creating intuitive and visually appealing user interfaces that enhance user engagement.",
    icon: Palette,
    tags: ["Figma", "Adobe XD", "Prototyping", "User Research"]
  }
];




export const projects: Project[] = [
  {
    id: 1,
    title: "E-commerce Platform",
    description: "A comprehensive e-commerce solution built with React and Node.js. Features include real-time inventory management, secure payment processing with Stripe, and a responsive admin dashboard. Implemented advanced caching strategies and optimized database queries for enhanced performance.",
    image: "/ecommerce.jpg",
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
    status: "completed",
    link: "https://example.com/ecommerce",
    github: "https://github.com/Imane029"
  },
  {
    id: 2,
    title: "Task Management App",
    description: "A collaborative task management application enabling teams to organize projects efficiently. Built with Vue.js and Firebase, featuring real-time updates, team chat functionality, and customizable workflow automation. Currently implementing advanced filtering and reporting features.",
    image: "/task.avif",
    tags: ["Vue.js", "Firebase", "Tailwind CSS"],
    status: "in-progress"
  },
  {
    id: 3,
    title: "AI-Powered Content Generator",
    description: "An innovative tool leveraging artificial intelligence to generate high-quality, context-aware content for various platforms. Will utilize advanced NLP techniques and machine learning models to understand context and produce relevant, engaging content automatically.",
    image: "/ai.webp",
    tags: ["Python", "TensorFlow", "NLP", "React"],
    status: "coming-soon"
  }
];


interface Experience {
  year: string
  title: string
  company: string
  description: string
  achievements: string[]
}

export const experiences: Experience[] = [
  {
    year: "2023",
    title: "Senior Software Engineer",
    company: "Tech Innovators Inc.",
    description: "Led a team of developers in creating cutting-edge web applications using Next.js and React.",
    achievements: [
      "Improved application performance by 40% through code optimization",
      "Implemented CI/CD pipeline, reducing deployment time by 60%",
      "Mentored junior developers, increasing team productivity by 25%"
    ]
  },
  {
    year: "2021",
    title: "Full Stack Developer",
    company: "Digital Solutions Ltd.",
    description: "Developed and maintained multiple client projects using various web technologies.",
    achievements: [
      "Designed and implemented a scalable microservices architecture",
      "Reduced server costs by 30% through efficient database optimization",
      "Received 'Employee of the Year' award for outstanding performance"
    ]
  },
  {
    year: "2019",
    title: "Junior Web Developer",
    company: "StartUp Ventures",
    description: "Assisted in the development of the company's main product, a social media management tool.",
    achievements: [
      "Contributed to the front-end development using React and Redux",
      "Implemented responsive design, improving mobile user experience",
      "Participated in code reviews and improved coding standards"
    ]
  }
]