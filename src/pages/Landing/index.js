import React from "react";
import cs from "classname";
import s from "./style.module.css";
import HeroImg from "./assets/trafalgar-header illustration 1.png";
import Services from "./Services";
 
export default function LandingPage() { 
    return(
        <>
            <div className="d-flex flex-row justify-content-between align-items-center w-100">
                <div className="d-flex flex-column justify-content-between">
                        <div className="mb-3"><h1 className="h-48 text-bold">Virtual healthcare for you</h1></div>
                        <div className="mb-4">Trafalgar provides progressive, and affordable healthcare, accessible on mobile and online for everyone</div>
                        <div><button className="mainButton">Consult today</button></div>
                </div>
                <div className="">
                        <div className={s.imgBg}>
                            <img src={HeroImg}></img>
                        </div>
                </div>
            </div>
            <Services/>
       </>
    );

}