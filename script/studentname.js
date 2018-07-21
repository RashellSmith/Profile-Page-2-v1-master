$(document).ready(function() {
  $("button").click(function() {
    document.getElementById('person').innerHTML = document.getElementsByClassName('txt_name').value;
    var studentname = $("#person").replaceWith($('#txt_name').val());
    var studentname = $(".studentname").replaceWith($('#txt_name').val());

    var page = document.getElementById("page");
    var rocketBody = document.getElementById("rocketBody");
    var rocket = document.getElementById("rocket");
    var message = document.getElementById("message");
    var countdown = document.getElementById('countdown');
    var timer = null;
    var countdownNumber = 10;

    $(page).addClass("hidepage");
    $(rocketBody).show();
    $(message).show();
    $(countdown).hide();
    setTimeout(function() {
      $(message).hide();
      $(countdown).show();
      clearInterval(timer);
      countdownNumber = 10;
      document.getElementById('countdown').innerHTML = countdownNumber;

      timer = setInterval(function() {
        countdownNumber = countdownNumber - 1;
        document.getElementById('countdown').innerHTML = countdownNumber;
        if (countdownNumber <= 0) {
          $(rocket).addClass("flying");
          $(countdown).hide();
        }

      }, 500);


    }, 2500);



    setTimeout(function() {
      $(page).removeClass("hidepage")
      $(rocketBody).hide()


    }, 10000)
    var skills = document.getElementsByClassName("skills")
    $("skills").click(function() {
      $(this).show("slide", {
        direction: "left"
      }, 1000);
    });
  });

});
