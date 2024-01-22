/* 
tried this to see if i could put the results into a textbox 
but i can't. chatgpt said that i need to do append because
it's overwriting each time a new number comes along and
99 is the last number written
for (i=0; i < 100; i++) {
  i++
  document.getElementById("output").innerHTML = i;
  console.log(i)
}
console.log(i)   also matters where you put your console.log. 
100 is the final value of i in this.
 */

/* went off track a little but this worked.  this provides
a an arry pushed  

var output = [];
var count = 1;

function callFizz () {
  fizzBuzz()
  fizzBuzz()
  fizzBuzz()
  fizzBuzz()
  fizzBuzz()
}

function fizzBuzz() {
  output.push(count);
  count++;

  console.log(output)
}

callFizz() */

/* 
this code did not work. it returned 101 but not count
var output = [];
var count = 1;

function fizzBuzz () {
  for (i = 1; i < 101; i++)
  output.push[i];
  console.log(i);
}

fizzBuzz() */

/* this angela's fizzbuzz.  she doesn't do a for loop or
anytyhing, she keeps calling the function in the console. 
i was wrong, she skips a lesson and comes back to it. I am going to comment out this
code and write it again angela's way.  she uses a while not for*/
/* var output = [];
count = 1;

for (i=0; i < 100; i++) {
  
  if (count % 3 === 0 && count % 5 === 0) {
    output.push("fizzbuzz")
  }  
  else if (count % 3 === 0) {
    output.push("fizz")
  } 
  else if (count % 5 === 0) {
    output.push("buzz")
  }
  
  
  else {
    output.push(count);
  }

  
  count++;
  console.log(output);
} */

/* while and for operate exactly the same but there is no i=0 etc. you type
the whole equation exactly the same thoguh */

/* var output = [];
count = 2;

for (i=0; i < 100; i++) {
  
  if (count % 3 === 0 && count % 5 === 0) {
    output.push("fizzbuzz")
  }  
  else if (count % 3 === 0) {
    output.push("fizz")
  } 
  else if (count % 5 === 0) {
    output.push("buzz")
  }
  
  
  else {
    output.push(count);
  }

  
  count++; 
  console.log(output);
} */

/* the code above was still slightly different.  the codes above all added another array one hundred times */

var output = []
var count = 1

function fizzBuzz() {
while (count <= 100) {
  if (count % 3 === 0 && count % 5 === 0) {
  output.push("fizzbuzz")
}  
else if (count % 3 === 0) {
  output.push("fizz")
} 
else if (count % 5 === 0) {
  output.push("buzz")
}


else {
  output.push(count);
}


count++; 
}
console.log(output)
}

fizzBuzz()


  




