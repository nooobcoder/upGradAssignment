import { Fragment, useEffect, useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { setLoading } from "../store/";
import { setSearchResult } from "../store/searchSlice";
import styles from "../styles/Header.module.css";
import { fetchMealByName } from "../thunk/fetchMealByName";

const DEFAULT_STATUS_TEXT = `Type a Dish Name to Search for it's ingredient`;

const Header = () => {
	const { loading } = useSelector(({ app }) => app);
	const [statusText, setStatusText] = useState(null);

	useEffect(() => {
		setStatusText(DEFAULT_STATUS_TEXT);
	}, []);

	useEffect(() => {
		setStatusText((prevState) => (loading ? "Loading" : prevState));
	}, [loading]);

	const searchInput = useRef();
	const actionDispatcher = useDispatch();

	const setLoadingTo = (status) => {
		if (typeof status === "boolean") actionDispatcher(setLoading(status));
	};

	const searchMealAPI = async () => {
		try {
			if (searchInput.current.value.trim().length !== 0) {
				setLoadingTo(true);
				const searchResult = await fetchMealByName(searchInput.current.value);
				if (searchResult !== null) {
					actionDispatcher(setSearchResult(searchResult));
					setStatusText("");
				} else {
					setStatusText("No data has been recieved");
					actionDispatcher(setSearchResult(null));
				}
			}
		} catch (error) {
			console.error(error);
		} finally {
			setLoadingTo(false);
		}
	};
	return (
		<Fragment>
			<h2 className={styles.app_heading}>Recipe Finder</h2>
			<span className={styles.search_span}>
				<input
					type="text"
					placeholder="Enter the Name of the Dish"
					className={styles.input_recipe}
					ref={searchInput}
					onKeyDown={(event) => {
						if (event.which === 13 || event.keyCode === 13) {
							setLoadingTo(true);
							searchMealAPI();
						}
					}}
				/>
				<button
					onClick={() => {
						setLoadingTo(true);
						searchMealAPI();
					}}
				>
					Get Ingredients
				</button>
				<p className={styles.search_comment}>{statusText}</p>
			</span>
		</Fragment>
	);
};

export default Header;
