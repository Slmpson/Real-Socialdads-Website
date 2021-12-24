const lastModified = () => {
    const modified = document.lastModified;
    document.getElementById('lastModified').innerHTML = `Last updated ${modified}`
}

lastModified();




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






