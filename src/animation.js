import gsap from 'gsap';

export const openMenu = {
    showContainer: el => {
        gsap.to(el, {
            duration: 0,
            css: {display: 'block'}
        })
    },
    animateShowContainer: (el1, el2) => {
        gsap.to([el2, el1], {
            duration: 0.8,
            opacity: 1,
            height: '100%',
            stagger: {
                amount: 0.1
            }
        })
    },
    staggerAnimation: (el1, el2) => {
        gsap.from([el1, el2], {
            duration: 0.8,
            transformOrigin: 'right top',
            skewY: 5,
            ease: 'power3.inOut',
            stagger: {
                amount: 0.1
            }
        })
    },
    hideContainer: el => {
        gsap.to(el, {
            duration: 1,
            css: {display: 'none'}
        })
    },
    animateHideContainer: (el1, el2) => {
        gsap.to([el1, el2], {
            duration: 0.8,
            height: 0,
            ease: 'power3.inOut',
            stagger: {
                amount: 0.1
            }
        })
    }
}

export const animateLinks = {
    staggerLinks: (node1, node2, node3, node4) => {
        gsap.from([node1, node2, node3, node4], {
            duration: .9,
            opacty: 0,
            y: 190,
            skewY: 10,
            delay: 0.2,
            ease: 'power3.inOut',
            stagger: {
                amount: 0.3
            }
        })
    },
    animateText: el => {
        gsap.from(el, {
            duration: .8,
            delay: 0.3,
            y: 100,
            opacity: 0,
            ease: 'power3.inOut',
        })
    }
}

export const animateImg = {
    fromImg: el => {
        gsap.to(el, {
            duration: 0,
            y: 100,
            opacity: 0
        })
    },
    toImg: el => {
        gsap.to(el, {
            duration: 1.5,
            delay: .3,
            y: 0,
            opacity: 1,
            ease: 'power3.inOut'
        })
    }
}