document.addEventListener("DOMContentLoaded", function(event) {
  Rocio.cart = (function() {

    return {
  //INITIALIZER
      initialize: function() {
        //set cart to empty array if there is none - refactor this
        if (localStorage.getItem('cart') === null) {
          localStorage.setItem('cart', JSON.stringify([]));
        }
        this.sanitizeCart();
        //update the cart icon
        this.updateCartIcon();
        //add add to cart event listeners
        if (location.href.match(/cart/)) {
          this.generateCart();
        }
        this.attachEventListeners();
      },

  //CRUD OPERATIONS
    //C
      set: function(cart) {
        localStorage.setItem('cart', JSON.stringify(cart));
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

      totalCost: function() {
        var cart = this.get();
        var cartLength = cart.length;
        var totalCost = 0;
        for (var i = 0; i < cartLength; i++) {
          totalCost += Number(Rocio.art[cart[i]].price);
        }
        return totalCost;
      },

    //U
      add: function(piece) {
        var cart = this.get();
        if (cart.indexOf(piece) === -1) {
          cart.push(piece);
        }
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

    //D
      destroy: function() {
        localStorage.clear();
      },

  //CART MAINTENANCE 
      sanitizeCart: function() {
        var cart = this.get();
        var cartLength = cart.length
        var cartPiece;
        var artTitles = this.getArtTitles();
        for (var i = 0; i < cartLength; i++){
          cartPiece = cart[i];
          if (artTitles.indexOf(cartPiece) === -1) {
            console.log(cartPiece);
            console.log(artTitles);
            cart.splice(i, 1);
          }
        }
        this.set(cart);
      },

  //CART ICON
      updateCartIcon: function() {
        var length = this.length();
        if (length === 0) {
          document.getElementById("cart-nav").innerHTML = "cart"
        } else {
          document.getElementById("cart-nav").innerHTML = "cart - " + this.length();
        }
      }, 

  //EVENT LISTENERS
      attachEventListeners: function() {
        this.attachAddToCartEventListeners();
        this.attachRemoveFromCartListeners();
      },

      //ART PAGE
      attachAddToCartEventListeners: function () {
        var addToCartButtons = document.getElementsByClassName("add-to-cart");
        for (var i = 0; i < addToCartButtons.length; i++) {
          var self = this;
          addToCartButtons[i].addEventListener("click", function(event) {
            var title = this.parentNode.dataset.title;
            var cart = self.get();
            self.add(title);
            self.updateCartIcon();
          })
        }
      },

      //CART PAGE
      attachRemoveFromCartListeners: function() {
        var buttons = document.getElementsByClassName("remove-item");
        for (var i = 0; i < buttons.length; i++) {
          var self = this;
          buttons[i].addEventListener("click", function(event) {
            self.remove(this.parentNode.id);
            this.parentNode.parentNode.removeChild(this.parentNode);
            self.exportCost();
            self.updateCartIcon();
          })
        }
      },

  //CART LOADER ON CART PAGE
      generateCart: function() {
        var cart = this.get();
        var cartLength = cart.length;
        for (var i = 0; i < cartLength; i++) {
          this.createCartElement(cart[i]);
        }
        this.exportCost()
      },

      createCartElement: function(artPiece) {
        var item = this.fillCartElement(artPiece)
      },

      fillCartElement: function(pieceTitle) {
        var emptyItem = this.getCartElement(pieceTitle);
        piece = Rocio.art[pieceTitle];

        emptyItem.getElementsByTagName("img")[0].src = piece.image_url;
        emptyItem.getElementsByClassName("art-title")[0].innerText = piece.title;
        emptyItem.getElementsByClassName("art-price")[0].innerText = piece.price;

        document.getElementById("cart").appendChild(emptyItem)
      },

      getCartElement: function(newId) {
        var cartItem = document.getElementById("art-piece-in-cart-null").cloneNode(true);
        cartItem.id = newId;
        cartItem.className = "cart-item"
        return cartItem;
      },

      exportCost: function() {
        var totalCost = this.totalCost();
        document.getElementById("total-cost").innerText= "$" + totalCost + ".00";
        document.getElementById("total-cost").dataset.total = totalCost;
      }
    }//Rocio.cart
  })()

  Rocio.cart.initialize();
});