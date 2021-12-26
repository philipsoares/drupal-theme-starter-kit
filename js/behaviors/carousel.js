(function (Drupal, once) {
  Drupal.behaviors.carousel = {
    attach: function (context, settings) {
      once("carousel", ".carousel", context).forEach(function (element) {});
      console.log("carousel!");
    },
  };
})(Drupal, once);
