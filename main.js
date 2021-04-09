let suggestions = [
    'tibu' ,
    'tifu',
    'samra',
    'shelby',
    'azer',
    'tural',
    'bmw',
    'epi',
    'king' ,
    'aydin',
    'rock',
    'brock',
    'ilham Eliyev',
    'kelle kelleye',
    'bmw group Azerbaijan',
    'mercedes benz group',
    'safavy'
];

var modalBtn = document.querySelector('.modal-btn');
var modalBg = document.querySelector('.modal-bg');
var modalClose = document.querySelector('.modal-close');

modalBtn.addEventListener('click', function () {
    modalBg.classList.add('bg-active');
});

modalClose.addEventListener('click' ,function()  {
    modalBg.classList.remove('bg-active');
})


  
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
   
  
    var ban = document.getElementById("button2");
     var arrow = document.getElementById("donar");
      
            ban.style.display = "block";
            arrow.classList.toggle("fa-angle-double-up");
            arrow.classList.toggle("fa-angle-double-down");
        
        
            ban.style.display = "none"
            arrow.classList.toggle("fa-angle-double-up");
            arrow.classList.toggle("fa-angle-down");};

