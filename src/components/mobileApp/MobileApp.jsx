import "./mobileApp.css";

import voucherImg from "./../../img/vouchers/vouchers-img.png";

import AppStore from "./../../img/vouchers/app-store.png";
import GooglePlay from "./../../img/vouchers/google-play.png";

const MobileApp = () => {
  return (
    <section className="mobile-App">
      <div className="container">
        <div className="mobile-App__content">
          <div className="mobile-App__text">
            <div className="mobile-App__title">
              DOWNLOAD APP & GET THE VOUCHER!
            </div>
            <div className="mobile-App__desc">
              Get 30% off for first transaction using Rondovision mobile app for
              now.
            </div>
            <div className="mobile-App__btn-wrapper">
              <a href="#!" className="mobile-App__btn">
                <img src={AppStore} alt="" />
              </a>
              <a href="#!" className="mobile-App__btn">
                <img src={GooglePlay} alt="" />
              </a>
            </div>
          </div>
          <div className="mobile-App__img">
            <img src={voucherImg} alt="Mobile App" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MobileApp;
