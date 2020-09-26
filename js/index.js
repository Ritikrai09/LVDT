var data11=[];
var data12=[];



function response(){
    const suppfre=document.getElementById("frequency").value;
    
const suppv=document.getElementById("voltage").value;

const suppdis =document.getElementById("displacement").value;
data12.push(suppdis);

var roundoffR2=(16.96*suppfre*suppv*(1-((suppdis*suppdis)/800)));
   
if(roundoffR2<0){
    roundoffR2= -(roundoffR2)
}
const f=roundoffR2.toFixed(4);
data11.push(f);
document.getElementById("vout").value=f;

var addup = document.querySelector("#output").insertRow(2);
var add1 = addup.insertCell(0).innerHTML= f;
var add2 = addup.insertCell(1).innerHTML=suppdis;
}

function reset(){
    document.getElementById("myForm").reset();
    document.getElementById("myRange").reset();
}

document.querySelector(".arrow1").style.display = 'none';
document.querySelector(".arrow2").style.display = 'none';

document.querySelector('.switching').onclick=function(){

  document.querySelector('.switching').style.backgroundColor='yellow';
  document.querySelector('.switching').style.boxShadow='0px -2px 20px 0px inset #444';
    document.querySelector('.switching').style.transform='scale('+0.8+'deg)';
   document.querySelector('.arrow').style.display='block';
     document.querySelector('#svg_51').style.display='block';
      document.querySelector('#svg_13').style.display='block';

var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = slider.value;

slider.oninput = function() {
    var x=this.value;
  output.innerHTML = this.value;

  document.getElementById("displacement").value=x;
 var  trans = 'rotate(89.6352767944336 282.1059265136719,226.01145935058594)translate('+0+','+-this.value+')';
 var trans1 = 'translate('+this.value+','+0+')';
 var trans2 = 'rotate(88.92388916015625 357.9019775390625,227.59671020507812) translate('+0+','+-this.value+')'; 
  document.getElementById("svg_44").setAttribute("transform",trans);
   document.getElementById("svg_2").setAttribute("transform",trans1);
   document.getElementById("svg_5").setAttribute("transform",trans2);

   if (this.value > 0) {

     document.getElementById("myRange").style.background = 'linear-gradient(to left,cornflowerblue 50%,transparent 50%)';
      document.querySelector(".arrow1").style.display = 'block'; 
       document.querySelector(".arrow2").style.display = 'block'; 
   }

 if (this.value == 0) {

     document.querySelector(".arrow1").style.display = 'none'; 
      document.querySelector(".arrow2").style.display = 'none'; 
   }

    if (this.value < 0) {

     document.getElementById("myRange").style.background = 'linear-gradient(to right,red 50%,transparent 50%)';
     document.querySelector(".arrow1").style.display = 'block'; 
      document.querySelector(".arrow2").style.display = 'block'; 
   }
  
}


}           
