const list = document.querySelectorAll(".list") 
function activeLink(){
  list.forEach((item) =>
  item.classList.remove("active"));
  this.classList.add("active");
  document.querySelector(".active").style.transition = "ease .2s";

}
list.forEach((item) =>
item.addEventListener("click", activeLink))