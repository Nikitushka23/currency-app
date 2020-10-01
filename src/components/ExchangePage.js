import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button, NativeSelect } from "@material-ui/core";
import { favouriteAction } from "../reducer/actions";
import { Selector } from "./Selector";

export const ExchangePage = () => {
  const dispatch = useDispatch();
  const [base, setBase] = useState("");
  const [target, setTarget] = useState("");
  const [baseInput, setBaseInput] = useState(100);
  const [favourites, setFavourites] = useState(null);
  const curr = useSelector((state) => state.curr);
  const fav = useSelector((state) => state.favourites);
  const all = useSelector((state) => state.all);

  const onBaseChange = (e) => {
    setBase(e.target.value);
  };
  const onTargetChange = (e) => {
    setTarget(e.target.value);
  };
  const onInputChange = (e) => {
    e.preventDefault();
    setBaseInput(e.target.value);
  };

  const handleSetFav = (e) => {
    setFavourites(e.target.value);
  };

  const addFovourites = (e) => {
    e.preventDefault();
    dispatch(favouriteAction("add", favourites));
  };

  const deleteFavourites = (e) => {
    e.preventDefault();
    dispatch(favouriteAction("remove", favourites));
  };

  return (
    <form className="form">
      {/* favorites */}
      <h4>Your favourites is: {fav.map((el) => el + ", ")}</h4>
      <Selector />
      {/* <div>
        <Button
          className="btn"
          variant="contained"
          color="secondary"
          onClick={addFovourites}
        >
          ADD
        </Button>
        <NativeSelect
          onChange={handleSetFav}
          defaultValue="none"
          className="dropdown"
        >
          <option value="none">Choose</option>
          {curr.rates &&
            Object.entries(curr.rates).map(([key, value]) => (
              <option key={key} value={key}>
                {key}
              </option>
            ))}
        </NativeSelect>

        <Button
          className="btn"
          variant="contained"
          color="secondary"
          onClick={deleteFavourites}
        >
          Remove
        </Button>
      </div> */}
      {/* favorites */}

      <div>
        <div className="mother-div">
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
        </div>
      </div>
    </form>
  );
};
