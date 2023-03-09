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

    




