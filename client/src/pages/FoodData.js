import React from "react";
import { useEffect, useState } from "react";
import ControlsCounter from "../components/FoodData/Controls/ControlsCounter";
import ControlsDelete from "../components/FoodData/Controls/ControlsDelete";
import CountrolsInputs from "../components/FoodData/Controls/ControlsInput";
import MealsFilter from "../components/FoodData/MealsFilter";
import MealList from "../components/FoodData/MealsList";
import Modal from "../components/FoodData/Modal";


const FoodData = () => {
  const [meals, setMeals] = useState([]);
	const [mealName, setMealName] = useState("");
	const [calories, setCalories] = useState(0);
	const [openModal, setOpenModal] = useState(false);
	const [selectedFilter, setSelectedFilter] = useState("");


  const addMealsHandler = () => {
		const oldMeals = [...meals];
		const meal = {
			mealName,
			calories,
			id: Math.floor(Math.random() * 1000),
		};

		const newMeals = oldMeals.concat(meal);

		if (calories <= 0 || mealName === "") {
			setOpenModal(true);
		} else {
			setMeals(newMeals);
		}

		setMealName("");
		setCalories(0);
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

  useEffect(() => {
    const oldState = [...meals]
    if(selectedFilter === "Ascending"){
      const ascendingMeals = oldState.sort((a,b) => a.calories = b.calories)
      setMeals(ascendingMeals)
    } else if(selectedFilter === "Descending") {
      const descendingMeals = oldState.sort((a,b) => b.calories - a.calories)
      setMeals(descendingMeals)
    }
  }, [selectedFilter])

	return (
		<div>
			<ControlsCounter total={total} />
			{openModal ? <Modal setOpenModal={setOpenModal} /> : ""}
			<ControlsDelete  deleteAllMeals={deleteAllMeals}/>
      <CountrolsInputs
      	addMealsHandler={addMealsHandler}
				mealName={mealName}
				calories={calories}
				setMealName={setMealName}
				setCalories={setCalories}
        />

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
