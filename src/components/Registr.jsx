import React from "react";
import { Link } from "react-router-dom";
// import SearchIcon from "@mui/icons-material/Search";
import ep from "../image/Ellipse 2.png";
const Registr = () => {
  return (
    <div>
      <tr id="tr">
        <div className="cn">
          <div className="tr">
            <Link to={"/"}>
              <h3>Home</h3>
            </Link>
            <div className="cra">
              <img src={ep} alt="" />
              <div className="tract">
                <h3>Алия Акматова</h3>
                <h4>Студент УЦА</h4>
                <div className="solid"></div>
                <div className="text_feth">
                  <br />
                  <p>Новости</p>
                  <br />
                  <p>Вопросы</p>
                  <br />
                  <p>Нетворкинг</p>
                  <br />
                  <p>Учебные комнаты</p>
                  <br />
                  <p>Мероприятия</p>
                  <br />
                  <p>Чаты</p>
                  <br />

                  <p>Работа</p>
                </div>
              </div>
            </div>
          </div>
          <div className="text_registr">
            <h2>Чаты</h2>
            <input type="search" placeholder="Поиск" />
            {/* <SearchIcon /> */}
            <div className="concat">
              <img src={ep} alt="" />
              <div className="tx">
                <h2>beka</h2>
                <h4>Где ты?</h4>
              </div>
            </div>

            <div className="concat">
              <img src={ep} alt="" />
              <div className="tx">
                <h2>beka</h2>
                <h4>Где ты?</h4>
              </div>
            </div>

            <div className="concat">
              <img src={ep} alt="" />
              <div className="tx">
                <h2>beka</h2>
                <h4>Где ты?</h4>
              </div>
            </div>

            <div className="concat">
              <img src={ep} alt="" />
              <div className="tx">
                <h2>beka</h2>
                <h4>Где ты?</h4>
              </div>
            </div>

            <div className="concat">
              <img src={ep} alt="" />
              <div className="tx">
                <h2>beka</h2>
                <h4>Где ты?</h4>
              </div>
            </div>

            <div className="concat">
              <img src={ep} alt="" />
              <div className="tx">
                <h2>beka</h2>
                <h4>Где ты?</h4>
              </div>
            </div>

            <div className="concat">
              <img src={ep} alt="" />
              <div className="tx">
                <h2>beka</h2>
                <h4>Где ты?</h4>
              </div>
            </div>
          </div>
        </div>
      </tr>
    </div>
  );
};

export default Registr;
