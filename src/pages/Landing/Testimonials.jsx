import React from 'react';
import cs from 'classname';
import s from './style.module.css';
import ManImg from './assets/image 1.png';
import Carousel from 'react-bootstrap/Carousel';

export default function Testimonials() {
  return (
    <Carousel>
      <Carousel.Item>
        <div
          className={cs(
            s.cardTestimonial,
            'd-flex flex-column justify-content-between py-5 px-2 px-lg-5 m-1 m-lg-5'
          )}
        >
          <div className="d-flex flex-column justify-content-between align-items-center text-center mb-3">
            <div className="text-white mb-3">
              <h3 className="text-white">What our customer are saying</h3>
            </div>
            <div className={cs(s.lineWhite, 'mb-3')} />
          </div>
          <div className="d-flex flex-column flex-lg-row justify-content-around align-items-center">
            <div className="d-flex flex-column flex-lg-row justify-content-between align-items-center col-12 col-lg-4">
              <div className={s.imgMan}>
                <img src={ManImg}></img>
              </div>
              <div className="d-flex flex-column justify-content-center text-white">
                {' '}
                <h5 className="text-white">Edward Newgate</h5> <p>Founder Circle</p>
              </div>
            </div>
            <div className="col-12 col-lg-5 text-white text-center text-lg-start">
              “Our dedicated patient engagement app and web portal allow you to access information
              instantaneously (no tedeous form, long calls, or administrative hassle) and securely”
            </div>
          </div>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div
          className={cs(
            s.cardTestimonial,
            'd-flex flex-column justify-content-between py-5 px-2 px-lg-5 m-1 m-lg-5'
          )}
        >
          <div className="d-flex flex-column justify-content-between align-items-center text-center mb-3">
            <div className="text-white mb-3">
              <h3 className="text-white">What our customer are saying</h3>
            </div>
            <div className={cs(s.lineWhite, 'mb-3')} />
          </div>
          <div className="d-flex flex-column flex-lg-row justify-content-around align-items-center">
            <div className="d-flex flex-column flex-lg-row justify-content-between align-items-center col-12 col-lg-4">
              <div className={s.imgMan}>
                <img src={ManImg}></img>
              </div>
              <div className="d-flex flex-column justify-content-center text-white">
                {' '}
                <h5 className="text-white">Edward Newgate</h5> <p>Founder Circle</p>
              </div>
            </div>
            <div className="col-12 col-lg-5 text-white text-center text-lg-start">
              “Our dedicated patient engagement app and web portal allow you to access information
              instantaneously (no tedeous form, long calls, or administrative hassle) and securely”
            </div>
          </div>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div
          className={cs(
            s.cardTestimonial,
            'd-flex flex-column justify-content-between py-5 px-2 px-lg-5 m-1 m-lg-5'
          )}
        >
          <div className="d-flex flex-column justify-content-between align-items-center text-center mb-3">
            <div className="text-white mb-3">
              <h3 className="text-white">What our customer are saying</h3>
            </div>
            <div className={cs(s.lineWhite, 'mb-3')} />
          </div>
          <div className="d-flex flex-column flex-lg-row justify-content-around align-items-center">
            <div className="d-flex flex-column flex-lg-row justify-content-between align-items-center col-12 col-lg-4">
              <div className={s.imgMan}>
                <img src={ManImg}></img>
              </div>
              <div className="d-flex flex-column justify-content-center text-white">
                {' '}
                <h5 className="text-white">Edward Newgate</h5> <p>Founder Circle</p>
              </div>
            </div>
            <div className="col-12 col-lg-5 text-white text-center text-lg-start">
              “Our dedicated patient engagement app and web portal allow you to access information
              instantaneously (no tedeous form, long calls, or administrative hassle) and securely”
            </div>
          </div>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div
          className={cs(
            s.cardTestimonial,
            'd-flex flex-column justify-content-between py-5 px-2 px-lg-5 m-1 m-lg-5'
          )}
        >
          <div className="d-flex flex-column justify-content-between align-items-center text-center mb-3">
            <div className="text-white mb-3">
              <h3 className="text-white">What our customer are saying</h3>
            </div>
            <div className={cs(s.lineWhite, 'mb-3')} />
          </div>
          <div className="d-flex flex-column flex-lg-row justify-content-around align-items-center">
            <div className="d-flex flex-column flex-lg-row justify-content-between align-items-center col-12 col-lg-4">
              <div className={s.imgMan}>
                <img src={ManImg}></img>
              </div>
              <div className="d-flex flex-column justify-content-center text-white">
                {' '}
                <h5 className="text-white">Edward Newgate</h5> <p>Founder Circle</p>
              </div>
            </div>
            <div className="col-12 col-lg-5 text-white text-center text-lg-start">
              “Our dedicated patient engagement app and web portal allow you to access information
              instantaneously (no tedeous form, long calls, or administrative hassle) and securely”
            </div>
          </div>
        </div>
      </Carousel.Item>
    </Carousel>
  );
}
