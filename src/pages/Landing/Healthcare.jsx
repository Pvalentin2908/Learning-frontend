import React from 'react';
import cs from 'classname'
import s from './style.module.css';
import HeroImg2 from './assets/trafalgar-illustration 2.png';

export default function Healthcare() {
  return (
    <div className="d-flex flex-column flex-lg-row justify-content-between align-items-center w-100  h-100">
      <div className="col-12 col-lg-6 h-100 mb-3">
        <div className={cs(s.imgBg)} style={{ backgroundImage: { HeroImg2 } }}></div>
      </div>
      <div className="d-flex flex-column justify-content-between ms-0 ms-lg-5 p-1 p-lg-4">
        <div className="mb-3">
          <h2 className="h-36 text-bold">Leading healthcare providers</h2>
        </div>
        <div className="mb-4">
          Trafalgar provides progressive, and affordable healthcare, accessible on mobile and online
          for everyone. To us, it’s not just work. We take pride in the solutions we deliver
        </div>
        <div className='mx-auto mx-lg-0'>
          <button className="mainButton2 mb-5">Learn more</button>
        </div>
      </div>
    </div>
  );
}
