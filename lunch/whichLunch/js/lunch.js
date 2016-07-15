<<<<<<< HEAD
// github
=======
>>>>>>> origin/master
$("#lunch").css("display", "block");

var host = "https://cdn.rawgit.com/dotchnolunch/lunch/master/whichLunch/";

// Switch header contents.

switch (n % 4) {
    case 1:
        var ingr_01 = "energy";

        $(".lady").css("visibility", "visible");
        break;

    case 2:
        var ingr_01 = "salt";
        $(".boy").css("visibility", "visible");
        break;

    case 3:
        var ingr_01 = "carbo";
        $(".romance").css("visibility", "visible");
        break;

    case 0:
        var ingr_01 = "purin";
        $(".boldman").css("visibility", "visible");
        break;
}

$(".lunch-header").addClass("lunch-header-" + ingr_01);
$(".lady").attr("src", "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABmAQMAAABm/IReAAAAA1BMVEX///+nxBvIAAAAAXRSTlMAQObYZgAAABJJREFUeNpjYBgFo2AUjAJaAQAEYgABhyYfKQAAAABJRU5ErkJggg==");
$(".boldman").attr("src", "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAADAAQMAAACEQsx7AAAAA1BMVEX///+nxBvIAAAAAXRSTlMAQObYZgAAAB1JREFUeNrtwQENAAAAwqD3T+3sARQAAAAAAAAANx1AAAGrj3iTAAAAAElFTkSuQmCC");
$(".boy").attr("src", "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADZAQMAAABfHO3jAAAAA1BMVEX///+nxBvIAAAAAXRSTlMAQObYZgAAABxJREFUeNrtwQENAAAAwqD3T20PBxQAAAAAAN8GFgoAASYziRkAAAAASUVORK5CYII=");
$(".mushroom").attr("src", "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAABuAQMAAABY084uAAAAA1BMVEX///+nxBvIAAAAAXRSTlMAQObYZgAAABpJREFUeNrtwYEAAAAAw6D5U1/gCFUBAADPAAssAAGXeL4gAAAAAElFTkSuQmCC");
$(".fork").attr("src", "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALQAAABHAQMAAACUBf/GAAAAA1BMVEX///+nxBvIAAAAAXRSTlMAQObYZgAAABZJREFUeNpjYBgFo2AUjIJRMAoGLwAABqgAAdVhnJgAAAAASUVORK5CYII=");
$(".burger").attr("src", "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKAAAABiAQMAAADtIUrRAAAAA1BMVEX///+nxBvIAAAAAXRSTlMAQObYZgAAABdJREFUeNpjYBgFo2AUjIJRMApGwcgFAAgKAAFqVInIAAAAAElFTkSuQmCC");
$(".turkey").attr("src", "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAACbAQMAAAC6UfB/AAAAA1BMVEX///+nxBvIAAAAAXRSTlMAQObYZgAAABhJREFUeNrtwQEBAAAAgJD+r+4ICgAAoAYMHAABlnRPUgAAAABJRU5ErkJggg==");
$(".spoon").attr("src", "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAABAAQMAAADrgyFRAAAAA1BMVEX///+nxBvIAAAAAXRSTlMAQObYZgAAABFJREFUeNpjYBgFo2AUjFQAAAQAAAFZAVMiAAAAAElFTkSuQmCC");
$(".tomato-parts").attr("src", "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAACTAQMAAAB/KU/QAAAAA1BMVEX///+nxBvIAAAAAXRSTlMAQObYZgAAABlJREFUeNrtwYEAAAAAw6D5U9/gBFUBAPAMCTAAAX/RwpMAAAAASUVORK5CYII=");
$(".hamburger-2").attr("src", "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAAA3AQMAAAChLl8MAAAAA1BMVEX///+nxBvIAAAAAXRSTlMAQObYZgAAAA9JREFUeNpjYBgFo4BGAAACXQAB+KDXewAAAABJRU5ErkJggg==");
$(".romance").attr("src", "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAUAAAADuAQMAAAByP0zDAAAAA1BMVEX///+nxBvIAAAAAXRSTlMAQObYZgAAACBJREFUeNrtwQENAAAAwqD3T20PBxQAAAAAAAAAAAB/BiYeAAGrweBtAAAAAElFTkSuQmCC");
$(".corn").attr("src", "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAE4AAAAdAQMAAAA+fsgHAAAAA1BMVEX///+nxBvIAAAAAXRSTlMAQObYZgAAAA1JREFUeNpjYBgFFAAAAT8AASC/a1kAAAAASUVORK5CYII=");
$(".avocado").attr("src", "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAE0AAAAwAQMAAABue2XsAAAAA1BMVEX///+nxBvIAAAAAXRSTlMAQObYZgAAAA5JREFUeNpjYBgFowABAAIQAAGa4R7GAAAAAElFTkSuQmCC");
$(".hamburger").attr("src", "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEQAAAAzAQMAAAAU+jyIAAAAA1BMVEX///+nxBvIAAAAAXRSTlMAQObYZgAAAA5JREFUeNpjYBgFIxcAAAH+AAERNri9AAAAAElFTkSuQmCC");
$(".niku-turkey").attr("src", "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD4AAAAxAQMAAAC4WYjSAAAAA1BMVEX///+nxBvIAAAAAXRSTlMAQObYZgAAAA5JREFUeNpjYBgFQxIAAAG5AAHmMKzkAAAAAElFTkSuQmCC");
$(".hotate").attr("src", "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA0AQMAAADsYclcAAAAA1BMVEX///+nxBvIAAAAAXRSTlMAQObYZgAAAA5JREFUeNpjYBgFww0AAAHUAAFkkp1qAAAAAElFTkSuQmCC");
$(".hakusai").attr("src", "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADsAAABUAQMAAAAGSd1/AAAAA1BMVEX///+nxBvIAAAAAXRSTlMAQObYZgAAAA9JREFUeNpjYBgFo2BkAQAC9AABPqdv5QAAAABJRU5ErkJggg==");
$(".cucumber").attr("src", "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAAuAQMAAABHx0jbAAAAA1BMVEX///+nxBvIAAAAAXRSTlMAQObYZgAAAA1JREFUeNpjYBgF9AQAAXAAAcNIRaUAAAAASUVORK5CYII=");
$(".nasu").attr("src", "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADcAAAAZAQMAAACvsyRDAAAAA1BMVEX///+nxBvIAAAAAXRSTlMAQObYZgAAAAxJREFUeNpjYBgeAAAAyAABk72ljgAAAABJRU5ErkJggg==");
$(".cheese").attr("src", "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADUAAAAsAQMAAAD/8WJgAAAAA1BMVEX///+nxBvIAAAAAXRSTlMAQObYZgAAAA1JREFUeNpjYBgFtAQAAWAAAZtlk6wAAAAASUVORK5CYII=");
$(".red-pepper").attr("src", "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAAAdAQMAAADfFd1WAAAAA1BMVEX///+nxBvIAAAAAXRSTlMAQObYZgAAAAxJREFUeNpjYBgZAAAA6AABblfd4AAAAABJRU5ErkJggg==");
$(".bread").attr("src", "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAkAQMAAADxfvt0AAAAA1BMVEX///+nxBvIAAAAAXRSTlMAQObYZgAAAA1JREFUeNpjYBgF+AAAASAAAfPFQ3cAAAAASUVORK5CYII=");
$(".egg-medama").attr("src", "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAdAQMAAADSC60RAAAAA1BMVEX///+nxBvIAAAAAXRSTlMAQObYZgAAAAxJREFUeNpjYBgZAAAA6AABblfd4AAAAABJRU5ErkJggg==");
$(".pineapple").attr("src", "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAB2AQMAAACNqjPuAAAAA1BMVEX///+nxBvIAAAAAXRSTlMAQObYZgAAABBJREFUeNpjYBgFo2AUkA4AAzoAAfsoz5IAAAAASUVORK5CYII=");
$(".tomato").attr("src", "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAnAQMAAAC/hmMMAAAAA1BMVEX///+nxBvIAAAAAXRSTlMAQObYZgAAAAxJREFUeNpjYBgpAAAA6gABxbCs3AAAAABJRU5ErkJggg==");
$(".folk-and-tomato").attr("src", "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAABmAQMAAADmj7NNAAAAA1BMVEX///+nxBvIAAAAAXRSTlMAQObYZgAAAA5JREFUeNpjYBgFIxcAAAH+AAERNri9AAAAAElFTkSuQmCC");




$(document).ready(function() {


    var headerHeight = $(".lunch-header").innerHeight();

    var headerTitleFontSize = headerHeight / 200;

    var headerSubtitleFontSize = headerTitleFontSize * .7;

    $(".lunch-title").html("どっちのランチ？").fadeIn(500).css('font-size', headerTitleFontSize + "em");

    // include html
    $(function() {
        $("#includeFinalMessage").load(host + "final_message.html");

    });


    switch (n % 4) {
        case 1:
            var ingr_01_k = "エネルギー";
            var ingr_02_k = "脂質";
            var ingr_03_k = "食塩相当量";
            var ingr_01 = "energy";
            var ingr_02 = "lipid";
            var ingr_03 = "salt";
            var unit_01 = "kcal";
            var unit_02 = "g";
            var unit_03 = "g";
            var kanrieiyoushi_pic = "kurokawa.jpg";
            var kanrieiyoushi_name = "黒川一紗";
            var conversation_pic = "energy_conversation.jpg";
            $("#includeCalcApp").load(host + "calcApp.html");


            break;
        case 2:
            var ingr_01_k = "食塩相当量";
            var ingr_02_k = "エネルギー";
            var ingr_03_k = "脂質";
            var ingr_01 = "salt";
            var ingr_02 = "energy";
            var ingr_03 = "lipid"
            var unit_01 = "g";
            var unit_02 = "kcal";
            var unit_03 = "g";
            var kanrieiyoushi_pic = "ikeda.jpg";
            var kanrieiyoushi_name = "池田紀美子";
            var conversation_pic = "salt_conversation.jpg";


            break;
        case 3:
            var ingr_01_k = "炭水化物";
            var ingr_02_k = "エネルギー";
            var ingr_03_k = "食塩相当量";
            var ingr_01 = "carbo";
            var ingr_02 = "energy";
            var ingr_03 = "salt"
            var unit_01 = "g";
            var unit_02 = "kcal";
            var unit_03 = "g";
            var kanrieiyoushi_pic = "nakajima.jpg";
            var kanrieiyoushi_name = "中嶋祥子";
            var conversation_pic = "carbo_conversation.jpg";

            break;
        case 0:
            var ingr_01_k = "プリン体";
            var ingr_02_k = "エネルギー";
            var ingr_03_k = "食塩相当量";
            var ingr_01 = "purin";
            var ingr_02 = "energy";
            var ingr_03 = "salt"
            var unit_01 = "mg";
            var unit_02 = "kcal";
            var unit_03 = "g";
            var kanrieiyoushi_pic = "ikeda.jpg";
            var kanrieiyoushi_name = "池田紀美子";
            var conversation_pic = "purin_conversation.jpg";

            break;
    }

    if (n % 4　 == 2) {
        $("#conversation-title").html("食塩ってどのくらい取ればいいの？");
    } else {
        $("#conversation-title").html(ingr_01_k + "ってどのくらい取ればいいの？");
    }


    //Scaling energy header font size.
    $(window).on("load resize", function() {

        var headerHeight = $(".lunch-header").innerHeight();

        var headerTitleFontSize = headerHeight / 200;

        var headerSubtitleFontSize = headerTitleFontSize * .7;

        var bubbleFontSizeEm = headerTitleFontSize * .65;

        var ingredientExImgWidth = $(".ingredient-explanation img").innerWidth();

        var ingredientExFontSize = ingredientExImgWidth * 0.0131;

        $(".lunch-title").html("どっちのランチ？").css('font-size', headerTitleFontSize + "em");

        if (n % 4　 == 2) {
            $(".lunch-subtitle").html("食塩が少ないのは").css('font-size', headerSubtitleFontSize + "em").css("visibility", "visible");

        } else {
            $(".lunch-subtitle").html(ingr_01_k + "が少ないのは").css('font-size', headerSubtitleFontSize + "em").css("visibility", "visible");

        }

        $(".comment-article").css('font-size', bubbleFontSizeEm + "em");
        $(".energy-explanation p").css('font-size', ingredientExFontSize + "px");

        // subtitle text animation powered by https://github.com/jschr/textillate
        $('.tlt').textillate({
            // the default selector to use when detecting multiple texts to animate
            selector: '.texts',

            // enable looping
            loop: false,

            // sets the minimum display time for each text before it is replaced
            minDisplayTime: 1000,

            // sets the initial delay before starting the animation
            // (note that depending on the in effect you may need to manually apply 
            // visibility: hidden to the element before running this plugin)
            initialDelay: 1500,

            // set whether or not to automatically start animating
            autoStart: true,

            // custom set of 'in' effects. This effects whether or not the 
            // character is shown/hidden before or after an animation  
            inEffects: [],

            // custom set of 'out' effects
            outEffects: ['hinge'],

            // in animation settings
            in: {
                // set the effect name
                effect: 'fadeInDownBig',

                // set the delay factor applied to each consecutive character
                delayScale: 1.5,

                // set the delay between each character
                delay: 100,

                // set to true to animate all the characters at the same time
                sync: false,

                // randomize the character sequence 
                // (note that shuffle doesn't make sense with sync = true)
                shuffle: false,

                // reverse the character sequence 
                // (note that reverse doesn't make sense with sync = true)
                reverse: false,

                // callback that executes once the animation has finished
                callback: function() {}
            },

            // out animation settings.
            out: {
                effect: 'hinge',
                delayScale: 1.5,
                delay: 0,
                sync: false,
                shuffle: false,
                reverse: false,
                callback: function() {}
            },

            // callback that executes once textillate has finished 
            callback: function() {},

            // set the type of token to animate (available types: 'char' and 'word')
            type: 'char'

        });


    });

    // Setting ingredient data.
    // Setting strings and data of each dishes from lunch.json file.

    $.getJSON(host + 'js/lunch.json',

        function(json) {
            var question = json.lunches[i].question;

            var dishName_left = json.lunches[i].dishName;
            var dishName_right = json.lunches[i + 1].dishName;

            var mainFood_left = json.lunches[i].mainFood;
            var mainFood_right = json.lunches[i + 1].mainFood;

            var dishDescript_left = json.lunches[i].dishDescript;
            var dishDescript_right = json.lunches[i + 1].dishDescript;

            var dishImage_left = json.lunches[i].dishImage;
            var dishImage_right = json.lunches[i + 1].dishImage;

            var comment_article = json.lunches[i].comment;




            var ingredient01_left = json.lunches[i][ingr_01];
            var ingredient01_right = json.lunches[i + 1][ingr_01];
            var ingredient02_left = json.lunches[i][ingr_02];
            var ingredient02_right = json.lunches[i + 1][ingr_02];
            var ingredient03_left = json.lunches[i][ingr_03];
            var ingredient03_right = json.lunches[i + 1][ingr_03];

            $("#ingredient01_left").html(ingr_01_k + "；" + ingredient01_left + unit_01);
            $("#ingredient01_right").html(ingr_01_k + "；" + ingredient01_right + unit_01);
            $("#ingredient02_left").html(ingr_02_k + "；" + ingredient02_left + unit_02);
            $("#ingredient02_right").html(ingr_02_k + "；" + ingredient02_right + unit_02);
            $("#ingredient03_left").html(ingr_03_k + "；" + ingredient03_left + unit_03);
            $("#ingredient03_right").html(ingr_03_k + "；" + ingredient03_right + unit_03);

            $("#q_title").html(ingr_01_k + "の少ない料理はどっち？")
            $("#question").html(question);

            $("#dish").html("<tr><td>" +
                dishName_left +
                "</td><td>" +
                dishName_right +
                "</td></tr><tr><td>" +
                mainFood_left +
                "</td><td>" +
                mainFood_right +
                "</td></tr><tr><td>" +
                dishDescript_left +
                "</td><td>" +
                dishDescript_right +
                "</td></tr><tr><td><img class='dish-image left'/></td><td><img class='dish-image right'/></td></tr>");

            $("#dishName_left").html(dishName_left);
            $("#dishName_right").html(dishName_right);


            $("#mainFood_left").html(mainFood_left);
            $("#mainFood_right").html(mainFood_right);

            $("#dishDescript_right").html(dishDescript_right);
            $("#dishDescript_left").html(dishDescript_left);

            $("img.left").attr({
                src: host + "images/" + dishImage_left,
                alt: dishName_left
            });

            $("img.right").attr({
                src: host + "images/" + dishImage_right,
                alt: dishName_right
            });

            $("img.kanrieiyoushi-pic").attr({
                src: host + "images/" + kanrieiyoushi_pic,
                alt: kanrieiyoushi_name
            });

            $("#eiyoushi-name").html(kanrieiyoushi_name + " 氏");

            $(".comment-article").html(comment_article);

            $("#conversation").attr({
                src: host + "images/" + conversation_pic
            });

        });



    // Show the answer when the button has clicked.

    var answerButton = document.getElementById("lunch-answer-button");

    answerButton.onclick = function() {


        $(".ingredient").css("visibility", "visible");

        $(".ingredient").addClass("animated bounceInUp");

        $(".hide").css("display", "block");

        $(".hide").addClass("animated fadeInLeft");

        $(".dish-image").addClass("animated bounce");

        $("#lunch-answer-button").addClass("animated bounceOutUp");

    };

    //animate sprite images with animate.css
    var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';

    $('.iwasaki-logo, .fork, .burger, .spoon').hover(

        function() {
            $(this).addClass('animated jello').one(animationEnd, function() {
                $(this).removeClass('animated jello');
            });
        }

    );

    $('.pineapple, .corn, .boy, .red-pepper, .boldman, .boy, .romance').hover(

        function() {
            $(this).addClass('animated hinge').one(animationEnd, function() {
                // $(this).removeClass('animated hinge');
            });
        }

    );

    $('.cucumber, .nasu').hover(

        function() {
            $(this).addClass('animated hinge').one(animationEnd, function() {
                // $(this).removeClass('animated hinge');
            });
        }

    );


    $('.lady').hover(

        function() {
            $(this).addClass('animated rubberBand').one(animationEnd, function() {
                $(this).removeClass('animated rubberBand');
            });
        }

    );

    $('.niku-turkey, .egg-medama').hover(

        function() {
            $(this).addClass('animated tada').one(animationEnd, function() {
                $(this).removeClass('animated tada');
            });
        }

    );

    $('.hotate, .hakusai').hover(

        function() {
            $(this).addClass('animated pulse').one(animationEnd, function() {
                $(this).removeClass('animated pulse');
            });
        }

    );

    $('.tomato-parts, .folk-and-tomato, .cheese').hover(

        function() {
            $(this).addClass('animated wobble').one(animationEnd, function() {
                $(this).removeClass('animated wobble');
            });
        }

    );

    $('.mushroom').hover(

        function() {
            $(this).addClass('animated shake').one(animationEnd, function() {
                $(this).removeClass('animated shake');
            });
        }

    );

    $('.turkey').hover(

        function() {
            $(this).addClass('animated rubberBand').one(animationEnd, function() {
                $(this).removeClass('animated rubberBand');
            });
        }

    );

});