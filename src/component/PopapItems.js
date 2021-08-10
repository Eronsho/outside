import { React, useState, useEffect } from "react";
import PopapItem from "./PopapItem";
import "./PopapItem.scss";
const PopapItems = ({ value }) => {
  const moneyYear = [];
  let max = 260000;
  const res = value * 12 * 0.13;
  const ar = Math.ceil(max / res);
  for (let index = 0; index < ar; index++) {
    if (max > res) {
      moneyYear.push(res);
    } else {
      moneyYear.push(max);
    }
    max = max - res;
  }
  console.log(moneyYear);
  return (
    <div class="value">
      <div class="value__title">Итого можете внести в качестве досрочных:</div>
      {moneyYear.map((value, i) => (
        <PopapItem key={i} value={value} i={i} />
      ))}
    </div>
  );
};
export default PopapItems;
