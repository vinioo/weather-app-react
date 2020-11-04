/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";

import { weatherApi } from "../../services/api";

import Logo from "../../components/Logo";
import Input from "../../components/Input";
import Button from "../../components/Button";
import Card from "../../components/Card";

import "./style.css";

const Home = () => {
  const [query, setQuery] = useState("Belo Horizonte");
  const [forecast, setForecast] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const setInitialForecast = async () => {
      await getForecast();
    };
    setInitialForecast();
  }, []);

  const handleSubmit = async () => {
    await getForecast();
  };

  const getForecast = async () => {
    try {
      setLoading(true);

      const { data: response } = await weatherApi.get("/daily", {
        params: {
          city: query,
        },
      });

      response && setForecast(response.data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="home__container">
      {loading && <div className="loading"></div>}
      <div className="home__container__header">
        <Logo></Logo>
      </div>
      <div className="home__container__content__search">
        <Input
          placeholder="Digite o nome da cidade"
          onChange={(e) => setQuery(e.target.value)}
          value={query}
        ></Input>
        <Button onClick={handleSubmit}>Pesquisar</Button>
      </div>
      {forecast && (
        <div className="home__container__content__weather">
          {forecast.map((info) => (
            <Card
              key={info.datetime}
              icon={info.weather.icon}
              max={info.high_temp}
              min={info.low_temp}
              date={info.datetime}
            ></Card>
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
