let screen = document.querySelector("#input");
let buttons = document.querySelectorAll("button");
let specialChar = [
  "%",
  "AC",
  "DEL",
  "sin",
  "cos",
  "tan",
  "*",
  "-",
  "+",
  "/",
  "x^y",
  "x^2",
  "sqrt",
  "x!",
];
output = "";
const factorial = (n) => {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
};
const calculate = (btnvalue) => {
  //   console.log(btnvalue);
  if (btnvalue === "=" && output !== "") {
    output = eval(output.replace("%", "/100"));
  } else if (btnvalue === "AC") {
    output = "";
  } else if (btnvalue == "DEL") {
    output = output.toString().slice(0, -1);
  } else if (btnvalue === "x^2") {
    output = Math.pow(eval(output), 2);
  } else if (btnvalue === "x^y" && output !== "") {
    output += "**";
  } else if (btnvalue === "cos") {
    radian = eval(output);
    radian = (radian * Math.PI) / 180;
    output = Math.cos(radian);
  } else if (btnvalue === "sin") {
    radian = eval(output);
    radian = (radian * Math.PI) / 180;
    output = Math.sin(radian);
  } else if (btnvalue === "tan") {
    radian = eval(output);
    radian = (radian * Math.PI) / 180;
    output = Math.tan(radian);
  } else if (btnvalue === "X!" && output !== "") {
    output = factorial(eval(output));
  } else if (btnvalue === "pi") {
    output = Math.PI;
  } else if (btnvalue === "log") {
    log = eval(output);
    output = Math.log(log);
  } else {
    if (output === "" && specialChar.includes(btnvalue)) {
      return;
    } else {
      output += btnvalue;
    }
  }
  screen.value = output;
};

buttons.forEach((button) => {
  button.addEventListener("click", (e) => calculate(e.target.dataset.value));
});
