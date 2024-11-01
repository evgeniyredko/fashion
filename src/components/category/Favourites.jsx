import Card from "../card/Card";
import "./category.css";

import { favourites } from "../../helpers/cardsList";

const Favourites = () => {
  return (
    <section className="arrivals">
      <div className="container">
        <div className="arrivals__header arrivals__header_margin_bottom ">
          <h2 className="title-2">Young’s Favourite</h2>
        </div>
        <div className="arrivals__cards">
          {favourites.map((favourites, index) => {
            return (
              <Card
                key={index}
                title={favourites.title}
                img={favourites.img}
                index={index}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Favourites;
