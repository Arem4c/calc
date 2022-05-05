var op1 = "";
var op2 = "";
var action = "";
var opEnd = false;
var result = document.getElementById("result");
var m = "0";
var mem = document.getElementById("mem");

function digit(d) {
    if (action == "") {
        if (opEnd) {
            if (op1.indexOf(".") < 0 || d != ".")
                op1 = d;
        } else
        if (op1.indexOf(".") < 0 || d != ".")
            op1 = op1 + d;
    } else {
        if (opEnd) {
            if (op2.indexOf(".") < 0 || d != ".")
                op2 = d;
        } else
        if (op2.indexOf(".") < 0 || d != ".")
            op2 = op2 + d;
    }
}

function setAction(a) {
    if (op1 == "") {

    } else {
        if (op2 == "") {
            action = a;
        }
    }

}

function show() {
    var r = "";
    if (op1 == "") {
        r = "0"
    } else {
        r = op1;
        if (action == "") {

        } else {
            r = r + action;
            if (op2 == "") {

            } else {
                r = r + op2;
            }
        }
    }
    result.innerHTML = r;
    if (m == "0") {
        mem.classList.add("hidden");
    } else {
        mem.classList.remove("hidden");
    }
}

function clear() {
    op1 = "";
    op2 = "";
    action = "";
    opEnd = false;
}

function calc() {
    if (op1 != "" && action != "" && op2 != "") {
        var r = "";
        switch (action) {
            case "+":
                r = parseFloat(op1) + parseFloat(op2);
                break;
            case "-":
                r = parseFloat(op1) - parseFloat(op2);
                break;
            case "&times;":
                r = parseFloat(op1) * parseFloat(op2);
                break;
            case "/":
                r = parseFloat(op1) / parseFloat(op2);
                break;
            case ".":
                r = parseFloat(op1) + parseFloat(op2);
                break;

        }
        clear();
        op1 = r;
    }
}

function inlineCalc(a) {
    if (op2 != "") {
        op2 = applyOp(a, op2);
    } else if (op1 != "") {
        op1 = applyOp(a, op1);
    }
    opEnd = true;
}

function applyOp(a, o) {
    var r = o;
    switch (a) {
        case "%":
            r = o / 100;
            break;
        case "&Sqrt;":
            r = Math.sqrt(o);
            break;
        case "+/-":
            r = -o;
            break;
        case "00➙0":
            r = o / 10;
            break;
    }
    return r;
}

function addMem(a) {
    var r = "";
    if (op2 != "") {
        calc();
    }
    r = op1;
    switch (a) {
        case "+":
            m = parseFloat(m) + parseFloat(r);
            break;
        case "-":
            m = parseFloat(m) - parseFloat(r);
            break;
    }
}


function fromMem() {
    if (op2 != "") {
        op2 = m;
    } else if (action != "") {
        op2 = m;
    } else {
        op1 = m;
    }
}


function clearMem() {
    m = "0";
}

function click(btn) {
    switch (btn.id) {
        case "btnEquals":
            calc();
            break;
        case "btnTochka":
            digit(".");
            break;
        case "btn0":
            digit("0");
            break;
        case "btn1":
            digit("1");

            break;
        case "btn2":
            digit("2");

            break;
        case "btn3":
            digit("3");

            break;
        case "btn4":
            digit("4");
            break;
        case "btn5":
            digit("5");
            break;
        case "btn6":
            digit("6");
            break;
        case "btn7":
            digit("7");
            break;
        case "btn8":
            digit("8");
            break;
        case "btn9":
            digit("9");
            break;
        case "btn00":
            digit("00");
            break;
        case "btnSumm": // +
            setAction("+");
            break;
        case "btnMinus": // -
            setAction("-");
            break;
        case "btnDivide": // /
            setAction("/");
            break;
        case "btnPercent": // %
            inlineCalc("%");
            break;
        case "btnMult": // *
            setAction("&times;");
            break;
        case "btnArrow": // корень
            inlineCalc("&Sqrt;");
            break;
        case "btnPlusMinus": // xz
            inlineCalc("+/-");
            break;
        case "btnZero": // 00➙0
            inlineCalc("00➙0");
            break;
        case "btnMMunus": // M-
            addMem("-");
            break;
        case "btnMPlus": // M+
            addMem("+");
            break;
        case "btnOn":
        case "btnCe":
            clear();
            break;
        case "btnMr":
            fromMem();
            break;
        case "btnMC":
            clearMem();
            break;
    }
    show();
}

document.querySelectorAll(".calc button").forEach(function(btn) {
    btn.addEventListener("click", function(event) {
        // console.log(event.target.id);
        click(event.target);
    });
});


document.addEventListener("keypress", (e) => {
    console.log(e.key);
    switch (e.key) {
        case ".":
        case "0":
        case "1":
        case "2":
        case "3":
        case "4":
        case "5":
        case "6":
        case "7":
        case "8":
        case "9":
            digit(e.key);
            break;
        case "+":
            setAction("+");
            break;
        case "-":
            setAction("-");
            break;
        case "*":
            setAction("&times;");
            break;
        case "/":
            setAction("/");
            break;
        case "%":
            inlineCalc("%");
            break;
        case "Enter":
            calc();
    }
    show();
});

show();