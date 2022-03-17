import React from "react";
import s from "./style.module.css";
import Vector from "./assets/Vector.png"
import HeroImg3 from "./assets/trafalgar-illustration 3.png"

export default function MobileApp() {
    return(
       
        <div className="d-flex flex-row justify-content-between align-items-center w-100 p-5 my-5">
        <div className="d-flex flex-column justify-content-between ms-5">
                <div className="mb-3"><h2 className="h-36 text-bold">Download our mobile apps</h2></div>
                <div className="mb-4">Our dedicated patient engagement app and 
                web portal allow you to access information
                instantaneously (no tedeous form, long calls, 
                or administrative hassle) and securely</div>
                <div><button className="mainButton2">Download <img className="ms-2" src={Vector}/></button></div>
        </div>
        <div className="">
                <div className={s.imgBg}>
                    <img src={HeroImg3}></img>
                </div>
        </div>
    </div>
    );
}