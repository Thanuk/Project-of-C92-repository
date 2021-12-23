function Add_Player(){
    player1_name = document.getElementById("Player1_Login").value;
    player2_name = document.getElementById("Player2_Login").value;

    localStorage.setItem("player1_name", player1_name);
    localStorage.setItem("player2_name", player2_name);

    window.location = "game_page.html";
}