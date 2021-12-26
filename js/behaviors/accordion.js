(function (Drupal, once) {
  Drupal.behaviors.accordion = {
    attach: function (context, settings) {
      once("accordion", ".accordion", context).forEach(function (element) {
        console.log("accordion!");
      });
    },
  };
})(Drupal, once);
