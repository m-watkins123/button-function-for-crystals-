$(document).ready(function(){

$("#buttonReset").hide();

//Global Variables, to be referred to throughout any function.
var blueCrystals = 10;
var greenCrystals = 3;
var redCrystals = 8;
var yellowCrystals = 24;
var Scoreboard = 0;
var Match Points = 0;
var Stats=[];
var Wins = 0;	
var Loses = 0;

		//If the given gem does not already have a number attributed to it, then it will generate a random number for that crystals .  Otherwise, it will use the number given to the crystals, and add it to the current score. 
		$("#blueCrystals").on('click', function(){
			if (blueCrystals){
				scoreNow = scoreNow + blueNum;
				//Replaces the HTML for the element with the Scoreboard Id, with the current score, that includes the points from the clicked crystals.
				document.getElementById("Scoreboard").innerHTML = Scoreboard;
				//Calling the function that will handle the scorekeeping.
				scoreKeeper();
			}else{
				blueCrystals = Math.floor((Math.random() * 10) + 1);
			}
		});

		$("#greenCrystals").on('click', function(){
			if (greenCrystals){
				Scoreboard = Scoreboard + greenCrystals;
				document.getElementById("Scoreboard").innerHTML = Scoreboard;
				scoreKeeper();
			}else{
				greenCrystals = Math.floor((Math.random() * 3) + 1);
			}
		});

		$("#redCrystals").on('click', function(){
			if (redCrystals){
				Scoreboard = Scoreboard + redCrystals;
				document.getElementById("Scoreboard").innerHTML = Scoreboard;
				scoreKeeper();
			}else{
				redNum = Math.floor((Math.random() * 11) + 1);
			}
		});

		$("#yellowGem").on('click', function(){
			if (yellowCrystals){
				Scoreboard = Scoreboard + yellowCrystals;
				document.getElementById("Scoreboard").innerHTML = Scoreboard;
				scoreKeeper();
			}else{
				yellowCrystals = Math.floor((Math.random() * 11) + 1);
			}
		});

	//This function will run when it is time to reset the game, which will set all of the following values back to 0.
	function playAgain(){
		//When the button is clicked, the following will occur. It will set the following values to 0, call the given score function, and hide the div with the gems, for a cleaner look.
		$("#buttonReset").click(function(){
			scoreToMeet = 200;
			Scoreboard = 0;
			blueCrystals = 0;
			greenCrystals = 0;
			redCrystals = 0;
			yellowCrystals = 0;
			givenScore();
			$("#buttonReset").hide();
			$("#CrystalsRow").show();
		});
	};

	//This function will check whether the current score equals the given score to match.  If it does, then the user wins will add by one.  If it does not, then the user losses will add by one.  It will then be posted to the HTML page, through the element with that given Id.  It will also hide and show certain content, for a cleaner look.
	function scoreKeeper(){
		if (Scoreboard> Match Points){
			losses++;
			$("#losses").html('Losses: ' + losses);
			$("#buttonReset").show();
			$("#CrystalsRow").hide();
			playAgain();
		}

		if (Scoreboard == Match Points){
			wins++;
			$("#wins").html('Wins: ' + wins);
			$("#buttonReset").show();
			$("#CrystalsRow").hide();
			playAgain();
		};
	};

	//This function will provide the score to match, through generating a random number.  It will then populate the HTML with this number.
	function givenScore(){
		Match Points= Math.floor((Math.random() * 101) + 19);
		document.getElementById("scoreToMeet").innerHTML = Match Points;
	};

//This will call the givenScore function.
givenScore();

});
