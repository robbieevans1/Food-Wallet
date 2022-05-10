import React from "react";
import '../fooddata-styles.css'


const MealList = ({ meals, deleteMealHandler }) => {
	return (
		<div className="app__meals__container__wrapper">
			{meals?.map((meal, index) => (
				<div key={index} className="app__meals__container__wrapper__inner">
					<div>{`${meal.mealName} : ${meal.calories}`}</div>
					<div>
						<button
							className="btn__delete__meal"
							onClick={()=> deleteMealHandler(meal.id)}
						>
							Delete
						</button>
					</div>
				</div>
			))}
		</div>
	);
};

export default MealList;
