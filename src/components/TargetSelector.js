import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { NativeSelect } from "@material-ui/core";

export const TargetSelector = () => {
  const dispatch = useDispatch();
  const curr = useSelector((state) => state.curr);
  const fav = useSelector((state) => state.favourites);
  const all = useSelector((state) => state.all);

  const onTargetChange = (e) => {
    dispatch({ type: "SET_TARGET", payload: e.target.value });
  };

  return (
    <div className="daugh-div">
    <p>to</p>
    <NativeSelect onChange={onTargetChange} defaultValue="none">
      <option value="none">Choose</option>
      {fav
        ? fav.map((el) => (
            <option
              className="fav-drop"
              key={el}
              value={Object.entries(curr.rates)
                .map(([key, value]) => (key === el ? value : null))
                .filter(Boolean)}
            >
              {el}
            </option>
          ))
        : ""}
      {all.map((el) => (
        <option
          key={el}
          value={Object.entries(curr.rates)
            .map(([key, value]) => (key === el ? value : null))
            .filter(Boolean)}
        >
          {el}
        </option>
      ))}
    </NativeSelect>
    </div>
  );
};
