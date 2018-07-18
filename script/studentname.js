$(document).ready(function () {
  $("button").click(function() {
    document.getElementById( 'person' ).innerHTML = document.getElementsByClassName( 'txt_name' ).value;
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

    setTimeout(function (){
      $(message).hide();

    }, 1800);

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
    }, 700);
    // $(f).addClass("flying");


    setTimeout(function() {
      $(page).removeClass("hidepage")
      $(rocketBody).hide()


    }, 10000)
  });
  //   x.className === "all-elements")
  //   { x.className += "hidepage";
  // }
});
// var name = $(".name").text();
 // var messageName = $(".person").replaceWith($(".name").text());
// const person = {$('#txt_name').val()}
// const markup = `<span class="person"> ${person}</span>`;
// document.getElementById('person').innerHTML = markup;
// function myFunction() {
//     var x = document.getElementById("m");
//     if (x.className === "topnav") {
//         x.className += " responsive";
//     } else {
//         x.className = "topnav";
//     }
// }
