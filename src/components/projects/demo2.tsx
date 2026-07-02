// App.jsx or any parent component
import ProjectDescription from './demo';
import { project } from '../project/project_data';
import { useParams } from 'react-router-dom';

type Firstname=string;

function Demo() {

  const {firstname}=useParams<{firstname:Firstname}>();
  console.log(firstname);
  
  const sampleProject = {
    name: "A Employee Mangement system",
    details: "A employee mangement system with role based feature admin and employee",
    features: [
      "authentication & role-based access",
      "Real-time task updates with Redux",
      "Admin dashboard for employee and task management",
      "Employee dash board with task details"
    ],
    techStack: ["Html","CSS","React","Tailwind CSS", "Redux Toolkit"],
    learnings: [
      "Managing global state with Redux",
      "Mange to store data into local storage",
      "Deploying full-stack apps on Vercel & Render"
    ]
  };

  return (
<div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-black via-slate-950 to-black py-12 px-4">
  
  {/* Purple Glow */}
  <div className="absolute top-20 left-20 h-72 w-72 rounded-full bg-purple-700/20 blur-3xl"></div>

  {/* Blue Glow */}
  <div className="absolute bottom-20 right-20 h-72 w-72 rounded-full bg-blue-700/20 blur-3xl"></div>
    <ProjectDescription project={project[firstname!]} />
    </div>
  );
}

export default Demo;