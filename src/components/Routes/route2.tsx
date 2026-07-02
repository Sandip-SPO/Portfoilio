import type { JSX } from "react/jsx-runtime";
import Nav_section from "../navigation/navigation";
import { Outlet, useParams } from "react-router-dom";
import Demo from "../projects/demo2";

export default function Route2():JSX.Element{
    const {firstname}=useParams();
    console.log("welcome to project page",firstname)
    return(
        <>
        <Nav_section/>
        <Outlet/>
        </>
    )
}