var tal = document.getElementById('tal').innerHTML;

var squareResult = calculateSquare(tal);

document.getElementById('answer').innerHTML = squareResult;

function calculateSquare(tal) {
    return tal*tal;
}