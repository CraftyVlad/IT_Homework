import React from "react";
import styles from "./header.module.css";
import Link from "next/link";

const Header = () => {
	return (
		<header className={styles.header}>
			<a href="/" className={styles.logo}>Logo</a>
			<input type="search" name="search" className={styles.search__bar} />
			<select name="items" className={styles.items__select}>
				<option value="./items">Товари</option>
			</select>
			<Link href="./about" className={styles.about__link}>
				Про нас
			</Link>
			<Link href="./contacts" className={styles.contacts__link}>
				Контакти
			</Link>
			<select name="items" className={styles.lang__select}>
				<option value="lang">UA</option>
			</select>
			<img src="Heart.svg" className={styles.heart} />
			<img src="Buy.svg" className={styles.cart} />
			<button className={styles.enter_btn}>Вхід</button>
		</header>
	);
};

export default Header;
