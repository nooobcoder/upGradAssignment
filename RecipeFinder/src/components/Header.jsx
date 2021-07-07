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
				} else setStatusText("No data has been recieved");
			}
		} catch (error) {
			console.error(error);
		} finally {
			setLoadingTo(false);
		}
	};
	return (
		<Fragment>
			<h1 className={styles.app_heading}>Recipe Finder</h1>
			<span className={styles.search_span}>
				<input
					type="text"
					placeholder="Enter the Name of the Dish"
					className={styles.input_recipe}
					ref={searchInput}
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
