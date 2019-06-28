
    
var q1= '<div class="row justify-content-center" id="question"><div class="col-lg-10 justify-content-center"><div><h6 id>Q1: What planet is Luke Skywalker from?</h6><br><p id="q1a" class="abcd">A: Alderaan</p><p id="correct" class="abcd">B: Tatooine</p><p id="q1c" class="abcd">C: Coruscant</p><p id="q1d" class="abcd">D: Kashyyyk</p></div></div></div>';

var q2= '<div class="row justify-content-center" id="question"><div class="col-lg-10 justify-content-center"><div><h6 id>Q2: Who is the original owner of the Millenium Falcon</h6><br><p id="q2a" class="abcd">A: Rey</p><p id="q2b" class="abcd">B: Han Solo</p><p id="correct" class="abcd">C: Lando Calrissian</p><p id="q2d" class="abcd">D: Jabba the Hutt</p></div></div></div>';

var q3= '<div class="row justify-content-center" id="question"><div class="col-lg-10 justify-content-center"><div><h6 id>Q3: Who did the title of Star Wars Ep. I: The Phantom Menace, refer to?</h6><br><p id="q3a" class="abcd">A: Darth Maul</p><p id="correct" class="abcd">B: Shiv Palpatine</p><p id="q3c" class="abcd">C: Anakin Skywalker</p><p id="q3d" class="abcd">D: The Trade Federation</p></div></div></div>';

var q4= '<div class="row justify-content-center" id="question"><div class="col-lg-10 justify-content-center"><div><h6 id>Q4: What does Anakin hate more than anything?</h6><br><p id="correct" class="abcd">A: Sand</p><p id="q4b" class="abcd">B: The Jedi</p><p id="q4c" class="abcd">C: Padme Amidala</p><p id="q4d" class="abcd">D: Flying</p></div></div></div>';

var q5= '<div class="row justify-content-center" id="question"><div class="col-lg-10 justify-content-center"><div><h6 id>Q5: Was the Darth Vader hallway scene from Rogue One the dopest scene in any Star Wars movie?</h6><br><p id="correct" class="abcd">A: Yes.</p><p id="q5b" class="abcd">B: No?</p><p id="q5c" class="abcd">C: No?</p><p id="q5d" class="abcd">D: No?</p></div></div></div>';

var restartQ = '<div class="row justify-content-center" id="question"><div class="col-lg-10 justify-content-center starfont"><h2>Hit Restart to play again!</h2></div></div>';

var questions = [q1, q2, q3, q4, q5, restartQ];

var correctCounter=0;

var questionCount=0;

var qTimer = 15;

var answerTimer = 10;

var intervalID1;

var intervalID2;

function gameplay(){

for(i=0; i<questions.length; i++){
    $("#restartbutton").hide();
    currentQ = questions[0];
    $("#question").replaceWith(currentQ);
    roundTimer();
    }
}

function rightWrong(){
    var idCheck = $(this).attr("id")

    console.log(idCheck);
        if(idCheck == "correct"){
            console.log("Correct!");
            correctCounter++;
            questionCount++;
            console.log(correctCounter)
            $("#question").replaceWith(questions[0 + questionCount]);
            roundTimer();
        }
        else if(idCheck !== "correct"){
            console.log("WRONG.");
            questionCount++;
            $("#question").replaceWith(questions[0 + questionCount]);
            roundTimer();
            
        }
        
        if(correctCounter == 5 && questionCount == 5){
            winCondition();
            $("#restartbutton").show();
        }
        else if(questionCount == 5 && correctCounter < 5){
            endGame();
            $("#restartbutton").show();
        }
}


function roundTimer(){
    qTimer = 15;
    clearInterval(intervalID1);
    intervalID1 = setInterval(decrement, 1000);
}

function decrement() {

    qTimer--;
    $("#show-number").html("<h2>" + qTimer + "</h2>");

    if (qTimer === 0 && questionCount < 5) {
      stop();
      alert("Time Up!");
      console.log("WRONG.");
      questionCount++;
      $("#question").replaceWith(questions[0 + questionCount]);
      roundTimer();
    }
    else if(qTimer === 0 && questionCount == 5){
        clearInterval(intervalID1);
        endGame();
        $("#restartbutton").show();
    }
  }


function winCondition(){
    clearInterval(intervalID1);
    alert("You got 5/5!")
}
function endGame(){
    clearInterval(intervalID1);
    alert("You got " + correctCounter + "/5 right.")
}

$(document).on("click", ".abcd", rightWrong);



$("#restartbutton").click(function(){
    correctCounter = 0;
    questionCount = 0;
    gameplay();
})

var pew = "../audio/blaster-firing.mp3"

function blaster(){
    pew.play();
}


$("#nextbutton").hide();
$("#restartbutton").hide();

$(document).on("click", blaster);
$(document).on("click", "#beginQuiz", gameplay);



