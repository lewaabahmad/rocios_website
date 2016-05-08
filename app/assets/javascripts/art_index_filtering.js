document.addEventListener("DOMContentLoaded", function(event) {
  (function() {
    function addFilteringFor(filter) {
      var dropdown = document.getElementById("product-" + filter + "-dropdown");
      if (dropdown) {
        var filters = dropdown.querySelectorAll("li a");
        var filtersLength = filters.length
        for(var i = 0; i < filtersLength; i++) {
          filters[i].addEventListener("click", function() {
            var art = document.querySelectorAll(".art-piece");
            var artLength = art.length;
            for (var i = 0; i < artLength; i++) {
              // debugger
              if (art[i].getAttribute("data-" + filter) !== this.getAttribute("data-" + filter)) {
                art[i].style.display = "none";
              } else {
                art[i].style.display = "block";
              }
            }
          })
        }
      }
    }

    function addFilteringReset() {
      document.getElementById("filter-reset-button").addEventListener("click", function () {
        var art = document.querySelectorAll(".art-piece");
          var artLength = art.length;
          for (var i = 0; i < artLength; i++) {
            art[i].style.display = "block";
          }
      })
    }

    (function() {
      if (document.getElementById("art-index-filtering")) {
        addFilteringFor("series");
        addFilteringFor("type");
        addFilteringReset();
      }
    })()
  })()
})