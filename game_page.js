var player_1_name = localStorage.getItem("player_1");
var player_2_name = localStorage.getItem("player_2");
document.getElementById("player1_name").innerHTML=player_1_name + ": ";
document.getElementById("player2_name").innerHTML=player_2_name + ": ";
var player_1_score = 0;
var player_2_score = 0;
document.getElementById("player1_score").innerHTML=player_1_score;
document.getElementById("player2_score").innerHTML=player_2_score;
document.getElementById("player_question").innerHTML="Question Turn: " + player_1_name;
document.getElementById("player_answer").innerHTML="Answer Turn: " + player_2_name;

function send() {
    var number1 = document.getElementById("word_1").value;
    var number2 = document.getElementById("word_2").value;
    actual_answer = parseInt(number1) * parseInt(number2);
    var question_number = "<h4>" + number1 + " x " + number2 + "</h4>";
    var input_box = "<br>Answer: <input type = 'text' id = 'input_check_box'>"
    var check_button = "<br><br><button class = 'btn btn-info' onclick = 'check()'>Check</button>"
    var row = question_number + input_box + check_button;
    document.getElementById("output").innerHTML = row;
    document.getElementById("word_1").value = "";
    document.getElementById("word_2").value = "";
}
var question_turn = "player1";
var answer_turn = "player2";

function check() {
    get_answer = document.getElementById("input_check_box").value;
    if(get_answer == actual_answer) {
        if(answer_turn == "player1"){
            player_1_score = player_1_score + 1;
            document.getElementById("player1_score").innerHTML = player_1_score;
        }else{
            player_2_score = player_2_score + 1;
            document.getElementById("player2_score").innerHTML = player_2_score;
        }
        window.alert("The answer is correct 🏅🏅🏆🏆!!!")
    }else{
        window.alert("The answer is wrong 😐😐 Better luck next time !!!")
    }

    if(question_turn == "player1"){
        question_turn = "player2";
        document.getElementById("player_question").innerHTML = "Question Turn: " + player_2_name;
    }else{
        question_turn = "player1";
        document.getElementById("player_question").innerHTML = "Question Turn: " + player_1_name;
    }

    if(answer_turn == "player1"){
        answer_turn = "player2";
        document.getElementById("player_answer").innerHTML = "Answer Turn: " + player_2_name;
    }else{
        answer_turn = "player1";
        document.getElementById("player_answer").innerHTML = "Answer Turn: " + player_1_name;
    }

    document.getElementById("output").innerHTML = "";
}