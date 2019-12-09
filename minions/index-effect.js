
// 眼睛特效 //

$(function(){
var mouseX = 0, mouseY = 0, limitX = 8, limitY = 8;
$(window).mousemove(function(e){
  var offset = $('.eyeball').offset();
   mouseX = Math.min(e.pageX - offset.left, limitX);
   mouseY = Math.min(e.pageY - offset.top, limitY);
   if (mouseX < 0) mouseX = 0;
   if (mouseY < 0) mouseY = 0;
});
var follower = $('.eye'), xp = 0, yp = 0,
loop = setInterval(function(){
    xp += (mouseX - xp) / 1;
    yp += (mouseY - yp) / 1;
    follower.css({left:xp, top:yp});
}, 30);
});