import "@/styles/globals.css";
import type { AppProps } from "next/app";
// layout
import Layout from "@/layouts/Layouts";

export default function App({ Component, pageProps }: AppProps) {
	return (
		<Layout>
			<Component {...pageProps} />
		</Layout>
	);
}
