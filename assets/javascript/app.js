$(document).ready(function()
{

	var topics = 
	[
	"black books",
	"doctor who",
	"dougal",
	"father ted",
	"flight of the conchords",
	"it crowd",
	"phineas and ferb",
	"simpsons"
	
	];
	var userPick = "I got picked!";
	var addShow = "";
	var authKey = "mh76jvx6Z44dt7dBKWa8ZHWfoSw5Xitm";
	var addTag = "";
	var numResults = 0;

	var queryURLBase = "https://api.giphy.com/v1/gifs/random?rating=PG&api_key=" + authKey;
	console.log(queryURLBase);
	console.log(authKey);


//Dynamically add buttons with content from the topics array
for (i=0; i<topics.length; i++)
{

	$("<button>").appendTo(".button").text(topics[i]).addClass("btn btn-outline-primary").attr("value", topics[i]);


}

//Receive input from the user and use the input to dynamically add a button to the other buttons
$("#submitBtn").on("click", function(event)
{
	event.preventDefault();

	addShow = $("#userAdd").val().trim();



	$("<button>").appendTo(".button").text(addShow).addClass("btn btn-outline-primary").attr("value", addShow);
	topics.push(addShow);
	


});

function runQuery(queryURL)
{

	//AJAX function
	$.ajax({url: queryURL, method:"GET"})
	.done(function(GiphyData)
	{

		console.log("We've got data: ", GiphyData);
		console.log(GiphyData.type);
		console.log(GiphyData.url);
	})



}

$(".btn-outline-primary").on("click", function(event)
{

	userPick = $("btn-outline-primary").val();
	console.log(userPick);

	//Grab value from button, assign it to the tag variable, concatenate to the url to pull in
	//Giphy content related to the button
})


});