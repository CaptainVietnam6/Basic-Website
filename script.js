$(document).ready(function() {

    $("p").mouseenter(function() {
        $("p").css("color", "orange");
    });

    $("p").mouseleave(function() {
        $("p").css("color", "white");
    });

    $("h1").mouseenter(function() {
        $("h1").css("color", "blue");
    });

    $("h1").mouseleave(function() {
        $("h1").css("color", "cyan");
    });

    $("h2").mouseenter(function() {
        $("h2").css("color", "cyan");
    });

    $("h2").mouseleave(function() {
        $("h2").css("color", "white");
    });

    $("input").focus(function(){
        $(this).css("background-color", "red");
    });

    $("input").blur(function(){
        $(this).css("background-color", "green");
    });

    $("#submitbutton").click(function() {
        let nameData = $("#name").val();
        //alert("Hello " + nameData +"! Your tag will be logged and you'll be added soon.");

        let user_discord_name = $("#discorduser").val();
        let user_gender = $("#gender_selector").cal();
        let user_gender_print = '';
        if (user_gender = "He/Him") {
            user_gender_print = "Male"
        } else if (user_gender = "She/Her") {
            user_gender_print = "Female"
        } else {
            user_gender_print = "none/prefer not to say"
        }
        let tag_message = "Hi! Your discord tag is " + user_discord_name + " and you are" + user_gender_print;
        $("#tag-message").html("<p>" + tag_message + "</p>");

    });

});
