import Link from "next/link";
import styles from "./footer.module.css";

const Footer = () => {
	return (
		<>
			<footer className={styles.footer}>
				<div className={styles.container}>
					<div className={styles.social}>
						<img src="facebook.svg" alt="" />
						<img src="telegram.svg" alt="" />
						<img src="instagram.svg" alt="" />
					</div>
					<h1>Logo</h1>
					<div className={styles.column}>
						<Link className={styles.column__link} href="">
							Товари
						</Link>
						<Link className={styles.column__link} href="">
							Про нас
						</Link>
						<Link className={styles.column__link} href="">
							Контакти
						</Link>
						<Link className={styles.column__link} href="">
							Торгові марки
						</Link>
					</div>
					<div className={styles.column}>
						<Link className={styles.column__link} href="">
							Зброя
						</Link>
						<Link className={styles.column__link} href="">
							Техніка
						</Link>
						<Link className={styles.column__link} href="">
							Електросамокати
						</Link>
						<Link className={styles.column__link} href="">
							Популярне
						</Link>
						<Link className={styles.column__link} href="">
							Акції
						</Link>
					</div>
					<div className={styles.contacts}>
						<div>
							<img src="Call.svg" />
							<p>+380 93 005 27 84</p>
						</div>
						<div>
							<img src="Message.svg" />
							<p>militarystore@gmail.com</p>
						</div>
						<div>
							<img src="Time Circle.svg" />
							<p>10:00 - 22:00</p>
						</div>
					</div>
				</div>
			</footer>
		</>
	);
};

export default Footer;