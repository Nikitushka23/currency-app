import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import "./App.css";

import { fetchCurr } from "./reducer/actions";
import { NavBar } from "./components/NavBar";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCurr());
  }, [dispatch]);

  return (
    <div className="App">
      <NavBar />
    </div>
  );
}

export default App;
