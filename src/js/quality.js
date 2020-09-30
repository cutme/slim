import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

document.addEventListener('DOMContentLoaded',function() {

    
    
    window.quality = function(obj) {
        
        const el = document.getElementsByClassName('js-quality')[0];
        
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

        const canvas = document.getElementById("hero-lightpass");
        const context = canvas.getContext("2d");
        
        const frameCount = 45;
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
        canvas.width=1376;
        canvas.height=774;
        img.onload=function(){
            context.drawImage(img, 0, 0);
        }
        
        const updateImage = index => {
            img.src = currentFrame(index);
            context.drawImage(img, 0, 0);
        }

        preloadImages();
        
        let mobileTrigger, desktopTrigger, mobile = false, desktop = false, tl, trigger;        
        
        
        const anim = function() {
            if (window.innerWidth <= 1024) {
                if (!mobile) {

                    if (trigger) {
                        console.log('kill desktop');
                        trigger.kill();
                    }
                    mobile = true;
                    desktop = false;
                    

                            
                        ScrollTrigger.refresh();
                        console.log('start mobile');
                        
                        gsap.set(document.querySelector('.c-quality'), { clearProps: 'all' });
                        
                        trigger = ScrollTrigger.create({
                            trigger: '.c-quality__image',
                            start: 'center center',
                            scrub: true,
                            pin: true,
                            onUpdate: function({progress, direction, isActive}) {
                                const frameIndex = Math.min(frameCount - 1, Math.ceil(progress * frameCount));
                                requestAnimationFrame(() => updateImage(frameIndex + 1))
                            }
                        });                        

                }
            } 
            
            if (window.innerWidth > 1024) {
                if (!desktop) {
                    console.log('desktop!!');
                    if (trigger) {
                        console.log('kill mobile');
                        trigger.kill();
                    }
                    desktop = true;
                    mobile = false;
    
                        console.log('start desktop');
                        gsap.set(document.querySelector('.c-quality__image'), { clearProps: 'all' });
    
                        trigger = ScrollTrigger.create({
                            trigger: '.c-quality',
                            start: 'top top',
                            scrub: true,
                            pin: true,
                            onUpdate: function({progress, direction, isActive}) {
                                const frameIndex = Math.min(frameCount - 1, Math.ceil(progress * frameCount));
                                requestAnimationFrame(() => updateImage(frameIndex + 1))
                            }
                        });  
                        
                        ScrollTrigger.refresh();
                                          

                }
            }
        }
        
        window.addEventListener('resize', function() {
            
            anim();
        })
        
        anim();
        
    };

   // el ? init() : false;

}, false);
