let button = document.getElementsByClassName("button");
console.log(button[0]);
const search = document.getElementsByClassName("search");
console.log(search[0]);
let input = document.getElementsByClassName("input");

button[0].addEventListener("click", getId);

var count = 0;

function getId(e) {
  console.log(e);
  if (count == 1) {
    count = 0;
    remove_div();
  }
  let currentbtn = e.currentTarget;
  console.log(currentbtn);
  const currentinput = currentbtn.previousElementSibling;
  console.log(currentinput);
  console.log(currentinput.value);
  const url = `https://api.github.com/users/${currentinput.value}`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const result = [];
      var keys = Object.keys(data);
      keys.forEach(function (key) {
        result.push(data[key]);
      });
      if (result[5] == undefined) {
        alert("enter valid username");
        return;
      }
      count++;
      const profile = document.createElement("div");
      profile.classList.add("profile");
      console.log(result[24]);

      profile.innerHTML =
        `
                <h2 class="item"><img src= ` +
        result[3] +
        `width="100px" height="100px " ></h2>
                <p class="item2"> ` +
        result[24] +
        `</p>
                <p class="item">USERNAME : ` +
        result[0] +
        `</p>
                <p class="item">FOLLOWING : ` +
        result[29] +
        `</p>
                <p class="item">FOLLOWERS : ` +
        result[28] +
        `</p>
                <p class="item ">GISTS : ` +
        result[27] +
        `</p>
                <p class="item">PROJECTS : ` +
        result[26] +
        `</p>`;
      search[0].appendChild(profile);
    });
}

function remove_div() {
  const id = document.getElementsByClassName("profile");
  id[0].remove();
}
