import Card from "../card/Card";
import "./category.css";

import { arrivals } from "../../helpers/cardsList";

const Arrivals = () => {
  return (
    <section className="arrivals">
      <div className="container">
        <div className="arrivals__header">
          <h2 className="title-2">NEW ARRIVALS</h2>
        </div>
        <div className="arrivals__cards">
          {arrivals.map((arrivals, index) => {
            return (
              <Card
                key={index}
                title={arrivals.title}
                img={arrivals.img}
                index={index}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Arrivals;
