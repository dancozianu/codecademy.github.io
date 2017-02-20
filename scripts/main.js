$(document).ready(function(){
    $(".pull-me").click(function(){
        $(".panel").slideToggle('slow')    
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

$(document).ready(function(){
    $(".pull-me").click(function(){
        $(".panel").slideToggle('slow')    
    }); 
});

/* $(document).ready(function() {
    $('li').mouseenter(function() {
        $('li').fadeTo('fast',1);
    });
    $('li').mouseleave(function() {
        $('li').fadeTo('fast',0.5);
    });
});

/*var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
  var myName = prompt('Va rugam introduceti numele dumneavoastra');
  localStorage.setItem('name', myName);
  myHeading.innerHTML = 'Bine ati venit pe website-ul Cont Activ, ' + myName;
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.innerHTML = 'Bine ati venit pe website-ul Cont Activ, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}*/
