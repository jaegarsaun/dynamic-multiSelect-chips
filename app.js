// Variables
const hotBar = document.getElementById("hotBar");
const chipTemp = document.getElementById("chipTemp");
const btn = document.getElementsByClassName("btn")[0];


//Add "chip" template
function addTemp(obj) {
    let index = Math.floor(Math.random() * 101);
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
        const randomColor = ["#9ADCFF", "#FFB2A6", "#bbccf9", "#80e7e4", "#FD8A8A", "#B1B2FF", "#FFF89A", "#FFF89A"];
        randomIndex = Math.floor(Math.random() * randomColor.length);

        //Set the background color to the random color. You can delete this and just set the background color in the CSS.
        let chipBackground = chipTempCopy.children[0];
        chipBackground.style.backgroundColor = randomColor[randomIndex];

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



