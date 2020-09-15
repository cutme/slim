import { gsap, TweenMax, Power3 } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

document.addEventListener('DOMContentLoaded',function() {

    const el = document.getElementsByClassName('js-quality')[0];
    
    const init = function(obj) {
        
        gsap.registerPlugin(ScrollTrigger);

        const canvas = document.getElementById("hero-lightpass");
        const context = canvas.getContext("2d");
        
        const frameCount = 90;
        const currentFrame = index => (
          `img/frames/${index.toString()}.jpg`
        )
        
        const preloadImages = () => {
          for (let i = 1; i < frameCount; i++) {
            const img = new Image();
            img.src = currentFrame(i);
          }
        };
        
        const img = new Image()
        img.src = currentFrame(1);
        canvas.width=1920;
        canvas.height=1080;
        img.onload=function(){
            context.drawImage(img, 0, 0);
        }
        
        const updateImage = index => {
            img.src = currentFrame(index);
            context.drawImage(img, 0, 0);
        }

        preloadImages();

        
        ScrollTrigger.create({
            trigger: '.c-quality__image',
            start: 'top center',
            scrub: true,
            pin: true,
            onUpdate: function({progress, direction, isActive}) {
                const frameIndex = Math.min(frameCount - 1, Math.ceil(progress * frameCount));
                requestAnimationFrame(() => updateImage(frameIndex + 1))
            }
        });
        
    };

    el ? init() : false;

}, false);
