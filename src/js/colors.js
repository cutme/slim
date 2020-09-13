import { gsap, TweenMax, Power1 } from "gsap";


document.addEventListener('DOMContentLoaded',function() {

    const el = document.getElementsByClassName('js-colors')[0];
    
    const init = function(obj) {

        const cols = new Object(),
              content = el.getElementsByClassName('js-content')[0];
              
        let whiteActive = false, blackActive = false;
        let blackTimeout, whiteTimeOut;

        cols.left = el.getElementsByClassName('js-left')[0];
        cols.right = el.getElementsByClassName('js-right')[0];
        
        const clickAction = function(e) {
            console.log(e.currentTarget);
        }

        cols.left.addEventListener('mouseenter', function() {
            
            clearTimeout(whiteTimeOut);

            if (blackActive === true) {
                console.log('blackactive');
                whiteTimeOut = setTimeout(function() {
                    content.classList.add('index-up');
                    content.classList.add('white-active');
                }, 500);
            } else {
                content.classList.add('index-up');
                content.classList.add('white-active');
            }
            
            blackActive = false;
            whiteActive = true;
        });
        
        cols.left.addEventListener('mouseleave', function() {
            
            clearTimeout(whiteTimeOut);
            
            content.classList.remove('white-active');
            
            whiteTimeOut = setTimeout(function() {
                content.classList.remove('index-up');
            }, 500);
        });


        cols.right.addEventListener('mouseenter', function() {

            if (whiteActive === true) {
                blackTimeout = setTimeout(function() {
                    content.classList.add('black-active');
                }, 500);
            } else {
                content.classList.add('black-active');
            }
            
            blackActive = true;
        });
        
        cols.right.addEventListener('mouseleave', function() {
            content.classList.remove('black-active');            
            clearTimeout(blackTimeout);
        });
        
        
        el.addEventListener('mouseleave', function(e) {
            blackActive = false;
            whiteActive = false;
        });
    };

    el ? init() : false;
    
    
    
}, false);
