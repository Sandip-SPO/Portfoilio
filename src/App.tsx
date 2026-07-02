import React, { useEffect, useState, type JSX } from "react";
import Nav_section from "./components/navigation/navigation";
import Hero from "./components/hero_section/hero";
import Skill from "./components/skill/skill";
import Project from "./components/project/project";
import Contact from "./components/contact/contact";


export default function App(): JSX.Element {

  type pos={
    x:number,
    y:number
  }

  const [mousepos,setmousepos]=useState <pos>({x:0,y:0});

  useEffect(()=>{

    const handlepos=(e:MouseEvent)=>{
      setmousepos({x:e.clientX,y:e.clientY});
    }

    window.addEventListener("mousemove",handlepos);

    return ()=>{
      window.removeEventListener("mousemove",handlepos)
    };

  },[]);

  return (
    <div>
      <div
        className="hidden md:block fixed w-6 h-6 rounded-full bg-white/20 blur-sm pointer-events-none z-50 transition-transform duration-75"
        style={{ transform: `translate(${mousepos.x-12}px, ${mousepos.y-12}px)` }}
      />
      <Nav_section />
      <Hero />
      <Skill />
      <Project />
      <Contact />
    </div>
  );
}
