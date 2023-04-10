
document.getElementById("start_quiz_button").addEventListener("click", question1);
document.getElementById("question2").addEventListener("click", question2);
document.getElementById("question3").addEventListener("click", question3);
document.getElementById("question4").addEventListener("click", question4);

function clear_instructions() {
    var node1 = document.getElementById('instructions1');
    var node2 = document.getElementById('instructions2');
     var node3 = document.getElementById('start_quiz_button');
    node1.style.visibility = 'hidden';
    node2.style.visibility = 'hidden';
    node3.style.visibility = 'hidden';
}

function question1() {
    clear_instructions();
    document.getElementById("question_paragraph").innerHTML = 
    "<h1>Question 1</h1><button id='question2'>Next</button>";
}

function question2() {
    clear_instructions();
    document.getElementById("question_paragraph").innerHTML = 
    "<h1>Question 2</h1><button id='question3'>Next</button>";
}


// function setup() {
//     //var q1 = document.getElementById('question1');
//     // var q2 = document.getElementById('question2');
//     // var q3 = document.getElementById('question3');
//     // var q4 = document.getElementById('question4');
//     //q1.style.visibility = 'hidden';
//     // q2.style.visibility = 'hidden';
//     // q3.style.visibility = 'hidden';
//     // q4.style.visibility = 'hidden';
// }

// function startQuiz() {
//     var node1 = document.getElementById('instructions1');
//     var node2 = document.getElementById('instructions2');
//     var node3 = document.getElementById('instructions_button');
//     var node4 = document.getElementById('question1');
//     var instructionsnode = document.getElementById('instructionsblock');


//     if (node1.style.visibility == 'visible') {
//         instructionsnode.style.visibility = 'hidden';
//         // node1.style.visibility = 'hidden';
//         // node2.style.visibility = 'hidden';
//         // node3.style.visibility = 'hidden';
//         // node1.style.display = 'none';
//         // node2.style.display = 'none';
//         // node3.style.display = 'none';
//         node4.hidden = false;

//     }
//     else {
//         instructionsnode.style.visibility = 'visible'
//         // node1.style.visibility = 'visible'
//         // node2.style.visibility = 'visible'
//         // node3.style.visibility = 'visible'
//         node4.hidden = true;
//     }
// }