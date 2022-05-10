import React from "react";
import "../fooddata-styles.css";

const CountrolsInputs = ({
	addMealsHandler,
	mealName,
	calories,
	setCalories,
	setMealName,
}) => {
	const onAddMealsClick = () => {
		addMealsHandler();
	};

	return (
		<div className="app__controls">
			<div className="app__controls__inputs">
				<input
					type="text"
					placeholder="meal"
					value={mealName}
					onChange={(e) => setMealName(e.target.value)}
				/>
				<input
					type="number"
					placeholder="calories"
					value={calories}
					onChange={(e) => setCalories(e.target.value)}
				/>
				<input
					type="number"
					placeholder="ounces"
					value={ounces}
					// onChange={(e) => setCalories(e.target.value)}
				/>
				<input
					type="number"
					placeholder="protein"
					value={protein}
					// onChange={(e) => setCalories(e.target.value)}
				/>
				<input
					type="number"
					placeholder="fiber"
					value={fiber}
					// onChange={(e) => setCalories(e.target.value)}
				/>

				<button onClick={onAddMealsClick}>Add Food</button>
			</div>
		</div>
	);
};

export default CountrolsInputs;
