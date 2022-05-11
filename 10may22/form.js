const tweet = document.querySelector("#formx");
tweet.addEventListener("submit", function (e) {
    console.log("submit!");
    // const usernameinput = document.querySelectorAll('input')[0];
    // const tweetinput = document.querySelectorAll('input')[1];
    // console.log(usernameinput.value,tweetinput.value )
    const username = tweet.elements.username.value;
    const tweet = tweet.elements.tweet.value;
    const newTweet = document.createElement('li');
    const xTag = document.createElement('b')
    e.preventDefault();
    
})