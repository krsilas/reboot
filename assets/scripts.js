document.getElementById("t1").onclick = function(){tabs('t1', 'i1')};
document.getElementById("t2").onclick = function(){tabs('t2', 'i2')};
document.getElementById("t3").onclick = function(){tabs('t3', 'i3')};

function tabs(tab, item){
  document.getElementsByClassName('tab active')[0].classList.remove('active');
  document.getElementsByClassName('item active')[0].classList.remove('active');
  document.getElementById(tab).classList.add('active');
  document.getElementById(item).classList.add('active');
}

window.onscroll = function(){
  var wScroll = window.pageYOffset;
  var vh = window.innerHeight;

  for(var i=0; i<5; i++){
    //console.log(i);
    var c = document.getElementsByClassName('card')[i].offsetTop - vh;
    if (wScroll > c){
      document.getElementsByClassName('card')[i].style.transform = 'translateY(-'+ (wScroll-c)/100 +'%)';
    };
  }
  // var c1 = document.getElementById("c1").offsetTop - vh;
  // var c2 = document.getElementById("c2").offsetTop - vh;
  // var c3 = document.getElementById("c3").offsetTop - vh;
  // var c4 = document.getElementById("c4").offsetTop - vh;
  // var c5 = document.getElementById("c5").offsetTop - vh;
  //
  // if (wScroll > c1){
  //   document.getElementById("c1").style.transform = 'translateY(-'+ (wScroll-c1)/100 +'%)';
  // };
  // if (wScroll > c2){
  //   document.getElementById("c2").style.transform = 'translateY(-'+ (wScroll-c2)/100 +'%)';
  // };
  // if (wScroll > c3){
  //   document.getElementById("c3").style.transform = 'translateY(-'+ (wScroll-c3)/100 +'%)';
  // };
  // if (wScroll > c4){
  //   document.getElementById("c4").style.transform = 'translateY(-'+ (wScroll-c4)/100 +'%)';
  // };
  // if (wScroll > c5){
  //   document.getElementById("c5").style.transform = 'translateY(-'+ (wScroll-c5)/100 +'%)';
  // };
};