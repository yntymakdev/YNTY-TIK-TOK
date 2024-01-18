import React from "react";
import logo2 from "../image/Rectangle 15.png";
import logo3 from "../image/Rectangle 16.png";
import logo4 from "../image/Rectangle 17.png";
import logo5 from "../image/Rectangle 18.png";
import logo6 from "../image/Rectangle 19.png";
import logo7 from "../image/Rectangle 20.png";
const Foot = () => {
  return (
    <div>
      <div id="foot">
        <div className="fr">
          <div className="foot">
            <h1>01.</h1>
            <br />
            <h2>Текст</h2>
            <br />
            <p>
              Модель подписки и <br /> размещение рекламы <br /> предоставляют
              потенциальные <br /> источники дохода для проекта. <br /> На
              основе анализа рынка{" "}
            </p>
          </div>
          <div className="foot">
            <h1>02.</h1>
            <br />
            <h2>Текст</h2>
            <br />
            <p>
              Модель подписки и <br /> размещение рекламы <br /> предоставляют
              потенциальные <br /> источники дохода для проекта. <br /> На
              основе анализа рынка{" "}
            </p>
          </div>
          <div className="foot">
            <h1>03.</h1>
            <br />
            <h2>Текст</h2>
            <br />
            <p>
              Модель подписки и <br /> размещение рекламы <br /> предоставляют
              потенциальные <br /> источники дохода для проекта. <br /> На
              основе анализа рынка{" "}
            </p>
          </div>
        </div>
      </div>
      <div id="footer">
        <div className="footer">
          <div className="img_footer">
            <img src={logo2} alt="" />
          </div>
          <div className="img_foot">
            <div className="img_ft">
              <img src={logo3} alt="" />
            </div>
            <div className="img_ft2">
              <img src={logo4} alt="" />
              <img src={logo5} alt="" />
            </div>
            <div className="img_ft3">
              <img src={logo6} alt="" />
            </div>
            <div className="img_ft4">
              <img src={logo7} alt="" />
            </div>
          </div>
          <p>
            Приближает вас к людям,
            <br /> и вещам которые вы любите
          </p>
        </div>
      </div>
    </div>
  );
};

export default Foot;
