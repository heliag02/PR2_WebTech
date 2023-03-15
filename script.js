var partTypes = ['body', 'header', 'footer', 'aside', 'article', 'section'];
var partSelect = document.getElementById("part-select");

partTypes.forEach(part => {
    let elements = document.getElementsByTagName(part);
    let teller = 0;
    let meerdere = (elements.length > 1);

    Array.from(elements).forEach(element => {
        let option = document.createElement('option');
        let tag = element.tagName.toLowerCase();
        option.setAttribute('value', tag+teller); //ook teller onthouden
        
        //let textElement = `${part} ${element.id ? `#${element.id}` : ''}`; //if the element has an id, add to textnode
        //option.textContent = textElement;
        if (meerdere){
            option.append(tag.charAt(0).toUpperCase() + tag.slice(1) + " " + (teller+1));
            //x = tag+teller
            //option.append(x.slice(-1));
            teller++;
        }
        else{
            option.append(tag.charAt(0).toUpperCase() + tag.slice(1));
        }
        partSelect.appendChild(option);
    })
});

var fontsizeSelect = document.getElementById("fontsize-select");
var colorSelect = document.getElementById("color-select");
fontsizeSelect.addEventListener("change", changeFontsize, false);
colorSelect.addEventListener("change", changeColor, false);

function changeFontsize(){
    var selected = partSelect.value;
    //console.log(selected);
    var tag = selected.slice(0,-1);
    var number = selected.slice(-1);
    //console.log(tag);
    //console.log(number);
    var fontsize = fontsizeSelect.value;
    var item = document.getElementsByTagName(tag)[number];
    //console.log(item)
    //if (tag=="body"){
    //    for (let child in tag.children){
    //        child.style.fontSize = fontsize;
    //    }
    //}
    item.style.fontSize = fontsize;
    //item.style.setProperty(fontSize, fontsize, "important");
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
    
function goUp(){
    setTimeout(function() {document.location.href = "#header"},500);
}

function changeButton(e){
    var button = e.target;
    button.style.backgroundColor= "red";
    button.style.fontFamily= "Impact,Charcoal,sans-serif";
    button.style.fontSize = "30px";
    button.style.borderColor ="black";
    button.style.borderWidth = "5px";
}

var defaultButton = document.getElementById("menu__default-button");
defaultButton.addEventListener("click", function(){document.location.reload();}, false);


