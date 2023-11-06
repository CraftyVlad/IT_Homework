import React from "react";
import styles from "./form.module.css";

const Form = () => {
	return (
		<form className={styles.form}>
			<div className={styles.form__info}>
				<h1 className={styles.form__title}>Виникли запитання?</h1>
				<input
					type="text"
					name="name"
					id="name"
					placeholder="Ваше ім’я"
				/>
				<input
					type="number"
					name="number"
					id="number"
					placeholder="Номер телефону"
				/>
			</div>

			<div className={styles.submit}>
				<h1 className={styles.submit__h}>
					Залиште заявку і ми Вам передзвонимо
				</h1>
				<input type="submit" value="Надіслати" />
			</div>
		</form>
	);
};

export default Form;
