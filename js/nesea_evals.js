(function ($, Drupal) {
  Drupal.behaviors.myBehavior = {
    attach: function (context, settings) {
      var obj = settings.nesea_evals.speakers;
      for (let i=0; i<Object.keys(obj).length - 1; i++) {
        $('input.field-add-more-submit').click();
      }
      Object.keys(obj).forEach(key => {
        console.log(key, obj[key]);
      });
    }
  };
})(jQuery, Drupal);
