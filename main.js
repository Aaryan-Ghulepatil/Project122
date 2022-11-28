x = 0;
y = 0;
screen_width=0;
screen_height=0;
apple="";
speak_data="";
to_number="";

draw_apple = "";

var SpeechRecognition = window.webkitSpeechRecognition;
  
var recognition = new SpeechRecognition();

function start()
{
  document.getElementById("status").innerHTML = "System is listening please speak";  
  recognition.start();
} 
 
recognition.onresult = function(event) {

 console.log(event); 

 content = event.results[0][0].transcript;

    document.getElementById("status").innerHTML = "The speech has been recognized: " + content; 
  to_number=Number(content);
  if(Number.isInteger(to_number)){
    draw_apple="set";
    document.getElementById("status").innerHTML="Started drawing Apple";
  }
  else{
    document.getElementById("status").innerHTML="Speech recognised is not a number";
  }
}

function preload(){
  apple=loadImage("apple.png");
}

function setup() {
 
 canvas=createCanvas(750,450);
 canvas.position(400,120);
}

function draw() {
  if(draw_apple == "set")
  {
    document.getElementById("status").innerHTML = to_number + " Apples drawn";
    draw_apple = "";
    for(var i=1;i<=to_number;i++){
      x=Math.floor(Math.random()*700);
      y=Math.floor(Math.random()*400);
      image(apple,x,y,50,50);
    }
    speak();
  }

}

function speak(){
    var synth = window.speechSynthesis;

    var utterThis = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterThis);

    speak_data = to_number+" apples drawn";
}
