function isPlaying(audio) { 
    if (audio.duration > 0 && !audio.paused) {
        return true;
    } else {
        return false;
    }
}

// I know, I know.
function anyPlaying() {
    if (isPlaying(trk1) || isPlaying(trk2) || isPlaying(trk3) || isPlaying(trk4) || isPlaying(trk5) || isPlaying(trk6) || isPlaying(trk7) || isPlaying(trk8) || isPlaying(trk9) || isPlaying(trk10) || isPlaying(trk11) || isPlaying(trk12)) {
        return true;
    } else {
        return false;
    }
}

function anyChecked() {
    var checked = false;
    $(".onoff input").each(function(i) {
        if ($(this).prop("checked")) {
            checked=true;
        }
    });
    return checked;
}

function pauseAudio() {
    $(trk1).get(0).pause();
    $(trk2).get(0).pause();
    $(trk3).get(0).pause();
    $(trk4).get(0).pause();
    $(trk5).get(0).pause();
    $(trk6).get(0).pause();
    $(trk7).get(0).pause();
    $(trk8).get(0).pause();
    $(trk9).get(0).pause();
    $(trk10).get(0).pause();
    $(trk11).get(0).pause();
    $(trk12).get(0).pause();
}

function resetAudio() {
    trk1.currentTime = 0;
    trk2.currentTime = 0;
    trk3.currentTime = 0;
    trk4.currentTime = 0;
    trk5.currentTime = 0;
    trk6.currentTime = 0;
    trk7.currentTime = 0;
    trk8.currentTime = 0;
    trk9.currentTime = 0;
    trk10.currentTime = 0;
    trk11.currentTime = 0;
    trk12.currentTime = 0;
}

$(window).load(function() {
    //setup
    $(".onoff input").prop("checked", true);
    $("#chall").prop("checked", true);

    $("#chall").click(function() {
        if ($("#chall").prop("checked")) {
            $(".onoff input").prop("checked", true);
            $("tr").addClass("activetrack");
            $.each($("noUi-target"), function() {
                $(this).removeAttribute("disabled");
            })
        } else {
            $(".onoff input").prop("checked", false);
            $("tr").removeClass("activetrack");
            $.each($("noUi-target"), function() {
                $(this).setAttribute("disabled", true);
            })
        }
    })

    // enabled or disabled CSS for tracknames - this has to be separate to the later instance of thecheckbox.change handler (inside the play.click function) as it needs to start working even before the play button is clicked.
    $(".onoff input").change(function () {
        pauseAudio();
        resetAudio();

        if ($("#ch1").prop("checked")) {
            $("#t1").addClass("activetrack");
            $("#s1").get(0).removeAttribute("disabled");
        } else {
            $("#t1").removeClass("activetrack");
            $("#s1").get(0).setAttribute("disabled", true);
        }

        if ($("#ch2").prop("checked")) {
            $("#t2").addClass("activetrack");
            $("#s2").get(0).removeAttribute("disabled");
        } else {
            $("#t2").removeClass("activetrack");
            $("#s2").get(0).setAttribute("disabled", true);
        }

        if ($("#ch3").prop("checked")) {
            $("#t3").addClass("activetrack");
            $("#s3").get(0).removeAttribute("disabled");
        } else {
            $("#t3").removeClass("activetrack");
            $("#s3").get(0).setAttribute("disabled", true);
        }

        if ($("#ch4").prop("checked")) {
            $("#t4").addClass("activetrack");
            $("#s4").get(0).removeAttribute("disabled");
        } else {
            $("#t4").removeClass("activetrack");
            $("#s4").get(0).setAttribute("disabled", true);
        }

        if ($("#ch5").prop("checked")) {
            $("#t5").addClass("activetrack");
            $("#s5").get(0).removeAttribute("disabled");
        } else {
            $("#t5").removeClass("activetrack");
            $("#s5").get(0).setAttribute("disabled", true);
        }

        if ($("#ch6").prop("checked")) {
            $("#t6").addClass("activetrack");
            $("#s6").get(0).removeAttribute("disabled");
        } else {
            $("#t6").removeClass("activetrack");
            $("#s6").get(0).setAttribute("disabled", true);
        }

        if ($("#ch7").prop("checked")) {
            $("#t7").addClass("activetrack");
            $("#s7").get(0).removeAttribute("disabled");
        } else {
            $("#t7").removeClass("activetrack");
            $("#s7").get(0).setAttribute("disabled", true);
        }

        if ($("#ch8").prop("checked")) {
            $("#t8").addClass("activetrack");
            $("#s8").get(0).removeAttribute("disabled");
        } else {
            $("#t8").removeClass("activetrack");
            $("#s8").get(0).setAttribute("disabled", true);
        }

        if ($("#ch9").prop("checked")) {
            $("#t9").addClass("activetrack");
            $("#s9").get(0).removeAttribute("disabled");
        } else {
            $("#t9").removeClass("activetrack");
            $("#s9").get(0).setAttribute("disabled", true);
        }

        if ($("#ch10").prop("checked")) {
            $("#t10").addClass("activetrack");
            $("#s10").get(0).removeAttribute("disabled");
        } else {
            $("#t10").removeClass("activetrack");
            $("#s10").get(0).setAttribute("disabled", true);
        }

        if ($("#ch11").prop("checked")) {
            $("#t11").addClass("activetrack");
            $("#s11").get(0).removeAttribute("disabled");
        } else {
            $("#t11").removeClass("activetrack");
            $("#s11").get(0).setAttribute("disabled", true);
        }

        if ($("#ch12").prop("checked")) {
            $("#t12").addClass("activetrack");
            $("#s12").get(0).removeAttribute("disabled");
        } else {
            $("#t12").removeClass("activetrack");
            $("#s12").get(0).setAttribute("disabled", true);
        }

    });

    $(".play").click(function() {
        //plays appropriate audio file/s when play button is clicked
        var playbutton = $(this);

        if (anyPlaying()) {
            playbutton.removeClass("playing");
            playbutton.html("play");
            pauseAudio();
        } else if (anyChecked()) {
            playbutton.addClass("playing");
            playbutton.html("pause");

            if ($("#ch1").prop("checked")) {
                trk1.play();
            } 

            if ($("#ch2").prop("checked")) {
                trk2.play();
            }

            if ($("#ch3").prop("checked")) {
                trk3.play();
            }

            if ($("#ch4").prop("checked")) {
                trk4.play();
            }

            if ($("#ch5").prop("checked")) {
                trk5.play();
            }

            if ($("#ch6").prop("checked")) {
                trk6.play();
            }

            if ($("#ch7").prop("checked")) {
                trk7.play();
            }

            if ($("#ch8").prop("checked")) {
                trk8.play();
            }

            if ($("#ch9").prop("checked")) {
                trk9.play();
            }

            if ($("#ch10").prop("checked")) {
                trk10.play();
            }

            if ($("#ch11").prop("checked")) {
                trk11.play();
            }

            if ($("#ch12").prop("checked")) {
                trk12.play();
            }

        }

        $(".onoff input").change(function () {

            trk1.currentTime = $("#seekbar").val();
            trk2.currentTime = $("#seekbar").val();
            trk3.currentTime = $("#seekbar").val();
            trk4.currentTime = $("#seekbar").val();
            trk5.currentTime = $("#seekbar").val();
            trk6.currentTime = $("#seekbar").val();
            trk7.currentTime = $("#seekbar").val();
            trk8.currentTime = $("#seekbar").val();
            trk9.currentTime = $("#seekbar").val();
            trk10.currentTime = $("#seekbar").val();
            trk11.currentTime = $("#seekbar").val();
            trk12.currentTime = $("#seekbar").val();

            if ($("#ch1").prop("checked")) {
                trk1.play();
            } 

            if ($("#ch2").prop("checked")) {
                trk2.play();
            }

            if ($("#ch3").prop("checked")) {
                trk3.play();
            }

            if ($("#ch4").prop("checked")) {
                trk4.play();
            }

            if ($("#ch5").prop("checked")) {
                trk5.play();
            }

            if ($("#ch6").prop("checked")) {
                trk6.play();
            }

            if ($("#ch7").prop("checked")) {
                trk7.play();
            }

            if ($("#ch8").prop("checked")) {
                trk8.play();
            }

            if ($("#ch9").prop("checked")) {
                trk9.play();
            }

            if ($("#ch10").prop("checked")) {
                trk10.play();
            }

            if ($("#ch11").prop("checked")) {
                trk11.play();
            }

            if ($("#ch12").prop("checked")) {
                trk12.play();
            }

        });


    });

    $(".pause").click(function() {
        pauseAudio();
    });


    //TIMECODES

    // TODO no idea why I'm copying all these
    var audio1 = trk1
    var audio2 = trk2
    var audio3 = trk3
    var audio4 = trk4
    var audio5 = trk5
    var audio6 = trk6
    var audio7 = trk7
    var audio8 = trk8
    var audio9 = trk9
    var audio10 = trk10
    var audio11 = trk11
    var audio12 = trk12

    //setting the timecodes
    audio1.addEventListener("loadeddata", function () {
        $("#timecode").text("0:00");
        durMin=Math.floor(audio1.duration/60)
        secMin=Math.floor(audio1.duration%60)
        $("#negTimecode").text("-" + durMin + ":" + secMin);
    });

    var seekbar = document.getElementById('seekbar');
    function setupSeekbar() {
        seekbar.max = audio1.duration;
    }

    audio1.ondurationchange = setupSeekbar;

    function seekAudio() {
        audio1.currentTime = seekbar.value;
        audio2.currentTime = seekbar.value;
        audio3.currentTime = seekbar.value;
        audio4.currentTime = seekbar.value;
        audio5.currentTime = seekbar.value;
        audio6.currentTime = seekbar.value;
        audio7.currentTime = seekbar.value;
        audio8.currentTime = seekbar.value;
        audio9.currentTime = seekbar.value;
        audio10.currentTime = seekbar.value;
        audio11.currentTime = seekbar.value;
        audio12.currentTime = seekbar.value;
    }

    function updateUI() {

        if ($("#ch1").prop("checked")) {
            seekbar.value = audio1.currentTime;
        } else if ($("#ch2").prop("checked")) {
            seekbar.value = audio2.currentTime;
        } else if ($("#ch3").prop("checked")) {
            seekbar.value = audio3.currentTime;
        } else if ($("#ch4").prop("checked")) {
            seekbar.value = audio4.currentTime;
        } else if ($("#ch5").prop("checked")) {
            seekbar.value = audio5.currentTime;
        } else if ($("#ch6").prop("checked")) {
            seekbar.value = audio6.currentTime;
        } else if ($("#ch7").prop("checked")) {
            seekbar.value = audio7.currentTime;
        } else if ($("#ch8").prop("checked")) {
            seekbar.value = audio8.currentTime;
        } else if ($("#ch9").prop("checked")) {
            seekbar.value = audio9.currentTime;
        } else if ($("#ch10").prop("checked")) {
            seekbar.value = audio10.currentTime;
        } else if ($("#ch11").prop("checked")) {
            seekbar.value = audio11.currentTime;  
        } else if ($("#ch12").prop("checked")) {
            seekbar.value = audio12.currentTime;
        }

        //POSITIVE TIMECODE

        var timecode = Math.floor(seekbar.value);
        var rem = Math.floor (timecode % 60);

        if (timecode > 59) {
            if (rem <10) {
                $("#timecode").text(Math.floor(timecode/60) + ":0" + rem);
            } else {
                $("#timecode").text(Math.floor(timecode/60) + ":" + rem);
            }
        } 

        if (timecode >9 && timecode <60) {
            $("#timecode").text("0:" + timecode);
        } 

        if (timecode <10) {
            $("#timecode").text("0:0" + timecode);
        } 


        // NEGATIVE TIMECODE

        var negRem = Math.floor(seekbar.max - rem) % 60

        if (timecode > 59) {
            if (negRem <10) {
                $("#negTimecode").text("-" + Math.floor((seekbar.max/60) - (timecode/60)) + ":0" + negRem);
            } else {
                $("#negTimecode").text("-" + Math.floor((seekbar.max/60) - (timecode/60))  + ":" + negRem);
            }
        } 

        if (negRem >9 && negRem <60) {
            $("#negTimecode").text("-" + Math.floor((seekbar.max/60) - (timecode/60)) + ":" + negRem);
        } 

        if (negRem <10) {
            $("#negTimecode").text("-" + Math.floor((seekbar.max/60) - (timecode/60)) + ":0" + negRem);
        } 


    };

    seekbar.onchange = seekAudio;

    audio1.ontimeupdate = updateUI;
    audio2.ontimeupdate = updateUI;
    audio3.ontimeupdate = updateUI;
    audio4.ontimeupdate = updateUI;
    audio5.ontimeupdate = updateUI;
    audio6.ontimeupdate = updateUI;
    audio7.ontimeupdate = updateUI;
    audio8.ontimeupdate = updateUI;
    audio9.ontimeupdate = updateUI;
    audio10.ontimeupdate = updateUI;
    audio11.ontimeupdate = updateUI;
    audio12.ontimeupdate = updateUI;

});
