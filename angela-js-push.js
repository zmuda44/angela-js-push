/* var tweet = prompt("enter your tweet here");

var tweetLength = tweet.length;
/* console.log(tweet.length) does not work */

/* console.log(tweetLength); */

/* this was the way that angela was writing and
then doing the string  */

var submitButton = document.querySelector(".tweet-submit");

/* for some reason i couldn't get just console.log(tweet.length) tweet.value.length also didn't work */
submitButton.addEventListener("click", function () {
  var tweet = document.querySelector("#tweet");
  var tweetInput = tweet.value;
  var tweetLength = tweetInput.length;
  var tweetOutput = document.querySelector(".output");
  tweetOutput.innerHTML =
    "you have entered " +
    tweetLength +
    " characters, and you have " +
    (140 - tweetLength) +
    " left";
});
/* 
Angela's 2nd javascript


*/
