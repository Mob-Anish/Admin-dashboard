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

document.querySelector(".btn--new").addEventListener("click", (e) => {
  document.querySelector(".product-section").style.display = "none";
  document.querySelector(".new--product_container").style.display = "block";
});

document
  .querySelector(".product-section .product-container .values a")
  .addEventListener("click", (e) => {
    document.querySelector(".product-section").style.display = "none";
    document.querySelector(".update--product_container").style.display =
      "block";
  });

document
  .querySelector(".user-section .user--new .btn--new")
  .addEventListener("click", (e) => {
    document.querySelector(".user-section").style.display = "none";
    document.querySelector(".new--user_container").style.display = "block";
  });

document
  .querySelector(".user-section .user-container .values a")
  .addEventListener("click", (e) => {
    document.querySelector(".user-section").style.display = "none";
    document.querySelector(".update--user_container").style.display = "block";
  });

document
  .querySelector(".new--product_header .back--btn")
  .addEventListener("click", (e) => {
    document.querySelector(".product-section").style.display = "block";
    document.querySelector(".new--product_container").style.display = "none";
  });

document
  .querySelector(".update--product_header .back--btn")
  .addEventListener("click", (e) => {
    document.querySelector(".product-section").style.display = "block";
    document.querySelector(".update--product_container").style.display = "none";
  });

document
  .querySelector(".new--user_header .back--btn")
  .addEventListener("click", (e) => {
    document.querySelector(".user-section").style.display = "block";
    document.querySelector(".new--user_container").style.display = "none";
  });

document
  .querySelector(".update--user_header .back--btn")
  .addEventListener("click", (e) => {
    document.querySelector(".user-section").style.display = "block";
    document.querySelector(".update--user_container").style.display = "none";
  });
