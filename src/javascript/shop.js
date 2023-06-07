let preveiwContainer = document.querySelector('.products-preview');
let previewBox = preveiwContainer.querySelectorAll('.preview');

document.querySelectorAll('.products-container .product').forEach(product =>{
  product.onclick = () =>{
    preveiwContainer.style.display = 'flex';
    let name = product.getAttribute('data-name');
    previewBox.forEach(preview =>{
      let target = preview.getAttribute('data-target');
      if(name == target){
        preview.classList.add('active');
      }
    });
  };
});

previewBox.forEach(close =>{
  close.querySelector('.fa-times').onclick = () =>{
    close.classList.remove('active');
    preveiwContainer.style.display = 'none';
  };
});



//freferferfreferferfrefref


// JavaScript

// JavaScript
  var cartIcon = document.querySelector(".cart-icon");
  var cartItems = document.querySelector(".cart-items");
  var removeButtons = document.querySelectorAll(".button-remove");

  cartIcon.addEventListener("click", function() {
    cartItems.classList.toggle("show");
  });

  function addToCart() {
    var itemName = this.parentNode.parentNode.querySelector("h3").textContent;
    var existingItem = cartItems.querySelector(
      ".item-container[data-name='" + itemName + "']"
    );

    if (existingItem) {
      var quantityElement = existingItem.querySelector(".quantity");
      var quantity = parseInt(quantityElement.textContent);
      quantityElement.textContent = quantity + 1;
    } else {
      var itemContainer = document.createElement("div");
      itemContainer.classList.add("item-container");
      itemContainer.setAttribute("data-name", itemName);

      var itemNameElement = document.createElement("span");
      itemNameElement.textContent = itemName;

      var quantityElement = document.createElement("span");
      quantityElement.classList.add("quantity");
      quantityElement.textContent = "1";

      var removeButton = document.createElement("button");
      removeButton.classList.add("button-remove");
      removeButton.textContent = "Remover";

      removeButton.addEventListener("click", removeItemFromCart);

      itemContainer.appendChild(itemNameElement);
      itemContainer.appendChild(quantityElement);
      itemContainer.appendChild(removeButton);

      cartItems.appendChild(itemContainer);
    }

    updateCartCount();
  }

  function removeItemFromCart() {
    var itemContainer = this.parentNode;
    var quantityElement = itemContainer.querySelector(".quantity");
    var quantity = parseInt(quantityElement.textContent);

    if (quantity === 1) {
      cartItems.removeChild(itemContainer);
    } else {
      quantityElement.textContent = quantity - 1;
    }

    updateCartCount();
  }

  function updateCartCount() {
    var cartCountElement = document.querySelector(".cart-count");
    var totalQuantity = 0;

    Array.from(cartItems.children).forEach(function(itemContainer) {
      var quantityElement = itemContainer.querySelector(".quantity");
      var quantity = parseInt(quantityElement.textContent);
      totalQuantity += quantity;
    });

    cartCountElement.textContent = totalQuantity.toString();
  }

  var addToCartButtons = document.querySelectorAll(".cart");
  addToCartButtons.forEach(function(button) {
    button.addEventListener("click", addToCart);
  });

  removeButtons.forEach(function(button) {
    button.addEventListener("click", removeItemFromCart);
  });

  
document.querySelectorAll('.buy').forEach(buyButton => {
  buyButton.addEventListener('click', function(event) {
    event.preventDefault();
    alert('Item comprado!');

    previewBox.forEach(close =>{
      close.querySelector('.buy').onclick = () =>{
        close.classList.remove('active');
        preveiwContainer.style.display = 'none';
      };
    });
  });
});
