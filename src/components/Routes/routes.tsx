import { BrowserRouter, Link, Routes,Route } from "react-router-dom";
import type { JSX } from "react/jsx-runtime";
import App from "../../App";
import Route2 from "./route2";
import Demo from "../projects/demo2";

export default function Router():JSX.Element{
    return(
        <>
        <BrowserRouter>
        
         <Link to="/"></Link> 

        <Routes>
            <Route path="/" element={<App/>}></Route>
            <Route path="/project" element={<Route2/>}>
                <Route path=":firstname" element={<Demo/>}></Route>
            </Route>
        </Routes>

        </BrowserRouter>
        </>
    )
}