var partTypes = ['body', 'header', 'footer', 'aside', 'article', 'section'];

partTypes.forEach(part => {
    var elements = document.getElementsByTagName(part);
    Array.from(elements).forEach(element => {
        var option = document.createElement('option');
        option.setAttribute('value', element.tagName.toLowerCase());
        var textElement = `${part} ${element.id ? `#${element.id}` : ''}`; //if the element has an id, add to textnode
        option.textContent = textElement;
        document.getElementById('part-select').appendChild(option);
    })
});


var partSelect = document.getElementById("part-select");
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

    




