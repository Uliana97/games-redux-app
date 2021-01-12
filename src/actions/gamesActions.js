import axios from "axios";
import { popularGamesURL } from "../api";

export const fetchGames = () => async (dispatch) => {
  const popularGames = await axios.get(popularGamesURL());
  dispatch({
    type: "FETCH_GAMES",
    payload: { popular: popularGames.data.results },
  });
};
