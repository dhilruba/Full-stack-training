const form = document.querySelector("#shelterForm");
const input = document.querySelector("#catname");
const list = document.querySelector("#cats");
// form.addEventListener("submit", function (e) {
//     console.log("submitted!!");
//     console.log("submitted!!");
    
// })
form.addEventListener("submit", function (e) {
    e.preventDefault();
    console.log("submitted the form");
    const catName = input.value;
    const newLI = document.createElement("LI");
    newLI.innerText = catName; 
    console.log(newLI);
    list.append(newLI);
    input.value = "";
    
    
})