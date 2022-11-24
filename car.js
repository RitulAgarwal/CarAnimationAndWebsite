"use strict";
//let speed = prompt("what is your speed??",50)//50 is default basically
//let a = console.log(speed)
//var audio = loadSound("images/sound.mp3")
//audio.play();


//for background changing
var j=0;
for(j ;j<4 ; j++){
    document.querySelectorAll("button")[j].addEventListener("click",function(){
        var choice = this.innerHTML;
        imagechoice(choice);
    });
}


for(j ;j<4 ; j++){
    document.querySelectorAll("button")[j].addEventListener("keypress" , function(event){
        imagechoice(event.key);
    });
}

function bgchoice(key){
    switch(key){
        case 'n' :
            document.querySelector(".sky").style.background= "url('/car_images/night.jpg')" ;
            break;
        case 'morn' :
            document.querySelector(".sky").style.background= "url('/car_images/morning.jpg')";
            break;
        case 'mountain' :
            document.querySelector(".sky").style.background= "url('/car_images/mountains.jpg')";
            break;
        case 'f':
            document.querySelector(".sky").style.background= "url('/car_images/forest.jpg')";
            break;
            
    }   
}

//for speed changing
document.getElementById("heading").innerHTML = "The current speed is " + speed + "Km/hr";
if (speed >= 100 && speed <301) {
    document.getElementById("heading").innerHTML = "The current speed is " + speed + "Km/hr" + "<br> " + " Donot over-speed";
    document.querySelector('.wheel1 img').style.animation = 'wheelRotation linear .2s infinite';
    document.querySelector('.wheel2 img').style.animation = 'wheelRotation linear .2s infinite';
} else if(speed >=50 && speed<100) {
    document.getElementById("heading").innerHTML = "The current speed is " + speed + "Km/hr" +  "<br> " + " You are in safe zone";
    document.querySelector('.wheel1 img').style.animation = 'wheelRotation linear .5s infinite';
    document.querySelector('.wheel2 img').style.animation = 'wheelRotation linear .5s infinite';
}
else if (speed>=301){
    document.getElementById("heading").innerHTML = "this speed is not possible and tyre may burst";

    document.querySelector('.wheel1 ').style.animation = 'wheelRotation linear .8s infinite';
    document.querySelector('.wheel2 ').style.animation = 'wheelRotation linear .8s infinite';
}

else{
    document.getElementById("heading").innerHTML = "The current speed is " + speed + "Km/hr" + "<br> " + " You can speed up";
    document.querySelector('.wheel1 img').style.animation = 'wheelRotation linear 1s infinite';
    document.querySelector('.wheel2 img').style.animation = 'wheelRotation linear 1s infinite';
}


//for colour changing
var i=0;
for(i ;i<document.querySelectorAll("button").length ; i++){
    document.querySelectorAll("button")[i].addEventListener("click",function(){
        var choice = this.innerHTML;
        imagechoice(choice);
    });
}


for(i ;i<document.querySelectorAll("button").length ; i++){
    document.querySelectorAll("button")[i].addEventListener("keypress" , function(event){
        imagechoice(event.key);
    });
}

function imagechoice(key){
    switch(key){
        case 'w' :
            document.querySelector("#car").style.backgroundImage= "url('/car_images/w_car.png')";
            break;
        case 'r' :
            document.querySelector("#car").style.backgroundImage= "url('/car_images/r_car.png')";
            break;
        case 'b' :
            document.querySelector("#car").style.backgroundImage= "url('/car_images/b_car.png')";
            break;
    }   
}


//innerHTML
//css.backgroundImage
//style.animation//

