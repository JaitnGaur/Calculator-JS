let screen = document.querySelector("#display-screen");
function display(val) {
    screen.value += val;
}

function clear_disp() {
    screen.value = "";
}
function Sevaluate() {
    let disp_input = screen.value;
    let Ans = eval(disp_input);
    screen.value = Ans;
}

function del() {
    let Sval = screen.value.slice(0, -1);
    screen.value = Sval;
}
