$(document).ready( function() {
  console.log("ellqwdqw");
  var $imgTrigger = $( '.image-trigger' );
  $( '.ha-waypoint' ).each( function(i) {
    var $el = $( this ),
    animClassDown = $el.data( 'animateDown' );

    $el.waypoint( function( direction ) {
      if( direction === 'down' && animClassDown ) {
        $el.addClass("image-active");
      }
    }, { offset: '50%' });
  });
});