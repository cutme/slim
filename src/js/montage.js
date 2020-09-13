import { gsap, TweenMax, Power3 } from "gsap";

document.addEventListener('DOMContentLoaded',function() {

    const el = document.getElementsByClassName('js-montage')[0];
    
    const init = function(obj) {
        
        const btn = el.getElementsByClassName('js-item'),
              images = el.getElementsByClassName('js-images')[0];
        window.showNextStatus = false;

        const action = function(e) {

            if (!e.currentTarget.classList.contains('is-active') && !(window.showNextStatus)) {
                window.showNextStatus = true;
                
                const _that = e.currentTarget;
                
                for (let i = 0; i < btn.length; i++) {
                    btn[i].classList.remove('is-active');
                }
                
                e.currentTarget.classList.add('is-active');

                const images__first = images.getElementsByClassName('is-primary')[0],
                      images__second = images.getElementsByTagName('li')[ cutme.Helpers.thisIndex(e.currentTarget) ],
                      images__li = images.getElementsByTagName('li');

                // remove active and add invisible
                for (let i = 0; i < images__li.length; i ++) {
                    images__li[i].classList.add('invisible');
                }

                images__second.classList.remove('invisible');
                
                cutme.Helpers.showNext(images__first, images__second);  
            }
                    
        };
        
        for (let i = 0; i < btn.length; i++) {
            btn[i].addEventListener('click', action);
        }
    };

    
    el ? init() : false;
    
    
    
}, false);
