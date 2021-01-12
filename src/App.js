import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { fetchGames } from "./actions";

const App = () => {
  // const games = useSelector((store) => store.games.popular);
  const dispatch = useDispatch();

  return (
    <>
      {/* <div>{games}</div> */}
      <button onClick={() => dispatch(fetchGames())}>Fetch</button>
    </>
  );
};

export default App;
