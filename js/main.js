
let sectionTwo = document.querySelector(".sectionTwo");
let bc = document.querySelector(".bc");
let p = document.createElement("p");
p.textContent = "enter your link";
let input = document.querySelector(".input");
let form = document.querySelector(".form");
let button = document.querySelector(".button");
button.addEventListener("click", function() {
    if (input.value === "") {
        form.appendChild(p);
        p.style.color = "red";
    } else {
        p.style.display = "none";
    }
    let url = input.value;
    if (isValidURL(url)) {
        let removeButton = document.createElement("button");
        bc.appendChild(removeButton);
        removeButton.textContent = "remove";
        removeButton.style.cssText = "display:block; color: white; background-color: hsl(0, 87%, 67%)";
        removeButton.onclick = function(){
        div.style.display = "none";
        removeButton.style.display = "none";
        input.value = "";
     }
        let mySpan = document.createElement("span");
        mySpan.textContent = url;
        mySpan.style.cssText = "margin-left: 10px; font-size: 12px";
        let myButton = document.createElement("button");
        myButton.textContent = "copy";
        myButton.style.cssText = "margin-right: 10px; width: 70px; color: white; background-color: hsl(180, 66%, 49%)";
        let div= document.createElement("div");
        div.style.cssText = "display: flex; align-items: center; justify-content: space-between; background-color: white; width: 100%; height:60px; margin-top: 10px; border-raidus: 5px";
        div.appendChild(mySpan);
        div.appendChild(myButton);
        sectionTwo.appendChild(div);
        myButton.addEventListener("click", function() {
            let clonedDiv = div.cloneNode(true);
            let clonedButton = clonedDiv.querySelector("button");
            clonedButton.textContent = "copied!";
            clonedButton.style.cssText = " margin-right: 10px; width: 70px; color: white; background-color: hsl(257, 27%, 26%)";
            div.after(clonedDiv);
            let removeCopiedButton = document.createElement("button");
            bc.appendChild(removeCopiedButton);
            removeCopiedButton.textContent = "remove copied!";
            removeCopiedButton.style.cssText = "display:block; color: white; background-color: hsl(0, 87%, 67%)";
            removeCopiedButton.onclick = function(){
                clonedDiv.style.display = "none";
                removeCopiedButton.style.display = "none";
            }
        });
    }
});
function isValidURL(url) {
    let regex = /(http(s)?:\/\/)?\w+.\w+.\w+(\/)?(.\w+)?(\/)?(\w+-\w+)?/;
    return regex.test(url);
}



