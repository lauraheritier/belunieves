$(document).ready(function () {
    /**Play and pause the audio files */
    $('.player').on('click', function () {
        var audio1 = document.getElementById("audio1");
        var audio2 = document.getElementById("audio2");
        $(this).toggleClass('playing');
        if ($(this).hasClass("playing")) {
            if ($(this).hasClass("player-audio-1")) {
                audio1.play();                
            } else {
                audio2.play();
            }
            $(this).find(".fa-solid").removeClass("fa-caret-right").addClass("fa-pause");            
        } else {
            if ($(this).hasClass("player-audio-1")) {
                audio1.pause();
            } else {
                audio2.pause();
            }
            $(this).find(".fa-solid").removeClass("fa-pause").addClass("fa-caret-right");  
        }
    });
});

