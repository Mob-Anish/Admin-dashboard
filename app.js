document.querySelector(".side-nav__products").addEventListener("click", (e) => {
  document.querySelector(".main").style.display = "none";
  document.querySelector(".user-section").style.display = "none";
  document.querySelector(".order-section").style.display = "none";
  document.querySelector(".account-section").style.display = "none";
  document.querySelector(".product-section").style.display = "block";
});
document.querySelector(".side-nav__users").addEventListener("click", (e) => {
  document.querySelector(".main").style.display = "none";
  document.querySelector(".user-section").style.display = "block";
  document.querySelector(".order-section").style.display = "none";
  document.querySelector(".account-section").style.display = "none";
  document.querySelector(".product-section").style.display = "none";
});
document.querySelector(".side-nav__orders").addEventListener("click", (e) => {
  document.querySelector(".main").style.display = "none";
  document.querySelector(".user-section").style.display = "none";
  document.querySelector(".order-section").style.display = "block";
  document.querySelector(".account-section").style.display = "none";
  document.querySelector(".product-section").style.display = "none";
});
document.querySelector(".side-nav__account").addEventListener("click", (e) => {
  document.querySelector(".main").style.display = "none";
  document.querySelector(".user-section").style.display = "none";
  document.querySelector(".order-section").style.display = "none";
  document.querySelector(".account-section").style.display = "block";
  document.querySelector(".product-section").style.display = "none";
});

document.querySelector(".side-nav__active").addEventListener("click", (e) => {
  document.querySelector(".main").style.display = "block";
  document.querySelector(".product-section").style.display = "none";
  document.querySelector(".user-section").style.display = "none";
  document.querySelector(".order-section").style.display = "none";
  document.querySelector(".account-section").style.display = "none";
});
