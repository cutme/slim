import { gsap, Power1, Power3 } from "gsap";

import ScrollTrigger from "gsap/ScrollTrigger";

document.addEventListener('DOMContentLoaded',function() {

    gsap.registerPlugin(ScrollTrigger);
    
    window.anims = function() {
        
        // start
        gsap.from('.c-video__item p', { opacity: 0, duration: 1, x: -50 })
        gsap.from('.c-video__item .o-play', { opacity: 0, duration: 1, delay: .2 })
        gsap.from('.c-video__item img', { opacity: 0, y: 50, duration: 1, delay: .3 })


        // Common

/*
        gsap.utils.toArray(".js-fadeIn").forEach(function(section) {
            let status = false;

            gsap.from(section, {
                scrollTrigger: {
                    trigger: section,
                    start: 'top bottom',
                    onUpdate: function({progress, direction, isActive}) {
                        if ((progress >= 0.5) && (status != true)) {
                            section.classList.add('fade-in');
                            status = true;
                        }
                    }
                },
                opacity: 0, 
                duration: 1,
                y: 50
            });
        });   
*/
 
        gsap.utils.toArray(".js-fadeInChildren > *").forEach(function(section) {

            gsap.from(section, {
                scrollTrigger: {
                    trigger: section,
                    start: 'center bottom',
                },
                opacity: 0, 
                duration: 1,
                y: 50
            });
        });
    

        // Curtains
        
        gsap.from(".c-curtains ul li i", {
            duration: 2,
            scale: 0,
            ease: "power1.inOut",
            scrollTrigger: {
                trigger: '.c-curtains ul li i',
                start: '-50px bottom',
            },
            stagger: {
                each: 0.2,
                from: "center",
                grid: "auto"
            }
        });
        
        
        // Download

        gsap.from('.c-download ul li', {
            scrollTrigger: {
                trigger: '.c-download ul li',
            },
            stagger: {
                from: 'left',
                each: 0.2,
            },
            duration: 2,
            x: -100,  
            opacity: 0, 
            ease: Power3.easeOut,
        });
        
        
             
       
     
        gsap.from('.c-fit__info li', {
            scrollTrigger: {
                trigger: '.c-fit__info li',
            },
            stagger: {
                from: 'left',
                each: 0.2,
            },
            duration: 2,
            y: 100,  
            opacity: 0, 
            ease: Power3.easeOut,
        });
        
        
        gsap.from(".c-fit .o-circle", {
            duration: 2,
            scale: 0,
            opacity: 0,
            ease: Power3.easeOut,
            scrollTrigger: {
                trigger: '.c-fit .o-circle',
                start: '-50px bottom',
                scrub: 1.2
            }
        });
        
        gsap.to('.c-fit__image', {
            scrollTrigger: {
                trigger: '.c-fit__image',
                scrub: 1.2,
                start: 'center center'
            },      
            y: 50,
        });
        
        
        // montage
        
        gsap.to('.c-montage', {
            scrollTrigger: {
                trigger: '.c-montage',
                scrub: 1,
                start: 'top bottom'
            },
            y: -50
        });
        
        
        // video
        
        gsap.to('.c-video__item', {
            scrollTrigger: {
                trigger: '.c-video__item',
                scrub: 1.2,
                start: 'top top'
            },
            opacity: 0,
            y: -50
        });
        
        


        // slim
        
        gsap.from('.c-slim', {
            scrollTrigger: {
                trigger: '.c-slim',
                scrub: 1,
                start: 'top bottom',
                end: 'top center',
            },
            y: 100
        });
        
        gsap.to('.c-slim', {
            scrollTrigger: {
                trigger: '.c-slim',
                scrub: 2.5,
                start: 'bottom center',
            },
            opacity: 0
        });

        
        
        // footer
        
        gsap.from('.c-footer', {
            scrollTrigger: {
                trigger: '.c-footer',
                scrub: 1,
                start: 'top bottom',
                end: 'bottom bottom'
            },
            opacity: 0,
            y: 100
        });
        
        
        
        // Gallery
        
        gsap.from('.c-gallery__big img', {
            scrollTrigger: {
                trigger: '.c-gallery__big img',
                scrub: 1,
                start: 'top bottom',
                end: 'bottom bottom'
            },
            opacity: 0,
            y: 100
        });
        
        gsap.from('.c-gallery__small img', {
            scrollTrigger: {
                trigger: '.c-gallery__small img',
                scrub: 2,
                start: 'top bottom',
                end: 'bottom bottom'
            },
            scale: 1.2,
            opacity: 0
        });
        
        
        // colors      
        
        gsap.from('.c-colors', {
            scrollTrigger: {
                trigger: '.c-colors',
                start: 'top bottom',
                onUpdate: function({progress, direction, isActive}) {
                    if ((progress >= 0.4) && (status != true)) {
                        document.getElementsByClassName('c-colors')[0].classList.add('fade-in');
                        status = true;
                    }
                }
            }
        });
        
        gsap.from('.c-colors__image', {
            scrollTrigger: {
                trigger: '.c-colors__image',
                scrub: 2.5,
                start: 'top bottom',
                end: 'top center'
            },
            y: 100
        });
        
        gsap.to('.c-colors', {
            scrollTrigger: {
                trigger: '.c-colors',
                scrub: 2.5,
                start: 'bottom center',
            },
            opacity: 0
        });
        
    };


}, false)
