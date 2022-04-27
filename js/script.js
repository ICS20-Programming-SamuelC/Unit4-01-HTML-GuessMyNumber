// Copyright (c) 2022 Samuel Carlson All rights reserved
//
// Created by: Samuel Carlson
// Created on: April 2022
// This file contains the JS functions for index.html

"use strict"


/**
 * This function displays an answer based on the guess
 */
function displayAnswer () {
  // declare constants
  const MIN=1
  const MAX=6
  
  	// initialize variables
	let answer = ""
	
	// get user input
	let guess = parseInt(document.getElementById('guess').value)

  // generate random number between 1 and 6
  let randomNum = Math.floor((Math.random() * MAX) + MIN);

  	// if guess is random number, display "Correct"
	if (randomNum==guess) {
		answer = "Correct!"
	} 

  	// if guess is not random number, display "Incorrect! The correct answer was random number"
	if (guess!=randomNum) {
		answer = "Incorrect! The correct answer was "+randomNum+"."
	} 


  
  // display the results
  document.getElementById('answer').innerHTML = answer
}
