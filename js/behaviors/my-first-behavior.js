(function (Drupal, once) {
  Drupal.behaviors.myFirstBehavior = {
    attach: function (context, settings) {
      once("myFirstBehavior", ".my-first-behavior", context).forEach(function (
        element
      ) {});
      console.log("my-first-behavior!");
    },
  };
})(Drupal, once);
