// use strict es6;

var selectGame = []; 
    var btnNumbers = $("#numbers");
    var btnIcons = $('#icons');
    selectGame.push(btnNumbers.attr('id'), btnIcons.attr('id'));


    $(document).ready(function() {
        var gameQuery = new Array(3);

        //! select the game type allowing only one selection for each option
        $( "#numbers, #icons ").on( "click", function() {
            $(this).toggleClass("selected");
            $(this).siblings().removeClass("selected");
            if( $(this).hasClass("selected") ) {
                gameQuery[0] = $(this).attr('id');
                // gameType = $(this).attr('id');
            }
        } );

        $( "#one, #two, #three, #four ").on( "click", function() {
            $(this).toggleClass("selected");
            $(this).siblings().removeClass("selected");
            if( $(this).hasClass("selected") ) {
                // numberOfPlayers = $(this).attr('id');
                gameQuery[1] = $(this).attr('id');
            }
        } );

        $( " #grid-one, #grid-two ").on( "click", function() {
            $(this).toggleClass("selected");
            $(this).siblings().removeClass("selected");
            if( $(this).hasClass("selected") ) {
                // gameGrid = $(this).attr('id');
                gameQuery[2] = $(this).attr('id');
            }
        } );

        //! check if the user has selected all the options
        $( "#start-game-btn" ).on( "click", function() {
            if(gameQuery.length === 3){
                if( gameQuery[0] == "icons"  ){
                    startGameIcons();
                }
                else{
                    startGameNumbers();
                }
            };
        } );

        function startGameIcons(){
            console.log( "icons" );
            $( ".icons" ).addClass("show");
            $( ".numbers" ).addClass("hide");
            $( ".start-up" ).addClass("hide");
        }

        function startGameNumbers(){
            console.log( "numbers" );
            $( ".numbers" ).addClass("show");
            $( ".icons" ).addClass("hide");
            $( ".start-up" ).addClass("hide");
        }
    });