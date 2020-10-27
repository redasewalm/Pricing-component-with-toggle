/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */


function checkfun(){
    var dollerval=document.querySelectorAll(".doller span");
    var button=document.getElementsByClassName("butt");
    var pro_button=document.querySelector(".pro .pro_button");
      
     var flag= 0;
     console.log(dollerval[0].innerText);
    if (dollerval[0].innerText=='19.99'){
        
      dollerval[0].innerHTML="199.99";
      dollerval[1].innerHTML="249.99";
      dollerval[2].innerHTML="399.99";
      
      button[0].style.backgroundColor="hsl(232deg 65% 72%)";
      button[1].style.backgroundColor="hsl(232deg 65% 72%)";
      pro_button.style.backgroundColor="white";
      
      button[0].style.color="white";
      button[1].style.color="white";
      pro_button.style.color="hsl(232deg 65% 72%)";
      flag =1;
              
       }
        else if (flag === 0){
             
       dollerval[0].innerHTML="19.99";
      dollerval[1].innerHTML="24.99";
      dollerval[2].innerHTML="39.99";
      
      
      
       
      
         }
    
    
}
