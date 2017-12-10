



var Gems = {
	gempic: [
		"assets/images/Gem1.png", 
		"assets/images/Gem3.png",
		"assets/images/Gem4.png",
		"assets/images/Gem5.png"],
	// value: [
	// 	(Math.floor(Math.random() * 12) + 1),
	// 	(Math.floor(Math.random() * 12) + 1),
	// 	(Math.floor(Math.random() * 12) + 1),
	// 	(Math.floor(Math.random() * 12) + 1)]
	//changed object array above into the array and method below!!

	value: [0,0,0,0],
	//define method
	changeValues: function () {
		for (var i = 0; i < this.value.length; i++) {
			this.value[i]=(Math.floor(Math.random() * 12) + 1);
		};
	},

// };

	addCrystals: function() {
		for (var i = 0; i < this.gempic.length; i++) {

    // Create an imageCrystal html element, add classes, add attributes
    		var imageCrystal = $("<img>");
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





// // this is an independant function
// 		function price() {
// 			(Math.floor(Math.random() * 12) + 1);
// 		}

var wins = 0;
var losses =0;
var targetNumber = (Math.floor(Math.random() * 101) + 19);
// Adds the target value to the target div
$(".target").text(targetNumber);
console.log("gempic: " + Gems.gempic);
console.log("value:" + Gems.value);
console.log("target number: " + targetNumber);

  var counter = 0;
  Gems.changeValues();
  console.log("value:" + Gems.value);

  // // Next we create a for loop to create crystals with unique values.
  // for (var i = 0; i < 4; i++) {

  //   // Create an imageCrystal html element, add classes, add attributes
  //   var imageCrystal = $("<img>");
  //   imageCrystal.addClass("crystalsize");
  //   imageCrystal.attr("src", Gems.gempic[i]);
  //   imageCrystal.attr("data-crystalvalue", Gems.value[i]);

  //   // Add the crystal to the page.
  //   $(".crystals").append(imageCrystal);
  // };
  Gems.addCrystals();

    // Click event applies to every crystal on the page.
  $(".crystalsize").on("click", function() {

    // Determining the crystal's value requires us to extract the value from the data attribute.
    // Using the $(this) keyword specifies that we should be extracting the crystal value of the clicked crystal.
    // Using the .attr("data-crystalvalue") allows us to grab the value out of the "data-crystalvalue" attribute.
    // Since attributes on HTML elements are strings, we must convert it to an integer before adding to the counter
   
    var crystalVal = ($(this).attr("data-crystalvalue"));
    console.log("click value: " + crystalVal);
    console.log("counter1: " + counter);

    crystalVal = parseInt(crystalVal);
    console.log("integer value: " + crystalVal);
    // We then add the crystalVal to the user's "counter" which is a global variable.
    // Every click, from every crystal adds to the global counter.
    counter += crystalVal;
    console.log("counter2: " + counter);
    $(".score").text(counter);



    if (counter === targetNumber) {
  		alert("Winner");
      	wins++;
      	console.log("wins: " + wins);
  		$(".winnumber").text(wins);
  		// Choose new target and gem values,reset counter and gem value
  		targetNumber = (Math.floor(Math.random() * 101) + 19);
		$(".target").text(targetNumber);
		counter = 0;
		Gems.clearDiv();
  		Gems.changeValues();
  		console.log("value:" + Gems.value);
  		Gems.addCrystals();

    }

    else if (counter >= targetNumber) {
      	alert("Loser");
  		losses++;
  		$(".lossnumber").text(losses);
  		// Choose new target and gem values,reset counter and gem value
  		targetNumber = (Math.floor(Math.random() * 101) + 19);
		$(".target").text(targetNumber);
		counter = 0;
		Gems.clearDiv();
  		Gems.changeValues();
  		console.log("value:" + Gems.value);
  		Gems.addCrystals();
    }

  });

// defining the function
// var marek = 63;
// function susan(a,b) 
// {

// idx===a++;
// b--;
// var car = a+b;
// }

// susan(marek,3);




// getter and setter
// js only
// cars.forEach(function(el,i){console.log('element: ',el,',index',i})

//jQuery for loop is .each
// notes:   $.each(Array, function(idx,elmt){console.log('element: ', elmt, ',index: ', idx)});