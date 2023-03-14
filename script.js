var partTypes = ['body', 'header', 'footer', 'aside', 'article', 'section'];
var partSelect = document.getElementById("part-select");

partTypes.forEach(part => {
    let elements = document.getElementsByTagName(part);
    let teller = 0;
    if (elements.length > 1){
        teller = 1;
    }
    Array.from(elements).forEach(element => {
        let option = document.createElement('option');
        let tag = element.tagName.toLowerCase();
        option.setAttribute('value', tag); //ook teller onthouden
        
        let textElement = `${part} ${element.id ? `#${element.id}` : ''}`; //if the element has an id, add to textnode
        //option.textContent = textElement;
        if (teller != 0){
            option.append(tag.charAt(0).toUpperCase() + tag.slice(1) + " " + teller);
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
    var fontsize = fontsizeSelect.value;
    var items = document.getElementsByTagName(selected);
    for(var item of items)
    {
        item.style.fontSize = fontsize;
    }
    };

function changeColor(){
    var selected = partSelect.value;
    var color = colorSelect.value;
    var items = document.getElementsByTagName(selected);
    for(var item of items)
    {
        item.style.color = color;
    }
}

    




