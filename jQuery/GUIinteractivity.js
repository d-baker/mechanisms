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
        //allcheckboxes are unchecked by default
        $(".onoff input").prop("checked", false);
        $("#chall").prop("checked", false);

        //checkall box
        $("#chall").click(function() {
            if ($(this).prop("checked")) {
                $(".onoff input").prop("checked", true);
                $(this).text("Uncheck all");
                $("tr").addClass("activetrack");
            } else {
                $(".onoff input").prop("checked", false);
                $(this).text("Check all");
                $("tr").removeClass("activetrack");
                pauseAudio();
                resetAudio();
            }
        });

        // muteall box
        // TODO not working
        $("#mall").click(function() {
            if ($(this).prop("checked")) {
                $("audio").each(function() {
                    $(this).volume=0;
                });

                $(this).text("Unmute all");
            } else {
                $("audio").each(function() {
                    $(this).volume=50;
                });
                $(this).text("Mute all");
            }
        });

        // enabled or disabled CSS for tracknames - this has to be separate to the later instance of thecheckbox.change handler (inside the play.click function) as it needs to start working even before the play button is clicked.
        $(".onoff input").change(function () {
            pauseAudio();
            resetAudio();

            if ($("#ch1").prop("checked")) {
                $("#t1").addClass("activetrack");
            } else {
                $("#t1").removeClass("activetrack");
            }

            if ($("#ch2").prop("checked")) {
                $("#t2").addClass("activetrack");
            } else {
                $("#t2").removeClass("activetrack");
            }

            if ($("#ch3").prop("checked")) {
                $("#t3").addClass("activetrack");
            } else {
                $("#t3").removeClass("activetrack");
            }

            if ($("#ch4").prop("checked")) {
                $("#t4").addClass("activetrack");
            } else {
                $("#t4").removeClass("activetrack");
            }

            if ($("#ch5").prop("checked")) {
                $("#t5").addClass("activetrack");
            } else {
                $("#t5").removeClass("activetrack");
            }

            if ($("#ch6").prop("checked")) {
                $("#t6").addClass("activetrack");
            } else {
                $("#t6").removeClass("activetrack");
            }

            if ($("#ch7").prop("checked")) {
                $("#t7").addClass("activetrack");
            } else {
                $("#t7").removeClass("activetrack");
            }

            if ($("#ch8").prop("checked")) {
                $("#t8").addClass("activetrack");
            } else {
                $("#t8").removeClass("activetrack");
            }

            if ($("#ch9").prop("checked")) {
                $("#t9").addClass("activetrack");
            } else {
                $("#t9").removeClass("activetrack");
            }

            if ($("#ch10").prop("checked")) {
                $("#t10").addClass("activetrack");
            } else {
                $("#t10").removeClass("activetrack");
            }

            if ($("#ch11").prop("checked")) {
                $("#t11").addClass("activetrack");
            } else {
                $("#t11").removeClass("activetrack");
            }

            if ($("#ch12").prop("checked")) {
                $("#t12").addClass("activetrack");
            } else {
                $("#t12").removeClass("activetrack");
            }

        });

        $(".play").click(function() {
            resetAudio();

            //plays appropriate audio file/s when play button is clicked
            if ($("#ch1").prop("checked")) {
                if (! $("#mall").prop("checked")) {
                    trk1.volume = $("#s1").val() / 100;
                }
                trk1.play();
            } 

            if ($("#ch2").prop("checked")) {
                if (! $("#mall").prop("checked")) {
                    trk2.volume = $("#s2").val() / 100;
                }
                trk2.play();
            }

            if ($("#ch3").prop("checked")) {
                if (! $("#mall").prop("checked")) {
                    trk3.volume = $("#s3").val() / 100;
                }
                trk3.play();
            }

            if ($("#ch4").prop("checked")) {
                if (! $("#mall").prop("checked")) {
                    trk4.volume = $("#s4").val() / 100;
                }
                trk4.play();
            }

            if ($("#ch5").prop("checked")) {
                if (! $("#mall").prop("checked")) {
                    trk5.volume = $("#s5").val() / 100;
                }
                trk5.play();
            }

            if ($("#ch6").prop("checked")) {
                if (! $("#mall").prop("checked")) {
                    trk6.volume = $("#s6").val() / 100;
                }
                trk6.play();
            }

            if ($("#ch7").prop("checked")) {
                if (! $("#mall").prop("checked")) {
                    trk7.volume = $("#s7").val() / 100;
                }
                trk7.play();
            }

            if ($("#ch8").prop("checked")) {
                if (! $("#mall").prop("checked")) {
                    trk8.volume = $("#s8").val() / 100;
                }
                trk8.play();
            }

            if ($("#ch9").prop("checked")) {
                if (! $("#mall").prop("checked")) {
                    trk9.volume = $("#s9").val() / 100;
                }
                trk9.play();
            }

            if ($("#ch10").prop("checked")) {
                if (! $("#mall").prop("checked")) {
                    trk10.volume = $("#s10").val() / 100;
                }
                trk10.play();
            }

            if ($("#ch11").prop("checked")) {
                if (! $("#mall").prop("checked")) {
                    trk11.volume = $("#s11").val() / 100;
                }
                trk11.play();
            }

            if ($("#ch12").prop("checked")) {
                if (! $("#mall").prop("checked")) {
                    trk12.volume = $("#s12").val() / 100;
                }
                trk12.play();
            }

            $(".onoff input").change(function () {

                pauseAudio();
                resetAudio();

                if ($("#ch1").prop("checked")) {
                    trk1.play();
                    $(".play").addClass("pause");
                } 

                if ($("#ch2").prop("checked")) {
                    trk2.play();
                    $(".play").addClass("pause");
                }

                if ($("#ch3").prop("checked")) {
                    trk3.play();
                    $(".play").addClass("pause");
                }

                if ($("#ch4").prop("checked")) {
                    trk4.play();
                    $(".play").addClass("pause");
                }

                if ($("#ch5").prop("checked")) {
                    trk5.play();
                    $(".play").addClass("pause");
                }

                if ($("#ch6").prop("checked")) {
                    trk6.play();
                    $(".play").addClass("pause");
                }

                if ($("#ch7").prop("checked")) {
                    trk7.play();
                    $(".play").addClass("pause");
                }

                if ($("#ch8").prop("checked")) {
                    trk8.play();
                    $(".play").addClass("pause");
                }

                if ($("#ch9").prop("checked")) {
                    trk9.play();
                    $(".play").addClass("pause");
                }

                if ($("#ch10").prop("checked")) {
                    trk10.play();
                    $(".play").addClass("pause");
                }

                if ($("#ch11").prop("checked")) {
                    trk11.play();
                    $(".play").addClass("pause");
                }

                if ($("#ch12").prop("checked")) {
                    trk12.play();
                    $(".play").addClass("pause");
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
