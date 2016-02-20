validation_manager = (function() {
  function initialize() {
    forms = document.getElementsByClassName("validaterenater-form"); 
    for (var i = 0; i < forms.length; i++) {
      addValidationsEventListeners(forms[i]);
    }
  }

 //EVENT LISTENER ATTACHING
  function addValidationsEventListeners(form) {
    addFormInputEvents(form);
  }

  function addFormInputEvents(form) {
    var inputFields = form.querySelectorAll("input");
    var limit = inputFields.length;
    for (var i = 0; i < limit; i++) {
      if (inputFields[i].type !== "hidden") {
        $(inputFields[i]).on("keyup blur", function() {
          return validate(this);
        })
      }
    }
  }

  function isValid() {
    var form = document.getElementById('payment-form');
    var inputFields = form.querySelectorAll("input");
    var limit = inputFields.length;
    var valid = true;
    for (var i = 0; i < limit; i++) {
      if (inputFields[i].type !== "hidden") {
        if (!validate(inputFields[i])) {
          valid = false;
        }
      }
    }
    return valid;
  }

//VALIDATION CONTROLLER
  function validate(field) {
    var validator = field.dataset.validator;
    var value = field.value;
    var isValid;
    console.log("validator data attr: " + validator);
    switch (validator) {
      case "full_name":
        isValid = validateFullName(value);
        break;
      case "email":
        isValid = validateEmail(value);
        break;
      case "street_address":
        isValid = validateAlphaNumeric(value);
        break;
      case "city":
        isValid = validateAlphabetic(value);
        break;
      case "state":
        isValid = validateAlphabetic(value);
        break;
      case "zip_code":
        isValid = validateZipCode(value);
        break; 
      case "apartment":
        isValid = validateAlphaNumeric(value);
        break;
      case "credit_card_number":
        isValid = validateNumeric(value);
        break;
      case "credit_card_cvc":
        isValid = validateNumeric(value);
        break;
      case "credit_card_expiration_date":
        isValid = validateCreditCardExpirationDate(value);
        break;
      default:
        return true;
    }
    isValid ? hideErrors(field) : showErrors(field);
    return isValid;
  }

//VALIDATORS
  function validateFullName(fullNameValue) {
    var fullNameRegex = /^(.{1,50}\s+.{1,})/;
    return validateWithRegex(fullNameRegex, fullNameValue);
  }

  function validateEmail(email) {
    var emailRegex = /^"?(\b[\w\+.\-0-9\"]+@[\[?\w\.-]+\.\w{2,10}\]?){1,50}$/i; 
    return validateWithRegex(emailRegex, email);
  }

  function validateAlphaNumeric(string) {
    var alphaNumericRegex = /^[\w\s]{1,50}$/;
    return validateWithRegex(alphaNumericRegex, string);
  }

  function validateNumeric(string) {
    var alphaNumericRegex = /^[0-9\s]{1,50}$/;
    return validateWithRegex(alphaNumericRegex, string);
  }

  function validateAlphabetic(string) {
    var alphaNumericRegex = /^[A-Za-z\s]{1,50}$/;
    return validateWithRegex(alphaNumericRegex, string);
  }
 
  function validateZipCode(zip) {
    var zipRegex = /^\d{5}(?:[-\s]\d{4})?$/;
    return validateWithRegex(zipRegex, zip);
  }

  function validateCreditCardExpirationDate(date) {
    var creditCardExpirationDateRegex = /^([0]?[1-9]{1}|1[0-2]{1})[\/]{1}([1-9][0-9])$/;
    return validateWithRegex(creditCardExpirationDateRegex, date);
  }

  function validateWithRegex(regex, value) {
    var returnValue;
    regex.test(value) ? returnValue = true : returnValue = false;
    return returnValue;
  }
    
//ERRORS
  function hideErrors(field) {
    var errorElementId = generateErrorElementId(field);
    if (document.getElementById(errorElementId)) {
      field.nextSibling.style.visibility = "hidden";
    }
  } 

  function showErrors(field) {
    var errorElementId = generateErrorElementId(field);
    if (document.getElementById(errorElementId)) {
      field.nextSibling.style.visibility = "visible";
    } else {
      injectErrorSpan(field); 
      showErrors(field)
    }
  }

//UTILITY
  function generateErrorElementId(field) {
    var id = field.dataset.validator + "_error_span";
    return id;
  }

  function injectErrorSpan(field) {
    var span = document.createElement("span");
    span.id = generateErrorElementId(field);
    span.innerText = "Invalid " + field.dataset.validator.replace(/_/g, " ");
    field.insertAdjacentElement('afterend', span);
  }

  return {
    initialize: initialize,
    isValid: isValid
  }
})()

document.addEventListener("DOMContentLoaded", function() {
  validation_manager.initialize();
});













