import { gsap, Power1, Power3, TweenMax } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

document.addEventListener('DOMContentLoaded',function() {

    gsap.registerPlugin(ScrollTrigger);
    
    const el = document.getElementsByClassName('js-noise');
    
    const init = function() {
    
        const tl = gsap.timeline();
        tl.to('#circleMask', { attr: { r: 17 }})
          .to('#image', { x: -63, y: 5, scale: 1.2 }, '-=.2')
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
    

    el ? init() : false;


}, false)
