// use strict es6;
var selectGame = []; 
    var btnNumbers = $("#numbers");
    var btnIcons = $('#icons');
    selectGame.push(btnNumbers.attr('id'), btnIcons.attr('id'));
    console.log(selectGame);
    $(document).ready(function() {
        $("#numbers, #icons, #one, #two, #three, #four, #grid-one, #grid-two, #start-game-btn").click(function() {
            $(this).toggleClass("selected");
        });
        $("#numbers, #icons, #one, #two, #three, #four, #grid-one, #grid-two, #start-game-btn").hover(function() {
            $(this).toggleClass("hovered");
        });
    });

    $(document).ready(function(){
        $("#numbers, #icons, #one, #two, #three, #four, #grid-one, #grid-two, #start-game-btn").click(function() {
            for(var i = 0; i < selectGame.length; i++) {
                if($(this).attr('id') === selectGame[i]){
                    console.log($(this).attr('id'));
                }
            }
        });  
       
    });