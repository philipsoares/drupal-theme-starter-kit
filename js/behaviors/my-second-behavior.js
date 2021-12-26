(function (Drupal, once) {
  Drupal.behaviors.mySecondBehavior = {
    attach: function (context, settings) {
      once("mySecondBehavior", ".my-second-behavior", context).forEach(
        function (element) {}
      );
      console.log("my-second-behavior!");
    },
  };
})(Drupal, once);
