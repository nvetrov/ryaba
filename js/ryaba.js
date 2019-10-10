const dataURL = "https://api.myjson.com/bins/jcmhn";
const arr = [
    "var1",
    "var2",
    "var3",
    "var4",
    "var5",
    "var6",
    "speach",
];

$(document).ready(init);

function init() {
    $("#button-fetch").click(handleButton);
    document.getElementById('ref').style = "Color:#ffd701";

}


// взять данные по dataUrl, вытащить их и передать в handleData
function handleButton(event) {
    event.preventDefault();
    $.getJSON(dataURL, handleData);
    $("form").hide();

}

function handleData(data) {

    let values = gethtmlvalues();
    let output = "";

    data["text"].forEach(function (string) {
        for (let v in values) string = string.replace("{" + v + "}", values[v]);

        output = output + string + "<BR>";
    });
    return $("#result").html(output)
}


function gethtmlvalues() {
    let obj = {};

    arr.forEach(
        function (field) {
            obj[field] = $("input[name=" + field + "]")[0].value
        }
    );

    return obj;
}


document.getElementById('ref').onclick = function reload() {

    return location.reload(true);
};


