import React from "react";

import { iconApiUrl } from "../../services/api";

import "./style.css";

const Card = ({ icon, max, min, date }) => {
  const mapWeekDays = (key) => {
    const days = {
      0: "Domingo",
      1: "Segunda",
      2: "Terça",
      3: "Quarta",
      4: "Quinta",
      5: "Sexta",
      6: "Sábado",
    };

    return days[key];
  };
  const getWeekDayName = () => {
    const day = new Date(date).getDay();
    return mapWeekDays(day);
  };

  return (
    <div className="card__container">
      <div className="card__container__header">
        <img
          src={`${iconApiUrl}${icon}.png`}
          alt="weather icon"
          className="card__container__header__icon"
        ></img>
      </div>
      <div className="card__container__content">
        <div className="card__container__content__temperatures">
          <div>
            <h1>{Math.round(max)}</h1>
          </div>
          <div>
            <h3>{Math.round(min)}</h3>
          </div>
        </div>
        <div className="card__container__content__day">
          <h2>{getWeekDayName()}</h2>
        </div>
      </div>
    </div>
  );
};

export default Card;
