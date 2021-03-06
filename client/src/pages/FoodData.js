import React from "react";
import { useEffect, useState } from "react";
import ControlsCounter from "../components/FoodData/Controls/ControlsCounter";
import ControlsDelete from "../components/FoodData/Controls/ControlsDelete";
import ControlsInputs from "../components/FoodData/Controls/ControlsInput";
import MealList from "../components/FoodData/MealsList";
import Modal from "../components/FoodData/Modal";

const FoodData = () => {
	const [meals, setMeals] = useState([]);
	const [mealName, setMealName] = useState("");
	const [calories, setCalories] = useState();
	const [protein, setProtein] = useState();
	const [ounces, setOunces] = useState();
	const [fiber, setFiber] = useState();
	const [openModal, setOpenModal] = useState(false);

	const addMealsHandler = () => {
		const oldMeals = [...meals];
		const meal = {
			mealName,
			calories,
			protein,
			ounces,
			fiber,
			id: Math.floor(Math.random() * 1000),
		};

		const newMeals = oldMeals.concat(meal);

		if (
			calories <= 0 ||
			protein < 0 ||
			ounces <= 0 ||
			fiber < 0 ||
			mealName === ""
		) {
			setOpenModal(true);
		} else {
			setMeals(newMeals);
		}

		setMealName("");
		setCalories("");
		setProtein("");
		setOunces("");
		setFiber("");
	};

	const deleteMealHandler = (id) => {
		const oldMeals = [...meals];
		const newMeals = oldMeals.filter((meal) => meal.id !== id);

		setMeals(newMeals);
	};

	const deleteAllMeals = () => {
		setMeals([]);
	};

	const total = meals
		.map((meal) => meal.calories)
		.reduce((acc, value) => acc + +value, 0);

	const totalOunces = meals
		.map((meal) => meal.ounces)
		.reduce((acc, value) => acc + +value, 0);

	const totalProtein = meals
		.map((meal) => meal.protein)
		.reduce((acc, value) => acc + +value, 0);

	const totalFiber = meals
		.map((meal) => meal.fiber)
		.reduce((acc, value) => acc + +value, 0);

	const coRatio = Math.round(total / totalOunces * 100) / 100
	
	
	const cpRatio = Math.round(total / totalProtein * 100) / 100
	
	const cfRatio = Math.round(total / totalFiber * 100) / 100

	return (
		<div className="fd">
			<ControlsCounter
				total={total}
				totalOunces={totalOunces}
				totalProtein={totalProtein}
				totalFiber={totalFiber}
				coRatio={coRatio}
				cpRatio={cpRatio}
				cfRatio={cfRatio}
			/>
			{openModal ? <Modal setOpenModal={setOpenModal} /> : ""}
			<ControlsDelete deleteAllMeals={deleteAllMeals} />
			<ControlsInputs
				addMealsHandler={addMealsHandler}
				mealName={mealName}
				calories={calories}
				protein={protein}
				ounces={ounces}
				fiber={fiber}
				setMealName={setMealName}
				setCalories={setCalories}
				setProtein={setProtein}
				setOunces={setOunces}
				setFiber={setFiber}
			/>

			<div>
				<MealList meals={meals} deleteMealHandler={deleteMealHandler} />
				{/* <MealsFilter
					selectedFilter={selectedFilter}
					setSelectedFilter={setSelectedFilter}
				/> */}
			</div>
		</div>
	);
};

export default FoodData;
