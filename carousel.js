/** @type {HTMLElement} */
const carousel = document.querySelector('.carousel')
const nextBtn = document.querySelector('.next')
const previousBtn = document.querySelector('.previous')
const carouselItems = document.querySelectorAll('.carousel > article')

const carouselLength = carouselItems.length
let index = 0

const moveCarousel = () => {
    carousel.style.transform = `translateX(-${index * 100}vw)`
}

const setControls = () => {
    if (index === 0) {
        nextBtn.classList.remove('active')
        previousBtn.classList.add('active')
    } else if (index === carouselLength - 1) {
        previousBtn.classList.remove('active')
        nextBtn.classList.add('active')
    } else {
        nextBtn.classList.remove('active')
        previousBtn.classList.remove('active')
    }
}

nextBtn.addEventListener('click', () => {
    if (index < carouselLength - 1) index++
    moveCarousel()
    setControls()
})

previousBtn.addEventListener('click', () => {
    if (index > 0) index--
    moveCarousel()
    setControls()
})
