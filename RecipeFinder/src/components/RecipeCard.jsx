import styles from "../styles/RecipeCard.module.css";
import { useEffect, useState } from "react";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { useSelector } from "react-redux";

const RecipeCard = () => {
	const { meals } = useSelector(({ search }) => search);
	const [isFavorite, toggleFavorite] = useState([]);

	/**
	 * *Updates the isFavorite array whenever the meals array change (due to a new search query)
	 */
	useEffect(() => {
		if (meals === null) toggleFavorite([]);
		else toggleFavorite(() => new Array(meals.length).fill(false));
	}, [meals]);

	/**
	 * *Toggles the favorite status at the respective index of clicked card.
	 * @param {number} index
	 */
	const toggleFavoriteStatus = (index) => {
		/**
		 * *This alters the favorited state onclick of the respective card. It uses the previous state snapshot and alters the particular index of the clicked card item.
		 * @param(array) prevState
		 */
		toggleFavorite((prevState) => {
			return prevState.map((value, valIndex) =>
				valIndex === index ? !value : value
			);
		});
	};

	return (
		meals &&
		meals?.map((meal, mealIndex) => {
			let ingredientsKeyNames = [];
			let quantityKeyNames = [];

			for (let a = 1; a <= 20; ++a) {
				ingredientsKeyNames[a - 1] = `strIngredient${a}`;
				quantityKeyNames[a - 1] = `strMeasure${a}`;
			}

			return (
				<div className={styles.recipe_card} key={meal.idMeal}>
					<div className={styles.heading_container}>
						<h3>{meal.strMeal}</h3>
						<div>
							<FontAwesomeIcon
								icon={faHeart}
								className={`${styles.icon} ${
									isFavorite[mealIndex] ? styles.red : ""
								}`}
								onClick={() => toggleFavoriteStatus(mealIndex)}
							/>
						</div>
						{/* 	<i
							className={"fa fa-heart ".concat(
								`${isFavorite[mealIndex] ? styles.red : ""}`
							)}
							onClick={() => toggleFavoriteStatus(mealIndex)}
						></i> */}
					</div>

					<div className={styles.recipe_container}>
						<img src={meal.strMealThumb} alt="food_image" />
						<div className={styles.recipe_meta}>
							<div className={styles.div1}>
								<span className={styles.italic}>Category of Meal</span> -{" "}
								{meal.strCategory}
							</div>
							<div className={styles.div2}>
								<span className={styles.italic}>Area of the meal</span> -{" "}
								{meal.strArea}
							</div>
							<br />
							<div className={styles.div3}>
								<span className={styles.italic}>Ingredients</span>
								<ul className={styles.ingredients_list}>
									{ingredientsKeyNames.map(
										(ing, index) =>
											meal[ing] && (
												<li key={ing}>
													{meal[ing]} --- {meal[quantityKeyNames[index]]}
												</li>
											)
									)}
								</ul>
							</div>
							<div className={styles.div4}>
								<span className={styles.italic}>
									<center> Recipes</center>
								</span>
								<p className={styles.ingredients_list}>
									{meal.strInstructions}
								</p>
							</div>
						</div>
					</div>
				</div>
			);
		})
	);
};

export default RecipeCard;
