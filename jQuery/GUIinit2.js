//the code in this file initialises the audio variables and sliders

    $(window).load(function() {

        trk1 = document.createElement("audio");
        trk1.setAttribute("src", "audio/Mechanism-2/Piccollo.ogg");
		trk1.volume = 0.5;

        trk2 = document.createElement("audio");
        trk2.setAttribute("src", "audio/Mechanism-2/Flute.ogg");
		trk2.volume = 0.5;

        trk3 = document.createElement("audio");
        trk3.setAttribute("src", "audio/Mechanism-2/Alto-flute.ogg");
		trk3.volume = 0.5;

        trk4 = document.createElement("audio");
        trk4.setAttribute("src", "audio/Mechanism-2/Marimba.ogg");
		trk4.volume = 0.5;

        trk5 = document.createElement("audio");
        trk5.setAttribute("src", "audio/Mechanism-2/Vibraphone.ogg"); 
		trk5.volume = 0.5;

        trk6 = document.createElement("audio");
        trk6.setAttribute("src", "audio/Mechanism-2/Celesta.ogg");    
		trk6.volume = 0.5;

        trk7 = document.createElement("audio");
        trk7.setAttribute("src", "audio/Mechanism-2/Harp.ogg");
		trk7.volume = 0.5; 

        trk8 = document.createElement("audio");
        trk8.setAttribute("src", "audio/Mechanism-2/Piano-1a.ogg");    
		trk8.volume = 0.5;

        trk9 = document.createElement("audio");
        trk9.setAttribute("src", "audio/Mechanism-2/Piano-1b.ogg");  
		trk9.volume = 0.5;

        trk10 = document.createElement("audio");
        trk10.setAttribute("src", "audio/Mechanism-2/Piano-2a.ogg");  
		trk10.volume = 0.5;

        trk11 = document.createElement("audio");
        trk11.setAttribute("src", "audio/Mechanism-2/Piano-2b.ogg"); 
		trk11.volume = 0.5;

        trk12 = document.createElement("audio");
        trk12.setAttribute("src", "audio/Mechanism-2/Timpani.ogg"); 
		trk12.volume = 0.5;

// creates the sliders, outputs the slider value to a <p> element and sets audio volume accordingly  

        $('#s1').noUiSlider({
            handles: 1,
            range: [0, 100]
            ,start: [50]
            ,slide: function(){
                var value1 = $(this).val();

                $("#v1").text(Math.round(value1) + "%");
                value1=value1/100
                $(trk1).prop("volume", value1);
            }
        });

        $('#s2').noUiSlider({
            handles: 1,
            range: [0, 100]
            ,start: [50]
            ,slide: function(){
                var value2 = $(this).val();

                $("#v2").text(Math.round(value2) + "%");
                value2=value2/100
                $(trk2).prop("volume", value2);
             }
        });

        $('#s3').noUiSlider({
            handles: 1,
            range: [0, 100]
            ,start: [50]
            ,slide: function(){
                var value3 = $(this).val();

                $("#v3").text(Math.round(value3) + "%");
                value3=value3/100
                $(trk3).prop("volume", value3);
             }
        }); 

        $('#s4').noUiSlider({
            handles: 1,
            range: [0, 100]
            ,start: [50]
            ,slide: function(){
                var value4 = $(this).val();

                $("#v4").text(Math.round(value4) + "%");
                value4=value4/100
                $(trk4).prop("volume", value4);
             }
        });

        $('#s5').noUiSlider({
            handles: 1,
            range: [0, 100]
            ,start: [50]
            ,slide: function(){
                var value5 = $(this).val();

                $("#v5").text(Math.round(value5) + "%");
                value5=value5/100
                $(trk5).prop("volume", value5);
            }
        });

        $('#s6').noUiSlider({
            handles: 1,
            range: [0, 100]
            ,start: [50]
            ,slide: function(){
                var value6 = $(this).val();

                $("#v6").text(Math.round(value6) + "%");
                value6=value6/100
                $(trk6).prop("volume", value6);
            }
        });

        $('#s7').noUiSlider({
            handles: 1,
            range: [0, 100]
            ,start: [50]
            ,slide: function(){
                var value7 = $(this).val();

                $("#v7").text(Math.round(value7) + "%");
                value7=value7/100
                $(trk7).prop("volume", value7);
            }
        });

        $('#s8').noUiSlider({
            handles: 1,
            range: [0, 100]
            ,start: [50]
            ,slide: function(){
                var value8 = $(this).val();

                $("#v8").text(Math.round(value8) + "%");
                value8=value8/100
                $(trk8).prop("volume", value8);
            }
        });

        $('#s9').noUiSlider({
            handles: 1,
            range: [0, 100]
            ,start: [50]
            ,slide: function(){
                var value9 = $(this).val();

                $("#v9").text(Math.round(value9) + "%");
                value9=value9/100
                $(trk9).prop("volume", value9);
            }
        });

        $('#s10').noUiSlider({
            handles: 1,
            range: [0, 100]
            ,start: [50]
            ,slide: function(){
                var value10 = $(this).val();

                $("#v10").text(Math.round(value10) + "%");
                value10=value10/100
                $(trk10).prop("volume", value10);
            }
        });

        $('#s11').noUiSlider({
            handles: 1,
            range: [0, 100]
            ,start: [50]
            ,slide: function(){
                var value11 = $(this).val();

                $("#v11").text(Math.round(value11) + "%");
                value11=value11/100
                $(trk11).prop("volume", value11);
            }
        });

        $('#s12').noUiSlider({
            handles: 1,
            range: [0, 100]
            ,start: [50]
            ,slide: function(){
                var value12 = $(this).val();

                $("#v12").text(Math.round(value12) + "%");
                value12=value12/100
                $(trk12).prop("volume", value12);
            }
        });

    });
