document.addEventListener("DOMContentLoaded", function(event) {
  (function(){
    function getCartCount() {
      var count = 0;
      var cart = JSON.parse(localStorage.getItem('cart'));
      for (key in cart) {
        if (cart[key] == true) {
          count++;
        }
      }
      return count;
    }

    function updateCartIcon() {
      document.getElementById("cart-nav").innerHTML = "cart - " + getCartCount();
    }
    updateCartIcon()
    
    var addToCartButtons = document.getElementsByClassName("add-to-cart");
    for (var i = 0; i < addToCartButtons.length; i++) {
      addToCartButtons[i].addEventListener("click", function(event) {
        var cart = JSON.parse(localStorage.getItem('cart'))
        var item = event.target.parentElement.dataset.title
        cart[item] = true;
        localStorage.setItem('cart', JSON.stringify(cart))
        updateCartIcon();
      })
    }
  })()
})