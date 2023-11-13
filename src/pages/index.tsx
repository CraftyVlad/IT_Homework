import React from "react";
import Restaurant from "./Restaurant";

const App: React.FC = () => {
	return (
		<div>
			<Restaurant
				name="Delicious Eats"
				address="123 Main St, City, State"
				rating={4.5}
				cuisineType="Italian"
				image="restaurant-image.jpg"
			/>
		</div>
	);
};

export default App;
