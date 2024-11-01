import "./promo2.css";

import promo02Img from "./../../img/images/promo-img.jpg";

const Promo2 = () => {
  return (
    <section className="promo2">
      <div className="container">
        <div className="promo2__content">
          <div className="promo2__img">
            <img src={promo02Img} alt="Promo 2" />
          </div>
          <div className="promo2__text">
            <div className="promo2__title">
              <span className="highlight">
                <span>PAYDAY</span>
              </span>
              SALE NOW
            </div>
            <div className="promo2__desc">
              Spend minimal $100 get 30% off voucher code for your next purchase
            </div>
            <div className="promo2__desc">
              <span>1 June - 10 June 2021</span>
              <br />
              *Terms & Conditions apply
            </div>
            <div className="promo2__btn-wrapper">
              <a href="#!" className="promo2__btn">
                SHOP NOW
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Promo2;
