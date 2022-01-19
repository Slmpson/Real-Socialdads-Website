if (typeof gsap !== undefined) {
    if (gsap) {
        let timelineSectionOne = gsap.timeline({
            scrollTrigger: {
                trigger: '.tactics-section-one',
                start: 'top',
                end: '100%',
                scrub: 'true',
                pin: true,
            }
        });

        let timelineSectionTwo = gsap.timeline({
            scrollTrigger: {
                trigger: '.tactics-section-two',
                start: 'top',
                end: '100%',
                scrub: 'true',
                pin: true,
            }
        })

        let timelineSectionThree = gsap.timeline({
            scrollTrigger: {
                trigger: '.tactics-section-three',
                start: 'top',
                end: '100%',
                scrub: 'true',
                pin: true,
            }
        })


        timelineSectionOne.fromTo('.tactics-section-one__title', { opacity: 0 }, { opacity: 1, duration: 1 });
        timelineSectionOne.fromTo('.tactics-section__subtitle', { opacity: 0 }, { opacity: 1, duration: 1 });
        timelineSectionTwo.fromTo('.tactics-section-two__title', { opacity: 0 }, { opacity: 1, duration: 1 });
        timelineSectionTwo.fromTo('.quote-section-two', { opacity: 0 }, { opacity: 1, duration: 1 });
        timelineSectionTwo.fromTo('.quote-citation-section-two', { opacity: 0 }, { opacity: 1, duration: 1 });
        timelineSectionThree.fromTo('.tactics-section-three__title', { opacity: 0 }, { opacity: 1, duration: 1 });
        timelineSectionThree.fromTo('.quote-section-three', { opacity: 0 }, { opacity: 1, duration: 1 });
        timelineSectionThree.fromTo('.quote-citation-section-three', { opacity: 0 }, { opacity: 1, duration: 1 });
        timelineSectionThree.fromTo('.section-three-image', { opacity: 0 }, { opacity: 1, duration: 1 });
    }
}

window.addEventListener("load", () => {
    const canvas = document.querySelector("#canvas");
    const ctx = canvas.getContext("2d");
    let offsetX;
    let offsetY;
    // var tacticsCanvas = document.querySelector('.tactics-canvas');
    // var heightRatio = 1.2;
    // tacticsCanvas.height = tacticsCanvas.width * heightRatio

    //resizing
    // could add function window.addEventListener('resize' (run function)) to re-adjust canvas size
    // canvas.height = window.innerHeight;
    // canvas.width = window.innerWidth;


    const reOffset = () => {
        let BB = canvas.getBoundingClientRect();
        offsetX = BB.left;
        offsetY = BB.top;
    }

    window.onscroll = function (e) { reOffset(); }
    window.onresize = function (e) { reOffset(); }

    // // order matters, top has an effect on that below
    // ctx.strokeStyle = 'red'
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
    }

    function finishedPosition() {
        painting = false;
        ctx.beginPath(); // resets begin position so lines dont auto connect
    }

    function draw(e) {
        mouseX = parseInt(e.clientX - offsetX);
        mouseY = parseInt(e.clientY - offsetY);

        if (!painting) return;
        ctx.lineWidth = 5;
        ctx.lineCap = 'round';

        ctx.lineTo(mouseX, mouseY);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(mouseX, mouseY);
    }
    //event listeners
    canvas.addEventListener('mousedown', startPosition);
    canvas.addEventListener('mouseup', finishedPosition);
    canvas.addEventListener('mousemove', draw);
});

//radio song
let radioAudio = new Audio('./Resources/The Great Escape.mp3');
let isPlaying = false;

const radioToggle = () => {
    isPlaying ? radioAudio.pause() : radioAudio.play();
};

radioAudio.onplaying = () => {
    isPlaying = true;
};

radioAudio.onpause = () => {
    isPlaying = false;
};

const boardImageNodes = document.querySelectorAll('.polaroid, .polaroid-small');
const boardImages = [...boardImageNodes]; //gives array
const noticeBoard = document.querySelector('.noticeBoard');

if(boardImages){
    boardImages.forEach((image) => {
        image.addEventListener('click', (event) => {
            event.preventDefault();
            event.stopPropagation();

            if (canZoomImage(image)) {
                image.classList.add('zoom');
            } else {
                image.classList.remove('zoom');
            }
        })
    });

    noticeBoard.addEventListener('click', (event) => {
        event.preventDefault();
        event.stopPropagation();

        const zoomedImages = boardImages.filter(i => i.classList.contains('zoom'));
        if (zoomedImages && zoomedImages.length > 0) {
            zoomedImages.forEach((image) => {
                image.classList.remove('zoom');
            })
        }
    });
}

const canZoomImage = (image) => {
    return boardImages.every(i => !i.classList.contains("zoom")) && !image.classList.contains("zoom");
}