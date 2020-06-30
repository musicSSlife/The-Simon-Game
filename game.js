
var buttonColors = ["red", "yellow", "green", "blue"];

var gamePattern = [];
var userClickedPattern = [];

var level = 0;
// click feature for buttons ese add krna hai EKDUM KHULE ME



// sequence banalo


function nextSequence(){

  var x = Math.random();
var randomNumber = Math.floor(x*4);
  var randomChosenColor = buttonColors[randomNumber];
  gamePattern.push(randomChosenColor);

  $("#" + randomChosenColor).fadeOut(100).fadeIn(100);


    level++;
    $("#level-title").text("Level" + "  " + level);

userClickedPattern = [];
  playSound(randomChosenColor);
animatePress(randomChosenColor);
}

// Sound dene ka function in all cases mostly

function playSound(name){

    var sound1 = new Audio("sounds/" +name + ".mp3");
    sound1.play();

}

// animation dene ka function click wala isme dobara use nahi karna hai 👍👍👍

function animatePress(currentColor){


  $("#" + currentColor).addClass("pressed");
  setTimeout(function(){
    $("#" + currentColor).removeClass("pressed");
  },100 )

}

//detecting keyboard press and calling the function nextSequence

// nextSequence() called under condition of only first keypress;
var startedToToggle =  0;
var startedToToggle = false;


document.addEventListener("keydown", function(){
console.log(event.key);
if( startedToToggle === false){
  nextSequence();

  startedToToggle = true;
}
})


//

$(".btn").click(function(){

  var itsColor = $(this).attr("id");
  userClickedPattern.push(itsColor);
  playSound(itsColor);
  animatePress(itsColor);

// now checking and executing whenever button is being clicked

checkAnswer(level);

// end of the special development sector

})

// ** VVI note Pls see above 👆👆👆 to click sound feature use of "THIS" :)

// Checking the sequence reply
function checkAnswer(currentLevel){

  var num = userClickedPattern.length;

if(userClickedPattern[num - 1] === gamePattern[num-1]){
  if( level === num){

      setTimeout(function(){
         nextSequence();
      },1000 )
  }
}
else{

    $("body").addClass("gameOver");
    setTimeout(function(){
      $("body").removeClass("gameOver");
      $("h1").text("Game Over Press any key to Restart" );
      startOver();
    })

}

}

function startOver(){
    level = 0;
    gamePattern = [];
    userClickedPattern = [];
}
