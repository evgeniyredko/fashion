import "./cta.css";

const Cta = () => {
  return (
    <section className="cta">
      <div className="container">
        <h2 className="title-2 cta__title">
          JOIN SHOPPING COMMUNITY TO GET MONTHLY PROMO
        </h2>
        <div className="cta__desc">
          Type your email down below and be young wild generation
        </div>
        <div className="cta__input">
          <input type="text" placeholder="Add your email here" />
          <button>SEND</button>
        </div>
      </div>
    </section>
  );
};

export default Cta;
