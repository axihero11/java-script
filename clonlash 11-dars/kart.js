// get the add to cart button
const addToCartButton = document.getElementById("addToCartButton");

// add event listener to the button
addToCartButton.addEventListener("click", function() {
  // add item to cart
  const item = {
    name: "Product Name",
    price: 10.99,
    quantity: 1
  };
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.push(item);
  localStorage.setItem("cart", JSON.stringify(cart));
});

// get the delete button
const deleteButton = document.getElementById("deleteButton");

// add event listener to the delete button
deleteButton.addEventListener("click", function() {
  // remove item from cart
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.pop();
  localStorage.setItem("cart", JSON.stringify(cart));
});

// check if there's a saved cart in local storage
const savedCart = JSON.parse(localStorage.getItem("cart"));
if (savedCart) {
  // display saved cart items
  savedCart.forEach(function(item) {
    const cartItem = document.createElement("div");
    cartItem.innerHTML = `${item.name} - $${item.price} - ${item.quantity}`;
    document.getElementById("cartItems").appendChild(cartItem);
  });
}