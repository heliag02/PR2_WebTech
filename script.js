var partTypes = ['body', 'header', 'footer', 'aside', 'article', 'section'];
var partSelect = document.getElementById("part-select");

for(let part of partTypes) {
    if (part == "header"){ //there is nothing to change here
        continue;
    }
    let elements = document.getElementsByTagName(part);
    let teller = 0;
    let meerdere = (elements.length > 1);

    for (let element of elements){
        let option = document.createElement('option');
        let tag = element.tagName.toLowerCase();
        option.setAttribute('value', tag+teller);
        if (meerdere){
            option.append(tag.charAt(0).toUpperCase() + tag.slice(1) + " " + (teller+1));
            teller++;
        }
        else{
            option.append(tag.charAt(0).toUpperCase() + tag.slice(1));
        }
        partSelect.appendChild(option);
    }
};

var defaultButton = document.getElementById("menu__default-button");
defaultButton.addEventListener("click", function(){document.location.reload();}, false);

var fontsizeSelect = document.getElementById("fontsize-select");
var colorSelect = document.getElementById("color-select");
fontsizeSelect.addEventListener("change", changeFontsize, false);
colorSelect.addEventListener("change", changeColor, false);

function changeFontsize(){
    var selected = partSelect.value;
    var tag = selected.slice(0,-1);
    var number = selected.slice(-1);
    var fontsize = fontsizeSelect.value;
    var item = document.getElementsByTagName(tag)[number];
    item.style.fontSize = fontsize;
    };

function changeColor(){
    var selected = partSelect.value;
    var tag = selected.slice(0,-1);
    var number = selected.slice(-1);
    var color = colorSelect.value;
    var item = document.getElementsByTagName(tag)[number];
    item.style.color = color;
}

var topButton = document.getElementById("footer-div__button");
var topDiv = document.getElementById("footer-div");

topButton.addEventListener("click", goUp, false);
topDiv.addEventListener("click", changeButton, true);
    
function goUp(e){
    var button = e.target;
    setTimeout(function() {
        document.location.href = "#header";
        button.style = null;
    },600);
}

function changeButton(e){
    var button = e.target;
    button.style.backgroundColor= "red";
    button.style.fontFamily= "Impact,Charcoal,sans-serif";
    button.style.fontSize = "30px";
    button.style.borderColor ="black";
    button.style.borderWidth = "5px";
    button.style.color = "black";
}



