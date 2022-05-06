import React from "react";
import "./stats.styles.css";
import { useEffect, useState } from "react";

// retreive current date
let date = new Date();
let day = date.getDate();
let month = date.getMonth() + 1;
let year = date.getFullYear();
if (month < 10) month = "0" + month;
if (day < 10) day = "0" + day;
let today = year + "-" + month + "-" + day;

const Analytics = () => {
	const [data, setData] = useState([]);
	const [loading, setLoading] = useState(false);

	const access_token =
		"eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMzg5Q0QiLCJzdWIiOiI0M1BHRFYiLCJpc3MiOiJGaXRiaXQiLCJ0eXAiOiJhY2Nlc3NfdG9rZW4iLCJzY29wZXMiOiJ3aHIgd251dCB3cHJvIHdzbGUgd3dlaSB3c29jIHdzZXQgd2FjdCB3bG9jIiwiZXhwIjoxNjUyMTQ2MTc4LCJpYXQiOjE2NTE1NDEzNzh9.Hp0j00N2o-Et7NdRLtUdtyRc9e6A48HLc2wj_BUsUzY";

	let activityUrl = `https://api.fitbit.com/1/user/-/activities/date/${today}.json`;
	let foodUrl = `https://api.fitbit.com/1/user/-/foods/log/caloriesIn/date/${today}/1d.json`;

  function jsonFromResponse(response) {
    console.log(response);
    if (!response.ok) {
      throw Error("Error");
    }
    return response.json();
  }

	const getWithAuth = {
		method: "GET",
		headers: { Authorization: "Bearer " + access_token },
	};

	useEffect(() => {
		setLoading(true);
		Promise.all([
			fetch(activityUrl, getWithAuth).then(jsonFromResponse),
			fetch(foodUrl, getWithAuth).then(jsonFromResponse),
		]).then(([data, foodData]) => {
      console.log({data, foodData})

      	// add calories out data to html
	let caloriesBurned = data.summary.caloriesOut;
	

	// add calories out foodData to html
	let caloriesEaten = foodData["foods-log-caloriesIn"][0].value
	

	// add calorie deficit desired to html
	let calorieDeficit = 500
	

	// adds bmr data to html
	const bmr = data.summary.caloriesBMR
	

	// add floor count data to html
	const floorCount = data.summary.floors
	

	// add step count data to html
	const stepCount = data.summary.steps
	

	// add resting heart rate data to html
	const restingHeartRate = data.summary.restingHeartRate
	
	// add calories available to html
	const caloriesAvailable = caloriesBurned - caloriesEaten - calorieDeficit;
    })
			
  })
	return (
		<div className="min-h-screen flex flex-col text-white loggedIn">
			<main className="container mx-auto px-6 pt-16 flex-1 text-center">
				<h2 className="text-2xl md:text-4xl lg:text-6xl uppercase">
					Your Current Fitness
				</h2>
				<h1 className="text-3xl md:text-6xl lg:text-8xl font-black uppercase">
					Stats
				</h1>
				<div className="text-lg md:text-2xl lg:3xl py-2 md:py-4 md:px-10 lg:py-6 lg:px-12 bg-green-900 bg-opacity-40 w-fit mx-auto mb-8 rounded-full">
					<ul>
            <li>Calories Burned: {caloriesBurned}</li>
            <li>Calories Eaten: {caloriesEaten}</li>
            <li>Desired Daily Deficit: {calorieDeficit}</li>
            <li><span className="text-yellow-400">Calories in your wallet:</span> {caloriesAvailable}</li>
            <li>BMR: {bmr}</li>
            <li>Floor Count: {floorCount}</li>
            <li>Step Count: {stepCount}</li>
            <li>Resting Heart Rate: {restingHeartRate}</li>
            
            
          </ul>
				</div>

				<p className="text-base md:text-lg lg:text-2xl mb-8 bg-green-900 text- bg-opacity-60 w-fit mx-auto rounded-full">
					Reach your fitness goals quicker with real time data and analytics
				</p>
			</main>
			<footer className="container mx-auto p-6">
				<div className="flex flex-col md:flex-row items-center justify-between">
					<p className="mb-4 md:mb-0 md:text-xl">Made with 💖 by Robbie </p>

					<div className="flex -mx-6">
						<a href="/about" className=" mx-3 hover:opacity-80 duration-150">
							About us
						</a>{" "}
						|
						<a href="#" className="mx-3 hover:opacity-80 duration-150">
							Privacy
						</a>{" "}
						|
						<a href="#" className="mx-3 hover:opacity-80 duration-150">
							Contact
						</a>
					</div>
				</div>
			</footer>
		</div>
	);
};

export default Analytics;
