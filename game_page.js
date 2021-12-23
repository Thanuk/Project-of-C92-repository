player1_name = localStorage.getItem("player1_name");
player2_name = localStorage.getItem("player2_name");

player1_score = 0;
player2_score = 0;

document.getElementById("player1_name").innerHTML = player1_name + " : " ;
document.getElementById("player2_name").innerHTML = player2_name + " : " ;

document.getElementById("player1_score").innerHTML = player1_score;
document.getElementById("player2_score").innerHTML = player2_score;

document.getElementById("Questioner_turn").innerHTML = "Question Turn : " + player1_name;
document.getElementById("Answer_turn").innerHTML = "Answer Turn : " + player2_name;

function send(){
    number1 = document.getElementById("Number1_input").value;
    number2 = document.getElementById("Number2_input").value;
    actual_number = parseInt(number1) * parseInt(number2)

    question_word = "<h4 id='word_display'>" + number1 + "x" + number2 + "</h4>";
    input = "<br>Answer : <input type = 'text' id= 'input_check_box'>" + "</input>";
    check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>"
    row = question_word + input + check_button;  
    document.getElementById("output").innerHTML = row;
    document.getElementById("Number1_Input").value = "";
    document.getElementById("Number2_Input").value = "";
}

Answer_Turn = "Player2";
Question_Turn = "Player1";

function check(){
    get_answer = document.getElementById("input_check_box").value;
    console.log("Answer Entered in Lower Case : " + get_answer);

    if(actual_number == get_answer){
        if(Answer_Turn == "Player2"){
            player2_score = player2_score + 1;
            document.getElementById("player2_score").innerHTML = player2_score;
            console.log("Player 2 score : " + player2_score);
        } 
        else{
            player1_score = player1_score + 1;
            document.getElementById("player1_score").innerHTML = player1_score;
            console.log("Player 1 score : " + player1_score);
        }
    }

    if(Question_Turn == "Player1"){
        Question_Turn = "Player2";
        document.getElementById("Questioner_turn").innerHTML = "Question Turn : " + player2_name;
    }
    else{
        Question_Turn = "Player1";
        document.getElementById("Questioner_turn").innerHTML = "Question Turn : " + player1_name;
    }

    if(Answer_Turn == "Player1") {
        Answer_Turn = "Player2";
        document.getElementById("Answer_turn").innerHTML = "Answer Turn : " + player2_name;
    }
    else{
        Answer_Turn = "Player1";
        document.getElementById("Answer_turn").innerHTML = "Answer Turn : " + player1_name;
    }

    document.getElementById("output").innerHTML = "";

    document.getElementById("input_check_box").value = "";
}