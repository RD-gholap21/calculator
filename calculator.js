var field = document.getElementsByClassName('id')[0];



function number(Number) {

    if (field.value == '0') {
        field.value = Number;
    } else {
        field.value += Number;
    }
}

function allclear() {
    // alert('hii');
    field.value = '0';
}

function Erase() {

    var del = field.value;
    var z = 'rohitgholap';
    if (del.length > 1) {
        field.value = del.slice(0, -1);
    } else {
        field.value = '0'
    }
}


function sign() {
    solve = field.value;
    if (solve >= '0') {

        field.value = eval(solve)
    } else {
        field.value = "0"
    }
}

function History() {
    var A=document.getElementById("history")
    if(A.style.display==="none"){
        A.style.display="block"
    }
    var clear = document.getElementById('history');
    clear.innerHTML += field.value + '<br>' + solve + '=' + '<br>';
}