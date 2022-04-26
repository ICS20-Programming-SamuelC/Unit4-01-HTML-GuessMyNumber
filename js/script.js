// Copyright (c) 2022 Ms Raffin All rights reserved
//
// Created by: Ms Raffin
// Created on: March 2022
// This file contains the JS functions for index.html

"use strict"

Math.floor((Math.random() * max6) + min6);

/**
 * This function displays a greeting based on the hour of the day
 */
function displayAnswer () {
  	// initialize variables
	let answer = ""
	
	// get user input
	let guess = parseInt(document.getElementById('guess').value)


  	// if hour is before noon, display "Good morning"
	if (guess random) {
		answer = "Correct!"
	} 

  // display the results
  document.getElementById('answer').innerHTML = answer
}
