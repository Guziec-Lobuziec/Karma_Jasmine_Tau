(function ( $ ) {

    $.fn.validate = function(regex) {
      this.each(function() {
            var elem = $( this );
            if(regex.test(elem.text())) {
              elem.css("background-color", "#2222ffff")
            }
            else {
              elem.css("background-color", "#ff0000ff")
            }
      });
        return this;
    };

}( jQuery ));
