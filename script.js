let rocket= document.querySelector('.rocket');
document.addEventListener('keydown',moveball);

let t=0, left=0;

function moveball(event){
   let browserheight= document.documentElement.clientHeight;
   let browserwidth= document.documentElement.clientWidth;   
   let elementwidth= rocket.offsetWidth;
   let key= event.keyCode;
    console.log(key);
   if(key == 68 || key == 39){
    if(left+ elementwidth+20<=browserwidth){
     rocket. style. transition = '0.5s ease';
     rocket. style. transform = 'rotate(360deg)';
     
    rocket.style.left =  left+20+"px";
      left += 20;
   }
}
// s


if(key == 83 || key == 40){
    if(t+ elementwidth+20<=browserheight){
     rocket. style. transition = '0.5 ease';
      rocket. style. transform = 'rotate(90deg)';
      
      rocket.style.top =  t+20+"px";
      t += 20;
      
   }
}
// w
if(key == 87 || key == 38){
    if(t-20 >= 0){
        rocket. style. transition = '0.5s ease';
      rocket. style. transform = 'rotate(360deg)';
      
      rocket.style.top =  t-20+"px";
      t -= 20;
   }
}
// a
if(key == 65 || key == 37){
    if(left- 20>=0){
        rocket. style. transition = '0.5s ease';
      rocket. style. transform = 'rotate(270deg)';
      
      rocket.style.left =  left-10+"px";
      left -= 20;
   }
}
}

