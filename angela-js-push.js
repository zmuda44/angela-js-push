/* var tweet = prompt("enter your tweet here"); */

/* Angela did this as a variable at first. at first i didnt think it the code below would work for some reason but it does
not sure why it doesn't work in the below example. var tweetLength = tweet.length; */
/* console.log(tweet.length); */

/* console.log(tweetLength); */

/* alert("you have written " + tweet.length + " characters, and you have " + (140 - tweet.length) + " characters left"); */

/* this was the way that angela was writing and
then doing the string  */

var submitButton = document.querySelector(".tweet-submit");

/* for some reason i couldn't get just console.log(tweet.length) tweet.value.length also didn't work */
submitButton.addEventListener("click", function () {
  var tweet = document.querySelector("#tweet");
  var tweetInput = tweet.value;
  var tweetLength = tweetInput.length;
  var tweetOutput = document.querySelector(".output");
  tweetOutput.innerHTML = "you have entered " + tweetLength + " characters, and you have " + (140 - tweetLength) + " left";
});
/* 
Angela's 2nd javascript


*/

/* var secondTweet = prompt("enter your tweet");
console.log(secondTweet.slice(0, 3)); */

/* Angelas 3rd javascript */

var thirdTweet = prompt("enter your name");
var firstChar = thirdTweet.slice(0,1);
var firstCharUpper = firstChar.toUpperCase;
console.log(firstCharUpper);




