/* 
this code didn't work and i dont know why
var guestList = ["Angela", "Jack", "Pam", "James", "Lara", "Jason"];
var guestName = document.getElementById("guest-name").value;

document.getElementById("submit-guest-btn").addEventListener("click", function () {
  console.log("something");  
  guestList.includes(guestName);
})  */


/* 
important note. none of this stuff works
it has something to do with what loads when 
the webpage loads and when you enter into a prompt
you were able to run similar clode to this 
in a snippet and it worked. at least this did
var guestList = ["Angela", "Jack", "Pam", "James", "Lara", "Jason"];
var guestName = prompt("what is your name?")

guestList.includes(guestName);

prompt("enter your name here");
if (guestList.includes(prompt)) {
  console.log("included in guestlist")
}
else {
  console.log("not included in guestlist")
}; */

/* this code does work
document.querySelector(".fizzbuzz").onclick = function () {
for (i=1; i<100; i++) {
document.getElementById("fizzbuzz-output").innerHTML = i
/* when you tried this, it only gave the number
99 in the textbox document.getElementById("fizzbuzz-output").innerHTML = i 
console.log(i); }} */


