import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { NativeSelect } from "@material-ui/core";

export const BaseSelector = () => {
  const dispatch = useDispatch();
  const curr = useSelector((state) => state.curr);
  const fav = useSelector((state) => state.favourites);
  const all = useSelector((state) => state.all);

  const onBaseChange = (e) => {
    dispatch({ type: "SET_BASE", payload: e.target.value });
  };

  return (
    <div className="daugh-div">
      <p>from</p>
      <NativeSelect onChange={onBaseChange} defaultValue="none">
        <option value="none">Choose</option>
        {fav
          ? fav.map((el) => (
              <option
                key={el}
                className="fav-drop"
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
