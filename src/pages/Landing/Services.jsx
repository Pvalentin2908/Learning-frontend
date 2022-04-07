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
        <div className="d-flex flex-column justify-content-between my-5">
            <div className="d-flex flex-column justify-content-between align-items-center mb-5">
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
            <div className="d-flex flex-row justify-content-between flex-wrap">
                <div className={cs(s.cardServices, 'd-flex flex-column justify-content-between p-4 align-items-center align-items-lg-start')}>
                    <img src={Search} />
                    <div className="font-24 my-3"> <h3>Search doctor</h3> </div>
                    <div className="font-16 color-gray text-left">Choose your doctor from
                        thousands of specialist,
                        general, and trusted hospitals
                    </div>
                </div>
                <div className={cs(s.cardServices, 'd-flex flex-column justify-content-between p-4 align-items-center align-items-lg-start')}>
                    <img src={Pharmacy}/>
                    <div className="font-24 my-3"> <h3>Online pharmacy</h3> </div>
                    <div className="font-16 color-gray text-left">Buy  your medicines with our mobile
                    application with a simple delivery system
                    </div>
                </div>
                <div className={cs(s.cardServices, 'd-flex flex-column justify-content-between p-4 align-items-center align-items-lg-start')}>
                    <img src={Consultation}/>
                    <div className="font-24 my-3"> <h3>Consultation</h3> </div>
                    <div className="font-16 color-gray text-left">Free consultation with our trusted
                    doctors and get the best recomendations
                    </div>
                </div>
            </div>
            <div className="d-flex flex-row justify-content-between mt-5 flex-wrap">
                <div className={cs(s.cardServices, 'd-flex flex-column justify-content-between p-4 align-items-center align-items-lg-start')}>
                    <img src={Details}/>
                    <div className="font-24 my-3"> <h3>Details info</h3> </div>
                    <div className="font-16 color-gray text-left">Free consultation with our trusted
                    doctors and get the best recomendations
                    </div>
                </div>
                <div className={cs(s.cardServices, 'd-flex flex-column justify-content-between p-4 align-items-center align-items-lg-start')}>
                    <img src={Emergency}/>
                    <div className="font-24 my-3"> <h3>Emergency care</h3> </div>
                    <div className="font-16 color-gray text-left">You can get 24/7 urgent
                    care for yourself or your children and your lovely family
                    </div>
                </div>
                <div className={cs(s.cardServices, 'd-flex flex-column justify-content-between p-4 align-items-center align-items-lg-start')}>
                    <img src={Tracking}/>
                    <div className="font-24 my-3"> <h3>Tracking</h3> </div>
                    <div className="font-16 color-gray text-left">Track and save your medical
                    history and health data 
                    </div>
                </div>

            </div>
            <div className="text-center p-5"><button className="mainButton2 ">Learn more</button></div>
        </div>
        
    );
}
