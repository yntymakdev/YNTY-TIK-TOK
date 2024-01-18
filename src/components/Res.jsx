import React from "react";
import { Link } from "react-router-dom";

const Res = () => {
  return (
    <div>
      <Link to="/">
        <div className="reg">
          <h3>Home</h3>
        </div>
      </Link>
      <div className="registracia">
        <h1>Регистрация</h1>
        <br />
        <div className="regis">
          <p>Имя</p>
          <input type="text" placeholder="Введите свое имя" />
          <br />
        </div>
        <div className="regis">
          <p>Фамилие</p>
          <input type="text" placeholder="Введите свое фамилие" />
          <br />
        </div>
        <div className="regis">
          <p>Почта</p>
          <input type="text" placeholder="Введите свою почту" />
          <br />
        </div>
        <div className="regis">
          <p>Пароль*</p>
          <input type="text" placeholder="Введите свой пароль" />

          <br />
        </div>
        <div className="sogl">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="11"
            viewBox="0 0 14 11"
            fill="none"
          >
            <path
              d="M4.95582 7.40485L2.00059 4.56584L0.185547 6.31749L4.95839 10.9007L13.5786 2.60513L11.7609 0.855957L4.95582 7.40485Z"
              fill="white"
            />
          </svg>
          <p>Согласен с Условиями</p>
          <br />
          <button>Зарегистрироваться</button>
        </div>
        <div className="roma">
          <br />
          <p>Или</p>
          <br />
        </div>
        <div className="btn">
          <button> Google </button>
          <button>Fasebook </button>
        </div>
      </div>
    </div>
  );
};

export default Res;
