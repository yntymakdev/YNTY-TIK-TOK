import React from "react";
import logo from "../image/рабочий-стол-с-лампой-ноутбуком-книгами-и-бумагами-белым-фоном-158308548-transformed 2.png";
import { Link } from "react-router-dom";
const Space = () => {
  return (
    <div>
      <header id="header">
        <div className="container">
          <div className="header">
            <div className="text_header">
              <div className="text">
                <h3>Student </h3>
              </div>
              <div className="tex">
                <h3>Space</h3>
              </div>
            </div>
            <div className="text_header_product">
              <h3>Консультация </h3>
              <Link to="/contact">
                <h3>Чаты</h3>
              </Link>
              <button>Войти</button>
            </div>
          </div>
        </div>
      </header>
      <section id="section">
        <div className="  container">
          <div className="section">
            <div className="text_section">
              <h1>
                Ваш универсальный <br />
                инструмент для успеха в учебе
              </h1>
              <br />
              <br />
              <Link to="/res">
                <button>Зарегистрироваться</button>
              </Link>
              <div className="items">
                <img src={logo} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <div id="sec">
        <div className="container">
          <div className="sec">
            <div className="sec_text">
              <p>
                Модель подписки и размещение рекламы предоставляют <br />{" "}
                потенциальные источники дохода для проекта. На основе анализа{" "}
                <br />
                рынка можно сделать вывод, что "Students Space" имеет <br />{" "}
                потенциал привлечь
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* <div id="foter">
        <div className="foter">
          <div className="foter-box">
            <h1>01.</h1>
          </div>
          </div>
        </div> */}
    </div>
  );
};

export default Space;
