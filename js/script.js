// Copyright (c) 2022 Samuel Carlson All rights reserved
//
// Created by: Samuel Carlson
// Created on: April 2022
// This file contains the JS functions for index.html

"use strict"

Math.floor((Math.random() * max6) + min6);

/**
 * This function displays an answer based on the guess
 */
function displayAnswer () {
  	// initialize variables
	let answer = ""
	
	// get user input
	let guess = parseInt(document.getElementById('guess').value)


  	// if guess is random number, display "Correct"
	if (guess random) {
		answer = "Correct!"
	} 

  // display the results
  document.getElementById('answer').innerHTML = answer
}
