$(document).ready(function(){
  $("a").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $('body,html').animate({
      scrollTop: $(hash).offset().top
      }, 1200, function(){
      window.location.hash = hash;
     });
     } 
    });
});

var width = $(window).width(); 

window.onscroll = function(){
if ((width >= 900)){
    if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        $("#middle").css("background-size","150% auto");
    }else{
        $("#middle").css("background-size","100% auto");        
    }
}
};

setTimeout(function(){
    $("#loading").addClass("animated fadeOut");
    setTimeout(function(){
      $("#loading").removeClass("animated fadeOut");
      $("#loading").css("display","none");
    },800);
},1450);


// Nav mobile menu
function openNav() {
  document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}



// Alert
function loginFail() {
  var alertBox = document.getElementById("customAlert");
  alertBox.style.display = "block";
  alertBox.classList.remove("fade-out");
  

  setTimeout(function() {
      alertBox.classList.add("fade-out");
      setTimeout(function() {
          alertBox.style.display = "none";
      }, 1000);
  }, 1100); 
}
//  Close Alert
function closeAlert() {
  var alertBox = document.getElementById("customAlert");
  alertBox.classList.add("fade-out");
  setTimeout(function() {
      alertBox.style.display = "none";
  }, 1000); 
}
// Đóng thông báo
function closeAlert() {
  var alertBox = document.getElementById("customAlert");
  alertBox.style.display = "none";
}