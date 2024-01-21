var dthuBtn = document.getElementById("dthu-btn");
dthuBtn.onclick = () => {
  const dogAge = document.getElementById("dthu-input").value;
  var humanAge = ((dogAge - 2)*4) + 21;
  var dthuOutput = document.querySelector(".dog-to-human p");
  dthuOutput.innerHTML = humanAge;
}

/* did this to see how returns go and how to put functions
inside of functions */

/*  function getMilk (bottles) {
  return (actuallyGetMilk(bottles));
}  */

function actuallyGetMilk (money) {
console.log("go to store")
console.log("pick up milk from refrig")
console.log("take milk up to counter")
bottles = Math.floor(money / 3.5)
console.log("buy " + bottles + " bottle of milk")
}


/* angela bmi */
function bmi (weight, height) {
  var bmi = weight / Math.sqrt(height)
  console.log(bmi)
}

bmi(1, 240);


