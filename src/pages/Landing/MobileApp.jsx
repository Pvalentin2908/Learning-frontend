import React from 'react';
import cs from 'classname'
import s from './style.module.css';
import Vector from './assets/Vector.png';
import HeroImg3 from './assets/trafalgar-illustration 3.png';

export default function MobileApp() {
  return (
    <div className="d-flex flex-column flex-lg-row justify-content-between align-items-center w-100  h-100">
      <div className="d-flex flex-column order-1 order-lg-0 justify-content-between ms-0 ms-lg-5">
        <div className="mb-3">
          <h2 className="h-36 text-bold">Download our mobile apps</h2>
        </div>
        <div className="mb-4">
          Our dedicated patient engagement app and web portal allow you to access information
          instantaneously (no tedeous form, long calls, or administrative hassle) and securely
        </div>
        <div className='mx-auto mx-lg-0 mb-3'>
          <button className="mainButton2">
            Download <img className="ms-2" src={Vector} />
          </button>
        </div>
      </div>
      <div className="col-12 col-lg-6 order-0 order-lg-1 h-100 mb-3">
        <div className={cs(s.imgBg)} style={{ backgroundImage: { HeroImg3 } }}></div>
      </div>
    </div>
  );
}
