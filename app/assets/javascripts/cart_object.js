Rocio.cart = (function() {

  return {
// REDUNDANT
    initialize: function() {
      if (localStorage.getItem('cart') === null) {
        localStorage.setItem('cart', JSON.stringify([]));
      }
    },

    get: function() {
      return JSON.parse(localStorage.getItem('cart'));
    },

    set: function(cart) {
      localStorage.setItem('cart', cart)
    },

    removeItem: function(item) {
      var cart = this.get();
      //FLUSH OUT THIS FUNCTIONALITY
      cart[item.id] = false;
      localStorage.setItem('cart', JSON.stringify(cart));
    },

    sanitizeCart: function() {
      var cart = this.get();
      for (var piece in cart) {
        debugger
        if (cart.indexOf(piece) === -1) {
          debugger
        }
      }
    },

    add: function(piece) {
      var cart = this.get();
      cart.push(piece);
      debugger
      this.set(cart);
    },

    remove: function(piece) {
      var cart = this.get();
      var pieceIndex = cart.indexOf(piece);
      if (pieceIndex > -1) {
        cart.splice(pieceIndex, 1);
        this.set(cart);
      }
    }
  }
})()

Rocio.cart.initialize()








  // function generateEmptyCart() {
  //   var emptyCart = "{";
  //   for (var i = 0; i < limit; i++) {
  //     emptyCart += '"' + artTitles[i] + '"' + ": false";
  //     if (i != limit - 1) {
  //       emptyCart += ",";
  //     }
  //   }
  //   emptyCart += "}";
  //   return emptyCart;
  // }

  // function aPieceHasNotBeenFound(index) {
  //   artData[artTitles[index]] === undefined
  // }

  // function cartInvalid(limit, artTitles) {
  //   // piece not found
  //   // debugger
  //   for (var i = 0; i < limit; i++) {
  //     if (aPieceHasNotBeenFound(i)) {
  //       return true;
  //     }
  //   }
  //   // item added or removed
  //   if (localStorage.getItem('cart') !== null) {
  //     if (localStorage.getItem('cart').split(",").length !== artCount) {
  //       return true;
  //     }
  //   }
  //   return false;
  // }

  // if (localStorage.getItem('cart') === null) {
  //   var emptyCart = generateEmptyCart();
  //   localStorage.setItem('cart', emptyCart);    
  // }

  // if (cartInvalid(limit, artTitles)) {
  //   var emptyCart = generateEmptyCart();
  //   var currentCart = JSON.parse(localStorage.getItem('cart'));
  //   for (var i = 0; i < limit; i++) {
  //     if (currentCart[artTitles[i]] === true && emptyCart[artTitles[i]] === false) {
  //       //same problem here
  //       emptyCart[artTitles[i]] = true;
  //     }
  //   }
  //   localStorage.clear()
  //   localStorage.setItem('cart', emptyCart);
  // } 
  // }