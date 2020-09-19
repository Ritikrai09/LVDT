function plot(){

    data1y=[];
    data1x=[];
    
    data1y.push.apply(data1y, data11);
    
    var yaxis1= data1y.sort(function(a, b){return a-b});
    
    
    data1x.push.apply(data1x, data12);
     var xaxis1= data1x.sort(function(a, b){return a-b});
    
    
    let myChart=document.getElementById("myChart").getContext("2d");
    document.getElementById("myChart").style.boxShadow=' 0px 0px 10px 0px inset black';
    document.getElementById("myChart").style.background='linear-gradient(45deg,rgb(237 226 226), rgb(255 255 255 / 84%))';
  
    let lineChart= new Chart(myChart,{
      type:"line",
      data:{
        labels:xaxis1,
        datasets:[{
          label:"Displacement",
          data:yaxis1,
         
          borderWidth:4,
          borderColor:"red",
          hoverBorderWidth:10,
          hoverBorderColor:"blue"
        }]
      },
      options:{
        title:{
          display:true,
          text:"Voltage VS Displacement"
        }
      }
    });
   
    }
    