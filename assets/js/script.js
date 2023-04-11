
document.getElementById("start_quiz_button").addEventListener("click", question1);
document.getElementById("question1").addEventListener("click", question2);

var q1wrong_answers = document.getElementsByClassName("q1wrong");
for (let item of q1wrong_answers) {
    item.addEventListener("click", q1wrong_handler);
}

var q2wrong_answers = document.getElementsByClassName("q2wrong");
for (let item of q2wrong_answers) {
    item.addEventListener("click", q2wrong_handler);
}

var q3wrong_answers = document.getElementsByClassName("q3wrong");
for (let item of q3wrong_answers) {
    item.addEventListener("click", q3wrong_handler);
}

document.getElementById("q1right").addEventListener("click", q1right_handler);

document.getElementById("question2").addEventListener("click", question3);
document.getElementById("q2right").addEventListener("click", q2right_handler);

document.getElementById("question3").addEventListener("click", results);
document.getElementById("q3right").addEventListener("click", q3right_handler);

function loadTitle() {
    window.location.reload();
}

function clear_instructions() {
    document.getElementById("instructions_block").style = 'display:none';
}

function question1() {
    clear_instructions();
    document.getElementById("question1").style = 'display:inline';

}

function q1right_handler() {
    document.getElementById("question1").style = 'display:none';
    document.getElementById("current_results").innerHTML = 'RIGHT!';
    document.getElementById("current_results").fadeOut();
    $("#current_results").fadeOut();
}

function q1wrong_handler() {
    document.getElementById("question1").style = 'display:none';
    score = score -15;
    document.getElementById("current_results").innerHTML = 'WRONG!';
    $("#current_results").fadeOut();
}

function question2() {
    clear_instructions();
    document.getElementById("question2").style = 'display:inline';
}

function q2right_handler() {
    document.getElementById("question2").style = 'display:none';
    document.getElementById("current_results").innerHTML = 'RIGHT!';
    $("#current_results").fadeIn();
    $("#current_results").fadeOut();
}

function q2wrong_handler() {
    document.getElementById("question2").style = 'display:none';
    document.getElementById("current_results").innerHTML = 'WRONG!';
    score = score -15;
    $("#current_results").fadeIn();
    $("#current_results").fadeOut();
}

function question3() {
    clear_instructions();
    document.getElementById("question3").style = 'display:inline';
}

function q3right_handler() {
    document.getElementById("question3").style = 'display:none';
    document.getElementById("current_results").innerHTML = 'RIGHT!';
    $("#current_results").fadeIn();
    $("#current_results").fadeOut();
}

function q3wrong_handler() {
    document.getElementById("question3").style = 'display:none';
    document.getElementById("current_results").innerHTML = 'WRONG!';
    score = score -15;
    $("#current_results").fadeIn();
    $("#current_results").fadeOut();
}

function setscore() {
    localStorage.setItem(document.getElementById("initials").value, score);
    document.getElementById("results").style = 'display:none';
    highscores();
}

function results() {
    stopTimer();
    document.getElementById("results").style = 'display:inline';
    document.getElementById("question3").style = 'display:none';
    document.getElementById("question2").style = 'display:none';
    document.getElementById("question1").style = 'display:none';

    document.getElementById("current_score").innerHTML= score;
    document.getElementById("showscore").style = 'display:none';

    document.getElementById("submit").addEventListener("click", setscore);
    
    document.getElementById("gb").addEventListener("click", loadTitle);
    
}

let score = 60;
let timerVar = '';
function startTimer() {
  timerVar = setInterval(timerFunction, 1000);
}
function timerFunction() {
  score = score - 1;
  document.getElementById("showscore").innerHTML = score;
  if (score == 0) {
    clearInterval(timerVar);
    results();
  }
}

function stopTimer() {
    clearInterval(timerVar);
}


function highscores() {
    document.getElementById("highscores").style = 'display:inline';

    $('#highscores').append("<br>");
    for (var i = 0; i < localStorage.length; i++){
        $('#highscores').append(localStorage.key(i));
        $('#highscores').append(":");
        $('#highscores').append(localStorage.getItem(localStorage.key(i)));
        $('#highscores').append("<br>");

    }
}
function clearhs() {
    localStorage.clear();
}

document.getElementById("ch").addEventListener("click", clearhs);


