// const lastModified = () => {
//     const modified = document.lastModified;
//     document.getElementById('lastModified').innerHTML = `Last updated ${modified}`
// }

// lastModified();




// if (typeof gsap !== undefined) {
//     if (gsap) {
//         let timelineSectionOne = gsap.timeline({
//             scrollTrigger: {
//                 trigger: '.tactics-section-one',
//                 start: 'top',
//                 end: '100%',
//                 scrub: 'true',
//                 pin: true,
//             }
//         });

//         let timelineSectionTwo = gsap.timeline({
//             scrollTrigger: {
//                 trigger: '.tactics-section-two',
//                 start: 'top',
//                 end: '100%',
//                 scrub: 'true',
//                 pin: true,
//             }
//         })

//         let timelineSectionThree = gsap.timeline({
//             scrollTrigger: {
//                 trigger: '.tactics-section-three',
//                 start: 'top',
//                 end: '100%',
//                 scrub: 'true',
//                 pin: true,
//             }
//         })


//         timelineSectionOne.fromTo('.tactics-section-one__title', { opacity: 0 }, { opacity: 1, duration: 1 });
//         timelineSectionOne.fromTo('.tactics-section__subtitle', { opacity: 0 }, { opacity: 1, duration: 1 });
//         timelineSectionTwo.fromTo('.tactics-section-two__title', { opacity: 0 }, { opacity: 1, duration: 1 });
//         timelineSectionTwo.fromTo('.quote-section-two', { opacity: 0 }, { opacity: 1, duration: 1 });
//         timelineSectionTwo.fromTo('.quote-citation-section-two', { opacity: 0 }, { opacity: 1, duration: 1 });
//         timelineSectionThree.fromTo('.tactics-section-three__title', { opacity: 0 }, { opacity: 1, duration: 1 });
//         timelineSectionThree.fromTo('.quote-section-three', { opacity: 0 }, { opacity: 1, duration: 1 });
//         timelineSectionThree.fromTo('.quote-citation-section-three', { opacity: 0 }, { opacity: 1, duration: 1 });
//         timelineSectionThree.fromTo('.section-three-image', { opacity: 0 }, { opacity: 1, duration: 1 });
//     }
// }

window.addEventListener("load", () => {
    const canvas = document.querySelector("#canvas");
    const ctx = canvas.getContext("2d");

    //resizing
    // could add function window.addEventListener('resize' (run function)) to re-adjust canvas size
    // canvas.height = window.innerHeight;
    // canvas.width = window.innerWidth;

    // // order matters, top has an effect on that below
    ctx.strokeStyle = 'red'
    // ctx.strokeRect(50, 50, 100, 100); //4 parameters (pos x, pos y, height, width)

    // ctx.beginPath();
    // ctx.moveTo(100, 100); //beginning of 'pen' position
    // ctx.lineTo(200, 100); //draw to here
    // ctx.lineTo(200, 150); //draw to here
    // ctx.closePath();      //connect ends
    // ctx.stroke();         //draw

    //variables
    let painting = false;

    function startPosition(e) {
        painting = true;
        draw(e); // allows dots, dont have to drag mouse
        console.log('start')
    }

    function finishedPosition() {
        painting = false;
        ctx.beginPath(); // resets being position so lines dont auto connect
        console.log('finished')
    }

    function draw(e){
        if(!painting) return;
        ctx.lineWidth = 10;
        ctx.lineCap = 'round';

        ctx.lineTo(e.clientX, e.clientY);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(e.clientX, e.clientY)
        console.log('drawing')
    }
    //event listeners
    canvas.addEventListener('mousedown', startPosition);
    canvas.addEventListener('mouseup', finishedPosition);
    canvas.addEventListener('mousemove', draw);
    

    
    
});



