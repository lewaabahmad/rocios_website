validation_manager = (function() {
  function initialize() {
    forms = document.getElementsByClassName("validaterenater-form"); 
    for (var i = 0; i < forms.length; i++) {
      addValidationsEventListeners(forms[i]);
    }
  }

  function addValidationsEventListeners(form) {
    addFormInputEvents(form);
    addFormSubmitEvent(form);
  }

  function addFormInputEvents(form) {
    var inputFields = form.querySelectorAll("input");
    var limit = inputFields.length;
    for (var i = 0; i < limit; i++) {
      if (inputFields[i].type !== "hidden") {
        $(inputFields[i]).on("keyup blur", function() {
          validate(this);
        })
      }
    }
  }

  function addFormSubmitEvent() {
  
  }

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
      case "streetr_address":
        isValid = validateAlphaNumeric(value);
        break;
      case "city":
        isValid = false;
        break;
      case "zip":
        isValid = validateZipCode(value);
        breakl 
      default:
        return false;
    }
    isValid ? hideErrors(field) : showErrors(field);
  }

//VALIDATORS
  function validateFullName(fullNameValue) {
    var fullNameRegex = /^(.{1,50}\s+.{1,})/;
    return validateWithRegex(fullNameRegex, string);
  }

  function validateEmail(email) {
    var emailRegex = /^"?(\b[\w\+.\-0-9\"]+@[\[?\w\.-]+\.\w{2,10}\]?){1,50}$/i; 
    return validateWithRegex(emailRegex, string);
  }

  function validateAlphaNumeric(string) {
    var alphaNumericRegex = /^[\w\s]{1,50}$/;
    return validateWithRegex(alphaNumericRegex, string);
  }
 
  function validateZipCode(zip) {
    var zipRegex = /^\d{5}(?:[-\s]\d{4})?$/;
    return validateWithRegex(zipRegex, zip);
  }

  function validateWithRegex(regex, value) {
    var returnValue;
    regex.test(value) ? returnValue = true : returnValue = false;
    return returnValue;
  }
    
//ERRORS
  function hideErrors(field) {
    field.nextSibling.style.visibility = "hidden";
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
    initialize: initialize
  }
})()

document.addEventListener("DOMContentLoaded", function() {
  validation_manager.initialize();
});













