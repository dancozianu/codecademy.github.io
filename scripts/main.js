$(document).ready(function(){
    $('p').click(function(){
       $(this).fadeOut('fast');
});
    $('p').hover(function(){
     $(this).addClass('red')   
        });
});

$(document).ready(function(){

  $('ul li').hover(
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
/*sliding div
$(document).ready(function(){
    $('div').click(function(){
        $(this).effect('slide');
        });
    });*/
$(document).ready(function(){
    $('ol').sortable();
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
