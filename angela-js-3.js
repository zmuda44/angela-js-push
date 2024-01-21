/* document.getElementById("loveGen-button").onclick = function () {
  var n = Math.floor(Math.random()*6) + 1;
  console.log(n);
} */


/* Important note i just learned. you need to declare the variable of the button 
when the document loads so it has to be outside of the function. if you put it
inside the function that will make it so it's only looking for that button 
when it's clicked but since you haven't clicked it, it doesn't know which button
it is.  same with the 2 input fields. they need to be inside the function because
if they are defined at load time they are always going to be empty */
loveSubmitBtn = document.getElementById("loveGen-button")
var name1Output = document.querySelectorAll("#output-names p")[0]
var name2Output = document.querySelectorAll("#output-names p")[1]



loveSubmitBtn.addEventListener("click", function () {
  var name1Input = document.getElementById("name1-input").value
  var name2Input = document.getElementById("name2-input").value
  name1Output.innerHTML = name1Input
  name2Output.innerHTML = name2Input
  var randomScore = Math.floor(Math.random()*99 +1)
  document.getElementById("output-score").innerHTML = randomScore +"%"
  if (randomScore <= 30) {
    document.getElementById("text-output").innerHTML = "You 2 go together like earl and wooder"
  }
  else if (randomScore > 30 && randomScore <= 70) {
    document.getElementById("text-output").innerHTML = "You 2 are alright"
  }

  else {
    document.getElementById("text-output").innerHTML = "You love each other like Kanye"
  }

  console.log(randomScore);
})



