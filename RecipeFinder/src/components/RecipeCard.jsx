import styles from "../styles/RecipeCard.module.css";
import "../../node_modules/font-awesome/css/font-awesome.css";
import { useState } from "react";

const RecipeCard = () => {
	const [isFavorite, toggleFavorite] = useState(false);

	return (
		<div className={styles.recipe_card}>
			<div className={styles.heading_container}>
				<h3>Mediterranean Pasta Salad</h3>

				<i
					className={"fa fa-heart ".concat(`${isFavorite ? styles.red : ""}`)}
					onClick={() => toggleFavorite((prevState) => !prevState)}
				></i>
			</div>
			<div className={styles.recipe_container}>
				<img
					src="https://www.themealdb.com/images/media/meals/qtqvys1468573168.jpg"
					alt="food_image"
				/>
				<div className={styles.recipe_meta}>
					<div className={styles.div1}>
						<span className={styles.italic}>Category of Meal</span> - Chicken
					</div>
					<div className={styles.div2}>
						<span className={styles.italic}>Area of the meal</span> - Italian
					</div>
					<br />
					<div className={styles.div3}>
						<span className={styles.italic}>Ingredients</span>
						<ul className={styles.ingredients_list}>
							<li>This is item1 - qty</li>
							<li>This is item1 - qty</li>
							<li>This is item1 - qty</li>
							<li>This is item1 - qty</li>
							<li>This is item1 - qty</li>
							<li>This is item1 - qty</li>
							<li>This is item1 - qty</li>
							<li>This is item1 - qty</li>
							<li>This is item1 - qty</li>
						</ul>
					</div>
					<div className={styles.div4}>
						<span className={styles.italic}>
							<center> Recipes</center>
						</span>
						<p
							className={styles.ingredients_list}
						>{`Preheat the oven at 180 C / Gas 4. Line a baking tray with greaseproof paper.\r\nIn a bowl, mix the cashews and icing sugar. Add the egg yolks and orange blossom water and mix to a smooth homogeneous paste.\r\nTake lumps of the cashew paste and shape into small balls. Roll the balls in icing sugar and transfer to the baking tray. Push an almond in the centre of each ghribia.\r\nBake until the biscuits are lightly golden, about 20 minutes. Keep an eye on them, they burn quickly.`}</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default RecipeCard;
