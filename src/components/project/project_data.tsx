export interface Project {
    id:String,
  name: String;
  details: String;
  features: String[];
  techStack: String[];
  learnings: String[];
  github: String;
}

export const project: Project[] = [
  {
    id:"First",
    name: "A Employee Mangement system",
    details:
      "A employee mangement system with role based feature admin and employee",
    features: [
      "authentication & role-based access",
      "Real-time task updates with Redux",
      "Admin dashboard for employee and task management",
      "Employee dash board with task details",
    ],
    techStack: ["Html", "CSS", "React", "Tailwind CSS", "Redux Toolkit"],
    learnings: [
      "Managing global state with Redux",
      "Mange to store data into local storage",
      "Deploying full-stack apps on Vercel & Render",
    ],
    github: "https://github.com/Sandip-SPO/React-Project",
  },
  {
    id:"Second",
    name: "A Real Time Chat Application",
    details:
      "Built a real-time communication platform featuring instant messaging using Socket.",
    features: [
      "Built a full-stack real-time chat application with JWT-based authentication and authorization.",
      "Implement rate limiting algorithm",
      "Integrated Socket.io for instant messaging, online user tracking, and real-time updates.",
      "Added contact management, group chats, and API rate limiting to improve usability and security.",
    ],
    techStack: [
      "Html",
      "CSS",
      "React",
      "Tailwind CSS",
      "Zustand",
      "Express Js",
      "Node Js",
      "MongoDB",
      "Postgres",
      "JWT",
      "Socket.io",
    ],
    learnings: [
      "Managing global state with Zustand",
      "Implemented event-driven architecture to handle message exchange between multiple users.",
      "Designed and integrated REST APIs and database operations for storing and retrieving chat data.",
      "Learned authentication and authorization techniques to secure user communication.",
      "Improved understanding of client-server architecture and scalable real-time systems.",
      "Developed debugging skills for handling socket connections, reconnections, and network-related issues.",
    ],
    github: "https://github.com/Sandip-SPO/Chat_app",
  },
];
