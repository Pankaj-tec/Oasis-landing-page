import React from "react";

const HeroDetails = ({ data }) => {
  return (
    <div className="details">
      <div className="details__cont container">
        <div className="details__inner">
          {data.cards.map((card) => (
            <div key={card.id} className="details__detail">
              <h2 className="details__num">
                <span className="details__incr">{card?.numberSpan}</span>
                <span className="details__incr">{card?.number}</span>
              </h2>
              <p className="details__desc">{card?.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroDetails;
