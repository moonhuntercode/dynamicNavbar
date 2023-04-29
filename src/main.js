// set the first nav item as active
let dis = document.querySelectorAll(".list-wrap li");
let button = document.getElementsByTagName("button");
console.log(button);
let wave = document.getElementById("wave");
let pagina = document.querySelector(".page");
let images = document.querySelector("img");
console.log(images);
pagina.innerHTML = "casita time";
align();

console.log(pagina);
console.log(dis[0]);
console.log(wave);
dis[0].addEventListener("mousedown", () => {
  pagina.innerHTML = "casita time";
  console.log(dis[1]);
  align();
});
dis[1].addEventListener("mousedown", () => {
  pagina.innerHTML = "person time";
  moveToPersonIcon();
});
dis[2].addEventListener("mousedown", () => {
  pagina.innerHTML = "beer time";

  moveToBeerIcon();
});
dis[3].addEventListener("mousedown", () => {
  pagina.innerHTML = "shopping time";

  moveToShopping();
});
dis[4].addEventListener("mousedown", () => {
  pagina.innerHTML = "settings time";

  moveToSetting();
});
// align the wave
function align() {
  wave.style.left = "-5px";
}
function moveToPersonIcon() {
  // let element = wave.style.left;
  // element.value * "70px";
  wave.style.left = "90px";
}
function moveToBeerIcon() {
  wave.style.left = "170px";
}
function moveToShopping() {
  wave.style.left = "250px";
}
function moveToSetting() {
  wave.style.left = "340px";
}
// // align the wave on click
// document.querySelector(".list-wrap li").click(function () {
//   dis = document.querySelector(this);

//   align(dis);
// });

// document.querySelector("body").addEventListener("keydown", function (e) {
//   var code = e.keyCode || e.which;

//   if (code == 9) {
//     if (dis.is(":last-child")) {
//       document.querySelector(".list-wrap li:nth-child(1)").trigger("click");
//     } else {
//       dis.nextElementSibling.trigger("click");
//     }
//   }
// });

// document.body.keydown(function (e) {
//   if (e.keyCode == 37) {
//     // left
//     document.querySelector("#showroom").animate({
//       left: "-=980",
//     });
//   } else if (e.keyCode == 39) {
//     // right
//     document.querySelector("#showroom").animate({
//       left: "+=980",
//     });
//   }
// });

// function align(dis) {
//   // get index of item
//   var index = dis.index() + 1;

//   // add active class to the new item
//   document.querySelector(".list-wrap li").classList.remove("active");
//   dis.delay(100).queue(function () {
//     dis.classList.add("active").dequeue();
//   });

//   // move the wave
//   var left = index * 80 - 98;

//   document.querySelector("#wave").css("left", left);

//   // ▼ this is not necessary for the navigation ▼

//   // set the background color
//   var color = dis.data("color");
//   document.querySelector(".phone").css("background", color);

//   // set the text
//   document.querySelector(".page").text(dis.attr("title"));
// }
