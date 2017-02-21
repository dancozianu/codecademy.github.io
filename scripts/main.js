$(document).ready(function(){
    $('p').click(function(){
       $(this).fadeOut('fast');
});
    $('p').hover(function(){
     $(this).addClass('red')   
        });
});

$(document).ready(function(){

  $('div').hover(
    function(){
     $(this).addClass('active');
    },
    function(){
     $(this).removeClass('active');    
    }
  );

});

var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/contactiv.jpg') {
      myImage.setAttribute ('src','images/firefox2.jpg');
    } else {
      myImage.setAttribute ('src','images/contactiv.jpg');
    }
}
