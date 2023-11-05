import Header from "./header/Header";
import Footer from "./footer/Footer";
import Form from "./form/Form";

interface Props {
	children: any;
}

const Layout = ({ children }: Props) => {
	return (
		<>
			<Header />
			<main>{children}</main>
			<Form />
			<Footer />
		</>
	);
};

export default Layout;
