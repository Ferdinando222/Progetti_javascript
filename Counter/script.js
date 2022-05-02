// see initial count
let count = 0;

// select value and buttons
const butt = document.querySelectorAll(".container2");
const value = document.querySelector(".container3");

butt.forEach(function(item){
  item.addEventListener('click',function(event){
    const styles = event.currentTarget.classList;
    
    if (styles.contains("red")){
        count--;
    }
    else if (styles.contains("blu")){
     count = 0;
    }
    else if (styles.contains("green")){
      count++;
    }
    
    if (count>0){
      value.style.color = "green";
    }
    
    if (count<0){
      value.style.color = "red";
    }
    
    if (count===0){
      value.style.color = "black";
    }
    value.textContent = count;
    
   
  });
});

