$(document).ready(function(){
    $('div').click(function(){
       $(this).fadeOut('fast');
});
    $('div').hover(function(){
     $(this).addClass('red')   
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
