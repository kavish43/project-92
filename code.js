function addUser(){
    player1_name = document.getElementById("player1_name").value;
    player2_name = document.getElementById("player2_name").value;


    localStorage.setItem("player_1_key",player1_name);
    localStorage.setItem("player_2_key",player2_name);
    
    window.location="game_page.html";
}