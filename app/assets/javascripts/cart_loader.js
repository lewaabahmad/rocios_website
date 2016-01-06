document.addEventListener("DOMContentLoaded", function(event) {

  //function cart() {
  //  return JSON.parse(localStorage.getItem('cart'));
  //}

  function generateCart() {
    var cart = JSON.parse(localStorage.getItem('cart'));
    var totalCost = 0;
    //var cart = cart();
    for(key in cart) {
      if (cart[key] === true) {
        createCartElement(key);
        totalCost += Number(Rocio.art[key].price);
      }
    }
    exportCost(totalCost)
  }

  function exportCost(totalCost) {
    document.getElementById("total-cost").innerText= "$" + totalCost + ".00";
    document.getElementById("total-cost").dataset.total = totalCost;
  }

  function getCart() {
    return JSON.parse(localStorage.getItem('cart'));
  }

  // function reloadCart() {
  //   var cartItems = document.getElementsByClassName("cart-item");
  //   for (var i = 0; i < cartItems.length; i++) {
  //     cartItems[i].parentElement.removeChild(cartItems[i]);
  //   }
  //   generateCart();
  // }

  function removeItem(item) {
    var cart = getCart();
    //FLUSH OUT THIS FUNCTIONALITY
    cart[item.id] = false;
    localStorage.setItem('cart', JSON.stringify(cart))
    updateCostAndCartCount();
  }

  function updateCostAndCartCount() {
    var cart = JSON.parse(localStorage.getItem('cart'));
    var totalCost = 0;
    var totalItems = 0;
    for(key in cart) {
      if (cart[key] === true) {
        totalCost += Number(Rocio.art[key].price);
        totalItems++;
      }
    }
    exportCost(totalCost)
    document.getElementById("cart-nav").innerHTML = "cart - " + totalItems;
  }
  
  function attachRemoveListeners() {
    var buttons = document.getElementsByClassName("remove-item");
    for (var i = 0; i < buttons.length; i++) {
      buttons[i].addEventListener("click", function(event) {
        removeItem(event.target.parentElement.parentElement)
        this.parentNode.parentNode.removeChild(this.parentNode)
      })
    }
  }

  function getCartElement(newId) {
    var cartItem = document.getElementById("art-piece-in-cart-null").cloneNode(true);
    cartItem.id = newId;
    cartItem.className = "cart-item"
    return cartItem;
  }

  function fillCartElement(pieceTitle) {
    var emptyItem = getCartElement(pieceTitle);
    piece = Rocio.art[pieceTitle];

    emptyItem.getElementsByTagName("img")[0].src = piece.image_url;
    emptyItem.getElementsByClassName("art-title")[0].innerText = piece.title;
    emptyItem.getElementsByClassName("art-price")[0].innerText = piece.price;

    document.getElementById("cart").appendChild(emptyItem)
  }

  function createCartElement(artPiece) {
    var item = fillCartElement(artPiece)
  }

  (function() {
    if (location.href.match(/cart/)) {
      generateCart();
      attachRemoveListeners()
    }
  })()
})