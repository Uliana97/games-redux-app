//BASE URL
const baseUrl = "https://api.rawg.io/api/";

//GET CURRENT MONTH
const getCurrentMonth = () => {
  const month = new Date().getMonth() + 1;
  if (month < 10) {
    return `0${month}`;
  }
  return month;
};

//GET CURRENT DAY
const getCurrentDay = () => {
  const day = new Date().getDate();
  if (day < 10) {
    return `0${day}`;
  }
  return day;
};

//GET CURRENT YEAR
const getCurrentYear = () => new Date().getFullYear();

//GET FULL DATE
const year = getCurrentYear();
const month = getCurrentMonth();
const day = getCurrentDay();
const date = `${year}-${month}-${day}`;
const lastDate = `${year - 1}-${month}-${day}`;
const nextDate = `${year + 1}-${month}-${day}`;

//POPULAR_GAMES
const popularGames = `games/?dates=${lastDate}, ${date}&ordering=-raiting&page_size=10`;

const popularGamesURL = () => `${baseUrl}${popularGames}`;
