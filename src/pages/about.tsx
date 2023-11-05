import Link from "next/link";
import styles from "@/styles/about.module.css";

const about = () => {
	return (
		<>
			<Link href="/">home</Link>
			<p className={styles.text}>про нас</p>
		</>
	);
};

export default about;
