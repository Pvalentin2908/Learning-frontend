import React, { useState } from 'react';
import Collapse from 'react-bootstrap/Collapse';
import cs from 'classname';
import s from './style.module.css';
import ManImg from './assets/image 1.png';
import Img1 from './assets/image 4.png';
import Img2 from './assets/image 2.png';
import Img3 from './assets/image 3.png';
import Vector2 from './assets/Vector 2.png';
import Element2 from './assets/element2.png';

export default function Articles() {
  const [open, setOpen] = useState(false);
  console.log(open);
  return (
    <div className={cs(s.relativeContainer, 'd-flex flex-column justify-content-between p-5 m-5')}>
      <div className="d-flex flex-column justify-content-between align-items-center text-center mb-3">
        <div className="text-black mb-3">
          <h3 className="text-black">Check out our latest article</h3>
        </div>
        <div className={cs(s.lineBlack, 'mb-3')} />
      </div>
      <div className={s.absoluteContainer}></div>
      <div className="d-flex flex-row justify-content-around align-items-center mb-5">
        <div className={cs(s.articleCard, 'me-4')}>
          <div className={s.imgArticleCard}>
            <img src={Img2}></img>
          </div>
          <div className="p-4">
            <div className="mb-4">
              <h4>Disease detection, check up in the laboratory</h4>
            </div>
            <div className="mb-4">
              In this case, the role of the health laboratory is very important to do a disease
              detection...
            </div>
            <div>
              <button className="textButton">
                Read more <img className="ms-2" src={Vector2} />
              </button>
            </div>
          </div>
        </div>
        <div className={cs(s.articleCard, 'me-4')}>
          <div className={s.imgArticleCard}>
            <img src={Img1}></img>
          </div>
          <div className="p-4">
            <div className="mb-4">
              <h4>Herbal medicines that are safe for consumption</h4>
            </div>
            <div className="mb-4">
              Herbal medicine is very widely used at this time because of its very good for your
              health...
            </div>
            <div>
              <button className="textButton">
                Read more <img className="ms-2" src={Vector2} />
              </button>
            </div>
          </div>
        </div>
        <div className={cs(s.articleCard, 'me-4')}>
          <div className={s.imgArticleCard}>
            <img src={Img3}></img>
          </div>
          <div className="p-4">
            <div className="mb-4">
              <h4>Natural care for healthy facial skin</h4>
            </div>
            <div className="mb-4">
              A healthy lifestyle should start from now and also for your skin health. There are
              some...
            </div>
            <div>
              <button className="textButton">
                Read more <img className="ms-2" src={Vector2} />
              </button>
            </div>
          </div>
        </div>
      </div>

      <Collapse in={open}>
        <div id="example-collapse-text">
          <div className="d-flex flex-row justify-content-around align-items-center mb-5">
            <div className={cs(s.articleCard, 'me-4')}>
              <div className={s.imgArticleCard}>
                <img src={Img2}></img>
              </div>
              <div className="p-4">
                <div className="mb-4">
                  <h4>Disease detection, check up in the laboratory</h4>
                </div>
                <div className="mb-4">
                  In this case, the role of the health laboratory is very important to do a disease
                  detection...
                </div>
                <div>
                  <button className="textButton">
                    Read more <img className="ms-2" src={Vector2} />
                  </button>
                </div>
              </div>
            </div>
            <div className={cs(s.articleCard, 'me-4')}>
              <div className={s.imgArticleCard}>
                <img src={Img1}></img>
              </div>
              <div className="p-4">
                <div className="mb-4">
                  <h4>Herbal medicines that are safe for consumption</h4>
                </div>
                <div className="mb-4">
                  Herbal medicine is very widely used at this time because of its very good for your
                  health...
                </div>
                <div>
                  <button className="textButton">
                    Read more <img className="ms-2" src={Vector2} />
                  </button>
                </div>
              </div>
            </div>
            <div className={cs(s.articleCard, 'me-4')}>
              <div className={s.imgArticleCard}>
                <img src={Img3}></img>
              </div>
              <div className="p-4">
                <div className="mb-4">
                  <h4>Natural care for healthy facial skin</h4>
                </div>
                <div className="mb-4">
                  A healthy lifestyle should start from now and also for your skin health. There are
                  some...
                </div>
                <div>
                  <button className="textButton">
                    Read more <img className="ms-2" src={Vector2} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Collapse>
      <div className="text-center p-5">
        <button
          onClick={() => setOpen(!open)}
          aria-controls="example-collapse-text"
          aria-expanded={open}
          className="mainButton2"
        >
          {open === false ? 'View all' : 'Hide all'}
        </button>
      </div>
    </div>
  );
}
