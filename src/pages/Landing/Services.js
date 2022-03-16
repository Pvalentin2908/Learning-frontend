import React from "react";
import s from "./style.module.css";
import cs from "classname";
import Tracking from "./assets/tracking.png";
import Search from "./assets/search.png";
import Pharmacy from "./assets/pharmacy.png";
import Details from "./assets/details.png";
import Consultation from "./assets/consultation.png";
import Emergency from "./assets/emergency.png";


export default function Services() { 
    return( 
        <div className="d-flex flex-column justify-content-between">
            <div className="d-flex flex-column justify-content-between align-items-center">
                <h2 className="font-36 mb-3">Our services</h2>
                <div className={cs(s.lineBlack, 'mb-3')}/>
                <div className="font-18 color-gray text-center">
                    We provide to you the best choiches for you.
                    Adjust it to your health needs and make sure
                    your undergo treatment with our highly qualified
                    doctors you can consult with us which type of service
                    is suitable for your health
                </div>
            </div>
            <div className="d-flex flex-row justify-content-between">
                <div className={cs(s.cardServices, ' p-4')}>
                    <img src={Search}/>
                    <div className="font-24 my-3"> <h3>Search doctor</h3> </div>
                    <div className="font-16 color-gray text-left">Choose your doctor from
                        thousands of specialist,
                        general, and trusted hospitals
                    </div>
                </div>
                <div className={cs(s.cardServices, ' p-4')}>
                    <img src={Search}/>
                    <div className="font-24 my-3"> <h3>Search doctor</h3> </div>
                    <div className="font-16 color-gray text-left">Choose your doctor from
                        thousands of specialist,
                        general, and trusted hospitals
                    </div>
                </div>
                <div className={cs(s.cardServices, ' p-4')}>
                    <img src={Search}/>
                    <div className="font-24 my-3"> <h3>Search doctor</h3> </div>
                    <div className="font-16 color-gray text-left">Choose your doctor from
                        thousands of specialist,
                        general, and trusted hospitals
                    </div>
                </div>
            </div>
            <div className="d-flex flex-row justify-content-between mt-5">
                <div className={cs(s.cardServices, ' p-4')}>
                    <img src={Search}/>
                    <div className="font-24 my-3"> <h3>Search doctor</h3> </div>
                    <div className="font-16 color-gray text-left">Choose your doctor from
                        thousands of specialist,
                        general, and trusted hospitals
                    </div>
                </div>
                <div className={cs(s.cardServices, ' p-4')}>
                    <img src={Search}/>
                    <div className="font-24 my-3"> <h3>Search doctor</h3> </div>
                    <div className="font-16 color-gray text-left">Choose your doctor from
                        thousands of specialist,
                        general, and trusted hospitals
                    </div>
                </div>
                <div className={cs(s.cardServices, ' p-4')}>
                    <img src={Search}/>
                    <div className="font-24 my-3"> <h3>Search doctor</h3> </div>
                    <div className="font-16 color-gray text-left">Choose your doctor from
                        thousands of specialist,
                        general, and trusted hospitals
                    </div>
                </div>

            </div>
        </div>
    );
}
