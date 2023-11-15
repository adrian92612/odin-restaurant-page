import steakImg from '../assets/steak.jpg'

const createHeroImg = () => {
    const heroImg = document.createElement('img')
    heroImg.classList.add('hero-img')
    heroImg.src = steakImg

    return hero
}

const createSlogan = () => {
    const sloganDiv = document.createElement('div')
}

export default function createHomePage() {
    const heroSection = document.createElement('div')

    heroSection.appendChild(createHeroImg)
    heroSection.appendChild()
    return heroSection
}