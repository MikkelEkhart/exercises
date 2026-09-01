const theme = document.querySelector("#theme-select");
const body = document.querySelector("body");

theme.addEventListener("click", changeTheme);

function changeTheme() {
  body.dataset.theme = theme.value;
}
