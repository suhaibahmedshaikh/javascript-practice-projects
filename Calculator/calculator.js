window.onload = () => {
  const number = document.querySelectorAll(".numbers");
  const input = document.querySelector(".screen");
  const equals = document.querySelector("#equals");
  const clear = document.querySelector("#clear");

  number.forEach((button) => {
    button.addEventListener("click", (e) => {
      input.value += e.target.innerHTML;
    });
  });

  equals.addEventListener("click", (e) => {
    if (!input.value) {
      input.value = "Enter value";
    } else {
      input.value = eval(input.value);
    }
  });

  clear.addEventListener("click", () => {
    input.value = "";
  });
};
