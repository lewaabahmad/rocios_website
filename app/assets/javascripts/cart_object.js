Rocio.cart = (function() {

  return {
//INITIALIZER
    initialize: function() {
      //set cart to empty array if there is none
      if (localStorage.getItem('cart') === null) {
        localStorage.setItem('cart', JSON.stringify([]));
      }
      //update the cart icon
      this.updateCartIcon();
      //add add to cart event listeners
      this.addAddToCartEventListeners();
    },

//CRUD OPERATIONS
  //C
    set: function(cart) {
      localStorage.setItem('cart', cart);
    },

  //R
    get: function() {
      return JSON.parse(localStorage.getItem('cart'));
    },

    getArtTitles: function() {
      var artPieces = [];
      for (title in Rocio.art) {
        artPieces.push(title);
      }
      return artPieces;
    },

    length: function() {
      return this.get().length;
    },

  //U
    add: function(piece) {
      var cart = this.get();
      cart.push(piece);
      this.set(cart);
    },

    remove: function(piece) {
      var cart = this.get();
      var pieceIndex = cart.indexOf(piece);
      if (pieceIndex > -1) {
        cart.splice(pieceIndex, 1);
        this.set(cart);
      }
    },

//CART MAINTENANCE 
    sanitizeCart: function() {
      var cart = this.get();
      var artTitles = this.getArtTitles();
      for (var cartPiece in cart) {
        if (artTitles.indexOf(cartPiece) === -1) {
          cart = cart.splice(cart.indexOf(cartPiece) , 1);
        }
      }
      this.set(cart);
    },

//CART ICON
    updateCartIcon: function() {
      document.getElementById("cart-nav").innerHTML = "cart - " + this.length();
    }, 

//ART PAGE - ADD TO CART
    addAddToCartEventListeners: function () {
      var addToCartButtons = document.getElementsByClassName("add-to-cart");
      for (var i = 0; i < addToCartButtons.length; i++) {
        var self = this;
        addToCartButtons[i].addEventListener("click", function(event) {
          debugger
          self.updateCartIcon();
        })
      }
    }
  }

//CART PAGE 
})()

Rocio.cart.initialize()