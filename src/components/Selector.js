import React, {useState} from "react";
import { Button, NativeSelect } from "@material-ui/core";
import {useDispatch, useSelector} from 'react-redux'
import { favouriteAction } from "../reducer/actions";


export const Selector = () => {
    const dispatch = useDispatch()
    const curr = useSelector((state) => state.curr);
    const [favourites, setFavourites] = useState(null);
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
    <div>
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
    </div>
  );
};
