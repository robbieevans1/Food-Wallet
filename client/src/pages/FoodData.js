import React from "react";
import MealsFilter from "../components/FoodData/MealsFilter";
import MealList from "../components/FoodData/MealsList";
import Modal from "../components/FoodData/Modal";

const FoodData = () => {
	return (
		<div>
			{openModal ? <AppModal setOpenModal={setOpenModal} /> : ""}

			<div>
				<MealList meals={meals} deleteMealHandler={deleteMealHandler} />
				<MealsFilter
					selectedFilter={selectedFilter}
					setSelectedFilter={setSelectedFilter}
				/>
			</div>
		</div>
	);
};

export default FoodData;
