/*
** Site Loader
*/
// Force hide loader after 3 seconds no matter what
setTimeout(function() {
    $('.loader-wrapper, #loader, .preloader, .loading').fadeOut(500);
}, 3000);

module.exports = ( function($) {

  $( "body" ).imagesLoaded().done( function( instance ) {
    $( ".site-loader" ).addClass( "loader-hidden" );
  });

})( jQuery )
