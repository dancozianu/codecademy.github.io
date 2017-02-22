$(document).ready(function(){
    $('p').click(function(){
       $(this).fadeOut('fast');
});
    $('p').hover(function(){
     $(this).addClass('red')   
        });
});

$(document).ready(function(){

  $('li').hover(
    function(){
     $(this).addClass('active');
    },
    function(){
     $(this).removeClass('active');    
    }
  );

});

$(document).ready(function(){
    $('input').focus(function(){
        $(this).css('outline-style','solid');
        $(this).css('outline-color','#FF0000');
        });
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
