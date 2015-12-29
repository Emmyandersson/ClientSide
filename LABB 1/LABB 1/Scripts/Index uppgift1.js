//Funktionen fungerar såhär:
// 1. jag sätter min variabel "tal" till värdet av vad som skickas in i min textbox (med id:et 'tal'. 
//2. Därefter tilldelar jag värdet i min <p> tag med Id:et 'answer' till svaret - dvs Kvadratroten ur talet som skickades in. 
function calculateSquare() {
    var tal = document.getElementById('tal').value;
    document.getElementById('answer').innerHTML = Math.sqrt(tal);
}

