document.addEventListener("DOMContentLoaded", function(event) {
  function stripeResponseHandler(status, response) {
    var $form = $('#payment-form');
    addCartItemsToForm($form);
    if (response.error) {
      // Show the errors on the form
      $form.find('.payment-errors').text(response.error.message);
      $form.find('button').prop('disabled', false);
    } else {
      // response contains id and card, which contains additional card details
      var token = response.id;
      // Insert the token into the form so it gets submitted to the server
      $form.append($('<input type="hidden" name="stripeToken" />').val(token));
      // Add cart items to form
      // and submit
      $form.get(0).submit();
    }
  };

  function addCartItemsToForm($form) {
    $form.append($('<input type="hidden" name="purchase[selectedArt]" />').val(Rocio.cart.get()));
    $form.append($('<input type="hidden" name="purchase[totalCost]" />').val(Rocio.cart.totalCost()));
  }

  function fetchCardInformation(form) {
    var exp = form.querySelector("#exp").value.split("/");
    var expMonth = exp[0] || 0;
    var expYear = exp[1] || 0;
    var cardObject = {  number: form.querySelector("#cardNum").value,
                        cvc: form.querySelector("#cvc").value,
                        exp_month: expMonth,
	                      exp_year: expYear
                     };
    return cardObject;
  }

  function isValidCartObject() {
    return validation_manager.isValid();
  }

  document.getElementById("payment-form").addEventListener("submit", function(event) {
    event.preventDefault();
    var form = this;
    var button = form.querySelector("button");
    //button.disabled = true;
    var cardObject = fetchCardInformation(form);

    if (isValidCartObject()) {
      Stripe.card.createToken(cardObject, stripeResponseHandler)
    } else {
      alert("No.")
    }
    return false;
  });
})
