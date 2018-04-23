/* This IIFE attaches click events to all news-post elements
 * in the DOM. Due to the load order of scripts, the script
 * must wait for the window to load to ensure jQuery is loaded.
 */
(function() {
    'use-strict';
    window.addEventListener('load', function() {
        $( '.news-post' ).on('click', function() {
            if ( !$( this ).hasClass( 'selected' ) ) {
                $( '.news-post.selected' ).removeClass( 'selected' );
                $( this ).addClass( 'selected' );
            }
        });
    });
})();
