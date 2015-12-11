document.addEventListener("DOMContentLoaded", function(event) {

  //function cart() {
  //  return JSON.parse(localStorage.getItem('cart'));
  //}

  function generateCart() {
    var cart = JSON.parse(localStorage.getItem('cart'));
    //var cart = cart();
    for(key in cart) {
      if (cart[key] === true) {
        createCartElement(key);
      }
    }
  }

  function getCart() {
    return JSON.parse(localStorage.getItem('cart'));
  }

  function removeItem(item) {
    var cart = getCart();
    //FLUSH OUT THIS FUNCTIONALITY
    cart[item.id] = false;
    localStorage.getItem('cart')
  }

  function attachRemoveListeners() {
    var buttons = document.getElementsByClassName("remove-item");
    for (var i = 0; i < buttons.length; i++) {
      buttons[i].addEventListener("click", function(event) {
        removeitem(event.target.parentElement.parentElement)
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