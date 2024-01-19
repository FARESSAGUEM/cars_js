var q1 = "q1";
var q2 = "q2";
var q3 = "q3";
var q4 = "q4";
var q5 = "q5";
var q6 = "q6";
var up1 = "up1";
var up2 = "up2";
var up3 = "up3";
var up4 = "up4";
var up5 = "up5";
var up6 = "up6";

var y = "incrementer";
var z = "decrementer";
function incrementerDecrementer(id, direction, up) {
  var q = document.getElementById(id).innerText.toString();
  parseInt(q);

  if (direction === "incrementer") {
    q++;
    document.getElementById(id).innerText = q;
  } else {
    q--;

    document.getElementById(id).innerText = q;
    if (q < 0) {
      q = 0;
      document.getElementById(id).innerText = q;
    }
  }
  if (up === "up1") {
    var up1 = document.getElementById("up1").innerText;
    parseInt(up1);
    var total1 = q * up1;
    document.getElementById("total1").innerText = total1 + "$";
  } else if (up === "up2") {
    var up2 = document.getElementById("up2").innerText;
    parseInt(up2);
    var total2 = q * up2;
    document.getElementById("total2").innerText = total2 + "$";
  } else if (up === "up3") {
    var up3 = document.getElementById("up3").innerText;
    parseInt(up3);
    var total3 = q * up3;
    document.getElementById("total3").innerText = total3 + "$";
  } else if (up === "up4") {
    var up4 = document.getElementById("up4").innerText;
    parseInt(up4);
    var total4 = q * up4;
    document.getElementById("total4").innerText = total4 + "$";
  } else if (up === "up5") {
    var up5 = document.getElementById("up5").innerText;
    parseInt(up5);
    var total5 = q * up5;
    document.getElementById("total5").innerText = total5 + "$";
  } else if (up === "up6") {
    var up6 = document.getElementById("up6").innerText;
    parseInt(up6);
    var total6 = q * up6;
    document.getElementById("total6").innerText = total6 + "$";
  }
}
