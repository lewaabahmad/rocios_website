document.addEventListener("DOMContentLoaded", function() {
  var themeImage = document.querySelector("#theme_background_image");
  var artImage = document.querySelector("#hahahaha");
  var target = themeImage || artImage;
  if (target) {
    target.addEventListener("focusout", function() {
      var imgContainerId = "#image-preview-container";
      var container = document.querySelector("#active_admin_content");
      var imgContainer = container.querySelector(imgContainerId);
      if (!imgContainer) {
        var imgContainer = document.createElement("img");
        imgContainer.id = imgContainerId;
        container.appendChild(imgContainer);
      }
      imgContainer.src = target.value;
    })
  }
})
// #active_admin_content or #main_content_wrapper