import styles from "../styles/RecipeCard.module.css";
import "../../node_modules/font-awesome/css/font-awesome.css";
import { useState } from "react";
import { useSelector } from "react-redux";

const RecipeCard = () => {
	const [isFavorite, toggleFavorite] = useState(false);
	const { meals } = useSelector(({ search }) => search);

	return (
		meals &&
		meals?.map((meal) => {
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

						<i
							className={"fa fa-heart ".concat(
								`${isFavorite ? styles.red : ""}`
							)}
							onClick={() => toggleFavorite((prevState) => !prevState)}
						></i>
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
