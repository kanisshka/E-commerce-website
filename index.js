const bar = document.getElementById("bar");
const close = document.getElementById("close");
const nav = document.getElementById("navbar");
// var removecartitem = document.getElementsByClassName("productremove");
if (bar) {
  bar.addEventListener("click", () => {
    nav.classList.add("active");
  });
}
if (close) {
  close.addEventListener("click", () => {
    nav.classList.remove("active");
  });
}
$("#rk").click(function () {
  $("#remove").hide();
});
$("#hj").click(function () {
  $("#remove").show();
});
$("#r1").click(function () {
  $("#remov").hide();
});
$("#k1").click(function () {
  $("#remov").show();
});
// console.log(removecartitem);
// for (var i = 0; i < removecartitem.length; i++) {
//   var button = removecartitem[i];
//   button.addEventListener("click", function (event) {
//     var buttonclicked = event.target;
//     buttonclicked.parentElement.remove();
//   });
// }
// console.log(shop);
// alert('hey');
