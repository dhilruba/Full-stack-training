const btn = document.querySelector('#v2');
btn.onclick = function () {
    console.log("you clicked me");

    console.log("i hope it worked");
}
function scream() {
    console.log('AHHHHHH');
    console.log('STOP TOUCHING ME!!!!');
    
}
 btn.onmouseenter = scream;

 const btl = document.querySelector('#v3');
 btl.addEventListener('click',scream()
)
const bt2 = document.querySelector('#v4');
function twist() {
    console.log("ghg")
    
}
function shout() {
    console.log("bhgff")
    
}
bt2.addEventListener('click', twist);
bt2.addEventListener('click', shout);