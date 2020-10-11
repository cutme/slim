import { gsap, Power1, Power3, TweenMax } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

document.addEventListener('DOMContentLoaded',function() {

    gsap.registerPlugin(ScrollTrigger);
        
    window.noise = function() {
    
        const tl = gsap.timeline();
        tl.to('#circleMask', { attr: { r: 17 }})
          .to('#image', { x: 22, y: 14 }, '-=.2')
          .from('.c-noise__details', { opacity: 0 }, '-=.2');
        
        ScrollTrigger.create({
            animation: tl,
            trigger: '.js-noise',
            start: 'top top',
            end: "bottom -110%",
            scrub: true,
            pin: true,
        });
    };

}, false)
