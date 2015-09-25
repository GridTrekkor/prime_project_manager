$( document ).ready(function() {

    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    $("#createProject").on("click", function () {
        var projectName =  getRandomInt(100, 200);
        var frontEndPoints =  getRandomInt(10, 60);
        var clientSidePoints =  getRandomInt(10, 60);
        var serverSidePoints =  getRandomInt(10, 60);

        $("#projectName").text("Project " + projectName);
        $("#frontEndPoints").text("Front-End Points: " + frontEndPoints);
        $("#clientSidePoints").text("Client-Side Points: " + clientSidePoints);
        $("#serverSidePoints").text("Server-Side Points: " + serverSidePoints);

        $("#assignEmployee").show();

    });

    $("#makeEmployees").on("click", function() {
        $.ajax ({
            url: "http://localhost:3000/makeEmployees"
        }).done(function(data) {
            // display initial employee set

        });
    });

});


