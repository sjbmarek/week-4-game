



var gems = {
	gempic: [
		"assets/images/Gem1.png", 
		"assets/images/Gem3.png",
		"assets/images/Gem4.png",
		"assets/images/Gem5.png"],
	value: [
		(Math.floor(Math.random() * 12) + 1),
		(Math.floor(Math.random() * 12) + 1),
		(Math.floor(Math.random() * 12) + 1),
		(Math.floor(Math.random() * 12) + 1)]
}


var targetNumber = (Math.floor(Math.random() * 101) + 19);
// Adds the target value to the target div
$(".target").text(targetNumber);
console.log("gempic: " + gems.gempic);
console.log("value:" + gems.value);
console.log("target number: " + targetNumber);

  // var counter = 0;

  // Next we create a for loop to create crystals with unigue values.
  for (var i = 0; i < 4; i++) {

    // Create an imageCrystal html element, add classes, add attributes
    var imageCrystal = $("<img>");
    imageCrystal.addClass("crystalsize");
    imageCrystal.attr("src", gems.gempic[i]);
    imageCrystal.attr("data-crystalvalue", gems.value[i]);

    // Add the crystal to the page.
    $(".crystals").append(imageCrystal);
  }

  // // This time, our click event applies to every single crystal on the page. Not just one.
  // $(".crystal-image").on("click", function() {

  //   // Determining the crystal's value requires us to extract the value from the data attribute.
  //   // Using the $(this) keyword specifies that we should be extracting the crystal value of the clicked crystal.
  //   // Using the .attr("data-crystalvalue") allows us to grab the value out of the "data-crystalvalue" attribute.
  //   // Since attributes on HTML elements are strings, we must convert it to an integer before adding to the counter
    
  //   var crystalValue = ($(this).attr("data-crystalvalue"));
  //   crystalValue = parseInt(crystalValue);
  //   // We then add the crystalValue to the user's "counter" which is a global variable.
  //   // Every click, from every crystal adds to the global counter.
  //   counter += crystalValue;

  //   // All of the same game win-lose logic applies. So the rest remains unchanged.
  //   alert("New score: " + counter);

  //   if (counter === targetNumber) {
  //     alert("You win!");
  //   }

  //   else if (counter >= targetNumber) {
  //     alert("You lose!!");
  //   }

  // });

