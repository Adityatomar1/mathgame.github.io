/*eslint-env browser*/
var playing = false;
var action;
var score;
var correctAnswer;
var timeremaining=5;
var i;
//if start and reset button is clicked
document.getElementById("startreset").onclick = function(){
//if playing 
	if(playing == true){
		location.reload();	
	}
	else{
		playing=true;
		score =0;
		document.getElementById("scorevalue").innerHTML =score;
		document.getElementById("timeremaining").style.display ="block";
		timeremaining=60;
		document.getElementById("timeremainingvalue").innerHTML=timeremaining;
		hide("gameover");
		document.getElementById("startreset").innerHTML = "reset game";
		startCountdown();
		generateQA();
	}
	
}
function startCountdown(){
	action = setInterval(function(){
		timeremaining-=1;
		document.getElementById("timeremainingvalue").innerHTML=timeremaining;
		if(timeremaining==0){
			stopcountdown();
			show("gameover")
			document.getElementById("gameover").innerHTML ="<p>game over!</p><p>your score is "+ score +".</p>";
			hide("timeremaining");
			hide("correct");
			hide("wrong");
			playing =false;
			document.getElementById("startreset").innerHTML="start game";
			
		}
		
	},1000);
}
function hide(Id){
	document.getElementById(Id).style.display="none";
}
function show(Id){
		document.getElementById(Id).style.display="block";

}

function stopcountdown(){
	clearInterval(action);
}
function generateQA(){
	var x=1+Math.round(9*Math.random());
	var y=1+Math.round(9*Math.random());
	correctAnswer=x*y;
	document.getElementById("question").innerHTML=x+"X"+y;
	var correctpositionvar =1+Math.round(3*Math.random());
	document.getElementById("box"+correctpositionvar).innerHTML = correctAnswer;
	var answer=[correctpositionvar];
	for(i=1;i<5;i++){
		if(i !=correctpositionvar){
			var wronganswer;
			do{
			wronganswer=(1+Math.round(9*Math.random()))*(1+Math.round(9*Math.random()));}
				while(answer.indexOf(wronganswer)>-1)
				document.getElementById("box"+i).innerHTML = wronganswer;
			answer.push(wronganswer);
		}
	}
}
for(i=1;i<5;i++){
document.getElementById("box"+i).onclick =function(){
	if(playing ==true){
		if(this.innerHTML ==correctAnswer){
			score+=1;
			document.getElementById("scorevalue").innerHTML=score;
			hide("wrong");
			show("correct");
			setTimeout(function(){
				hide("correct")},1000);
			generateQA();
		}
		else{
			hide("correct");
			show("wrong");
			setTimeout(function(){
				hide("wrong");},1000);
			}
		}
	}
}


//if start and reset button is clicked
		//reload
	//if not
		//show countdown
		//set score 0
		//reducing time by 1 sec in loops
			//if time left
				//continew
			//else
				//game over	
		//change button to reset
		//generte new Q & A

//if we click answer box
	//if palying
		//check answer
			//yes
				//increse score 1
				//correct box is shown for 1 sec
				//generate new q 7 a
			//no
				//show try again box for 1 sec
