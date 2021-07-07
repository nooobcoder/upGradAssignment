import { Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";

import { setLoading } from "../store/";
import styles from "../styles/Header.module.css";

const Header = () => {
	const loading = useSelector(({ app }) => app);
	const actionDispatcher = useDispatch();

	const setLoadingTo = (status) => {
		if (typeof status === "boolean") actionDispatcher(setLoading(status));
	};

	return (
		<Fragment>
			<h1 className={styles.app_heading}>Recipe Finder</h1>
			<span className={styles.search_span}>
				<input
					type="text"
					placeholder="Enter the Name of the Dish"
					className={styles.input_recipe}
				/>
				<button onClick={() => setLoadingTo(true)}>Get Ingredients</button>
				<p className={styles.search_comment}>
					Type a Dish Name to Search for it's ingredient
				</p>
			</span>
		</Fragment>
	);
};

export default Header;
