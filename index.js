function call_function(){

    // Take value from input
    let W = document.getElementById("Weight").value;
    let H = document.getElementById("Height").value;

    // Change height from centimeter to meter
    var meterHeight =H/100;
    var msq = (meterHeight*meterHeight)
    // BMI Calculation
    let bmiRes = W/msq;


    // Send the result
    document.getElementById("bmiRes").innerHTML =bmiRes;
     
    //  BMI Conditions
     if(bmiRes<18.5){
        document.getElementById("b-w-type").innerHTML = "Under Weight";
        document.getElementById("b-w-type").style.color = "brown";
        document.getElementById("cercle").style.borderColor = "brown";
     }
     else if(bmiRes<18.5 && bmiRes<=24.9){
        document.getElementById("b-w-type").innerHTML = "Healthy";
        document.getElementById("b-w-type").style.color = "green";
        document.getElementById("cercle").style.borderColor = "green";
          
    }
    else if(bmiRes>=25 && bmiRes<=29.9){
        document.getElementById("b-w-type").innerHTML = "Over Weight";
        document.getElementById("b-w-type").style.color = "brown";
        document.getElementById("cercle").style.borderColor = "brown";
        
  }
    else if(bmiRes>=30 ){
              document.getElementById("b-w-type").innerHTML = "Obese";
              document.getElementById("b-w-type").style.color = "red";
              document.getElementById("cercle").style.borderColor = "red";
    }

}