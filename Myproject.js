function calculateTip() {
  var Amount = document.getElementById("amount").value;
  var serviceQual = document.getElementById("serviceQual").value;
  var numOfPeople = document.getElementById("people").value;

  if (Amount === "" || serviceQual == 0) {
    alert("Please enter values");
  }
  if (numOfPeople === "" || numOfPeople <= 1) {
    document.getElementById("each").style.display = "none";
  } else {
    document.getElementById("each").style.display = "centre";
  }
  var total = (Amount * serviceQual) / numOfPeople;
  total = Math.round(total);
  total = total.toFixed(2);
  document.getElementById("total").style.display = "centre";
  document.getElementById("tip").innerHTML = total;
}

document.getElementById("cal").onclick = function () {
  calculateTip();
};



