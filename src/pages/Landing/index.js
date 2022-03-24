import React from "react";
import cs from "classname";
import s from "./style.module.css";
import HeroImg from "./assets/trafalgar-header illustration 1.png";
import Services from "./Services";
import HeroImg2 from "./assets/trafalgar-illustration 2.png"
import Vector from "./assets/Vector.png"
import HeroImg3 from "./assets/trafalgar-illustration 3.png"
import Healthcare from "./Healthcare";
import MobileApp from "./MobileApp";
import Testimonials from "./Testimonials";
import Articles from "./Articles";
import Header from "../../components/Page/header";
import Footer from "../../components/Page/footer";
 
export default function LandingPage() { 
    return(
    <>
        <div className="px-90">
            <Header/>
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
            <Healthcare/>
            <MobileApp/>
            <Testimonials/>
            <Articles/>
       </div>
    <Footer/>
    </>
    );

}