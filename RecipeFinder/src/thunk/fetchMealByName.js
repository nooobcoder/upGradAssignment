/**
 * Makes a GET request to https://www.themealdb.com/api/json/v1/1/search.php?s={searchQuery} to fetch the recipe.
 * @param {string} searchQuery
 */

const fetchMealByName = async (searchQuery) => {
	const API_STRING = `${process.env.REACT_APP_MEALDB_API}api/json/v1/1/search.php?s=${searchQuery}`;
	const raw_request = await fetch(API_STRING, { method: "GET" });

	const { meals } = await raw_request.json();
	return meals;
};

export { fetchMealByName };
