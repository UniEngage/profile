const list = document.querySelectorAll(".list") 
function activeLink(){
  list.forEach((item) =>
  item.classList.remove("active"));
  this.classList.add("active");
  document.querySelector(".active").style.transition = "ease .2s";
  // document.querySelector(".navigation").style.width = "70px";

}
list.forEach((item) =>
item.addEventListener("click", activeLink))

//Side Dashboard

document.querySelector('#events-btn').addEventListener("click", function(){
  document.querySelector('#events-area').style.display = "flex";
  document.querySelector('#dashboard-area').style.display = "none";
  document.querySelector('#engage-area').style.display = "none";
  document.querySelector('#unipoints-area').style.display = "none";
})

document.querySelector('#dashboard-btn').addEventListener("click", function(){
  document.querySelector('#events-area').style.display = "none";
  document.querySelector('#dashboard-area').style.display = "flex";
  document.querySelector('#engage-area').style.display = "none";
  document.querySelector('#unipoints-area').style.display = "none";
})

document.querySelector('#engage-btn').addEventListener("click", function(){
  document.querySelector('#events-area').style.display = "none";
  document.querySelector('#dashboard-area').style.display = "none";
  document.querySelector('#engage-area').style.display = "flex";
  document.querySelector('#unipoints-area').style.display = "none";
})

document.querySelector('#unipoints-btn').addEventListener("click", function(){
  document.querySelector('#events-area').style.display = "none";
  document.querySelector('#dashboard-area').style.display = "none";
  document.querySelector('#engage-area').style.display = "none";
  document.querySelector('#unipoints-area').style.display = "flex";
})

//LOG OUT - PROFILE EDIT - CHANGE PASSWORD

document.querySelector("#edit-profile").addEventListener("click", function (){
  document.querySelector(".profile-page").style.transition = "ease 1s";
  document.querySelector(".profile-page").style.display = "flex";
})

document.querySelector("#column-last-pp button").addEventListener("click", function (){
  document.querySelector(".profile-page").style.display = "none";
})
