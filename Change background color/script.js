let butt = document.getElementById("button");

butt.onclick = function(){
  colorchange();
}

function colorchange(){
  document.body.style.backgroundColor = getColor();
}

function getColor(){
  let str = '#';
  let letters = '0123456789ABCDEF';
  color = str;
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
  
}