import React from "react";
import cs from "classname";
import s from "./style.module.css";
import Logo from "./assets/logo.png";

export default function Footer() {
    return(
        <div className={cs(s.cardFooter, "d-flex flex-row justify-content-between align-items text-white p-5 m-5 ")}>
            <div className="align-items-center p-5">
                <div className="mb-3"><img src={Logo}/></div>
                <div className="mb-3">Trafalgar provides progressive,
                    and affordable healthcare, accessible on mobile and online 
                    for everyone</div>
                <div className="mb-3">©Trafalgar PTY LTD 2020. All rights reserved</div>
            </div>
            <div className="align-items-center p-5">
                <div className="mb-3"><b>Company</b></div>
                <div className="mb-2"><a>About</a></div>
                <div className="mb-2"><a>Testimonials</a></div>
                <div className="mb-2"><a>Find a doctor</a></div>
                <div className="mb-2"><a>Apps</a></div>
            </div>
            <div className="align-items-center p-5">
                <div className="mb-3"><b>Region</b></div>
                <div className="mb-2"><a>Indonesia</a></div>
                <div className="mb-2"><a>Singapore</a></div>
                <div className="mb-2"><a>Hongkong</a></div>
                <div className="mb-2"><a>Canada</a></div>
            </div>
            <div className="align-items-center p-5">
                <div className="mb-3"><b>Help</b></div>
                <div className="mb-2"><a>Help center</a></div>
                <div className="mb-2"><a>Contact Support</a></div>
                <div className="mb-2"><a>Instructions</a></div>
                <div className="mb-2"><a>How it works</a></div>
            </div>
        </div>
    )
}