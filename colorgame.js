var colorDisplay = document.querySelector('#colorDisplay');
var displayMessage = document.querySelector('#displayMessage');
var squares = document.querySelectorAll('.squares');
var h1 = document.querySelector('h1');
var resetButton = document.querySelector('#reset');

var colors = generateRandomColors(6);
var pickedColor = colors[Math.floor(Math.random() * 5)]
// rgb(112, 119, 221)

game();

function game() {
    colorDisplay.innerHTML = pickedColor;
    for(var i = 0; i < squares.length; i++){
        squares[i].style.backgroundColor = colors[i];


        squares[i].addEventListener('click', function() {
            var squareColor = this.style.backgroundColor;

            if(squareColor == pickedColor){
                displayMessage.innerHTML = "CORRECT";
                for(var i = 0; i < squares.length; i++){
                    squares[i].style.backgroundColor = squareColor;
                }
                h1.style.backgroundColor = squareColor;
                resetButton.innerHTML = "PLAY AGAIN"
            } else {
                displayMessage.innerHTML = 'try again';
                this.style.backgroundColor = '#232323'
            }
        })
    }

}

resetButton.addEventListener('click', function() {
    colors = generateRandomColors(6);
    pickedColor = colors[Math.floor(Math.random() * 5)]
    game();
})






function generateRandomColors(numbers){
    var arr = []; 
    for(var i = 0; i < numbers; i++){
        var r = Math.floor(Math.random() * 255); 
        var g = Math.floor(Math.random() * 255); 
        var b = Math.floor(Math.random() * 255); 
        var color = "rgb(" + r + ", " + g + ", " + b + ")"; 

        arr.push(color);
    }

    return arr;
}
