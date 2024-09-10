let buttons = document.querySelectorAll(".button");
let body = document.querySelector("body");

buttons.forEach((button) => {
  console.log(button);
  button.addEventListener("click", (e) => {
    console.log(e);
    console.log(e.target);
    if (e.target.id === "grey") {
      body.style.backgroundColor = "grey";
      body.style.color = "white";
    }
    if (e.target.id === "white") {
      body.style.backgroundColor = "white";
      body.style.color = "black";
    }
    if (e.target.id === "blue") {
      body.style.backgroundColor = "blue";
      body.style.color = "white";
    }
    if (e.target.id === "yellow") {
      body.style.backgroundColor = "yellow";
      body.style.color = "black";
    }
    if (e.target.id === "purple") {
      body.style.backgroundColor = "purple";
      body.style.color = "white";
    }
    if (e.target.id === "black") {
      body.style.backgroundColor = "#212121";
      body.style.color = "white";
    }
    if (e.target.id === "aqua") {
      body.style.backgroundColor = "aqua";
      body.style.color = "black";
    }
    if (e.target.id === "green") {
      body.style.backgroundColor = "green";
      body.style.color = "white";
    }
    if (e.target.id === "skyblue") {
      body.style.backgroundColor = "skyblue";
      body.style.color = "black";
    }
  });
});
