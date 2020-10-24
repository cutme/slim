import GLightbox from '../../node_modules/glightbox/dist/js/glightbox.js';
require('../../node_modules/glightbox/dist/css/glightbox.css');

document.addEventListener('DOMContentLoaded', function() {

    if (document.getElementsByClassName('js-video').length > 0) {
        const video = GLightbox({
            selector: '.js-video'
        });
    }


}, false);
