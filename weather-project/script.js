function hide() {
  document.getElementById("message").style.display = "none";
  }


  window.onload = function() {
    let
    temp1 = document.getElementById("temp1"),
    temp2 = document.getElementById("temp2"),
    temp3 = document.getElementById("temp3"),
    temp4 = document.getElementById("temp4"),
    temp5 = document.getElementById("temp5"),
    temp6 = document.getElementById("temp6"),
    temp7 = document.getElementById("temp7"),
    temp8 = document.getElementById("temp8"),
    mySelect   = document.getElementById("unit_Selector");
  
  
    mySelect.onchange = function(){
  
      switch (unit_Selector.value)  {
        case 'c':
          temp1.textContent = "24c";
          temp2.textContent = "18c" ;
          temp3.textContent = "27c";
          temp4.textContent = "19c" ;
          temp5.textContent = "21c";
          temp6.textContent = "16c" ;
          temp7.textContent = "26c";
          temp8.textContent = "21c" ;
        break;
        case 'F':
          temp1.textContent = "75f";
          temp2.textContent = "65f" ;
          temp3.textContent = "80f";
          temp4.textContent = "66f" ;
          temp5.textContent = "69f";
          temp6.textContent = "61f" ;
          temp7.textContent = "78f";
          temp8.textContent = "70f" ;
          
      }
    
  }
}
