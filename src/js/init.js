const { detect } = require('detect-browser');
const browser = detect();
//import Widow from 'widow-js';

document.addEventListener('DOMContentLoaded',function() {

/*
    if (browser) {
        document.documentElement.classList.add(browser.name);
    }
*/

    const cover = document.getElementById('cover');
    
    const init = function() {
        document.documentElement.removeAttribute('style');
        document.documentElement.classList.add('is-loaded');
        
        setTimeout(function() {
            cover.remove();
        }, 500);

        
        // Anims on inview

//        window.anims();
        
        // Remove widows
       // const widow = new Widow({ elements: 'p, span', warnings: true});
    };
    
    
    window.addEventListener('load', init);

}, false);