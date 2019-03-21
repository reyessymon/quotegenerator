var quotes =[
	{
		quotation: "We are what we pretend to be, so we must be careful about what we pretend to be.", 
		author: "Kurt Vonnegut, Mother Night"
	},
	{
		quotation: "When we love, we always " + 
		"strive to become better than we are. When we strive to become better than we are, everything around us becomes better too.", 
		author: "Paulo Coelho, The Alchemist"
	},
	{
		quotation: "Sometimes you wake up. Sometimes the fall kills you. And sometimes, when you fall, you fly.", 
		author: "KNeil Gaiman, Fables & Reflections"
	},
	{
		quotation: "If you're reading this...Congratulations, you're alive." +
        "If that's not something to smile about, then I don't know what is.", 
		author: "Chad Sugg, Monsters Under Your Head"
	},
	{
		quotation: "Courage is the most important of all the virtues because without courage, you can't practice any other virtue consistently.", 
		author: "Maya Angelou"
	}
];
var photos = ["images/inspirations/inspi-1.jpg","images/inspirations/inspi-2.jpg",
			  "images/inspirations/inspi-3.jpg","images/inspirations/inspi-4.jpg",
			  "images/inspirations/inspi-5.png"];
var chosen = 0;

	$("#generateButton").on("click", function () {
		var number = generateNumber();
		chosen = number;
		var photoNumber = generateNumber();
		$(".image-container").css("background-image", "url(" + photos[photoNumber] + ")" );
		generateQuote(number);
	});


	function generateQuote (number) {
		$("h1").text(quotes[number].quotation);
		$("h3").text(quotes[number].author);

	}

	function generateNumber () {
		var randomNumber = Math.floor(Math.random() * quotes.length);

		while (randomNumber === chosen) {
			randomNumber = Math.floor(Math.random() * quotes.length);			
		}

		return randomNumber;
	}