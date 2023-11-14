import icon from './assets/menu-icon.svg';

const createLogo = () => {
    const logo = document.createElement('div')
    logo.classList.add('logo')

    const logoText = document.createElement('p')
    logoText.innerText = `Amber's Steakhouse`
    logo.appendChild(logoText)
    return logo
}

const createNav = () => {
    const nav = document.createElement('nav')
    
    const menuBtn = document.createElement('img')
    menuBtn.classList.add('menu-btn')
    menuBtn.src = icon

    return menuBtn
}

export default function createHeader() {
    const header = document.createElement('header')

    header.appendChild(createLogo())
    header.appendChild(createNav())
    return header
}