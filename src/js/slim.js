import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

document.addEventListener('DOMContentLoaded',function() {

    const el = document.getElementsByClassName('js-slim')[0];
    
    const slim = function(obj) {

        const killTimeline = (timeline) => {
            const targets = timeline.getChildren();
            
            timeline.kill();
            
            for(let i = 0; i < targets.length; i++) {
                if(targets[i].targets().length) {
                    gsap.set(targets[i].targets(), { clearProps: 'all' });
                }
            }
        };
        
        gsap.registerPlugin(ScrollTrigger);

        const canvas = document.getElementById("hero-slim");
        const context = canvas.getContext("2d");
        
        const frameCount = 239;
        const currentFrame = index => (
          `img/frames-slim/${index.toString()}.jpg`
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
        

    
        gsap.set(document.querySelector('.c-slim__image'), { clearProps: 'all' });

        ScrollTrigger.create({
            trigger: '.c-slim__image',
            start: 'top top',
            end: '+=300%',
            scrub: true,
            pin: true,
            onUpdate: function({progress, direction, isActive}) {
                const frameIndex = Math.min(frameCount - 1, Math.ceil(progress * frameCount));
                requestAnimationFrame(() => updateImage(frameIndex + 1))                
            }
        });  


        preloadImages();
    };

   el ? slim() : false;

}, false);
