var winNumber = 0
function getWinNumber() {
    winNumber = Math.floor(Math.random() * 3 + 1);
}
function checkButton(clicked_id) {
    if (clicked_id == winNumber) {
        document.getElementById("message").innerHTML="Congratulations! You won a 50% discount code!";
        document.getElementById("message").style="color:#090;padding:10px;border:1px solid #bbb;";
        

    } else {
        document.getElementById("message").innerHTML="Sorry! But we offer you a 5% discount code!";
        document.getElementById("message").style="padding:10px;border:1px solid #bbb;";
    }
    document.getElementById("1").disabled = "true";
    document.getElementById("2").disabled = "true";
    document.getElementById("3").disabled = "true";
}
