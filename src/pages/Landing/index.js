import React from "react";
import cs from "classname";
import s from "./style.module.css";
 
export default function LandingPage() { 
    return(
       <div className="d-flex flex-row justify-content-between">
           <div className="">
                 <div className=""><h className="h-48 text-bold">Virtual healthcare for you</h></div>
                 <div className="">Trafalgar provides progressive, and affordable healthcare, accessible on mobile and online for everyone</div>
                 <div className=""><button className="mainButton px-4 py-2">Consult today</button></div>
           </div>
           <div className="">
                 <div className={s.imgBg}></div>
           </div>
       </div>
    );

}