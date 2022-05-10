import React from "react";
import ControlsCounter from "../components/FoodData/Controls/ControlsCounter";
import MealsFilter from "../components/FoodData/MealsFilter";
import MealList from "../components/FoodData/MealsList";
import Modal from "../components/FoodData/Modal";

const FoodData = () => {
	return (
		<div>
			<ControlsCounter total={total} />
			{openModal ? <Modal setOpenModal={setOpenModal} /> : ""}
			<ControlsCounter total={total} />

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
