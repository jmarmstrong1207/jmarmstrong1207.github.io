function alertUser() {
    document.getElementById("ta").style.fontSize = "24pt"
}

function radio() {

    if (document.getElementById("FancyShmancy").checked == true) {
        document.getElementById("ta").style.fontWeight = "bold"
        document.getElementById("ta").style.color = "blue"
        document.getElementById("ta").style.textDecoration = "underline"
    }
    else {
        document.getElementById("ta").style.fontWeight = "normal"
    }
}

function moo() {
    document.getElementById("ta").value = document.getElementById("ta").value.toUpperCase();
    var arr = document.getElementById("ta").value.split(".");

    for (i = 0; i < arr.length; i++) {
        arr[i] = arr[i].concat("-Moo.");
    }
    console.log(arr);

    document.getElementById("ta").value = arr.join("");
}