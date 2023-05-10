const burger = document.querySelector('.burger')
const nav = document.querySelector('nav')
burger.addEventListener('click', () => {
    nav.classList.toggle('open')
})
const allIndicators = document.querySelectorAll(
    '.carousel-indicators > .indicator'
)
const sections = document.querySelectorAll('section')
const carouselContainer = document.querySelector('.carousel')
const carouselItems = document.querySelectorAll('.carousel > section')
const chevronright = document.querySelector('.fa-chevron-right')
const chevronrleft = document.querySelector('.fa-chevron-left')
const caroussel = document.querySelector('.caroussel')
let index = 0
const translateCarousel = () => {}
const setUi = () => {
    carouselContainer.style.transform = `translateX(-${index * 100}%)`
    allIndicators.forEach((indicator) => {
        indicator.classList.remove('active')
    })
    allIndicators[index].classList.add('active')

    const section = sections[index]
    const sectionComputedStyle = window.getComputedStyle(section)
    const backgroundColor = sectionComputedStyle.backgroundColor
    body.style.backgroundColor = backgroundColor
}

allIndicators.forEach((indicator, i) => {
    indicator.addEventListener('click', () => {
        index = i
        setUi()
    })
})
