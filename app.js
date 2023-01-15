// Variables
const hotBar = document.getElementById("hotBar");
const chipTemp = document.getElementById("chipTemp");
const btn = document.getElementsByClassName("btn")[0];

//Chip colors
const randomColor = ["red", "green", "blue", "yellow", "purple", "pink", "orange"];


//Add "chip" template
function addTemp(obj) {
    let index = Math.floor(Math.random() * 99242);
    //Check to see if the button has the "chipActive" class

    if (!obj.classList.contains("chipActive")) {

        //Create the template clone & create variable for the text
        const chipTempCopy = chipTemp.content.cloneNode(true);
        let chipText = chipTempCopy.children[0].children[0];
        let deleteBtn = chipTempCopy.children[0].children[1];
        let chip = chipTempCopy.children[0];

        //Set the text to the button text
        chipText.innerHTML = obj.innerText;

        //Generate a random color. You can delete this and just set the background color in the CSS.
        randomIndex = Math.floor(Math.random() * randomColor.length);
        let chipBackground = chipTempCopy.children[0];

        //Set the background color to the random color. You can delete this and just set the background color in the CSS.
        switch (randomColor[randomIndex]) {
            case "red":
                chipText.style.color = "red";
                chipBackground.style.backgroundColor = "#ffdede";
                chipBackground.style.border = "1px solid red";
                break;
            case "green":
                chipText.style.color = "#00ff00";
                chipBackground.style.backgroundColor = "#deffde";
                chipBackground.style.border = "1px solid #00ff3786";
                break;
            case "blue":
                chipText.style.color = "#00b7ff";
                chipBackground.style.backgroundColor = "#c3f6ff";
                chipBackground.style.border = "1px solid #00ccff86";
                break;
            case "yellow":
                chipText.style.color = "#ffd000";
                chipBackground.style.backgroundColor = "#fffec3";
                chipBackground.style.border = "1px solid #ffe600";
                break;
            case "purple":
                chipText.style.color = "#a200ff";
                chipBackground.style.backgroundColor = "#dfc3ff";
                chipBackground.style.border = "1px solid #8400ff86";
                break;  
            case "pink":
                chipText.style.color = "#ff00ea";
                chipBackground.style.backgroundColor = "#ffc3fc";
                chipBackground.style.border = "1px solid #ff00f286";
                break;    
            case "orange":
                chipText.style.color = "#ff7b00";
                chipBackground.style.backgroundColor = "#ffd6c3";
                chipBackground.style.border = "1px solid #ff990086";
                break;              
        }

        // chipBackground.style.backgroundColor = randomColor[randomIndex];

        //Append the clone to the "hotbar"
        hotBar.appendChild(chipTempCopy);
        deleteBtn.setAttribute("value", index)
        chip.setAttribute("value", index);

        //Add the "chipActive" class to the button
        obj.classList.add("chipActive");
        obj.setAttribute("value", index);
    } else {

        //Remove chip template by clicking button again
        var nodes = Array.prototype.slice.call(document.getElementById('hotBar').children);
        obj.classList.remove("chipActive");

        desiredChild = document.querySelector(`div[value="${obj.getAttribute("value")}"]`)

        hotBar.removeChild(hotBar.children[nodes.indexOf(desiredChild)]);
        obj.removeAttribute("value");

    }
};

//Remove "chip" template by clicking "x" on chip
function removeTemp(Robj) {
    //Get the value attribute of the chip
    parentValue = Robj.parentElement.getAttribute("value");
    //Get the button that has the same value attribute as the chip
    let linkedBtn = document.querySelector(`button[value="${parentValue}"]`);
    //Delete the chip
    linkedBtn.classList.remove("chipActive");
    linkedBtn.removeAttribute("value");
    Robj.parentElement.remove();
}



