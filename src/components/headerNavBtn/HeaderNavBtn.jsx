import "./headerNavBtn.css";

const HederNavBtn = () => {
  const toggleNav = () => {
    document.querySelector(".nav-icon").classList.toggle("nav-icon--active");
    document
      .querySelector(".header__row")
      .classList.toggle("header__row--mobile");
    document.body.classList.toggle("no-scroll");
  };

  return (
    <div className="header__nav-btn">
      <button className="nav-icon-btn" onClick={toggleNav}>
        <div className="nav-icon"></div>
      </button>
    </div>
  );
};

export default HederNavBtn;
