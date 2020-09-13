import { gsap, TweenMax, Power3 } from "gsap";

(function(window, document, cutme, undefined) {

    const Helpers = function() {
        return {
	        showNext: showNext,
        	thisIndex: thisIndex
        };
    };
	
	const showNext = function(first, second) {
            
        let arr1 = [0, 0, 100, 0, 100, 100, 0, 100],
            arr2 = [0, 0, 0, 0, 0, 100, 0, 100];
        
        function clipPath() {    
            TweenMax.set(first, { webkitClipPath: 'polygon('+
                arr1[0]+'%'+arr1[1]+'%,'+
                arr1[2]+'%'+arr1[3]+'%,'+
                arr1[4]+'%'+arr1[5]+'%,'+
                arr1[6]+'%'+arr1[7]+'%)'
            });    
        }
       
        gsap.timeline().clear()
            .to(first, .8, { 
                opacity: 0,
                x: -30,
                scale: .95,
                ease: Power3.easeIn,
                clearProps: 'all'
            })

            .to(arr1, .8, { 
                endArray: arr2, 
                onUpdate: clipPath,
                ease: Power3.easeIn,
                clearProps: 'all',
                onComplete: function() {
                    
                }
            }, 
            '-=.8')
            
            .from(second, 1.8, { 
                opacity: 0,
                x: 30,
                ease: Power3.easeOut,
                clearProps: 'all',
                onComplete: function() {
                    first.classList.remove('is-active');
                    second.classList.add('is-active');
                    
                    first.classList.remove('is-primary');
                    second.classList.add('is-primary');
                    window.showNextStatus = false;

                    first.removeAttribute('style');
                    second.removeAttribute('style');
                }},
            '-=.3')
    };
  
	const thisIndex = function(elm) {
        let nodes = elm.parentNode.childNodes, node, i = 0, count = 0;
    
        while( (node = nodes.item(i++)) && node != elm ) {
            if( node.nodeType == 1 ) count++;            
        }
    
        return count;
    };

    cutme.Helpers = new Helpers();
    

}(window, document, window.cutme = window.cutme  || {}));