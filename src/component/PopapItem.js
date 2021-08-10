import { React, useState, useEffect } from "react";
import "./PopapItem.scss";
const PopapItem = ({ value, i }) => {
  return (
    <div className="value-money">
      <input type="checkbox" id={i} className="value-checkbox" />
      <label className="value-radio" for={i}>
        {value} рублей &nbsp; <strong>в&nbsp;{i + 1}-ый год </strong>
      </label>
    </div>
  );
};
export default PopapItem;
