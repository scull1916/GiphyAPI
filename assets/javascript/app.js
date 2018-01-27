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

