import React from "react";
import s from "./style.module.css";
import HeroImg2 from "./assets/trafalgar-illustration 2.png"

export default function Healthcare() {
    return(
       
        <div className="d-flex flex-row justify-content-between align-items-center w-100 p-5">
            <div className="">
                    <div className={s.imgBg}>
                        <img src={HeroImg2}></img>
                    </div>
            </div>
            <div className="d-flex flex-column justify-content-between ms-5">
                    <div className="mb-3"><h2 className="h-36 text-bold">Leading healthcare providers</h2></div>
                    <div className="mb-4">Trafalgar provides progressive, and affordable healthcare,
                    accessible on mobile and online for everyone. To us, it’s not just work. We take pride 
                    in the solutions we deliver</div>
                    <div><button className="mainButton2 ">Learn more</button></div>
            </div>
        </div>
    );
}
