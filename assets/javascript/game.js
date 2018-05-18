


$(document).ready(function() {
  var Gems = {
  	gempic: [
  		"assets/images/Gem1.png", 
  		"assets/images/Gem3.png",
  		"assets/images/Gem4.png",
  		"assets/images/Gem5.png"],

  	value: [0,0,0,0],
  	//define methods
  	changeValues: function () {
  		for (var i = 0; i < this.value.length; i++) {
  			this.value[i]=(Math.floor(Math.random() * 12) + 1);
  		};
  	},

  	addCrystals: function() {
  		for (var i = 0; i < this.gempic.length; i++) {

      // Create an imageCrystal html element, add classes, add attributes
      		imageCrystal = $("<img>");
      		imageCrystal.addClass("crystalsize");
      		imageCrystal.attr("src", this.gempic[i]);
      		imageCrystal.attr("data-crystalvalue", this.value[i]);
      // Add the crystal to the page.
      		$(".crystals").append(imageCrystal);
    		};

  	},


  	clearDiv: function() {
  		$(".crystals").empty();
  	}
  };

  update=function() {
  	targetNumber = (Math.floor(Math.random() * 101) + 19);
  	counter = 0;
  	$(".target").text(targetNumber);
  	$(".score").text(counter);
  	$( "#name" ).fadeOut (0).fadeIn(5000);
    $( ".icon" ).fadeOut (0).fadeIn(5000);

  };


  var imageCrystal;
  var wins = 0;
  var losses =0;
  var targetNumber;

//This is the start of the action.

  update();
  Gems.changeValues();
  console.log("value:" + Gems.value);
  Gems.addCrystals();
  

    // Click event applies to every crystal on the page, needs element class and div class bound tothe click event.
  $(".crystals").on("click", ".crystalsize",function() {
  	console.log("click happened");

    // Extract the value from the data attribute.
    // THIS specifies extracting the crystalvalue of the clicked crystal.
    // .attr("data-crystalvalue") grabs value of "data-crystalvalue" attribute.
    // Attributes on HTML elements are strings, convert to an integer then add
   
    var crystalVal = ($(this).attr("data-crystalvalue"));
    crystalVal = parseInt(crystalVal);
    // Add the crystalVal to counter which is a global variable.
    // Every click, from every crystal adds to the global counter.
    counter += crystalVal;
    $(".score").text(counter);



// WINNER
    if (counter === targetNumber) {
  		
      	wins++;
      	console.log("wins: " + wins);
  		$(".winnumber").text(wins);
  		alert("Winner");
  		// Choose new target,gem values,reset counter and gem value
		update();
		Gems.clearDiv();
  		Gems.changeValues();
  		console.log("value:" + Gems.value);
  		Gems.addCrystals();

    };
// LOSER

    if (counter >= targetNumber) {
      	
  		losses++;
  		$(".lossnumber").text(losses);
  		alert("Loser");
  		// Choose new target and gem values,reset counter and gem value
		update();
		Gems.clearDiv();
  		Gems.changeValues();
  		console.log("value:" + Gems.value);
  		Gems.addCrystals();
    };

  });

});

