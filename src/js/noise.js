import { gsap, Power1, Power3, TweenMax } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

document.addEventListener('DOMContentLoaded',function() {

    gsap.registerPlugin(ScrollTrigger);
        
    window.noise = function() {
    
        const tl = gsap.timeline();
        tl.to('#circleMask', { attr: { r: 27 }})
          //.to('#image', { x: 8, y: 12 }, '-=.2')
          .from('.c-noise__details', { opacity: 0 }, '-=.2');
        
        ScrollTrigger.create({
            animation: tl,
            trigger: '.js-noise',
            start: 'top top',
            end: "bottom",
            scrub: true,
            pin: true,
        });
    };

}, false)
