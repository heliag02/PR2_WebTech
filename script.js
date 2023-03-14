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

    




