function calculateTemp() {
  let temp = document.getElementById("celsius").value;
  if (temp > 125) {
    document.getElementById("result").innerHTML = "Are you alive?";
  } else {
    if (temp >= 15) {
      document.getElementById("result").innerHTML = "It's hot outside! (:"; 
    } else {
      document.getElementById("result").innerHTML = "It's cold outside! ):";
    }
  }
  
}