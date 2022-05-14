var numberOfDrumButtons= document.querySelectorAll(".drum").length;
for(var i=0;i<numberOfDrumButtons;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){ //adding event listener to all buttons
        var buttonInnerHtml=this.innerHTML;             //accessing the letter on button using this keyword
        makeSound(buttonInnerHtml);
        buttonAnimation(buttonInnerHtml);
    });
}

document.addEventListener("keypress",function(event){ //adding keyboard listener to whole document itself
    makeSound(event.key);    //event is object here and key its property there can be anything in place of event
    buttonAnimation(event.key);
});

function makeSound(key){
    switch(key){
        case "w":
            var tom1=new Audio("sounds/tom-1.mp3"); //Audio is in-built constructor function
            tom1.play();//to play sound
            break;
            case "a":
            var tom2=new Audio("sounds/tom-2.mp3"); //Audio is in-built constructor function
            tom2.play();//to play sound
            break;
            case "s":
            var tom3=new Audio("sounds/tom-3.mp3"); //Audio is in-built constructor function
            tom3.play();//to play sound
            break;
            case "d":
            var tom4=new Audio("sounds/tom-4.mp3"); //Audio is in-built constructor function
            tom4.play();//to play sound
            break;
            case "j":
            var snare=new Audio("sounds/snare.mp3"); //Audio is in-built constructor function
            snare.play();//to play sound
            break;
            case "k":
            var crash=new Audio("sounds/crash.mp3"); //Audio is in-built constructor function
            crash.play();//to play sound
            break;
            case "l":
            var kick=new Audio("sounds/kick-bass.mp3"); //Audio is in-built constructor function
            kick.play();//to play sound
            break;
            default:
                console.log("Select again");
    }
}

function buttonAnimation(currentKey){ //currentKey is the particular letter
    var activeBuuton=document.querySelector("."+currentKey);
    activeBuuton.classList.add("pressed"); //add pressed class to selected button
    setTimeout(function(){
        activeBuuton.classList.remove("pressed");
    },100);  //after 100 millisecond run this function
}