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



interface DeveloperTool {
  name: string
  icon: React.ReactNode
  color: string
  category: 'language' | 'tool'
}

export const developerTools: DeveloperTool[] = [
  {
    name: "Java",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
        <path d="M8.851 18.56s-.917.534.653.714c1.902.218 2.874.187 4.969-.211 0 0 .552.346 1.321.646-4.699 2.013-10.633-.118-6.943-1.149M8.276 15.933s-1.028.761.542.924c2.032.209 3.636.227 6.413-.308 0 0 .384.389.987.602-5.679 1.661-12.007.13-7.942-1.218M13.116 11.475c1.158 1.333-.304 2.533-.304 2.533s2.939-1.518 1.589-3.418c-1.261-1.772-2.228-2.652 3.007-5.688 0-.001-8.216 2.051-4.292 6.573M19.33 20.504s.679.559-.747.991c-2.712.822-11.288 1.069-13.669.033-.856-.373.75-.89 1.254-.998.527-.114.828-.093.828-.093-.953-.671-6.156 1.317-2.643 1.887 9.58 1.553 17.462-.7 14.977-1.82M9.292 13.21s-4.362 1.036-1.544 1.412c1.189.159 3.561.123 5.77-.062 1.806-.152 3.618-.477 3.618-.477s-.637.272-1.098.587c-4.429 1.165-12.986.623-10.522-.568 2.082-1.006 3.776-.892 3.776-.892M17.116 17.584c4.503-2.34 2.421-4.589.968-4.285-.355.074-.515.138-.515.138s.132-.207.385-.297c2.875-1.011 5.086 2.981-.928 4.562 0-.001.07-.062.09-.118M14.401 0s2.494 2.494-2.365 6.33c-3.896 3.077-.888 4.832-.001 6.836-2.274-2.053-3.943-3.858-2.824-5.539 1.644-2.469 6.197-3.665 5.19-7.627M9.734 23.924c4.322.277 10.959-.153 11.116-2.198 0 0-.302.775-3.572 1.391-3.688.694-8.239.613-10.937.168 0-.001.553.457 3.393.639" />
      </svg>
    ),
    color: "bg-red-500",
    category: 'language'
  },
  {
    name: "React.js",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
        <path d="M12 9.861A2.139 2.139 0 1 0 12 14.139 2.139 2.139 0 1 0 12 9.861zM6.008 16.255l-.472-.12C2.018 15.246 0 13.737 0 11.996s2.018-3.25 5.536-4.139l.472-.119.133.468a23.53 23.53 0 0 0 1.363 3.578l.101.213-.101.213a23.307 23.307 0 0 0-1.363 3.578l-.133.467zM5.317 8.95c-2.674.751-4.315 1.9-4.315 3.046 0 1.145 1.641 2.294 4.315 3.046a24.95 24.95 0 0 1 1.182-3.046A24.752 24.752 0 0 1 5.317 8.95zM17.992 16.255l-.133-.469a23.357 23.357 0 0 0-1.364-3.577l-.101-.213.101-.213a23.42 23.42 0 0 0 1.364-3.578l.133-.468.473.119c3.517.889 5.535 2.398 5.535 4.14s-2.018 3.25-5.535 4.139l-.473.12zm-.491-4.259c.48 1.039.877 2.06 1.182 3.046 2.675-.752 4.315-1.901 4.315-3.046 0-1.146-1.641-2.294-4.315-3.046a24.788 24.788 0 0 1-1.182 3.046zM5.31 8.945l-.133-.467C4.188 4.992 4.488 2.494 6 1.622c1.483-.856 3.864.155 6.359 2.716l.34.349-.34.349a23.552 23.552 0 0 0-2.422 2.967l-.135.193-.235.02a23.657 23.657 0 0 0-3.785.61l-.472.119zm1.896-6.63c-.268 0-.505.058-.705.173-.994.573-1.17 2.565-.485 5.253a25.122 25.122 0 0 1 3.233-.501 24.847 24.847 0 0 1 2.052-2.544c-1.56-1.519-3.037-2.381-4.095-2.381zM16.795 22.677c-.001 0-.001 0 0 0-1.425 0-3.255-1.073-5.154-3.023l-.34-.349.34-.349a23.53 23.53 0 0 0 2.421-2.968l.135-.193.234-.02a23.63 23.63 0 0 0 3.787-.609l.472-.119.134.468c.987 3.484.688 5.983-.824 6.854a2.38 2.38 0 0 1-1.205.308zm-4.096-3.381c1.56 1.519 3.037 2.381 4.095 2.381h.001c.267 0 .505-.058.704-.173.994-.573 1.171-2.566.485-5.254a25.02 25.02 0 0 1-3.234.501 24.674 24.674 0 0 1-2.051 2.545zM18.69 8.945l-.472-.119a23.479 23.479 0 0 0-3.787-.61l-.234-.02-.135-.193a23.414 23.414 0 0 0-2.421-2.967l-.34-.349.34-.349C14.135 1.778 16.515.767 18 1.622c1.512.872 1.812 3.37.824 6.855l-.134.468zM14.75 7.24c1.142.104 2.227.273 3.234.501.686-2.688.509-4.68-.485-5.253-.988-.571-2.845.304-4.8 2.208A24.849 24.849 0 0 1 14.75 7.24zM7.206 22.677A2.38 2.38 0 0 1 6 22.369c-1.512-.871-1.812-3.369-.823-6.854l.132-.468.472.119c1.155.291 2.429.496 3.785.609l.235.02.134.193a23.596 23.596 0 0 0 2.422 2.968l.34.349-.34.349c-1.898 1.95-3.728 3.023-5.151 3.023zm-1.19-6.427c-.686 2.688-.509 4.681.485 5.254.987.563 2.843-.305 4.8-2.208a24.998 24.998 0 0 1-2.052-2.545 24.976 24.976 0 0 1-3.233-.501zM12 16.878c-.823 0-1.669-.036-2.516-.106l-.235-.02-.135-.193a30.388 30.388 0 0 1-1.35-2.122 30.354 30.354 0 0 1-1.166-2.228l-.1-.213.1-.213a30.3 30.3 0 0 1 1.166-2.228c.414-.716.869-1.43 1.35-2.122l.135-.193.235-.02a29.785 29.785 0 0 1 5.033 0l.234.02.134.193a30.006 30.006 0 0 1 2.517 4.35l.101.213-.101.213a29.6 29.6 0 0 1-2.517 4.35l-.134.193-.234.02c-.847.07-1.694.106-2.517.106zm-2.197-1.084c1.48.111 2.914.111 4.395 0a29.006 29.006 0 0 0 2.196-3.798 28.585 28.585 0 0 0-2.197-3.798 29.031 29.031 0 0 0-4.394 0 28.477 28.477 0 0 0-2.197 3.798 29.114 29.114 0 0 0 2.197 3.798z" />
      </svg>
    ),
    color: "bg-blue-400",
    category: 'language'
  },
  {
    name: "Angular",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
        <path d="M9.931 12.645h4.138l-2.07-4.908m0-7.737L.68 3.982l1.726 14.771L12 24l9.596-5.242L23.32 3.984 11.999.001zm7.064 18.31h-2.638l-1.422-3.503H8.996l-1.422 3.504h-2.64L12 2.65z" />
      </svg>
    ),
    color: "bg-red-600",
    category: 'language'
  },
  {
    name: "SQL",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
        <path d="M19.15 8.23c-.04-.07-.09-.13-.13-.2-1.44-2.27-5.25-3.38-11.39-3.38-1.69 0-3.13.11-4.33.29C3.1 5 3 5.08 3 5.15v12.34c0 .22.17.4.4.4.09 0 .18-.03.25-.08 1.02-.73 4.82-1.13 9.02-1.13 4.19 0 7.99.4 9.02 1.13.07.05.16.08.25.08.22 0 .4-.18.4-.4v-8.3c-.27-.29-.56-.57-.87-.83-.01-.01-.02-.02-.03-.03-.02-.02-.04-.04-.07-.06-.1-.08-.2-.17-.31-.25-.01-.01-.02-.02-.04-.03-.12-.09-.25-.18-.38-.27-.02-.01-.04-.03-.06-.04-.12-.08-.26-.16-.39-.24-.03-.02-.06-.03-.09-.05-.14-.07-.28-.14-.43-.21-.05-.02-.1-.05-.15-.07-.16-.07-.32-.13-.48-.19-.06-.02-.12-.05-.19-.07-.2-.07-.4-.13-.61-.19-.06-.02-.13-.04-.2-.05-.2-.05-.41-.1-.63-.14-.08-.02-.16-.03-.24-.05-.22-.04-.44-.08-.67-.11-.09-.01-.18-.03-.27-.04-.3-.04-.61-.07-.93-.09-.08-.01-.16-.01-.24-.02-.4-.02-.81-.04-1.23-.04s-.83.02-1.23.04c-.08.01-.16.01-.24.02-.32.02-.63.05-.93.09-.09.01-.18.03-.27.04-.23.03-.45.07-.67.11-.08.02-.16.03-.24.05-.22.04-.43.09-.63.14-.07.01-.14.03-.2.05-.21.06-.41.12-.61.19-.07.02-.13.05-.19.07-.16.06-.32.12-.48.19-.05.02-.1.05-.15.07-.15.07-.29.14-.43.21-.03.02-.06.03-.09.05-.13.08-.27.16-.39.24-.02.01-.04.03-.06.04-.13.09-.26.18-.38.27-.01.01-.02.02-.04.03-.11.08-.21.17-.31.25-.03.02-.05.04-.07.06-.01.01-.02.02-.03.03-.31.26-.6.54-.87.83v.01c-.01.01-.01.02-.02.03v1.21c0 3.85 5.5 4.5 11.34 4.5 5.55 0 10.82-.59 11.32-4.11v-5.6zm-11.97 9.43c-4.49 0-8.55-.37-9.69-1.19v-.78c2.01.44 5.28.65 9.69.65 4.4 0 7.68-.21 9.69-.65v.78c-1.14.82-5.2 1.19-9.69 1.19zm9.69-2.99c-1.14.82-5.2 1.19-9.69 1.19-4.49 0-8.55-.37-9.69-1.19v-.78c2.01.44 5.28.65 9.69.65 4.4 0 7.68-.21 9.69-.65v.78zm0-2.59c-1.14.82-5.2 1.19-9.69 1.19-4.49 0-8.55-.37-9.69-1.19v-.78c2.01.44 5.28.65 9.69.65 4.4 0 7.68-.21 9.69-.65v.78zm0-2.59c-1.14.82-5.2 1.19-9.69 1.19-4.49 0-8.55-.37-9.69-1.19v-.78c2.01.44 5.28.65 9.69.65 4.4 0 7.68-.21 9.69-.65v.78zm0-2.59c-1.14.82-5.2 1.19-9.69 1.19-4.49 0-8.55-.37-9.69-1.19v-.78c2.01.44 5.28.65 9.69.65 4.4 0 7.68-.21 9.69-.65v.78z" />
      </svg>
    ),
    color: "bg-blue-500",
    category: 'language'
  },
  {
    name: "Spring Boot",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
        <path d="M20.205 16.392c-2.469 3.289-7.741 2.179-11.122 2.338 0 0-.599.034-1.201.133 0 0 .228-.097.519-.198 2.374-.821 3.496-.986 4.939-1.727 2.71-1.388 5.408-4.413 5.957-7.555-1.032 3.022-4.17 5.623-7.027 6.679-1.955.722-5.492 1.424-5.493 1.424a5.28 5.28 0 0 1-.143-.076c-2.405-1.17-2.475-6.38 1.894-8.059 1.916-.736 3.747-.332 5.818-.825 2.208-.525 4.766-2.18 5.805-4.344 1.165 3.458 2.565 8.866.054 12.21zm.042-13.28a9.212 9.212 0 0 1-1.065 1.89 9.982 9.982 0 0 0-7.167-3.031C6.492 1.971 2 6.463 2 11.985a9.983 9.983 0 0 0 3.205 7.334l.22.194a.856.856 0 1 1 .001.001l.149.132a9.96 9.96 0 0 0 6.44 2.365c5.522 0 10.014-4.493 10.014-10.015a9.98 9.98 0 0 0-1.782-5.735z" />
      </svg>
    ),
    color: "bg-green-500",
    category: 'language'
  },
  {
    name: "Bootstrap",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
        <path d="M11.77 11.24H9.956V8.202h2.152c1.17 0 1.834.522 1.834 1.466 0 1.008-.773 1.572-2.174 1.572zm.324 1.206H9.957v3.348h2.231c1.459 0 2.232-.585 2.232-1.685s-.795-1.663-2.326-1.663zM24 11.39v1.218c-1.128.108-1.817.944-2.226 2.268-.407 1.319-.463 2.937-.42 4.186.045 1.3-.968 2.5-2.337 2.5H4.985c-1.37 0-2.383-1.2-2.337-2.5.043-1.249-.013-2.867-.42-4.186-.41-1.324-1.1-2.16-2.228-2.268V11.39c1.128-.108 1.819-.944 2.227-2.268.408-1.319.464-2.937.42-4.186-.045-1.3.968-2.5 2.338-2.5h14.032c1.37 0 2.382 1.2 2.337 2.5-.043 1.249.013 2.867.42 4.186.409 1.324 1.098 2.16 2.226 2.268zm-7.927 2.817c0-1.354-.953-2.333-2.368-2.488v-.057c1.04-.169 1.856-1.135 1.856-2.213 0-1.537-1.213-2.538-3.062-2.538h-4.16v10.172h4.181c2.218 0 3.553-1.086 3.553-2.876z" />
      </svg>
    ),
    color: "bg-purple-500",
    category: 'language'
  },
  {
    name: "VS Code",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
        <path d="M23.15 2.587L18.21.21a1.494 1.494 0 0 0-1.705.29l-9.46 8.63-4.12-3.128a.999.999 0 0 0-1.276.057L.327 7.261A1 1 0 0 0 .326 8.74L3.899 12 .326 15.26a1 1 0 0 0 .001 1.479L1.65 17.94a.999.999 0 0 0 1.276.057l4.12-3.128 9.46 8.63a1.492 1.492 0 0 0 1.704.29l4.942-2.377A1.5 1.5 0 0 0 24 20.06V3.939a1.5 1.5 0 0 0-.85-1.352zm-5.146 14.861L10.826 12l7.178-5.448v10.896z" />
      </svg>
    ),
    color: "bg-blue-600",
    category: 'tool'
  },
  {
    name: "Notion",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
        <path d="M4.459 4.208c.746.606 1.026.56 2.428.466l13.215-.793c.28 0 .047-.28-.046-.326L17.86 1.968c-.42-.326-.981-.7-2.055-.607L3.01 2.295c-.466.046-.56.28-.374.466zm.793 3.08v13.904c0 .747.373 1.027 1.214.98l14.523-.84c.841-.046.935-.56.935-1.167V6.354c0-.606-.233-.933-.748-.887l-15.177.887c-.56.047-.747.327-.747.933zm14.337.745c.093.42 0 .84-.42.888l-.7.14v10.264c-.608.327-1.168.514-1.635.514-.748 0-.935-.234-1.495-.933l-4.577-7.186v6.952L12.21 19s0 .84-1.168.84l-3.222.186c-.093-.186 0-.653.327-.746l.84-.233V9.854L7.822 9.76c-.094-.42.14-1.026.793-1.073l3.456-.233 4.764 7.279v-6.44l-1.215-.139c-.093-.514.28-.887.747-.933zM1.936 1.035l13.31-.98c1.634-.14 2.055-.047 3.082.7l4.249 2.986c.7.513.934.653.934 1.213v16.378c0 1.026-.373 1.634-1.68 1.726l-15.458.934c-.98.047-1.448-.093-1.962-.747l-3.129-4.06c-.56-.747-.793-1.306-.793-1.96V2.667c0-.839.374-1.54 1.447-1.632z" />
      </svg>
    ),
    color: "bg-gray-700",
    category: 'tool'
  },
]