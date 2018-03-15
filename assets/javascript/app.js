var time = 30;
var questions_index = 0;
var questions_arr = [["What was the first full length CGI movie?","A Bug's Life","Monsters Inc","Toy Story","The Lion King"],
["Which of these is NOT a name of one of the Spice Girls?","Sporty Spice","Fred Spice","Scary Spice","Posh Spice"],
["Which NBA team won the most titles in the 90s?","New York Knicks","Portland Trailblazers","Los Angeles Lakers",
"Chicago Bulls"],["Which group released the hit song Smells Like Teen Spirit?", "Nirvana","Backstreet Boys","Offspring","No Doubt"],
["Which popular Disney movie featured the song 'Circle of life'?","Alladin","Hercules","Mulan","The Lion King"],
["Finish this line from the Fresh Prince of Bel-Air theme song 'I whistled for a cab and when it came near, the licence plate said ...'",
"Dice","Mirror","Fresh","Cab"],["What was Doug's best friend's name?","Skeeter","Mark","Zack","Cody"],
["What was the name of the principal at Bayside High in Saved By The Bell?","Mr. Zhou","Mr. Driggers","Mr. Belding","Mr. Page"]];


var answers = ["Toy Story","Fred Spice","Chicago Bulls","Nirvana","The Lion King","Fresh","Skeeter","Mr. Belding"];
var imagesURL = ["assets/images/toy-story.jpg","assets/images/spice.jpg","assets/images/bulls.jpeg","assets/images/nirvana.jpg",
"assets/images/lionKing.jpg","assets/images/fresh.jpg","assets/images/doug.jpg","assets/images/savedByTheBell.jpg"];

$( document ).ready(function(){
	$(".question").hide();
});

function start() {
	$("#button").toggle("fast");
	$('#questions').toggle("slow");
	ask();
}

function ask(){
	$('#questions').html('');
	time = 30;
	var elem = '<div style="font-size: 30px; font-weight: bold; color: #672116;">TIME REMAINING:&nbsp;'+
	'<span id="timer"></span></div><br>';
	$('#questions').append(elem);
	document.getElementById("timer").innerHTML = time + " s ";
	time --;
	timer = setInterval(function(){
		if(time < 0){
			clearInterval(timer);
			answer();
			return;
		}

		document.getElementById("timer").innerHTML = time + " s ";
		time --;
		
	},1000);
	var arr = questions_arr[questions_index];
	
	elem = $('<p style="font-size:30px,font-weight:bold;color:#212730">' + arr[0] + '</p>');
	$("#questions").append(elem);
	
	for(var i = 1; i < arr.length; i++){
		var html = '<div><input type="radio" name="movie" onclick="answer(this);" value="'+arr[i]+'"><label for="'+arr[i]+'">'+	
       arr[i]+	'</label></div>';
		$('#questions').append($(html));
	}
}

function answer(obj){
	clearInterval(timer);
	var ans = $(obj).val();

	$('#questions').html('');
	var e = $('<div onclick="next()"></div>')
	if(ans == answers[questions_index]){
		e.append($('<p style="font-size:30px;font-weight:bold;color:#f442e8">Correct!!!</p>'));
	} else {
		e.append($('<p style="font-size:30px;font-weight:bold;color:#f442e8">Incorrect!!!</p>'));
		e.append($('<p style="font-size:20px;font-weight:bold;color:#4174f4">The answer is</p>'));
		e.append($('<p style="font-size:50px;font-weight:bold;color:#ef394e">'+answers[questions_index]+'</p>'));

	}
	    e.append($('<p><img src="'+imagesURL[questions_index]+'"width="400px" height="250px"></p>'));
	$('#questions').append(e);
	
}

function next(){
	questions_index ++;
	if(questions_index < questions_arr.length){
		ask();
	}
}