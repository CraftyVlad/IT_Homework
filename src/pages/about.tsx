import Link from "next/link";
import styles from "@/styles/about.module.css";

const about = () => {
	return (
		<>
			<div className={styles.history}>
				<h1 className={styles.history__title}>Наша історія</h1>
				<p className={styles.history__text}>
					Lorem ipsum dolor sit amet consectetur. Sit massa proin
					pulvinar gravida odio faucibus feugiat elementum. Nullam
					nunc blandit purus leo nulla commodo malesuada odio. Sem
					aliquam morbi sapien dolor at. Risus fermentum bibendum
					convallis nec. Nec fermentum faucibus risus diam nisi at
					lacus vitae ultricies. Sodales phasellus blandit posuere
					senectus interdum. Massa nunc tellus cras egestas sem risus.
					Ut semper at nunc egestas.
				</p>
				<p className={styles.history__text}>
					Lorem ipsum dolor sit amet consectetur. Nam commodo etiam
					lectus amet proin enim porttitor arcu laoreet. Volutpat
					posuere eu blandit egestas faucibus. Sit lacinia feugiat
					maecenas tincidunt aliquet. Sodales suscipit ac sollicitudin
					fermentum. Egestas quis sagittis augue egestas sit volutpat
					at diam.
				</p>
			</div>
			<h1 className={styles.why}>Чому вартує обрати нас?</h1>
			<div className={styles.cards}>
				<div className={styles.production}>
					<img src="file.svg" alt="" className={styles.card__img} />
					<h1 className={styles.card__h}>Сертифікована продукція</h1>
					<p className={styles.card__p}>
						Lorem ipsum dolor sit amet consectetur. Ac faucibus
						mauris tincidunt donec amet amet elit.
					</p>
				</div>
				<div className={styles.price}>
					<img src="hryvnia.svg" alt="" className={styles.card__img} />
					<h1 className={styles.card__h}>Найкращі ціни</h1>
					<p className={styles.card__p}>
						Lorem ipsum dolor sit amet consectetur. Diam.
					</p>
				</div>
				<div className={styles.trust}>
					<img src="shake.svg" alt="" className={styles.card__img} />
					<h1 className={styles.card__h}>Довіра</h1>
					<p className={styles.card__p}>
						Lorem ipsum dolor sit amet consectetur. Cras sed in
						dictumst feugiat sem in habitant sit. Nullam.
					</p>
				</div>
			</div>
		</>
	);
};

export default about;
