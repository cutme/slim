import { gsap } from "gsap";

document.addEventListener('DOMContentLoaded',function() {

    const el = document.getElementsByClassName('js-gallery')[0];
    
    const init = function(obj) {
        
        const btn = el.getElementsByClassName('js-btn'),
              big = el.getElementsByClassName('js-big')[0],
              thumbs = el.getElementsByClassName('js-thumbs')[0],
              captions = el.getElementsByClassName('js-captions')[0]; 

        let primaryIndex = 0, page = 0;

        window.showNextStatus = false;
        
        const killTimeline = (timeline) => {
            const targets = timeline.getChildren();
            
            timeline.kill();
            
            for(let i = 0; i < targets.length; i++) {
                if(targets[i].targets().length) {
                    gsap.set(targets[i].targets(), { clearProps: 'all' });
                }
            }
        };
        
        const showCaption = function(index) {
            let active = captions.getElementsByClassName('is-active')[0],
                captions__li = captions.getElementsByTagName('li');

            let tl = gsap.timeline();
                  tl.to('.c-gallery__caption .is-active p', 0.5, { opacity: 0, y: 50 })
                     .to('.c-gallery__caption .is-active h3', 0.5, { 
                        opacity: 0, 
                        y: 50,
                        onComplete: function() {
                            
                            active.classList.remove('is-active');
                            captions__li[index].classList.add('is-active');
                        }
                    }, '-=.4');
            
            
            
            // Show caption
            tl.eventCallback("onComplete", function() {                        
                killTimeline(tl);
                
                let tl2 = gsap.timeline();
                    tl2.from('.c-gallery__caption .is-active h3', 0.5, { opacity: 0, x: 50 })
                       .from('.c-gallery__caption .is-active p', 0.5, { opacity: 0, x: 50}, '-=.4');                       
            })
        };
        
        const switchSlide = function(index) {
            
            if (!window.showNextStatus) {
                window.showNextStatus = true;
            
                const big__first = big.getElementsByClassName('is-primary')[0],
                      big__second = big.getElementsByTagName('li')[ index ],
                      thumbs__first = thumbs.getElementsByClassName('is-primary')[0],
                      thumbs__second = thumbs.getElementsByTagName('li')[ index ];
    
                const big__li = big.getElementsByTagName('li'),
                      thumbs__li = thumbs.getElementsByTagName('li');
                      
                
                
                // remove active and add invisible
                for (let i = 0; i < big__li.length; i ++) {
                    big__li[i].classList.add('invisible');
                }
                
                for (let i = 0; i < thumbs__li.length; i ++) {
                    thumbs__li[i].classList.add('invisible');
                }
                
                thumbs__second.classList.remove('invisible');
                big__second.classList.remove('invisible');
                
                cutme.Helpers.showNext(thumbs__first, thumbs__second);
                cutme.Helpers.showNext(big__first, big__second);
                
                for (let i = 0; i < btn.length; i++) {
                    btn[i].classList.remove('is-active');
                }
                
                btn[index].classList.add('is-active');
                
                el.getElementsByClassName('js-current')[0].innerHTML = index + 1;
                showCaption(index);
            }
        };

        
        // action for nav
        const action = function(e) {

            if (!e.currentTarget.classList.contains('is-active')) {
                primaryIndex = cutme.Helpers.thisIndex(e.currentTarget);
                switchSlide(primaryIndex);
            }
        };

        // action for pagination
        const pagination = function(e) {
            if (!window.showNextStatus) {
                if(e.currentTarget.classList.contains('js-prev')) {
                    if (primaryIndex === 0) {
                        primaryIndex = 3;
                    }
                    primaryIndex --;
                }
                
                if(e.currentTarget.classList.contains('js-next')) {
                    if (primaryIndex === 2) {
                        primaryIndex = -1;
                    }
                    primaryIndex ++;
                }
                
                
                
                //primaryIndex = page;
                switchSlide(primaryIndex);  
                
                //console.log(primaryIndex + ' / ' + page);              
            }
        };


        for (let i = 0; i < btn.length; i++) {
            btn[i].addEventListener('click', action);
        }

        el.getElementsByClassName('js-prev')[0].addEventListener('click', pagination);
        el.getElementsByClassName('js-next')[0].addEventListener('click', pagination);
    };

    
    el ? init() : false;
    
    
    
}, false);
