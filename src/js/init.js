const { detect } = require('detect-browser');
const browser = detect();

document.addEventListener('DOMContentLoaded',function() {

    const cover = document.getElementById('cover');
    
    const init = function() {
        document.documentElement.removeAttribute('style');
        document.documentElement.classList.add('is-loaded');
        
        setTimeout(function() {
            cover.remove();
        }, 500);

        
        // Anims on inview

        window.anims();
        
        document.getElementsByClassName('js-noise')[0] ? window.noise() : false;
        document.getElementsByClassName('js-quality')[0] ? window.quality() : false;
        //document.getElementsByClassName('js-slim')[0] ? window.slim() : false;

    };
    
    
    window.addEventListener('load', init);

}, false);