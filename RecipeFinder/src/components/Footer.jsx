import styles from "../styles/Footer.module.css";

const Footer = () => (
	<div className={styles.footer}>
		<div>Made with 💝 with React ⚛️ by </div>
		<div>
			{" "}
			&copy;{" "}
			<a href="https://github.com/nooobcoder/" target="_blank" rel="noreferrer">
				Ankur Paul (nooobcoder) - 2021
			</a>
		</div>
	</div>
);

export default Footer;
