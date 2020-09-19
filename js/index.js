var data11=[];
var data12=[];

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

   }

    if (this.value < 0) {

   	 document.getElementById("myRange").style.background = 'linear-gradient(to right,red 50%,transparent 50%)';

   }
  
}

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

var element = document.getElementById("div2").innerHTML+="Vout.= "+ f + ", "+"Displacement= "+suppdis+"<br>";

}

function reset(){
    document.getElementById("myForm").reset();
    document.getElementById("myRange").reset();
}