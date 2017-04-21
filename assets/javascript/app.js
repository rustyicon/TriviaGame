$(document).ready(function() {

var startGame;
var endGame;
var timeUp;
var display = $("#timer")
var correct; 
var incorrect; 
var notAnswered; 
var questions = [
				{
					question:'Ponyo is the story of a little fish that catches a glimpse of the human world and wants to become part of it. What story is Ponyo losely based on:',
					answer1:'Finding Nemo',
					answer2:'Big Fish',
					answer3:'Jaws',
					answer4:'The Little Mermaid'
				},
				{
					question:'With a sick ailing mother, and a busy university professor father, Totoro is the story of Satsuki and Mei, two sisters whom find and befriend forest spirtis. Totoro is a(n):',
					answer1:'Animated dust creature',
					answer2:'Seed',
					answer3:'Keeper of the forest',
					answer4:'Catbus'
				},
				{
					question:'Guess the Film Title: Nature Vs Man is often a theme in Ghilbi films. Creating a voice for nature through different characters that appear as spirits, gods or demons. Are a physical representation to the consequences that could arise if nature continues to be disrespected. In ______________, the boar god, Nago, becomes a demon. Blinded by hate and rage against humans. ',
					answer1:'Princess Mononoke',
					answer2:'Nausiciaa',
					answer3:'Ponyo',
					answer4:'Castle in the Sky'
				},
				{
					question:'Pom Poko plot revolves around a group of Tanuki (Japanese racoon dog), who are threatened by a gigantic and ongoing suburban development project called Tama New Town, in the Tama Hills on the outskirts of Tokyo. The development is cutting into their forest habitat and dividing their land. The Tanuki band together against the humans to stop the development with thier _________ powers',
					answer1:'Eco terrorrism',
					answer2:'Fire',	
					answer3:'Shape shifting',
					answer4:'Illusionary'
				},
				{
					question:'Spirited Away: Ten-year-old Chihiro Ogino and her parents are traveling to their new home when her father takes a wrong turn. They unknowingly enter a magical world that Chihiro&lsquos father insists on exploring. What is the reason Chihiro becomes trapped in the spirit world?',
					answer1:'Her parents turn into pigs',
					answer2:'Chihiro loses her memory',	
					answer3:'Chihiro stayed longer than 24hrs in the spirit world',
					answer4:'Chihiro has been cursed by no face'
				},
				{
					question:'Howl&lsquos Moving Castle: A young gifted wizard is trapped between a  :Who stole Howl&lsquos heart?',
					answer1:'A fire demon',
					answer2:'The witch of the waste',	
					answer3:'Sophie',
					answer4:'Madame Suliman'
				}

				];




$('#done').click(endGame);

setTimeout(timeUp, 120000);

function startGame(){
	
	$("#button").click(startGame);
		console.log(startGame)

		/*
		$("#button").click(startGame);
		console.log(startGame)
		display.click(function(){
			display.remove()*/

		};
	})


/*function startGame({


})


function endGame (){

}*/
