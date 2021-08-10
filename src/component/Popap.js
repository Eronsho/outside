import { React, useState } from "react";
import "./Popap.scss";
import PopapItems from "./PopapItems";

const Popap = ({ extPopap }) => {
  const [value, setValue] = useState();
  const [selection, setSelection] = useState("Платёж");
  const [calculation, setCalculation] = useState(false);
  const [error, setError] = useState(false);
  const addcalculation = () => {
    if (value > 0) {
      setCalculation(true);
      setError(false);
    } else {
      setError(true);
    }
  };
  return (
    <div className="popap-container">
      <div className="popap">
        <strong className="popap__ext" onClick={() => extPopap()}>
          х
        </strong>

        <div className="popap__body">
          <div className="popap__title">Налоговый вычет</div>
          <div className="popap__sub-titile">
            Используйте налоговый вычет чтобы погасить ипотеку досрочно. Размер
            налогового вычета составляет не более 13% от своего официального
            годового дохода.
          </div>
          <form className="popap_form">
            <div className="form">
              <label className="form__title">Ваша зарплата в месяц</label>
              <input
                type="number"
                className="form__control"
                placeholder="Введите данные"
                value={value}
                style={error ? { border: "1px solid #EA0029" } : null}
                onChange={(e) => setValue(e.target.value)}
              />
              {error ? (
                <p className="error">Поле обязательно для заполнения</p>
              ) : null}
              <button
                onClick={() => addcalculation()}
                className="form__btn"
                type="button"
              >
                Рассчитать
              </button>
            </div>
          </form>
          {calculation ? <PopapItems value={value} /> : null}
          <div className="popap__radio radio">
            <label className="radio__title"> Что уменьшаем? </label>
            <div
              class="radio__btn"
              style={
                selection === "Платёж"
                  ? { background: "#FF5E56", color: "#FFFFFF" }
                  : { background: "#EEF0F2" }
              }
              onClick={() => setSelection("Платёж")}
            >
              Платёж
            </div>
            <div
              class="radio__btn"
              onClick={() => setSelection("Срок")}
              style={
                selection === "Срок"
                  ? { background: "#FF5E56", color: "#FFFFFF" }
                  : { background: "#EEF0F2" }
              }
            >
              Срок
            </div>
          </div>

          <button className="popap__btn"> Добавить</button>
        </div>
      </div>
    </div>
  );
};
export default Popap;
