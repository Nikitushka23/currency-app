import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Selector } from "./Favorites";
import { BaseSelector } from "./BaseSelector";
import { TargetSelector } from "./TargetSelector";

export const ExchangePage = () => {
  const [baseInput, setBaseInput] = useState(100);
  const base = useSelector((state) => state.selectedBase);
  const target = useSelector((state) => state.selectedTarget);

  const onInputChange = (e) => {
    e.preventDefault();
    setBaseInput(e.target.value);
  };

  return (
    <form className="form">
      <Selector />
      <div>
        <div className="mother-div">
          <BaseSelector />
          <input
            className="input"
            type="number"
            onChange={onInputChange}
            value={baseInput}
          ></input>
          <br />
          <span className="result">
            {base && target
              ? (baseInput * (target / base)).toFixed(2)
              : "Choose you currencies"}
          </span>
          <TargetSelector />
        </div>
      </div>
    </form>
  );
};
